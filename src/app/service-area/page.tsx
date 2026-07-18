import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Area — Hemet Towing | Cities We Serve",
  description: "We provide towing and roadside assistance throughout Hemet, San Jacinto, Menifee, Winchester, Homeland, and all surrounding areas.",
  alternates: { canonical: "https://hemettowing.com/service-area" },
};

const limitedAreas = ["idyllwild", "aguanga"];

export default function ServiceAreaPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/service-area-hemet.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <Link href="/" className="text-emergency-light text-sm mb-4 inline-block hover:underline opacity-80 hover:opacity-100 transition">&larr; Back to Home</Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Service Area</h1>
            <p className="text-lg text-gray-300 max-w-2xl">We cover Hemet and all surrounding areas — if you&apos;re here, we&apos;ll get to you.</p>
            <div className="mt-6">
              <Phone variant="hero" />
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-gray-600 text-lg mb-8">We provide towing and roadside assistance across the entire San Jacinto Valley and surrounding areas. If you&apos;re stuck within our coverage zone, we&apos;re on the way.</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">All Service Areas</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {cities.map((area) => (
              <Link
                key={area.slug}
                href={`/cities/${area.slug}`}
                className="bg-gray-50 px-5 py-4 rounded-lg border border-gray-100 hover:border-emergency/30 hover:bg-white transition group"
              >
                <span className="font-medium group-hover:text-emergency transition">
                  {area.name}{limitedAreas.includes(area.slug) ? " (limited)" : ""}
                </span>
                <span className="text-xs text-gray-400 ml-2">View services &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Your Location, Our Coverage</h2>
          <p className="text-gray-600 mb-4">
            Because Hemet sits between the San Jacinto Mountains and the valley floor, our coverage area has some
            unique quirks. Main roads like Florida Avenue, Domenigoni Parkway, State Street, and the 79 corridor
            are always our fastest response zones — we can reach most breakdowns there within 20 minutes.
          </p>
          <p className="text-gray-600 mb-4">
            For mountain-adjacent areas like Sage, Valle Vista, and the 74 corridor, response times may stretch to
            30–40 minutes depending on road conditions, especially during monsoon season when flash flooding can
            close sections of Warren Road and Grand Avenue. Our drivers know the alternate routes and won&apos;t
            leave you waiting blind.
          </p>
          <p className="text-gray-600">
            For Idyllwild and Aguanga, our coverage is limited — the mountain roads and remote terrain require
            specific equipment and extra travel time. Always call first and we&apos;ll let you know if we can
            reach you and how fast.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">How fast can you reach me on Domenigoni Parkway?</h3>
              <p className="text-gray-600">Domenigoni is one of our fastest response corridors — typically 15–25 minutes depending on traffic. It&apos;s a major route and we stage trucks to cover it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you cover the 74 going up the mountain?</h3>
              <p className="text-gray-600">Yes, we serve the 74 corridor from Hemet up toward Mountain Center, but response times vary based on how far up the grade you are. Call and we&apos;ll give you an accurate ETA.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">What about Menifee and Winchester?</h3>
              <p className="text-gray-600">Covered. Menifee and Winchester are part of our standard service area along the Domenigoni corridor. We handle calls there daily.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can you reach me if I&apos;m on a side street or rural road?</h3>
              <p className="text-gray-600">Yes. We know Hemet&apos;s side streets and rural routes. Just give us a land reference — cross streets, landmarks, or even GPS coordinates — and we&apos;ll find you.</p>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure If We Cover Your Location?</h2>
          <p className="text-gray-600 mb-6">Give us a call. If you&apos;re within range, we&apos;ll get someone to you.</p>
          <Phone variant="hero" />
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
