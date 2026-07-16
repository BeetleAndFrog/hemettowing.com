import { phone } from "./constants";

export function LocalBusinessSchema() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TowingService",
      name: "Hemet Towing",
      description: "24/7 emergency towing and roadside assistance serving Hemet, CA and surrounding areas.",
      url: "https://hemettowing.com",
      telephone: phone,
      areaServed: [
        { "@type": "City", name: "Hemet" },
        { "@type": "City", name: "San Jacinto" },
        { "@type": "City", name: "Winchester" },
        { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Homeland" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
    }),
  };
}
