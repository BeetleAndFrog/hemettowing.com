import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Towing Hemet — 24/7 Emergency Tow Truck Service",
  description: "Immediate emergency towing in Hemet, CA. Available 24/7 for accidents, breakdowns, and roadside emergencies. Fast response, local service.",
};

export default function EmergencyTowingPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Towing in Hemet, CA</h1>
        <p className="text-gray-600 text-lg mb-8">When your car breaks down in the middle of nowhere — or worse, in the middle of traffic — you need help immediately.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">We Respond to All Emergencies</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Accident recovery and scene clearance</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Vehicle breakdowns on highways and local roads</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Mechanical failure towing</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Off-road recovery</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Rollback and flatbed towing for damaged vehicles</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Get Help Now</h3>
            <QuoteForm />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Hemet Drivers Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "24/7 Availability", d: "Day, night, weekend, holiday — we never close. If you're stuck, call us." },
              { t: "Fast Response", d: "We prioritize emergency calls. Most arrivals within 20-30 minutes." },
              { t: "Local Knowledge", d: "We know Hemet's roads, traffic patterns, and shortcuts." },
            ].map((item) => (
              <div key={item.t} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Tow Right Now?</h2>
          <p className="text-gray-600 mb-6">Don&apos;t wait. Call us. We&apos;re on the way.</p>
          <Phone variant="hero" />
        </section>
      </main>
      <Footer />
    </>
  );
}
