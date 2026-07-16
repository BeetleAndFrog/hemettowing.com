"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://ops.btlfrg.com/webhook/hemet-towing-lead";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [savedName, setSavedName] = useState("");

  return (
    <form className="space-y-4" method="POST" onSubmit={async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get("name");
      const phone = data.get("phone");
      const service = data.get("service");
      if (!name || !phone || !service) {
        alert("Please fill in all required fields.");
        return;
      }
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            service,
            details: data.get("details") || "",
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!res.ok) throw new Error("Bad response");
        setSavedName(name as string);
        setSubmitted(true);
        form.reset();
      } catch {
        setError(true);
      }
    }}>
      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
          <p className="font-bold text-lg mb-1">Thanks, {savedName}!</p>
          <p className="text-sm">We'll call you back shortly.</p>
        </div>
      ) : (
        <>
          {error && (
            <p className="text-red-600 text-sm">Something went wrong. Please call us directly.</p>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency focus:border-emergency outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency focus:border-emergency outline-none"
              required
            />
          </div>
          <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency focus:border-emergency outline-none bg-white" required>
            <option>Emergency Towing</option>
            <option>Roadside Assistance</option>
            <option>Long Distance Towing</option>
            <option>Motorcycle Towing</option>
            <option>Heavy Duty Towing</option>
          </select>
          <textarea
            name="details"
            placeholder="Your location and details..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emergency focus:border-emergency outline-none"
          />
          <button
            type="submit"
            className="w-full bg-emergency hover:bg-emergency-dark text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Get a Free Quote
          </button>
        </>
      )}
    </form>
  );
}
