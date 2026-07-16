import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";
import type { Metadata } from "next";
import { cities, findCity, cityLabel, services } from "@/lib/cities";
import { phone } from "@/lib/constants";
import { BreadcrumbListSchema } from "@/lib/schema";

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
          <Link href="/service-area" className="text-trust hover:underline">&larr; View our service area</Link>
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
        <Link href="/service-area" className="text-trust text-sm mb-4 inline-block hover:underline">
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

        {/* Services grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our {c.name} Towing Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/cities/${city}/${s.slug}`}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-emergency/30 hover:shadow-md transition group"
              >
                <h3 className="font-semibold mb-1 group-hover:text-emergency transition">
                  {s.name} in {c.name}
                </h3>
                <p className="text-sm text-gray-500">Available 24/7 &rarr;</p>
              </Link>
            ))}
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
