#!/usr/bin/env python3
"""
AEO Pipeline — AI Visibility & Outreach Target Analysis
========================================================

Usage:
  python3 aeo-pilot.py init          # Create SQLite DB + generate prompts
  python3 aeo-pilot.py enter         # Interactive prompt-by-prompt manual entry
  python3 aeo-pilot.py classify      # Classify all entered results
  python3 aeo-pilot.py report        # Generate the per-market report
  python3 aeo-pilot.py full          # Run init → (wait for manual entry) → classify → report

Schema:
  prompts(id, market, service, intent, prompt_text, model)
  results(id, prompt_id, answer_text, citations_json, classification, classification_reason, competitors_mentioned, created_at)
"""

import sqlite3
import json
import sys
import os
from datetime import datetime
from pathlib import Path

# ── Configuration ──────────────────────────────────────────────────────────────

DOMAIN = "hemettowing.com"
BRAND = "Hemet Towing"
BRAND_VARIANTS = ["Hemet Towing", "Hemet Tow Truck", "Hemet Towing CA", "Hemet Towing Company", "Hemet Towing Hemet"]

# Markets: (slug, display_name, priority)
MARKETS = [
    ("hemet", "Hemet", "primary"),
    ("san-jacinto", "San Jacinto", "primary"),
    ("menifee", "Menifee", "secondary"),
    ("winchester", "Winchester", "secondary"),
    ("homeland", "Homeland", "secondary"),
    ("east-hemet", "East Hemet", "low"),
    ("valle-vista", "Valle Vista", "low"),
    ("sage", "Sage", "low"),
    ("idyllwild", "Idyllwild", "low"),
    ("aguanga", "Aguanga", "low"),
]

# Services with prompt templates
SERVICES = [
    {
        "slug": "emergency-towing",
        "name": "Emergency Towing",
        "product": "best emergency towing in {market}",
        "advisory": "how do I choose a tow truck company in {market}",
        "advisory_alt": "what to do when my car breaks down in {market}",
    },
    {
        "slug": "roadside-assistance",
        "name": "Roadside Assistance",
        "product": "best roadside assistance in {market}",
        "advisory": "what to do when car breaks down in {market}",
        "advisory_alt": "how much does roadside assistance cost in {market}",
    },
    {
        "slug": "long-distance-towing",
        "name": "Long Distance Towing",
        "product": "best long distance towing from {market}",
        "advisory": "how much does long distance towing cost from {market}",
        "advisory_alt": "how to ship a car from {market} to another city",
    },
    {
        "slug": "motorcycle-towing",
        "name": "Motorcycle Towing",
        "product": "best motorcycle towing in {market}",
        "advisory": "how to transport a motorcycle in {market}",
        "advisory_alt": "how much does motorcycle towing cost in {market}",
    },
    {
        "slug": "heavy-duty-towing",
        "name": "Heavy Duty Towing",
        "product": "heavy duty towing in {market}",
        "advisory": "what is heavy duty towing and when do I need it",
        "advisory_alt": "how much does heavy duty towing cost in {market}",
    },
]

# General / cross-market prompts
GENERAL_PROMPTS = [
    ("general", "towing-company", "product", "best towing company in Hemet CA"),
    ("general", "towing-company", "advisory", "how to choose a towing company"),
    ("general", "towing-service", "product", "towing service near me Hemet"),
    ("general", "roadside-help", "advisory", "who do I call for roadside help in Hemet"),
]

MODELS = ["chatgpt", "gemini"]

# Competitor domains + brands (detected by the classifier)
COMPETITORS = {
    # Will be auto-populated from results
}

SOCIAL_DOMAINS = [
    "youtube.com", "youtu.be", "reddit.com", "quora.com",
    "facebook.com", "x.com", "linkedin.com", "instagram.com",
    "tiktok.com", "pinterest.com", "twitter.com",
]

DB_PATH = os.path.join(os.path.dirname(__file__), "aeo.db")

# ── Database ───────────────────────────────────────────────────────────────────

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            market TEXT NOT NULL,
            service TEXT NOT NULL,
            intent TEXT NOT NULL,  -- 'product' or 'advisory'
            prompt_text TEXT NOT NULL,
            model TEXT NOT NULL,   -- 'chatgpt' or 'gemini'
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            UNIQUE(market, service, intent, model)
        );

        CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            prompt_id INTEGER NOT NULL,
            answer_text TEXT,
            citations_json TEXT,      -- JSON array of resolved URLs
            classification TEXT,      -- 'recommended', 'cited_not_credited', 'omitted'
            classification_reason TEXT,
            competitors_mentioned TEXT, -- JSON array of {name, domain}
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            FOREIGN KEY (prompt_id) REFERENCES prompts(id)
        );

        CREATE TABLE IF NOT EXISTS outreach_targets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT NOT NULL UNIQUE,
            domain TEXT NOT NULL,
            citation_count INTEGER NOT NULL DEFAULT 1,
            first_seen TEXT NOT NULL DEFAULT (datetime('now')),
            last_seen TEXT NOT NULL DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS run_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            market TEXT,
            service TEXT,
            model TEXT,
            intent TEXT,
            prompt_text TEXT,
            status TEXT NOT NULL DEFAULT 'pending',  -- pending, done, skipped, error
            error TEXT,
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
    """)
    conn.commit()
    conn.close()

# ── Prompt Generator ───────────────────────────────────────────────────────────

def generate_prompts():
    conn = get_db()
    inserted = 0

    print("  Generating prompts...")

    for market_slug, market_name, priority in MARKETS:
        if priority not in ("primary", "secondary"):
            continue  # skip low-priority for pilot

        for svc in SERVICES:
            # Product intent
            prompt = svc["product"].format(market=market_name)
            for model in MODELS:
                try:
                    conn.execute(
                        "INSERT OR IGNORE INTO prompts (market, service, intent, prompt_text, model) VALUES (?, ?, ?, ?, ?)",
                        (market_slug, svc["slug"], "product", prompt, model)
                    )
                    if conn.total_changes > 0:
                        inserted += 1
                except sqlite3.IntegrityError:
                    pass

            # Advisory intent
            prompt = svc["advisory"].format(market=market_name)
            for model in MODELS:
                try:
                    conn.execute(
                        "INSERT OR IGNORE INTO prompts (market, service, intent, prompt_text, model) VALUES (?, ?, ?, ?, ?)",
                        (market_slug, svc["slug"], "advisory", prompt, model)
                    )
                    if conn.total_changes > 0:
                        inserted += 1
                except sqlite3.IntegrityError:
                    pass

    # General prompts
    for market, service, intent, prompt_text in GENERAL_PROMPTS:
        for model in MODELS:
            try:
                conn.execute(
                    "INSERT OR IGNORE INTO prompts (market, service, intent, prompt_text, model) VALUES (?, ?, ?, ?, ?)",
                    (market, service, intent, prompt_text, model)
                )
                if conn.total_changes > 0:
                    inserted += 1
            except sqlite3.IntegrityError:
                pass

    conn.commit()
    conn.close()
    print(f"  → {inserted} new prompts inserted")

def list_prompts(status_filter=None, limit=30):
    conn = get_db()
    if status_filter:
        rows = conn.execute("""
            SELECT p.id, p.market, p.service, p.intent, p.prompt_text, p.model,
                   COALESCE(r.classification, 'untested') as status
            FROM prompts p
            LEFT JOIN results r ON r.prompt_id = p.id
            WHERE COALESCE(r.classification, 'untested') = ?
            ORDER BY p.id
            LIMIT ?
        """, (status_filter, limit)).fetchall()
    else:
        rows = conn.execute("""
            SELECT p.id, p.market, p.service, p.intent, p.prompt_text, p.model,
                   COALESCE(r.classification, 'untested') as status
            FROM prompts p
            LEFT JOIN results r ON r.prompt_id = p.id
            ORDER BY p.id
            LIMIT ?
        """, (limit,)).fetchall()
    conn.close()
    return rows

def count_prompts():
    conn = get_db()
    total = conn.execute("SELECT COUNT(*) FROM prompts").fetchone()[0]
    done = conn.execute("SELECT COUNT(DISTINCT prompt_id) FROM results").fetchone()[0]
    conn.close()
    return total, done

# ── Manual Entry ───────────────────────────────────────────────────────────────

def enter_results():
    """Interactive loop — walks through untested prompts one by one."""
    conn = get_db()

    # Get untested prompts
    rows = conn.execute("""
        SELECT p.id, p.market, p.service, p.intent, p.prompt_text, p.model
        FROM prompts p
        LEFT JOIN results r ON r.prompt_id = p.id
        WHERE r.id IS NULL
        ORDER BY p.id
    """).fetchall()

    if not rows:
        print("  All prompts have results. Nothing to enter.")
        conn.close()
        return

    print(f"\n  {len(rows)} untested prompts. Enter results one at a time.\n")

    for row in rows:
        print("=" * 60)
        print(f"  [{row['id']}] {row['model'].upper()}")
        print(f"  Market: {row['market']}  |  Service: {row['service']}  |  Intent: {row['intent']}")
        print(f"\n  Prompt: \"{row['prompt_text']}\"")
        print("-" * 60)

        answer = input("\n  Paste the AI's answer (or 'skip' to skip, 'quit' to exit):\n> ").strip()
        if answer.lower() == 'quit':
            break
        if answer.lower() == 'skip':
            continue

        citations = input("\n  Paste any cited URLs (comma-separated, or 'none'):\n> ").strip()
        if citations.lower() in ('none', 'n', ''):
            citations_list = []
        else:
            citations_list = [c.strip() for c in citations.split(',') if c.strip()]

        print("\n  Classification:")
        print("    1 = RECOMMENDED (green) — names our brand")
        print("    2 = CITED, NOT CREDITED (amber) — cites our domain but doesn't name us")
        print("    3 = OMITTED (red) — neither")
        print("    4 = Enter manually (free text)")

        cls_input = input("  Choose (1-4): ").strip()
        if cls_input == "1":
            classification = "recommended"
            reason = "AI recommended our brand"
        elif cls_input == "2":
            classification = "cited_not_credited"
            reason = "Our domain cited but brand not named"
        elif cls_input == "3":
            classification = "omitted"
            reason = "No mention of our brand or domain"
        elif cls_input == "4":
            classification = input("  Enter classification: ").strip()
            reason = input("  Enter reason: ").strip()
        else:
            classification = "omitted"
            reason = "Default — no positive signal"

        competitors = input("\n  Competitors mentioned (comma-separated brand names, or 'none'):\n> ").strip()

        conn.execute("""
            INSERT INTO results (prompt_id, answer_text, citations_json, classification, classification_reason, competitors_mentioned)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            row['id'],
            answer,
            json.dumps(citations_list),
            classification,
            reason,
            json.dumps([c.strip() for c in competitors.split(',') if c.strip()]),
        ))
        conn.commit()
        print(f"\n  ✓ Result saved for prompt #{row['id']}\n")

    conn.close()
    print("\n  Done entering results.")

# ── Classifier (auto-refine) ───────────────────────────────────────────────────

def classify_results():
    """Re-check all results for brand mentions that might have been missed."""
    conn = get_db()

    rows = conn.execute("""
        SELECT r.id, r.prompt_id, r.answer_text, r.citations_json, r.classification, p.prompt_text, p.model
        FROM results r
        JOIN prompts p ON p.id = r.prompt_id
    """).fetchall()

    reclassified = 0
    for row in rows:
        answer = (row['answer_text'] or "").lower()
        citations = json.loads(row['citations_json'] or '[]')

        original = row['classification']
        brand_mentioned = any(variant.lower() in answer for variant in BRAND_VARIANTS)
        our_domain_cited = any(DOMAIN in c for c in citations)

        if brand_mentioned:
            new_cls = "recommended"
            new_reason = "Brand name found in answer text"
        elif our_domain_cited:
            new_cls = "cited_not_credited"
            new_reason = f"Domain ({DOMAIN}) in citations but brand not named"
        else:
            new_cls = "omitted"
            new_reason = "No brand or domain found"

        if new_cls != original:
            conn.execute(
                "UPDATE results SET classification = ?, classification_reason = ? WHERE id = ?",
                (new_cls, new_reason, row['id'])
            )
            reclassified += 1

    conn.commit()
    conn.close()
    print(f"  → {reclassified} results reclassified")

# ── Outreach Target Miner ──────────────────────────────────────────────────────

def mine_outreach_targets():
    """Aggregate ALL resolved citation URLs, exclude noise, rank by frequency."""
    conn = get_db()

    # Clear previous outreach targets
    conn.execute("DELETE FROM outreach_targets")

    # Collect all citations grouped by URL
    rows = conn.execute("""
        SELECT r.citations_json, p.market
        FROM results r
        JOIN prompts p ON p.id = r.prompt_id
        WHERE r.citations_json IS NOT NULL
    """).fetchall()

    url_counts = {}  # url -> {count, markets: set, domains: set}

    for row in rows:
        citations = json.loads(row['citations_json'] or '[]')
        market = row['market']
        for url in citations:
            url = url.rstrip('/').split('?')[0]  # normalize
            domain = url.split('/')[2] if '//' in url else ''

            # Skip our own domain
            if DOMAIN in domain:
                continue

            # Skip social / UGC
            if any(sd in domain for sd in SOCIAL_DOMAINS):
                continue

            if url not in url_counts:
                url_counts[url] = {"count": 0, "markets": set(), "domains": set()}
            url_counts[url]["count"] += 1
            url_counts[url]["markets"].add(market)
            url_counts[url]["domains"].add(domain)

    # Filter: only URLs cited 3+ times (or any for pilot with small dataset)
    threshold = 2 if len(rows) < 20 else 3

    for url, data in url_counts.items():
        if data["count"] < threshold:
            continue
        domain = url.split('/')[2] if '//' in url else ''
        conn.execute("""
            INSERT OR REPLACE INTO outreach_targets (url, domain, citation_count, first_seen, last_seen)
            VALUES (?, ?, ?, datetime('now'), datetime('now'))
        """, (url, domain, data["count"]))

    conn.commit()

    # Fetch results
    targets = conn.execute("""
        SELECT url, domain, citation_count
        FROM outreach_targets
        ORDER BY citation_count DESC
    """).fetchall()

    conn.close()
    return targets

# ── Report Generator ────────────────────────────────────────────────────────────

def generate_report():
    """Generate per-market report with % winning, outreach targets, and receipts."""
    conn = get_db()

    # Overall scorecard
    total = conn.execute("SELECT COUNT(*) FROM results").fetchone()[0]
    if total == 0:
        print("  No results yet. Run 'enter' first.")
        conn.close()
        return

    green = conn.execute("SELECT COUNT(*) FROM results WHERE classification = 'recommended'").fetchone()[0]
    amber = conn.execute("SELECT COUNT(*) FROM results WHERE classification = 'cited_not_credited'").fetchone()[0]
    red = conn.execute("SELECT COUNT(*) FROM results WHERE classification = 'omitted'").fetchone()[0]

    weighted_score = (green * 1.0 + amber * 0.5) / total * 100

    report_lines = []
    report_lines.append("# AEO Visibility Report — Hemet Towing")
    report_lines.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    report_lines.append("")
    report_lines.append("## Overall Scorecard")
    report_lines.append("")
    report_lines.append(f"| Metric | Value |")
    report_lines.append(f"|--------|-------|")
    report_lines.append(f"| Total Prompts Tested | {total} |")
    report_lines.append(f"| 🟢 RECOMMENDED | {green} ({green/total*100:.0f}%) |")
    report_lines.append(f"| 🟡 CITED, NOT CREDITED | {amber} ({amber/total*100:.0f}%) |")
    report_lines.append(f"| 🔴 OMITTED | {red} ({red/total*100:.0f}%) |")
    report_lines.append(f"| **Weighted Score** | **{weighted_score:.0f}%** |")
    report_lines.append("")
    report_lines.append("---")
    report_lines.append("")

    # Per-market breakdown
    markets_data = conn.execute("""
        SELECT p.market,
               COUNT(*) as total,
               SUM(CASE WHEN r.classification = 'recommended' THEN 1 ELSE 0 END) as green,
               SUM(CASE WHEN r.classification = 'cited_not_credited' THEN 1 ELSE 0 END) as amber,
               SUM(CASE WHEN r.classification = 'omitted' THEN 1 ELSE 0 END) as red
        FROM results r
        JOIN prompts p ON p.id = r.prompt_id
        GROUP BY p.market
        ORDER BY p.market
    """).fetchall()

    report_lines.append("## Per-Market Breakdown")
    report_lines.append("")
    report_lines.append("| Market | Total | 🟢 Rec | 🟡 Cited | 🔴 Omitted | Score |")
    report_lines.append("|--------|-------|--------|----------|-----------|-------|")
    for m in markets_data:
        score = (m['green'] * 1.0 + m['amber'] * 0.5) / m['total'] * 100
        report_lines.append(f"| {m['market']} | {m['total']} | {m['green']} | {m['amber']} | {m['red']} | {score:.0f}% |")

    report_lines.append("")

    # Per-model breakdown
    report_lines.append("## Per-Model Breakdown")
    report_lines.append("")
    report_lines.append("| Model | Total | 🟢 Rec | 🟡 Cited | 🔴 Omitted | Score |")
    report_lines.append("|-------|-------|--------|----------|-----------|-------|")
    for model in MODELS:
        model_data = conn.execute("""
            SELECT COUNT(*) as total,
                   SUM(CASE WHEN r.classification = 'recommended' THEN 1 ELSE 0 END) as green,
                   SUM(CASE WHEN r.classification = 'cited_not_credited' THEN 1 ELSE 0 END) as amber,
                   SUM(CASE WHEN r.classification = 'omitted' THEN 1 ELSE 0 END) as red
            FROM results r
            JOIN prompts p ON p.id = r.prompt_id
            WHERE p.model = ?
        """, (model,)).fetchone()
        if model_data['total'] > 0:
            score = (model_data['green'] * 1.0 + model_data['amber'] * 0.5) / model_data['total'] * 100
            report_lines.append(f"| {model} | {model_data['total']} | {model_data['green']} | {model_data['amber']} | {model_data['red']} | {score:.0f}% |")

    report_lines.append("")

    # Outreach targets
    targets = mine_outreach_targets()
    if targets:
        report_lines.append("## Outreach Targets (cited 3+ times)")
        report_lines.append("")
        report_lines.append("| URL | Domain | Citation Count | Action |")
        report_lines.append("|-----|--------|---------------|--------|")
        for t in targets:
            report_lines.append(f"| {t['url']} | {t['domain']} | {t['citation_count']} | Pitch mention → |")
        report_lines.append("")
    else:
        report_lines.append("## Outreach Targets")
        report_lines.append("*No targets found yet — need more results.*")
        report_lines.append("")

    # Receipts — per-prompt detail
    report_lines.append("## Receipts (per-prompt detail)")
    report_lines.append("")
    report_lines.append("<details>")
    report_lines.append("<summary>Expand for full receipts</summary>")
    report_lines.append("")

    receipts = conn.execute("""
        SELECT p.market, p.service, p.intent, p.prompt_text, p.model,
               r.answer_text, r.citations_json, r.classification, r.classification_reason, r.competitors_mentioned
        FROM results r
        JOIN prompts p ON p.id = r.prompt_id
        ORDER BY p.market, p.model, p.service
    """).fetchall()

    for rec in receipts:
        emoji = {"recommended": "🟢", "cited_not_credited": "🟡", "omitted": "🔴"}.get(rec['classification'], "⚪")
        report_lines.append(f"### {emoji} {rec['prompt_text']} ({rec['model']})")
        report_lines.append(f"- **Market:** {rec['market']} | **Service:** {rec['service']} | **Intent:** {rec['intent']}")
        report_lines.append(f"- **Classification:** {rec['classification']}")
        report_lines.append(f"- **Reason:** {rec['classification_reason']}")
        if rec['competitors_mentioned']:
            competitors = json.loads(rec['competitors_mentioned'])
            if competitors:
                report_lines.append(f"- **Competitors mentioned:** {', '.join(competitors)}")
        report_lines.append("")
        report_lines.append("**Answer (excerpt):**")
        answer = rec['answer_text'] or "*no answer recorded*"
        if len(answer) > 500:
            answer = answer[:500] + "..."
        report_lines.append(f"```\n{answer}\n```")
        report_lines.append("")
        if rec['citations_json']:
            citations = json.loads(rec['citations_json'])
            if citations:
                report_lines.append("**Citations:**")
                for c in citations:
                    report_lines.append(f"- {c}")
        report_lines.append("---")
        report_lines.append("")

    report_lines.append("</details>")
    report_lines.append("")

    # Strategy summary
    report_lines.append("## Strategy Summary")
    report_lines.append("")
    if green > amber and green > red:
        report_lines.append("**Where we win:** AI is recommending us consistently. Double down on current SEO.")
    elif amber > green:
        report_lines.append("**High-leverage opportunity:** AI reads our pages but doesn't credit us. Reframe content with clearer brand-forward language.")
    elif red > green + amber:
        report_lines.append("**Invisible:** AI doesn't see us for these queries. Focus on building citations in the outreach targets above.")

    report_lines.append("")
    report_lines.append("**Top 3 Next Actions:**")
    report_lines.append("1. *[auto-generated after outreach targets are available]*")
    report_lines.append("2. *[auto-generated after outreach targets are available]*")
    report_lines.append("3. *[auto-generated after outreach targets are available]*")
    report_lines.append("")

    # Write report
    output_dir = os.path.join(os.path.dirname(__file__), "results")
    os.makedirs(output_dir, exist_ok=True)
    report_path = os.path.join(output_dir, "aeo-report.md")
    with open(report_path, "w") as f:
        f.write("\n".join(report_lines))

    print(f"\n  ✓ Report written to {report_path}")
    conn.close()

# ── CLI ────────────────────────────────────────────────────────────────────────

def show_status():
    total, done = count_prompts()
    print(f"\n  Prompts: {total} total, {done} with results, {total - done} untested\n")

    pending = list_prompts("untested", limit=10)
    if pending:
        print("  Next untested prompts:")
        for p in pending:
            print(f"    [{p['id']}] ({p['model']}) {p['prompt_text']}")
        print(f"    ... ({total - done} total untested)")
    print()

def cmd_init():
    print("  Initializing AEO database...")
    init_db()
    generate_prompts()
    show_status()

def cmd_enter():
    print("  Manual entry mode")
    enter_results()

def cmd_classify():
    print("  Classifying results...")
    classify_results()

def cmd_report():
    print("  Generating report...")
    generate_report()

def cmd_status():
    show_status()

def cmd_full():
    print("  Full pipeline: init → classify → report")
    init_db()
    generate_prompts()
    show_status()
    print("  Next step: run 'python3 aeo-pilot.py enter' after collecting AI responses")
    classify_results()
    generate_report()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    command = sys.argv[1]
    commands = {
        "init": cmd_init,
        "enter": cmd_enter,
        "classify": cmd_classify,
        "report": cmd_report,
        "status": cmd_status,
        "full": cmd_full,
    }

    if command in commands:
        commands[command]()
    else:
        print(f"Unknown command: {command}")
        print(__doc__)
        sys.exit(1)
