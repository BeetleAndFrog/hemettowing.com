import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Hemet Towing | 24/7 Dispatch",
  description: "Contact Hemet Towing for emergency towing or roadside assistance. Available 24/7. Call or fill out our form for a free quote.",
  alternates: { canonical: "https://hemettowing.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={BreadcrumbListSchema([
        { name: "Home", href: "/" },
        { name: "Contact Us", href: "/contact" },
      ])} />
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-emergency text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-8">For emergencies, always call. For quotes and non-urgent inquiries, use the form below. Either way, we&apos;re here to help.</p>

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
              <p className="text-sm text-gray-500 mt-3">Weekends and holidays included. We don&apos;t close.</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Request a Quote</h2>
            <QuoteForm />
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">Should I call or fill out the form?</h3>
              <p className="text-gray-600">For emergencies — breakdowns, accidents, or if you&apos;re stranded on the roadside — always <strong>call us directly</strong>. The phone line rings straight to dispatch and we can get a truck moving immediately. Use the form for non-urgent quotes, scheduling, or general questions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">How much does towing cost?</h3>
              <p className="text-gray-600">It depends on distance, vehicle type, and time of day. Call us for a free quote — we give honest estimates with no hidden fees. Senior and repeat-customer discounts are available.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you work with insurance companies?</h3>
              <p className="text-gray-600">Yes. Many major roadside assistance providers cover towing through our partners. Check with your insurance first and let us know the details when you call — we can often bill them directly.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
