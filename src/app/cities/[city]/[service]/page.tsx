import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import type { Metadata } from "next";
import { cities, findCity, cityLabel, services } from "@/lib/cities";
import { phone } from "@/lib/constants";
import { ServiceSchema, BreadcrumbListSchema } from "@/lib/schema";
import { cityServiceCopy, type CityServiceKey } from "@/lib/city-service-copy";
import { cityHeroes } from "@/lib/city-heroes";

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const c of cities) {
    for (const s of services) {
      params.push({ city: c.slug, service: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; service: string }> }): Promise<Metadata> {
  const { city, service } = await params;
  const c = findCity(city);
  const s = services.find((x) => x.slug === service);
  if (!c || !s) return { title: "Not Found" };
  const titleBase = s.slug === "roadside-assistance" ? "Roadside Assistance" : s.name;
  return {
    title: `${titleBase} in ${c.name}, CA — 24/7 ${s.name}`,
    description: `Need ${s.name.toLowerCase()} in ${c.name}? We provide 24/7 ${s.name.toLowerCase()} throughout ${c.name} and the San Jacinto Valley. Fast response, local service. Call ${phone}.`,
    alternates: { canonical: `https://hemettowing.com/cities/${city}/${service}` },
  };
}

const serviceDetails: Record<string, { hook: string; details: string[] }> = {
  "roadside-assistance": {
    hook: "Whether you locked your keys in the car or your battery died in the heat, we provide fast roadside assistance anywhere in the area.",
    details: [
      "Flat tire change (spare or repair)",
      "Jump start / battery boost",
      "Lockout service — we get you back in your car",
      "Fuel delivery when you run out of gas",
      "Winch-out / extraction if you're stuck",
    ],
  },
  "long-distance-towing": {
    hook: "Need your vehicle moved to another city — or across town? Our flatbed trucks handle any distance, local or cross-county.",
    details: [
      "Towing to repair shops anywhere in the IE",
      "Cross-city transport to San Diego, LA, or Orange County",
      "Vehicle delivery for private sales",
      "Classic car and specialty vehicle transport",
    ],
  },
  "motorcycle-towing": {
    hook: "Your bike is more than a vehicle — it's an investment. Our specialized motorcycle towing ensures safe transport every time.",
    details: [
      "Soft tie-down straps — no damage to handlebars or paint",
      "Wheel chocks for secure positioning",
      "Sportbike, cruiser, touring, and dirt bike capable",
      "Local and long-distance available",
    ],
  },
  "heavy-duty-towing": {
    hook: "Heavy duty breakdowns need heavy duty equipment. We partner with operators who have the rigs to handle commercial vehicles.",
    details: [
      "Class 3-8 truck towing",
      "Construction equipment transport",
      "Fleet vehicle recovery",
      "RV and bus towing",
    ],
  },
};

export default async function CityServicePage({ params }: { params: Promise<{ city: string; service: string }> }) {
  const { city, service } = await params;
  const c = findCity(city);
  const s = services.find((x) => x.slug === service);

  if (!c || !s) {
    return (
      <>
        <Header />
        <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </main>
        <Footer />
      </>
    );
  }

  const detail = serviceDetails[service];
  const cityKey = `${city}:${service}` as CityServiceKey;
  const cityCopy = cityServiceCopy[cityKey];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ServiceSchema({
        name: `${s.name} in ${c.name}, CA`,
        description: `24/7 ${s.name.toLowerCase()} in ${c.name}, CA. ${cityCopy?.hook ?? detail?.hook ?? ""}`,
        areaServedCity: c.name,
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: `${c.name}, CA`, href: `/cities/${city}` },
        { name: s.name, href: `/cities/${city}/${service}` },
      ])} />
      <Header />
      <main id="main-content">
        {(() => {
          const hero = cityHeroes.find(h => h.filename === `${city}.png`);
          if (hero) {
            return (
              <section className="relative text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0">
                  <img src={`/images/${hero.filename}`} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
                </div>
                <div className="max-w-6xl mx-auto px-4 relative">
                  <Link href={`/cities/${city}`} className="text-emergency-light text-sm mb-4 inline-block hover:underline opacity-80 hover:opacity-100 transition">
                    &larr; {s.name} in {c.name}
                  </Link>
                  <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
                    {s.name} in {c.name}, CA
                  </h1>
                  <p className="text-lg text-gray-300 max-w-2xl">24/7 {s.name.toLowerCase()} in {c.name}. Call us — we&apos;re local.</p>
                  <div className="mt-6">
                    <Phone variant="hero" />
                  </div>
                </div>
              </section>
            );
          }
          return (
            <div className="pt-4">
              <div className="max-w-4xl mx-auto px-4">
                <Link href={`/cities/${city}`} className="text-emergency text-sm mb-4 inline-block hover:underline">
                  &larr; {s.name} in {c.name}
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {s.name} in {c.name}, CA
                </h1>
              </div>
            </div>
          );
        })()}
        <div className="max-w-4xl mx-auto px-4 pb-12">

        {cityCopy ? (
          <>
            <p className="text-gray-600 text-lg mb-6">{cityCopy.hook}</p>

            {/* Inline phone CTA after hook — visible above the fold on mobile */}
            <div className="mb-8 md:hidden">
              <a href="tel:(951) 777-9776"
                className="w-full bg-emergency hover:bg-emergency-dark text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-emergency/25 pulse-emergency text-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now
              </a>
            </div>

            {/* The [City] Difference — moved above the fold */}
            <section className="mb-8 bg-emergency-light border border-emergency/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-2">The {c.name} Difference</h2>
              <p className="text-gray-700">{cityCopy.localAngle}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 text-gray-600">
                <h2 className="text-xl font-bold text-gray-900">How It Works in {c.name}</h2>
                {cityCopy.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Request Service in {c.name}</h3>
                <QuoteForm />
              </div>
            </div>

            {/* City + Service specific FAQs */}
            {cityCopy.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="text-xl font-bold mb-4">
                  {s.name} in {c.name} — Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {cityCopy.faqs.map((faq, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-gray-100">
                      <h3 className="font-semibold text-gray-900 mb-1">{faq.q}</h3>
                      <p className="text-sm text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            <p className="text-gray-600 text-lg mb-8">{detail?.hook}</p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
                <ul className="space-y-3 text-gray-600">
                  {(detail?.details ?? []).map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emergency font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Request Service in {c.name}</h3>
                <QuoteForm />
              </div>
            </div>
          </>
        )}

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Need {s.name.toLowerCase()} in {c.name} Right Now?
          </h2>
          <p className="text-gray-600 mb-6">Don&apos;t wait. We&apos;re on the way.</p>
          <Phone variant="hero" />
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
