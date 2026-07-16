import Link from "next/link";
import { phone, formattedPhone } from "@/lib/constants";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Hemet Towing</h3>
          <p className="text-sm leading-relaxed">
            Hemet&apos;s trusted 24/7 towing and roadside assistance service. Fast, professional, and locally owned.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Emergency Towing</li>
            <li>Roadside Assistance</li>
            <li>Long Distance Towing</li>
            <li>Motorcycle Towing</li>
            <li>Heavy Duty Towing</li>
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
