import { cities, services } from "@/lib/cities";
import type { MetadataRoute } from "next";

const BASE_URL = "https://hemettowing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/emergency-towing`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/roadside-assistance`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/long-distance-towing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/motorcycle-towing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/heavy-duty-towing`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/service-area`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const cityEntries = cities.map((c) => ({
    url: `${BASE_URL}/cities/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityServiceEntries = cities.flatMap((c) =>
    services
      .filter((s) => s.slug !== "emergency-towing")
      .map((s) => ({
        url: `${BASE_URL}/cities/${c.slug}/${s.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  );

  return [...staticPages, ...cityEntries, ...cityServiceEntries];
}
