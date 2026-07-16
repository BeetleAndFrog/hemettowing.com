import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

import { ServiceSchema, BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Long Distance Towing Hemet — Local & Cross-City Towing Service",
  description: "Need a tow across Hemet or to another city? We handle long distance towing with flatbed trucks. Safe, reliable transport for any vehicle.",
  alternates: { canonical: "https://hemettowing.com/long-distance-towing" },
};

export default function LongDistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ServiceSchema({
        name: "Long Distance Towing in Hemet, CA",
        description: "Long distance towing in Hemet, CA with flatbed trucks. Safe, reliable transport for any vehicle across town or across the state.",
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: "Long Distance Towing", href: "/long-distance-towing" },
      ])} />
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Long Distance Towing</h1>
        <p className="text-gray-600 text-lg mb-8">Need your vehicle moved from Hemet to another city — or just across town? Our flatbed trucks handle it all, with safe and reliable transport for any distance.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Towing to repair shops anywhere in the IE</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Cross-city transport (Hemet to San Diego, LA, OC)</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Vehicle delivery for private sales</li>
          <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Classic car and specialty vehicle transport</li>
        </ul>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Where Can We Tow From Hemet?</h2>
          <p className="text-gray-600 mb-4">
            Pretty much anywhere. Our flatbed trucks are equipped for long hauls, and we regularly run routes from
            Hemet to San Diego, Los Angeles, Orange County, Palm Springs, and all across the Inland Empire. Need to
            get your car to a specialist shop in Riverside or Murrieta? No problem. Moving to Temecula and need your
            second car transported? We do that too.
          </p>
          <p className="text-gray-600 mb-4">
            The most common long-distance tows we handle out of Hemet are to dealerships and repair shops along the
            215 and 15 corridors. A lot of Hemet drivers buy cars in Riverside or Moreno Valley, and when something
            goes wrong, they want it taken back to where they bought it. We make that trip regularly — it&apos;s a
            straight shot up Domenigoni to the 215.
          </p>
          <p className="text-gray-600">
            For longer hauls — say, Hemet to Los Angeles or San Diego — we plan the route around your schedule and
            your vehicle&apos;s condition. If it&apos;s a non-running car, we flatbed it the whole way with proper
            tie-downs and axle straps. If it runs but you just don&apos;t want to put highway miles on it, we can
            accommodate that too.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Why Choose a Flatbed for Long Distance?</h2>
          <p className="text-gray-600 mb-4">
            All-wheel drive, low-clearance, and luxury vehicles should never be towed with a standard sling — it can
            damage the drivetrain or body panels. Our flatbed trucks load your vehicle onto a full platform so all
            four wheels stay off the ground. That&apos;s especially important for long distances where road vibration
            and debris can cause hidden damage.
          </p>
          <p className="text-gray-600">
            We also use proper straps and wheel nets — not chains — so your paint and trim stay pristine. Whether
            it&apos;s a daily driver or a weekend collectible, it gets the same care.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Special Considerations for Hemet Long-Distance Tows</h2>
          <p className="text-gray-600 mb-4">
            Coming out of Hemet means navigating some unique terrain. If we&apos;re heading west toward the 15,
            we&apos;ll take Domenigoni through Menifee — a route that&apos;s prone to heat shimmer and heavy
            afternoon traffic. Heading north through the San Jacinto Mountains toward Banning or Beaumont means
            managing steep grades with a loaded flatbed, and we plan those trips carefully to avoid overheating
            and brake wear.
          </p>
          <p className="text-gray-600">
            In winter, the 74 can be dicey with ice and fog. Our drivers know the alternate routes and won&apos;t
            take unnecessary risks with your vehicle.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">How much does long-distance towing cost?</h3>
              <p className="text-gray-600">It depends on distance, vehicle size, and whether it&apos;s running or not. Call us for a free, no-obligation quote — we&apos;ll give you an honest price upfront with no hidden fees.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can you tow a non-running car from Hemet to Los Angeles?</h3>
              <p className="text-gray-600">Absolutely. We flatbed non-running vehicles all the way. Just let us know the condition so we bring the right equipment — if it won&apos;t roll or steer, we have skates and winches to handle it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you transport classic cars?</h3>
              <p className="text-gray-600">Yes. We use soft ties, wheel straps, and covered flatbed options for classic and collectible vehicles. We know how much your car means to you.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">How do I prepare my car for a long-distance tow?</h3>
              <p className="text-gray-600">Remove personal belongings, disable the alarm, and leave the keys in the vehicle (we need to release the steering column and parking brake). Let us know if there are any mechanical issues — fluid leaks, flat tires, or damage that affects loading.</p>
            </div>
          </div>
        </section>

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
