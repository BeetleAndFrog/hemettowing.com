import Link from "next/link";
import { phone } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="w-8 h-8 bg-emergency rounded-lg flex items-center justify-center text-white text-xs font-black">HT</span>
          Hemet <span className="text-trust">Towing</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-trust transition">Home</Link>
          <Link href="/emergency-towing" className="hover:text-trust transition">Services</Link>
          <Link href="/service-area" className="hover:text-trust transition">Service Area</Link>
          <Link href="/about" className="hover:text-trust transition">About</Link>
          <Link href="/contact" className="hover:text-trust transition">Contact</Link>
        </nav>
        <a
          href={`tel:${phone}`}
          className="bg-emergency hover:bg-emergency-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-emergency/25 pulse-emergency"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          {phone}
        </a>
      </div>
    </header>
  );
}
