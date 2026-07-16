import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Phone from "@/components/Phone";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Towing Hemet — 24/7 Emergency Tow Truck Service",
  description: "Immediate emergency towing in Hemet, CA. Available 24/7 for accidents, breakdowns, and roadside emergencies. Fast response, local service.",
};

export default function EmergencyTowingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Towing in Hemet, CA</h1>
        <p className="text-gray-600 text-lg mb-8">When your car breaks down in the middle of nowhere — or worse, in the middle of traffic — you need help immediately. That&apos;s exactly what we&apos;re here for.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">We Respond to All Emergencies</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Accident recovery and scene clearance</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Vehicle breakdowns on highways and local roads</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Mechanical failure towing</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Off-road recovery</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Rollback and flatbed towing for damaged vehicles</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Get Help Now</h3>
            <QuoteForm />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Hemet Drivers Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "24/7 Availability", d: "Day, night, weekend, holiday — we never close. If you're stuck, call us." },
              { t: "Fast Response", d: "We prioritize emergency calls. Most arrivals within 20-30 minutes." },
              { t: "Local Knowledge", d: "We know Hemet's roads, traffic patterns, and shortcuts." },
            ].map((item) => (
              <div key={item.t} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Breakdowns Happen More in Hemet</h2>
          <p className="text-gray-600 mb-4">
            Living in Hemet means dealing with conditions that are uniquely hard on vehicles. When summer hits and
            temperatures climb past 110°F, car batteries are the first thing to go — they simply cook under the hood.
            We see battery failures spike every July through September, especially on Florida Avenue and Domenigoni
            Parkway where idling in traffic adds to the heat load.
          </p>
          <p className="text-gray-600 mb-4">
            Then there&apos;s Highway 74 — a beautiful drive through the San Jacinto Mountains, but brutal on brakes
            and cooling systems. Steep grades coming down into Hemet push engines to their limit, and we pull overheated
            vehicles off that road more than any other stretch in the valley. Throw in the flood risk along Warren Road
            and the 79 corridor during monsoon season, and you&apos;ve got a recipe for breakdowns that most cities
            just don&apos;t see.
          </p>
          <p className="text-gray-600">
            That&apos;s why our drivers know to check for heat-related failures first — melted belts, blown hoses,
            dead batteries, and seized alternators. It&apos;s not guesswork; it&apos;s experience with Hemet&apos;s
            specific conditions.
          </p>
        </section>

        <section className="mb-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">For Our Senior Drivers</h2>
          <p className="text-gray-600 mb-4">
            Nearly one in four Hemet residents is 65 or older, and we know that getting stranded is more stressful
            when you&apos;re on your own. If you&apos;re a senior driver stuck on the side of the road, tell our
            dispatcher — we flag senior calls for priority response and offer a 10% discount to Hemet seniors.
          </p>
          <p className="text-gray-600">
            We&apos;ll stay with you until you&apos;re safe, help you arrange a ride if needed, and make sure your
            vehicle gets to a shop you trust. No upselling, no pressure — just reliable help.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Counts as an Emergency?</h2>
          <p className="text-gray-600 mb-4">
            If your vehicle is unsafe to drive or blocking traffic, it&apos;s an emergency. That includes accidents,
            sudden mechanical failures, flat tires on busy roads, and any situation where you&apos;re stranded in
            extreme heat or poor weather. Don&apos;t second-guess yourself — if you feel unsafe, call. We&apos;d
            rather roll a truck and find it&apos;s a simple fix than have you wait in danger.
          </p>
          <p className="text-gray-600">
            We cover all of Hemet, San Jacinto, Menifee, Winchester, and the surrounding valley. Even if you&apos;re
            out on Domenigoni or deep in a side street off Florida, we know how to find you fast.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900">How fast will you get here?</h3>
              <p className="text-gray-600">Most emergency calls within Hemet city limits get a truck in 20–30 minutes. During extreme heat waves or after major accidents, it may be a bit longer — but we prioritize emergency calls above everything else.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you handle accidents on the 79 or 74?</h3>
              <p className="text-gray-600">Absolutely. We respond to accidents and breakdowns on all major corridors including Highway 74, the 79, Domenigoni Parkway, and Florida Avenue. Our drivers are experienced with mountain road recoveries too.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">What if my car is completely dead?</h3>
              <p className="text-gray-600">No problem. We bring flatbed and rollback trucks that can load a non-running vehicle safely. We don&apos;t need your car to move — we do all the work.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Do you offer a senior discount?</h3>
              <p className="text-gray-600">Yes — 10% off for Hemet-area seniors. Just mention it when you call and our dispatcher will apply it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">What payment methods do you take?</h3>
              <p className="text-gray-600">Cash, credit cards, and debit cards. We also work with most major insurance roadside assistance plans — just check with your provider and let us know the details.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Tow Right Now?</h2>
          <p className="text-gray-600 mb-6">Don&apos;t wait. Call us. We&apos;re on the way.</p>
          <Phone variant="hero" />
        </section>
      </main>
      <Footer />
    </>
  );
}
