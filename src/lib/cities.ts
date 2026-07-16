export interface CityInfo {
  name: string;
  slug: string;
  county: string;
  population: string;
  description: string;
  landmarks: string[];
  keywords: string[];
}

export const cities: CityInfo[] = [
  {
    name: "San Jacinto",
    slug: "san-jacinto",
    county: "Riverside",
    population: "50,000",
    description:
      "Just north of Hemet across the 79, San Jacinto shares the same valley and the same need for reliable towing. With its own downtown, growing residential areas, and the Soboba Casino drawing visitors, San Jacinto sees its share of breakdowns.",
    landmarks: ["Soboba Casino", "Diamond Valley Lake", "Mt. San Jacinto College"],
    keywords: ["San Jacinto towing", "towing San Jacinto CA", "San Jacinto roadside assistance"],
  },
  {
    name: "Winchester",
    slug: "winchester",
    county: "Riverside",
    population: "3,500",
    description:
      "Winchester sits between Hemet and Temecula along the 79 corridor — a rural stretch where breakdowns mean long waits. Its unincorporated character means fewer local towing options, making our service even more valuable for residents and people passing through.",
    landmarks: ["Diamond Valley Lake", "Winchester Creek", "Menifee border"],
    keywords: ["Winchester towing", "towing Winchester CA", "Winchester roadside service"],
  },
  {
    name: "Menifee",
    slug: "menifee",
    county: "Riverside",
    population: "117,000",
    description:
      "One of the fastest-growing cities in the Inland Empire, Menifee's expanding road network means more traffic and more breakdowns. With a large retirement community in Sun City and thousands of new homes going up, the demand for towing is only growing.",
    landmarks: ["Sun City", "Menifee Countryside Marketplace", "Menifee Lakes"],
    keywords: ["Menifee towing", "towing Menifee CA", "Menifee roadside assistance", "Sun City towing"],
  },
  {
    name: "Homeland",
    slug: "homeland",
    county: "Riverside",
    population: "6,000",
    description:
      "A small unincorporated community between Hemet and Romoland, Homeland relies on the 74 and 79 for access to the rest of the valley. Rural roads and limited services make us a vital resource for residents needing a tow or roadside help.",
    landmarks: ["Homeland Elementary", "Diamond Valley Lake"],
    keywords: ["Homeland towing", "towing Homeland CA", "Homeland roadside service"],
  },
];

export const services = [
  { slug: "emergency-towing", name: "Emergency Towing", short: "Emergency Towing" },
  { slug: "roadside-assistance", name: "Roadside Assistance", short: "Roadside Assistance" },
  { slug: "long-distance-towing", name: "Long Distance Towing", short: "Long Distance Towing" },
  { slug: "motorcycle-towing", name: "Motorcycle Towing", short: "Motorcycle Towing" },
  { slug: "heavy-duty-towing", name: "Heavy Duty Towing", short: "Heavy Duty Towing" },
];

export function findCity(slug: string): CityInfo | undefined {
  return cities.find((c) => c.slug === slug);
}

export function cityLabel(slug: string): string {
  const c = findCity(slug);
  return c ? c.name : slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
