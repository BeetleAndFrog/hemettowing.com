import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Hemet Towing | Locally Owned & Operated",
  description: "Hemet Towing is a locally owned lead generation service connecting Hemet drivers with the area's most reliable towing professionals.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Hemet Towing</h1>

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
            Every towing partner we work with is licensed, insured, and committed to fair pricing.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Need a Tow?</h2>
          <Phone variant="hero" />
        </div>
      </main>
      <Footer />
    </>
  );
}
