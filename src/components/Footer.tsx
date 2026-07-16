import Link from "next/link";
import { phone, formattedPhone } from "@/lib/constants";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="inline-block mb-4">
            <img src="/logo.png" alt="Hemet Towing" className="h-12 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Hemet&apos;s trusted 24/7 towing and roadside assistance service. Fast, professional, and locally owned.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/emergency-towing" className="text-gray-400 hover:text-white transition">Emergency Towing</Link></li>
            <li><Link href="/roadside-assistance" className="text-gray-400 hover:text-white transition">Roadside Assistance</Link></li>
            <li><Link href="/long-distance-towing" className="text-gray-400 hover:text-white transition">Long Distance Towing</Link></li>
            <li><Link href="/motorcycle-towing" className="text-gray-400 hover:text-white transition">Motorcycle Towing</Link></li>
            <li><Link href="/heavy-duty-towing" className="text-gray-400 hover:text-white transition">Heavy Duty Towing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            <a href={`tel:${phone}`} className="text-blue-400 hover:text-blue-300">{formattedPhone}</a>
            <br />
            24 hours / 7 days a week
            <br />
            Serving <Link href="/cities/hemet" className="text-blue-400 hover:text-blue-300">Hemet</Link>, <Link href="/cities/san-jacinto" className="text-blue-400 hover:text-blue-300">San Jacinto</Link> & surrounding areas
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-6 text-xs">
        &copy; {new Date().getFullYear()} Hemet Towing. All rights reserved. | Locally owned and operated. All services performed by licensed, bonded professionals.
      </div>
    </footer>
  );
}
