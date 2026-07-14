import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motorcycle Towing Hemet — Safe Bike Transport in the IE",
  description: "Specialized motorcycle towing in Hemet, CA. Proper straps, soft ties, and wheel chocks — your bike gets the care it deserves.",
};

export default function MotorcyclePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Motorcycle Towing in Hemet</h1>
        <p className="text-gray-600 text-lg mb-8">Your bike is more than a vehicle — it&apos;s an investment. Our specialized motorcycle towing ensures safe transport every time.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Soft tie-down straps — no damage to handlebars or paint</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Wheel chocks for secure positioning</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Sportbike, cruiser, touring, and dirt bike capable</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Local and long-distance available</li>
        </ul>
        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Bike Down? We&apos;ll Get It.</h2>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
