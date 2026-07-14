import { phone, formattedPhone } from "@/lib/constants";

export default function Phone({ variant = "default", size = "lg" }: { variant?: "default" | "hero"; size?: "sm" | "lg" }) {
  const sizeClasses = size === "lg" ? "text-xl md:text-2xl" : "text-lg";
  if (variant === "hero") {
    return (
      <a
        href={`tel:${phone}`}
        className={`inline-flex items-center gap-3 bg-emergency hover:bg-emergency-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emergency/30 hover:shadow-xl hover:shadow-emergency/40 transition-all pulse-emergency ${sizeClasses}`}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        Call Now — {formattedPhone}
      </a>
    );
  }
  return (
    <a href={`tel:${phone}`} className={`text-emergency hover:text-emergency-dark font-bold ${sizeClasses}`}>
      {formattedPhone}
    </a>
  );
}
