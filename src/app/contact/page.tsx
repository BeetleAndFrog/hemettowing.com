import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Hemet Towing | 24/7 Dispatch",
  description: "Contact Hemet Towing for emergency towing or roadside assistance. Available 24/7. Call or fill out our form for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8">For emergencies, always call. For quotes and non-urgent inquiries, use the form below.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h2 className="font-semibold mb-2">Call Us 24/7</h2>
              <Phone size="sm" />
              <p className="text-sm text-gray-500 mt-2">Always available. If you&apos;re stuck, call now.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="font-semibold mb-2">Service Hours</h2>
              <p className="text-sm text-gray-600">24 hours a day</p>
              <p className="text-sm text-gray-600">7 days a week</p>
              <p className="text-sm text-gray-600">365 days a year</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Request a Quote</h2>
            <QuoteForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
