const badges = [
  { label: "24/7 Service", desc: "Available anytime, day or night" },
  { label: "Fast Response", desc: "Average arrival under 30 minutes" },
  { label: "Local Company", desc: "Proudly serving Hemet since 2024" },
  { label: "Licensed & Insured", desc: "Fully bonded for your protection" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {badges.map((b) => (
        <div key={b.label} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="font-semibold text-gray-900 text-sm">{b.label}</div>
          <div className="text-xs text-gray-500 mt-1">{b.desc}</div>
        </div>
      ))}
    </div>
  );
}
