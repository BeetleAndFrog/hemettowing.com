import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import { LocalBusinessSchema } from "@/lib/schema";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={LocalBusinessSchema()} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hemet Towing — 24/7 Emergency Towing Service
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Stranded in Hemet? We&apos;re here. Fast, reliable towing and roadside assistance — available 24 hours a day, 7 days a week. Locally owned and operated.
            </p>
            <Phone variant="hero" />
            <p className="text-sm text-gray-400 mt-3">No hidden fees. Average arrival under 30 minutes.</p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 -mt-8 relative z-10">
          <TrustBadges />
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Towing Services in Hemet</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Emergency Towing", desc: "Immediate response for accidents, breakdowns, and roadside emergencies. We&apos;re on our way.", href: "/emergency-towing" },
                { title: "Roadside Assistance", desc: "Flat tires, dead batteries, lockouts, fuel delivery — we handle it all, wherever you are.", href: "/roadside-assistance" },
                { title: "Long Distance Towing", desc: "Need a tow across town or across the state? Our flatbed trucks handle any distance.", href: "/long-distance-towing" },
                { title: "Motorcycle Towing", desc: "Specialized motorcycle towing with proper straps and trailers. Your bike stays safe.", href: "/motorcycle-towing" },
                { title: "Heavy Duty Towing", desc: "Class 3-8 trucks, equipment, and commercial vehicles. We have the right rig for the job.", href: "/heavy-duty-towing" },
                { title: "24/7 Availability", desc: "Night, weekend, holiday — if you&apos;re stuck, call us. We never close.", href: "/emergency-towing" },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition group">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Hemet Needs Local Towing */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Local Towing You Can Count On</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hemet sits in the San Jacinto Valley, surrounded by mountain passes and long stretches of highway. Whether you&apos;re on the 79 corridor, 
                navigating Florida Avenue, or heading up into the hills, breakdowns happen when you least expect them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most towing companies in Hemet are single-truck operators with no online presence and no guarantee they&apos;ll actually show up. 
                We partner with Hemet&apos;s most reliable, vetted towing professionals to make sure you get help fast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re not a national dispatch call center. We&apos;re local, and we know Hemet&apos;s roads.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-semibold text-xl mb-4">Get an Instant Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Service Area</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We serve Hemet and all surrounding areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Hemet", "San Jacinto", "Winchester", "Menifee", "Homeland", "East Hemet", "Valle Vista", "Sage"].map((area) => (
                <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Stranded? We&apos;re on the Way.</h2>
            <p className="text-blue-100 mb-8 text-lg">One call connects you to Hemet&apos;s fastest towing response.</p>
            <Phone variant="hero" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
