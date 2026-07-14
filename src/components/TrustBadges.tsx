import type { ReactNode } from "react";

const badges = [
  { label: "24/7 Emergency", desc: "Any time, day or night", icon: "clock" },
  { label: "Fast Response", desc: "Arrival in 20-30 min", icon: "lightning" },
  { label: "Locally Owned", desc: "Hemet-based since 2024", icon: "map" },
  { label: "Licensed & Insured", desc: "Fully bonded, modern fleet", icon: "shield" },
];

const icons: Record<string, ReactNode> = {
  clock: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  lightning: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  map: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  shield: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
};

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {badges.map((b) => (
        <div key={b.label} className="text-center p-5 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="text-emergency mx-auto mb-2">{icons[b.icon]}</div>
          <div className="font-bold text-gray-900 text-sm">{b.label}</div>
          <div className="text-xs text-gray-500 mt-0.5">{b.desc}</div>
        </div>
      ))}
    </div>
  );
}
