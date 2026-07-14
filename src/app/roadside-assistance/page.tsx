import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadside Assistance Hemet — Flat Tire, Jump Start, Lockout & Fuel Delivery",
  description: "24/7 roadside assistance in Hemet, CA. Flat tire changes, jump starts, lockout service, and fuel delivery. Fast, friendly, affordable.",
};

export default function RoadsideAssistancePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Roadside Assistance in Hemet</h1>
        <p className="text-gray-600 text-lg mb-8">Whether you locked your keys in the car or need a jump start in the heat, we provide fast roadside assistance anywhere in the Hemet area.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">Services We Offer</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Flat tire change (spare or repair)</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Jump start / battery boost</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Lockout service — we get you back in your car</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Fuel delivery when you run out of gas</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Winch-out / extraction</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Request Assistance</h3>
            <QuoteForm />
          </div>
        </div>

        <section className="bg-gray-900 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Hemet Summer Heat?</h2>
          <p className="text-gray-300 mb-2">Battery failures and flat tires spike when temperatures hit 100°F+. If you&apos;re stranded in the heat, call us immediately.</p>
          <p className="text-gray-400 text-sm mb-6">We&apos;ll get you back on the road fast.</p>
          <Phone variant="hero" />
        </section>
      </main>
      <Footer />
    </>
  );
}
