import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cities, findCity, cityLabel, services } from "@/lib/cities";
import { phone } from "@/lib/constants";
import { BreadcrumbListSchema } from "@/lib/schema";

const icons: Record<string, ReactNode> = {
  truck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h9l3 3h2a2 2 0 012 2v1M8 16a2 2 0 002 2h2m0 0a2 2 0 004 0m-4 0h4m0 0V9l-3-3H5l2 8h3l1-3h3l2 4h1a2 2 0 002-2v-3" /></svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-7.25 7.25a2.12 2.12 0 01-3-3l7.25-7.25m3.16 3.16a6 6 0 118.16-8.16l-2.83 2.83a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.83 0l-4.25-4.25" /></svg>
  ),
  route: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  ),
  bike: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  ),
  box: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

const serviceIconMap: Record<string, string> = {
  "emergency-towing": "truck",
  "roadside-assistance": "wrench",
  "long-distance-towing": "route",
  "motorcycle-towing": "bike",
  "heavy-duty-towing": "box",
};

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = findCity(city);
  if (!c) return { title: "City Not Found" };
  return {
    title: `Towing in ${c.name}, CA — 24/7 Local Tow Truck Service`,
    description: `Need towing in ${c.name}, CA? We provide 24/7 emergency towing, roadside assistance, and recovery services throughout ${c.name} and the San Jacinto Valley. Call ${phone}.`,
    alternates: { canonical: `https://hemettowing.com/cities/${city}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = findCity(city);
  if (!c) {
    return (
      <>
        <Header />
        <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <Link href="/service-area" className="text-emergency hover:underline">&larr; View our service area</Link>
        </main>
        <Footer />
      </>
    );
  }

  const otherCities = cities.filter((x) => x.slug !== city);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: `${c.name}, CA`, href: `/cities/${city}` },
      ])} />
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/service-area" className="text-emergency text-sm mb-4 inline-block hover:underline">
          &larr; Service Area
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Towing in {c.name}, CA
        </h1>
        <p className="text-gray-600 text-lg mb-6">{c.description}</p>

        <div className="bg-emergency-light border border-emergency/20 rounded-xl p-6 mb-10 text-center">
          <p className="text-lg font-bold mb-2">Stranded in {c.name}?</p>
          <p className="text-gray-700 mb-4">Call us — we&apos;re local and we respond fast.</p>
          <Phone variant="hero" />
        </div>

        {/* Neighborhoods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Towing in {c.name} Neighborhoods</h2>
          <p className="text-gray-500 text-sm mb-6">We know these roads. Here&apos;s what to expect in each area.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {c.neighborhoods.map((n) => (
              <div key={n.name} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{n.name}</h3>
                <p className="text-xs text-gray-400 mb-2">Major roads: {n.roads}</p>
                <p className="text-sm text-gray-600">{n.towing_note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our {c.name} Towing Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => {
              const iconName = serviceIconMap[s.slug] || "truck";
              return (
                <Link
                  key={s.slug}
                  href={`/cities/${city}/${s.slug}`}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-emergency/30 hover:shadow-md transition group flex items-start gap-4"
                >
                  <div className="iconbox mt-0.5">{icons[iconName]}</div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-emergency transition">
                      {s.name} in {c.name}
                    </h3>
                    <p className="text-sm text-gray-500">Available 24/7 &rarr;</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Area info */}
        <section className="bg-gray-50 p-6 rounded-xl mb-12">
          <h2 className="text-xl font-bold mb-3">About {c.name}, CA</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">County:</span> {c.county}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Population:</span> ~{c.population}
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold text-gray-900">Nearby:</span>{" "}
              {c.landmarks.join(", ")}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section className="mb-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Get a Free Quote</h2>
            <p className="text-gray-600 text-center mb-6">
              Tell us where you are in {c.name} and what you need.
            </p>
            <QuoteForm />
          </div>
        </section>

        {/* Other cities */}
        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold mb-4">Other Areas We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((oc) => (
              <Link
                key={oc.slug}
                href={`/cities/${oc.slug}`}
                className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                {oc.name}
              </Link>
            ))}
            <Link
              href="/"
              className="px-4 py-2 bg-emergency text-white rounded-lg text-sm font-bold hover:bg-emergency-dark transition"
            >
              Hemet (Main)
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
