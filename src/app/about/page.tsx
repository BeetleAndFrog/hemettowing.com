import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — Hemet Towing | Locally Owned & Operated",
  description: "Hemet Towing is a locally owned lead generation service connecting Hemet drivers with the area's most reliable towing professionals.",
  alternates: { canonical: "https://hemettowing.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
      ])} />
      <Header />
      <main id="main-content">
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hemet-towing-branded-hero.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative">
            <Link href="/" className="text-emergency-light text-sm mb-4 inline-block hover:underline opacity-80 hover:opacity-100 transition">&larr; Back to Home</Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">About Hemet Towing</h1>
            <p className="text-lg text-gray-300 max-w-2xl">Locally owned and operated. Licensed, bonded, and built for the San Jacinto Valley.</p>
            <div className="mt-6">
              <Phone variant="hero" />
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 py-12">

        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed">
            Hemet Towing was built for one reason: Hemet drivers needed a better way to find reliable towing help when they needed it most.
          </p>
          <p className="leading-relaxed mt-4">
            Most towing companies in the area have no online presence. Some don&apos;t even answer their phones at night. We work exclusively with 
            verified, licensed towing professionals who meet our standards for response time, equipment quality, and customer service.
          </p>
          <p className="leading-relaxed mt-4">
            We&apos;re not a dispatch center. We&apos;re a local service that pre-vets the best operators in Hemet so you don&apos;t have to gamble 
            on who shows up when you&apos;re stranded.
          </p>
          <p className="leading-relaxed mt-4">
            Every towing partner we work with is licensed, insured, and committed to fair pricing. We don&apos;t take kickbacks for sending
            business one way or another — we recommend operators based on who&apos;s closest, best equipped, and most responsive for your
            specific situation.
          </p>
          <p className="leading-relaxed mt-4">
            We know Hemet — the heat, the roads, the traffic patterns on Florida and Domenigoni, and the challenges that come with living
            in a valley community between mountain ranges. Whether you&apos;re a long-time resident or new to the area, we want you to know
            there&apos;s a dependable towing resource here when you need it.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Need a Tow?</h2>
          <Phone variant="hero" />
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
