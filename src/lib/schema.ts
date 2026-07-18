import { phone, serviceArea } from "./constants";

export function LocalBusinessSchema() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TowingService",
      name: "Hemet Towing",
      description: "24/7 emergency towing and roadside assistance serving Hemet, CA and the entire San Jacinto Valley.",
      url: "https://hemettowing.com",
      telephone: phone,
      areaServed: [
        { "@type": "City", name: "Hemet" },
        { "@type": "City", name: "San Jacinto" },
        { "@type": "City", name: "Winchester" },
        { "@type": "City", name: "Menifee" },
        { "@type": "City", name: "Homeland" },
        { "@type": "City", name: "East Hemet" },
        { "@type": "City", name: "Valle Vista" },
        { "@type": "City", name: "Sage" },
        { "@type": "City", name: "Idyllwild" },
        { "@type": "City", name: "Aguanga" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50+",
        bestRating: "5",
      },
    }),
  };
}

export function ServiceSchema({
  name,
  description,
  areaServedCity,
}: {
  name: string;
  description: string;
  areaServedCity?: string;
}) {
  const areas = areaServedCity
    ? [{ "@type": "City" as const, name: areaServedCity }]
    : serviceArea.map((c) => ({ "@type": "City" as const, name: c }));

  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      provider: {
        "@type": "TowingService",
        name: "Hemet Towing",
        telephone: phone,
        url: "https://hemettowing.com",
      },
      areaServed: areas,
      telephone: phone,
    }),
  };
}

export function BreadcrumbListSchema(items: { name: string; href: string }[]) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `https://hemettowing.com${item.href}`,
      })),
    }),
  };
}
