import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Hemet — Truck & Equipment Towing",
  description: "Commercial and heavy duty towing in Hemet, CA. Class 3-8 trucks, construction equipment, and fleet vehicles. We handle the big jobs.",
};

export default function HeavyDutyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Heavy Duty Towing in Hemet</h1>
        <p className="text-gray-600 text-lg mb-8">Heavy duty breakdowns need heavy duty equipment. We partner with operators who have the rigs and experience to handle commercial vehicles.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Class 3-8 truck towing</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Construction equipment transport</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Fleet vehicle recovery</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> RV and bus towing</li>
        </ul>
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Commercial Breakdown?</h2>
          <p className="text-gray-600 mb-6">We understand downtime costs money. Call us for priority service.</p>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
