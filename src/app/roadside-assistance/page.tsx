import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadside Assistance Hemet — Flat Tire, Jump Start, Lockout & Fuel Delivery",
  description: "24/7 roadside assistance in Hemet, CA. Flat tire changes, jump starts, lockout service, and fuel delivery. Fast, friendly, affordable.",
};

export default function RoadsideAssistancePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Roadside Assistance in Hemet</h1>
        <p className="text-gray-600 text-lg mb-8">Whether you locked your keys in the car or need a jump start in the heat, we provide fast roadside assistance anywhere in the Hemet area.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">Services We Offer</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Flat tire change (spare or repair)</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Jump start / battery boost</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Lockout service — we get you back in your car</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Fuel delivery when you run out of gas</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Winch-out / extraction</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Request Assistance</h3>
            <QuoteForm />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Hemet&apos;s Heat Is So Tough on Your Car</h2>
          <p className="text-gray-600 mb-4">
            Let&apos;s be real — Hemet summers are brutal. When it&apos;s 110°F outside, it&apos;s closer to 140°F
            under your hood. That&apos;s why battery failures are our number one roadside call from June through
            September. The heat accelerates chemical reactions inside the battery, and once it&apos;s weak, a hot
            afternoon is all it takes to finish it off.
          </p>
          <p className="text-gray-600 mb-4">
            Tires are the next biggest culprit. Hot asphalt combined with under-inflation causes blowouts, especially
            on stretches like Florida Avenue and Domenigoni Parkway where the road surface bakes all day. We change
            more flats on 100-degree days than the rest of the year combined.
          </p>
          <p className="text-gray-600">
            And here&apos;s the thing — if your battery is more than three years old, it&apos;s living on borrowed
            time during a Hemet summer. We can test it on the spot when we jump-start you, so you know whether to
            budget for a replacement before it leaves you stranded again.
          </p>
        </section>

        <section className="mb-12 bg-yellow-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Common Roadside Scenarios We See in Hemet</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Locked out at the grocery store</h3>
              <p className="text-sm">It happens more than you&apos;d think — keys in the car at the Stater Bros. parking lot or the Hemet Valley Mall. We can usually get you back in within minutes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Dead battery at the park-and-ride</h3>
              <p className="text-sm">The commuter lot near the 79 fills up early, and after a long day of work, that battery that barely held a charge in the morning is done. We&apos;ll boost you and test the alternator while we&apos;re at it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ran out of gas on Domenigoni</h3>
              <p className="text-sm">That stretch between Hemet and Menifee is longer than it looks. We carry enough fuel to get you to the nearest station.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">For Hemet Seniors — We Prioritize Your Safety</h2>
          <p className="text-gray-600 mb-4">
            Hemet has one of the highest senior populations in California — over 22% of residents are 65 or older.
            If you&apos;re a senior stuck on the roadside, especially in extreme heat, we flag your call for priority
            dispatch. We also offer a 10% senior discount on all roadside services.
          </p>
          <p className="text-gray-600">
            Our drivers are trained to be patient and thorough with older drivers. We won&apos;t rush you, we&apos;ll
            explain what happened, and we&apos;ll help you figure out next steps — whether that&apos;s a ride home,
            a call to family, or arranging a tow to your preferred shop.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">How long does roadside assistance take?</h3>
              <p className="text-gray-600">Most calls within Hemet city limits get a response in 20–30 minutes. During peak heat hours or after a major accident, it can take a bit longer — but we always prioritize safety calls.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Can you help if I&apos;m on Highway 74?</h3>
              <p className="text-gray-600">Yes. We respond to roadside calls on the 74, the 79 corridor, and throughout the San Jacinto Valley. Our drivers are equipped for mountain road conditions.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you carry the right battery for my car?</h3>
              <p className="text-gray-600">We carry a range of common battery sizes for jump starts. If your battery is completely dead and needs replacement, we can get you boosted and advise on where to buy — we don&apos;t sell batteries, so there&apos;s no upselling.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">How do I get the senior discount?</h3>
              <p className="text-gray-600">Just mention it when you call. No need to show ID upfront — our driver will verify on arrival. It&apos;s 10% off any roadside service.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Hemet Summer Heat?</h2>
          <p className="text-gray-300 mb-2">Battery failures and flat tires spike when temperatures hit 100°F+. If you&apos;re stranded in the heat, call us immediately.</p>
          <p className="text-gray-400 text-sm mb-6">We&apos;ll get you back on the road fast.</p>
          <Phone variant="hero" />
        </section>
      </main>
      <Footer />
    </>
  );
}
