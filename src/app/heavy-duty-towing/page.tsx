import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

import { ServiceSchema, BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Hemet — Truck & Equipment Towing",
  description: "Commercial and heavy duty towing in Hemet, CA. Class 3-8 trucks, construction equipment, and fleet vehicles. We handle the big jobs.",
  alternates: { canonical: "https://hemettowing.com/heavy-duty-towing" },
};

export default function HeavyDutyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ServiceSchema({
        name: "Heavy Duty Towing in Hemet, CA",
        description: "Commercial and heavy duty towing in Hemet, CA. Class 3-8 trucks, construction equipment, fleet vehicles, RV and bus towing.",
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: "Heavy Duty Towing", href: "/heavy-duty-towing" },
      ])} />
      <Header />
      <main id="main-content">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/heavy-duty-recovery.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <Link href="/" className="text-emergency-light text-sm mb-4 inline-block hover:underline opacity-80 hover:opacity-100 transition">&larr; Back to Home</Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Heavy Duty Towing in Hemet</h1>
            <p className="text-lg text-gray-300 max-w-2xl">Class 3-8 trucks, equipment, and commercial vehicles. We have the right rig for the job.</p>
            <div className="mt-6">
              <Phone variant="hero" />
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-gray-600 text-lg mb-8">Heavy duty breakdowns need heavy duty equipment. We partner with operators who have the rigs and experience to handle commercial vehicles, fleet trucks, and construction equipment.</p>
        <ul className="space-y-3 text-gray-600 mb-8">
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Class 3-8 truck towing</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Construction equipment transport</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> Fleet vehicle recovery</li>
          <li className="flex gap-2"><span className="text-emergency font-bold">•</span> RV and bus towing</li>
        </ul>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Commercial Towing in Hemet & the San Jacinto Valley</h2>
          <p className="text-gray-600 mb-4">
            Hemet might not be a major trucking hub, but commercial vehicles move through here every day — delivery
            trucks on Florida Avenue, construction rigs working the new builds off Domenigoni, and RVs heading up
            to the mountains on the 74. When one of these goes down, you can&apos;t just call any tow truck. You
            need a heavy-duty wrecker with the capacity to handle 30,000-pound loads safely.
          </p>
          <p className="text-gray-600 mb-4">
            Our partner operators run rotator wreckers and heavy-duty flatbeds that can handle everything from
            box trucks and dump trucks to full-size RVs and commercial buses. We&apos;ve recovered semi-trailers
            from the Domenigoni and 79 junction and pulled construction loaders out of soft ground on job sites
            across the valley.
          </p>
          <p className="text-gray-600">
            Downtime costs money — we get that. That&apos;s why commercial and fleet calls get priority routing.
            We coordinate directly with your dispatch or shop manager so everyone stays in the loop.
          </p>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Common Heavy-Duty Breakdowns in Hemet</h2>
          <p className="text-gray-600 mb-4">
            Heat is the biggest enemy of commercial vehicles too. Delivery trucks running routes through Hemet in
            August are fighting 110°F ambient temps with AC units that can barely keep up. Overheated diesel engines,
            blown radiator hoses, and transmission failures spike in the summer months.
          </p>
          <p className="text-gray-600 mb-4">
            The 74 grade is another major trouble spot. RVs and buses climbing out of Hemet toward Mountain Center
            push their cooling systems to the limit, and we see a steady stream of calls from overheated coaches
            and motorhomes on that stretch. Coming back down, brake failures on the steep descent are a real risk.
          </p>
          <p className="text-gray-600">
            Construction equipment has its own challenges — getting a track loader or excavator unstuck from
            soft ground after a flash storm near Warren Road requires specialized recovery gear that standard
            tow trucks don&apos;t carry. Our heavy-duty operators are equipped for it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">What size trucks can you tow?</h3>
              <p className="text-gray-600">We handle Class 3 through Class 8 — from medium-duty box trucks up to full semi-trailers and heavy commercial vehicles. Call us with your vehicle specs and we&apos;ll confirm the right equipment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you recover construction equipment off-road?</h3>
              <p className="text-gray-600">Yes. Our operators handle off-road recovery for excavators, loaders, bulldozers, and other heavy equipment. If it&apos;s stuck in mud, sand, or uneven terrain, we have the winches and rigging to extract it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">How fast can you get a wrecker to a commercial breakdown?</h3>
              <p className="text-gray-600">For emergency breakdowns on highways and main roads, we aim for 30–45 minute response. Fleet and commercial calls are prioritized — we know every hour of downtime hits your bottom line.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can you tow my RV from Hemet to a repair shop?</h3>
              <p className="text-gray-600">Absolutely. We tow RVs, motorhomes, and travel trailers regularly. We use heavy-duty flatbeds or wheel-lift systems designed for the weight and size of large recreational vehicles.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Commercial Breakdown?</h2>
          <p className="text-gray-600 mb-6">We understand downtime costs money. Call us for priority service.</p>
          <Phone variant="hero" />
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
