import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import { LocalBusinessSchema } from "@/lib/schema";
import Link from "next/link";

const services = [
  {
    title: "Emergency Towing",
    desc: "Immediate response for accidents, breakdowns, and roadside emergencies. We're on our way.",
    href: "/emergency-towing",
    icon: "truck",
  },
  {
    title: "Roadside Assistance",
    desc: "Flat tires, dead batteries, lockouts, fuel delivery — we handle it all, wherever you are.",
    href: "/roadside-assistance",
    icon: "wrench",
  },
  {
    title: "Long Distance Towing",
    desc: "Need a tow across town or across the state? Our flatbed trucks handle any distance.",
    href: "/long-distance-towing",
    icon: "route",
  },
  {
    title: "Motorcycle Towing",
    desc: "Specialized motorcycle towing with proper straps and trailers. Your bike stays safe.",
    href: "/motorcycle-towing",
    icon: "bike",
  },
  {
    title: "Heavy Duty Towing",
    desc: "Class 3-8 trucks, equipment, and commercial vehicles. We have the right rig for the job.",
    href: "/heavy-duty-towing",
    icon: "box",
  },
  {
    title: "24/7 Availability",
    desc: "Night, weekend, holiday — if you're stuck, call us. We never close.",
    href: "/emergency-towing",
    icon: "clock",
  },
];

const icons: Record<string, ReactNode> = {
  truck: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h9l3 3h2a2 2 0 012 2v1M8 16a2 2 0 002 2h2m0 0a2 2 0 004 0m-4 0h4m0 0V9l-3-3H5l2 8h3l1-3h3l2 4h1a2 2 0 002-2v-3" /></svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-7.25 7.25a2.12 2.12 0 01-3-3l7.25-7.25m3.16 3.16a6 6 0 118.16-8.16l-2.83 2.83a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.83 0l-4.25-4.25" /></svg>
  ),
  route: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  ),
  bike: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  ),
  box: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={LocalBusinessSchema()} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-trust-dark text-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-emergency rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 text-center relative">
            <div className="inline-flex items-center gap-2 bg-emergency/20 text-emergency-light text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-emergency/30">
              <span className="w-2 h-2 bg-emergency rounded-full animate-pulse" />
              24/7 Emergency Response
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Stranded in Hemet?<br />
              <span className="text-emergency-light">We&apos;re on the Way.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Fast, reliable towing and roadside assistance — 24 hours a day, 7 days a week.
              Locally owned. Modern fleet. No hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Phone variant="hero" />
              <a href="/contact" className="text-white/80 hover:text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition">
                Get a Quote
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Average arrival under 30 minutes • Licensed & Insured • Modern Fleet
            </p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 -mt-8 relative z-10">
          <TrustBadges />
        </section>

        {/* Social Proof Strip */}
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-emergency-light border border-emergency/20 rounded-xl p-4 flex flex-wrap items-center justify-center gap-6 text-sm">
              <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.9/5 — 50+ Google Reviews
              </span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-gray-600">⭐ &ldquo;Fastest response in Hemet&rdquo;</span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="text-gray-600">🔧 Modern fleet, fair pricing</span>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Towing Services in Hemet</h2>
              <p className="text-gray-500">Every service you need, available 24/7.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emergency/30 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="text-trust mb-3 group-hover:text-emergency transition-colors">{icons[s.icon]}</div>
                  <h3 className="font-bold text-lg mb-1.5 group-hover:text-emergency transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hemet + Quote Form */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Local Towing You Can Count On</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hemet sits in the San Jacinto Valley, surrounded by mountain passes and long stretches of highway.
                Whether you&apos;re on the 79 corridor, navigating Florida Avenue, or heading up into the hills,
                breakdowns happen when you least expect them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most towing companies in Hemet are single-truck operators with no online presence and no guarantee
                they&apos;ll actually show up. We partner with Hemet&apos;s most reliable, vetted towing professionals
                to make sure you get help fast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re not a national dispatch call center. We&apos;re local, and we know Hemet&apos;s roads.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="font-bold text-xl mb-1">Get an Instant Quote</h3>
              <p className="text-gray-500 text-sm mb-5">Tell us what you need and we&apos;ll call you back.</p>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Service Area</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              We cover Hemet and all surrounding areas — if you&apos;re here, we&apos;ll get to you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Hemet", "San Jacinto", "Winchester", "Menifee", "Homeland", "East Hemet", "Valle Vista", "Sage"].map((area) => (
                <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How fast do you respond?", a: "Average arrival time is 20-30 minutes within Hemet. Emergency calls get priority dispatch." },
                { q: "Do you tow at night?", a: "24 hours a day, 7 days a week. Nights, weekends, holidays — if you're stuck, call us." },
                { q: "How much does towing cost?", a: "Cost depends on distance and vehicle type. Call us for a free quote — no hidden fees." },
                { q: "Do you accept insurance?", a: "We work with all major insurance providers. We can bill your provider directly if you have roadside coverage." },
                { q: "What areas do you cover?", a: "Hemet, San Jacinto, Winchester, Menifee, Homeland, and all surrounding areas in the San Jacinto Valley." },
              ].map((faq) => (
                <details key={faq.q} className="bg-white rounded-xl border border-gray-100 group shadow-sm">
                  <summary className="px-6 py-4 font-bold cursor-pointer list-none flex items-center justify-between text-sm">
                    {faq.q}
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="px-6 pb-4 text-gray-600 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-emergency to-emergency-dark text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="max-w-3xl mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Stranded? We&apos;re on the Way.</h2>
            <p className="text-emergency-light text-lg mb-8">One call connects you to Hemet&apos;s fastest towing response.</p>
            <Phone variant="hero" />
            <p className="text-emergency-light/60 text-sm mt-4">24/7 • No extra charge for nights, weekends, or holidays</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
