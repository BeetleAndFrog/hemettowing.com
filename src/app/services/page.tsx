import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Towing Services in Hemet — 24/7 Emergency Towing & Roadside Assistance",
  description: "Full list of towing services in Hemet, CA. Emergency towing, roadside assistance, long-distance towing, motorcycle towing, and heavy-duty recovery. Available 24/7. Call (951) 777-9776.",
  alternates: { canonical: "https://hemettowing.com/services" },
};

const icons: Record<string, ReactNode> = {
  truck: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h9l3 3h2a2 2 0 012 2v1M8 16a2 2 0 002 2h2m0 0a2 2 0 004 0m-4 0h4m0 0V9l-3-3H5l2 8h3l1-3h3l2 4h1a2 2 0 002-2v-3" /></svg>
  ),
  wrench: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-7.25 7.25a2.12 2.12 0 01-3-3l7.25-7.25m3.16 3.16a6 6 0 118.16-8.16l-2.83 2.83a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.83 0l-4.25-4.25" /></svg>
  ),
  route: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  ),
  bike: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  ),
  box: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  ),
};

const serviceList = [
  {
    slug: "emergency-towing",
    icon: "truck",
    title: "Emergency Towing",
    tagline: "Available 24/7 — we respond to accidents, breakdowns, and roadside emergencies immediately.",
    desc: "When your car breaks down in the middle of traffic or you've been in an accident, every minute counts. Our emergency towing service covers Hemet and the entire San Jacinto Valley with fast dispatch and professional flatbed equipment. We handle everything from minor breakdowns to multi-vehicle accident scenes.",
    details: ["Accident recovery and scene clearance", "Mechanical failure towing", "Rollback and flatbed towing", "Off-road recovery", "24/7 dispatch — nights, weekends, holidays"],
  },
  {
    slug: "roadside-assistance",
    icon: "wrench",
    title: "Roadside Assistance",
    tagline: "Flat tires, dead batteries, lockouts, and fuel delivery — we handle it all.",
    desc: "Not every problem needs a tow. Our roadside assistance service gets you back on the road fast without moving your vehicle. Dead batteries in the Hemet summer heat, flat tires on Domenigoni Parkway, and lockouts at the grocery store — these are our most common calls, and we resolve most of them in under 30 minutes.",
    details: ["Jump start / battery boost", "Flat tire change (spare or repair)", "Lockout service", "Fuel delivery", "Winch-out and extraction"],
  },
  {
    slug: "long-distance-towing",
    icon: "route",
    title: "Long Distance Towing",
    tagline: "Need a tow across town or across the state? Our flatbeds handle any distance.",
    desc: "Whether you need your car taken to a specialist shop in Riverside or transported to a new home in San Diego, our long-distance towing service covers it all. We use modern flatbed trucks that protect your vehicle and professional drivers who know the best routes through Southern California.",
    details: ["Towing to any repair shop in the IE", "Cross-city transport (San Diego, LA, OC)", "Vehicle delivery for private sales", "Classic car and specialty transport", "Flatbed only — no wheel-lift damage"],
  },
  {
    slug: "motorcycle-towing",
    icon: "bike",
    title: "Motorcycle Towing",
    tagline: "Specialized motorcycle towing with soft straps and wheel chocks. Your bike stays safe.",
    desc: "Your motorcycle is more than a vehicle, and we treat it that way. Our specialized motorcycle towing uses soft tie-down straps, wheel chocks, and proper positioning — no scratched paint, no bent handlebars. We handle sportbikes, cruisers, touring bikes, and dirt bikes across Hemet and beyond.",
    details: ["Soft tie-down straps — no damage", "Wheel chocks for secure positioning", "Sportbike, cruiser, touring, dirt bike", "Local and long-distance available", "24/7 motorcycle dispatch"],
  },
  {
    slug: "heavy-duty-towing",
    icon: "box",
    title: "Heavy Duty Towing",
    tagline: "Class 3-8 trucks, equipment, and commercial vehicles. We have the right rig for the job.",
    desc: "Commercial breakdowns need commercial-grade equipment. We partner with heavy-duty operators who run rotator wreckers and heavy flatbeds capable of handling Class 3-8 trucks, construction equipment, fleet vehicles, and RVs. When a delivery truck goes down on the 79 or a piece of equipment needs moving between job sites, we've got the right rig.",
    details: ["Class 3-8 truck towing", "Construction equipment transport", "Fleet vehicle recovery", "RV and bus towing", "Rotator wrecker capability"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Towing Services in Hemet, CA",
          "description": "Full list of towing and roadside services available 24/7 in Hemet and the San Jacinto Valley.",
          "provider": { "@type": "TowingService", "name": "Hemet Towing", "telephone": "(951) 777-9776" },
        })
      }} />
      <Header />
      <main id="main-content">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/customer-handoff.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <Link href="/" className="text-emergency-light text-sm mb-4 inline-block hover:underline opacity-80 hover:opacity-100 transition">&larr; Home</Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Our Towing Services</h1>
            <p className="text-lg text-gray-300 max-w-2xl">Every service you need, available 24/7. From emergency towing to heavy-duty recovery — we handle it all in Hemet and the San Jacinto Valley.</p>
            <div className="mt-6">
              <Phone variant="hero" />
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Trust badges */}
          <section className="mb-12">
            <TrustBadges />
          </section>

          {/* Service cards */}
          <section className="mb-16 space-y-10">
            {serviceList.map((svc, idx) => (
              <div
                key={svc.slug}
                id={svc.slug}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="iconbox mt-0.5">{icons[svc.icon]}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{svc.title}</h2>
                      <p className="text-emergency font-medium text-sm mt-1">{svc.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {svc.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emergency mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {d}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-emergency font-semibold hover:text-emergency-dark transition text-sm"
                  >
                    Learn more about {svc.title.toLowerCase()} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* CTA banner */}  
          <section className="bg-emergency-light border border-emergency/20 rounded-xl p-8 text-center mb-12">
            <h2 className="text-2xl font-bold mb-3">Not sure which service you need?</h2>
            <p className="text-gray-700 mb-6">Call us. Our dispatchers will match you to the right truck — no guesswork, no overcharging.</p>
            <Phone variant="hero" />
          </section>

          {/* City-area note */}
          <section className="bg-gray-50 p-8 rounded-xl mb-12">
            <h2 className="text-xl font-bold mb-3">Available Across the San Jacinto Valley</h2>
            <p className="text-gray-600 leading-relaxed">
              Every service listed here is available in <Link href="/cities/hemet" className="text-emergency hover:underline">Hemet</Link>,{" "}
              <Link href="/cities/san-jacinto" className="text-emergency hover:underline">San Jacinto</Link>,{" "}
              <Link href="/cities/winchester" className="text-emergency hover:underline">Winchester</Link>,{" "}
              <Link href="/cities/menifee" className="text-emergency hover:underline">Menifee</Link>,{" "}
              <Link href="/cities/homeland" className="text-emergency hover:underline">Homeland</Link>,{" "}
              <Link href="/cities/east-hemet" className="text-emergency hover:underline">East Hemet</Link>, and{" "}
              <Link href="/cities/valle-vista" className="text-emergency hover:underline">Valle Vista</Link>.{" "}
              Service to <Link href="/cities/idyllwild" className="text-emergency hover:underline">Idyllwild</Link> and{" "}
              <Link href="/cities/aguanga" className="text-emergency hover:underline">Aguanga</Link> is available but limited — call us for details and estimated response times.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Towing Services — Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Which service do I need — towing or roadside assistance?</h3>
                <p className="text-sm text-gray-600">If your car can be fixed on the spot (jump start, tire change, lockout, fuel delivery), roadside assistance is the right call. If it needs to go to a shop, or if it's unsafe to work on where it's parked, you need towing. When in doubt, call us — we'll figure it out together.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">How much do these services cost?</h3>
                <p className="text-sm text-gray-600">Pricing depends on the type of service, your location, and the distance. Call us for a free quote — we give honest estimates with no hidden fees. Seniors get 10% off.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Are all services available 24/7?</h3>
                <p className="text-sm text-gray-600">Yes. Emergency towing and roadside assistance are available 24 hours a day, 7 days a week — including nights, weekends, and holidays. Long-distance and motorcycle towing are also 24/7.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Do you take insurance?</h3>
                <p className="text-sm text-gray-600">We work with all major insurance roadside assistance plans. Check with your provider and let us know the details when you call — we can often bill them directly.</p>
              </div>
            </div>
          </section>

          {/* Quote form */}
          <section className="mb-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">Get a Free Quote</h2>
              <p className="text-gray-600 text-center mb-6">Tell us what you need and where you are — we'll call you back with an estimate.</p>
              <QuoteForm />
            </div>
          </section>

          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-3">Need Help Right Now?</h2>
            <p className="text-gray-600 mb-6">Don't wait. We're on the way.</p>
            <Phone variant="hero" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
