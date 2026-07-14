import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Long Distance Towing Hemet — Local & Cross-City Towing Service",
  description: "Need a tow across Hemet or to another city? We handle long distance towing with flatbed trucks. Safe, reliable transport for any vehicle.",
};

export default function LongDistancePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Long Distance Towing</h1>
        <p className="text-gray-600 text-lg mb-8">Need your vehicle moved from Hemet to another city — or just across town? Our flatbed trucks handle it all.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Towing to repair shops anywhere in the IE</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Cross-city transport (Hemet to San Diego, LA, OC)</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Vehicle delivery for private sales</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Classic car and specialty vehicle transport</li>
        </ul>
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Long-Distance Quote?</h2>
          <p className="text-gray-600 mb-6">Call us for a free estimate based on your exact location and destination.</p>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
