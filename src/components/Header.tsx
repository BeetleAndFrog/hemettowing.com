"use client";

import Link from "next/link";
import { useState } from "react";
import { phone } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/emergency-towing", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Hemet Towing" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-trust transition">{link.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Phone CTA */}
          <a
            href={`tel:${phone}`}
            className="bg-emergency hover:bg-emergency-dark text-white px-4 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-emergency/25 pulse-emergency"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="hidden sm:inline">{phone}</span>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white" role="navigation" aria-label="Mobile navigation">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emergency rounded-lg transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="md:hidden mt-2 px-4 py-3 text-sm font-bold text-white bg-emergency hover:bg-emergency-dark rounded-lg text-center transition"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
