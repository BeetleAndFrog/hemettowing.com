import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

import { ServiceSchema, BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Motorcycle Towing Hemet — Safe Bike Transport in the IE",
  description: "Specialized motorcycle towing in Hemet, CA. Proper straps, soft ties, and wheel chocks — your bike gets the care it deserves.",
  alternates: { canonical: "https://hemettowing.com/motorcycle-towing" },
};

export default function MotorcyclePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ServiceSchema({
        name: "Motorcycle Towing in Hemet, CA",
        description: "Specialized motorcycle towing in Hemet, CA with proper straps, soft ties, and wheel chocks. Safe transport for sportbikes, cruisers, and dirt bikes.",
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: "Motorcycle Towing", href: "/motorcycle-towing" },
      ])} />
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-emergency text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">Motorcycle Towing in Hemet, CA</h1>
        <p className="text-gray-600 text-lg mb-8">Your bike is more than a vehicle — it's an investment. Our specialized motorcycle towing ensures safe transport every time.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Soft tie-down straps — no damage to handlebars or paint</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Wheel chocks for secure positioning</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Sportbike, cruiser, touring, and dirt bike capable</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Local and long-distance available</li>
        </ul>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Motorcycle Towing Is Different</h2>
          <p className="text-gray-600 mb-4">
            Towing a motorcycle isn&apos;t the same as towing a car. Bikes are top-heavy, have exposed components,
            and can tip or shift if not secured properly. A standard tow truck with a sling can damage your frame,
            scratch your fairings, or snap a brake line. That&apos;s why we use dedicated motorcycle equipment on
            every bike tow.
          </p>
          <p className="text-gray-600 mb-4">
            Our flatbed trucks come with integrated wheel chocks that lock the front tire in place, plus soft
            tie-down straps that go around the forks and swingarm — never the handlebars or bodywork. Your bike
            sits upright and stable for the whole ride, whether we&apos;re taking it across town or across the
            Inland Empire.
          </p>
          <p className="text-gray-600">
            For laid-down bikes after an accident, we bring extra padding and straps to secure damaged bodywork
            so nothing falls off in transit. We&apos;ve handled everything from custom cruisers to track-prepped
            sportbikes, and we treat every one like it&apos;s our own.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Hemet Riders — We Know the Roads You Ride</h2>
          <p className="text-gray-600 mb-4">
            Hemet is a rider&apos;s paradise. You&apos;ve got Highway 74 winding through the San Jacinto Mountains,
            the long straight stretches along the 79 corridor, and the scenic back roads through Sage and Aguanga.
            But those same roads that make for great rides can also leave you stranded — especially if something
            goes wrong halfway up a mountain pass or in the middle of nowhere.
          </p>
          <p className="text-gray-600 mb-4">
            We get calls from riders who broke down on the 74 more than any other road in the area. Chain failures
            on steep grades, overheating in stop-and-go summer traffic, and flat tires from road debris on Florida
            Avenue are the most common issues. If you go down on a remote stretch, we&apos;ll find you and get your
            bike home safely.
          </p>
          <p className="text-gray-600">
            We also know the seasonal risks — monsoon storms in July and August can wash out gravel shoulders,
            and winter mornings on the 74 can leave black ice in shaded corners. If your bike goes down, call us.
            We don&apos;t judge, we just load it up and get you both home.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">Do you tow bikes that have been in an accident?</h3>
              <p className="text-gray-600">Yes. We handle accident-damaged bikes carefully, with extra strapping for loose bodywork and protection for exposed mechanical parts. If the bike won&apos;t roll, we use a winch to load it safely.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can you tow my bike from Hemet to a shop in Riverside?</h3>
              <p className="text-gray-600">Absolutely. We do long-distance motorcycle tows regularly. Your bike will be secured on a flatbed with wheel chocks and soft straps the whole way.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you handle dirt bikes and dual-sports?</h3>
              <p className="text-gray-600">Sure do. Dirt bikes, dual-sports, even side-by-sides and ATVs. Just let us know what you&apos;re riding so we bring the right setup.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">What if I broke down on Highway 74?</h3>
              <p className="text-gray-600">We cover the 74 from Hemet up through the mountains. If you&apos;re stranded on a curve or a steep grade, we&apos;ll send a truck equipped for mountain recoveries. Stay with your bike and call us.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Bike Down? We&apos;ll Get It.</h2>
          <p className="text-gray-600 mb-6">Call us and we&apos;ll send a truck with the right equipment for your bike.</p>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
