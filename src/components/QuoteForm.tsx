"use client";

export default function QuoteForm() {
  return (
    <form className="space-y-4" method="POST" action="#" onSubmit={(e) => {
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
      alert("Thanks! We'll call you back shortly.");
      form.reset();
    }}>
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
        placeholder="Your location and details..."
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Get a Free Quote
      </button>
    </form>
  );
}
