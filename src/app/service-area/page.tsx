import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Service Area — Hemet Towing | Cities We Serve",
  description: "We provide towing and roadside assistance throughout Hemet, San Jacinto, Menifee, Winchester, Homeland, and all surrounding areas.",
};

const extraAreas = ["East Hemet", "Valle Vista", "Sage", "Idyllwild (limited)", "Aguanga (limited)"];

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Service Area</h1>
        <p className="text-gray-600 text-lg mb-8">We provide towing and roadside assistance across the entire San Jacinto Valley and surrounding areas. If you&apos;re stuck within our coverage zone, we&apos;re on the way.</p>

        <h2 className="text-xl font-bold mb-4">Major Service Areas</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {cities.map((area) => (
            <Link
              key={area.slug}
              href={`/cities/${area.slug}`}
              className="bg-gray-50 px-5 py-4 rounded-lg border border-gray-100 hover:border-emergency/30 hover:bg-white transition group"
            >
              <span className="font-medium group-hover:text-emergency transition">{area.name}</span>
              <span className="text-xs text-gray-400 ml-2">View services &rarr;</span>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-4">Also Serving</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {extraAreas.map((area) => (
            <div key={area} className="bg-gray-50 px-5 py-4 rounded-lg border border-gray-100">
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure If We Cover Your Location?</h2>
          <p className="text-gray-600 mb-6">Give us a call. If you&apos;re within range, we&apos;ll get someone to you.</p>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
