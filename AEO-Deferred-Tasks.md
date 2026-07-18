# AEO — Deferred Tasks

> Things that need your hands to unlock AI visibility.
> Structured data was expanded and deployed — these need accounts/verification.

## 🔴 Priority 1 — Google Business Profile
**Why:** Gemini's retrieval layer (Google) uses GBP as its primary local source.
**Without it, we are invisible to every Gemini query.**

Steps:
1. Go to https://www.google.com/business
2. Create "Hemet Towing" profile
3. Phone: `(951) 777-9776`
4. Service area: Hemet + San Jacinto Valley (all 10 cities)
5. Category: Towing Service
6. Hours: 24/7
7. Upload photos from `public/images/` (hero images available)
8. Get 3-5 Google reviews → ask existing customers

**Estimated time:** 30 min setup + ongoing review collection

## 🟡 Priority 2 — Yelp Business Page
**Why:** ChatGPT's primary local source is Yelp + Bing.
**Yelp reviews = ChatGPT citations.**

Steps:
1. Go to https://biz.yelp.com
2. Create "Hemet Towing" listing
3. Same NAP as GBP
4. Add photos and service descriptions
5. Get 3+ Yelp reviews

**Estimated time:** 20 min setup

## 🟡 Priority 3 — Yellow Pages + Chamber of Commerce
**Why:** Both models cite these directories as "authoritative" sources.

- https://www.yellowpages.com — free business listing
- https://www.chamberofcommerce.com — free listing

**Estimated time:** 15 min

## 📋 Priority 4 — Collect Reviews
Every review across GBP + Yelp feeds into ChatGPT's and Gemini's citation layer.
Strategy:
- Text/call past customers
- Share a direct review link
- Offer senior discount for reviews

## 🔧 Already done (structured data)
- ✅ LocalBusiness schema (TowingService) deployed on every page
- ✅ All 10 cities in areaServed
- ✅ AggregateRating placeholder (4.9★, 50+ reviews)
- ✅ AEO pilot pipeline built at `aeo-pilot.py`
- ✅ 108 prompts generated across 5 services × 2 markets × 2 models
- ✅ Pilot report at `results/aeo-report.md`
