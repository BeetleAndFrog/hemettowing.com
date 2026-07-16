export interface CityInfo {
  name: string;
  slug: string;
  county: string;
  population: string;
  description: string;
  landmarks: string[];
  keywords: string[];
  neighborhoods: { name: string; roads: string; towing_note: string }[];
}

export const cities: CityInfo[] = [
  {
    name: "Hemet",
    slug: "hemet",
    county: "Riverside",
    population: "93,000",
    description:
      "Hemet is the heart of the San Jacinto Valley — a growing city where Florida Avenue, Domenigoni Parkway, and the 79 corridor see constant traffic. With 22.8% seniors and extreme summer heat, breakdowns here are a way of life, not a rare event.",
    landmarks: ["Diamond Valley Lake", "Western Science Center", "Hemet Valley Mall"],
    keywords: ["Hemet towing", "towing Hemet CA", "Hemet roadside assistance", "24 hour towing Hemet"],
    neighborhoods: [
      { name: "East Hemet", roads: "Florida Ave, Stetson Ave, Warren Rd", towing_note: "High heat zone — batteries and cooling systems fail here more than anywhere else in Hemet." },
      { name: "West Hemet / Valle Vista", roads: "Florida Ave, Stanford St, California Ave", towing_note: "Dense residential with narrow streets. Seniors living alone = frequent lockout and jump-start calls." },
      { name: "Diamond Valley Lake area", roads: "Domenigoni Pkwy, Newport Rd", towing_note: "Steep grades and recreational traffic. Boats, RVs, and overheating engines are common." },
      { name: "Downtown Hemet", roads: "Florida Ave, Harvard St, Latham Ave", towing_note: "Stop-and-go traffic + old infrastructure = frequent fender benders and breakdowns." },
    ],
  },
  {
    name: "San Jacinto",
    slug: "san-jacinto",
    county: "Riverside",
    population: "50,000",
    description:
      "Just north of Hemet across the 79, San Jacinto shares the same valley and the same need for reliable towing. With its own downtown, growing residential areas, and the Soboba Casino drawing visitors, San Jacinto sees its share of breakdowns.",
    landmarks: ["Soboba Casino", "Diamond Valley Lake", "Mt. San Jacinto College"],
    keywords: ["San Jacinto towing", "towing San Jacinto CA", "San Jacinto roadside assistance"],
    neighborhoods: [
      { name: "Soboba Springs / Soboba Casino area", roads: "Soboba Rd, State St", towing_note: "Casino brings visitors from across the IE. Late-night breakdowns on the drive home are common." },
      { name: "Downtown San Jacinto", roads: "6th St, San Jacinto Ave, Main St", towing_note: "Old downtown streets with limited shoulders. Breakdowns here block traffic fast." },
      { name: "Ramona Expressway corridor", roads: "Ramona Expy, Sanderson Ave", towing_note: "High-speed connector between San Jacinto and Hemet. Accidents at intersections are frequent." },
      { name: "Mt. San Jacinto College area", roads: "State St, Esplanade Ave", towing_note: "Student traffic + narrow residential streets. Dead batteries and lockouts are the norm." },
    ],
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
    neighborhoods: [
      { name: "Winchester Creek area", roads: "Winchester Rd, Simpson Rd", towing_note: "Rural roads with long stretches between services. A breakdown here can mean a mile walk to the nearest gas station." },
      { name: "79 Corridor (Winchester stretch)", roads: "CA-79, Winchester Rd", towing_note: "High-speed rural highway. Overheating and tire blowouts are the #1 call. Limited cell service in spots." },
      { name: "Sage / Diamond Valley Lake approach", roads: "Sage Rd, Newport Rd", towing_note: "Steep, winding approach to the lake. Brake and cooling failures spike during summer hiking and fishing season." },
    ],
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
    neighborhoods: [
      { name: "Sun City (55+ community)", roads: "Sun City Blvd, McCall Blvd, Newport Rd", towing_note: "Retirement community = high call volume for jump starts, lockouts, and flat tires. Seniors need priority response." },
      { name: "Menifee Lakes area", roads: "Menifee Lakes Dr, Bradley Rd", towing_note: "Lakeside residential with winding roads. Electric golf carts and neighborhood vehicles break down too." },
      { name: "Newport Road / Highway 74 corridor", roads: "Newport Rd, Antelope Rd, Garbani Rd", towing_note: "Major commuter route. Fender benders and breakdowns at peak hours. Our most frequent Menifee call zone." },
      { name: "Menifee Countryside / East Menifee", roads: "Scott Rd, Ethanac Rd, Evans Rd", towing_note: "New development areas with unfinished roads. Construction debris causes tire damage and undercarriage issues." },
    ],
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
    neighborhoods: [
      { name: "Homeland Village", roads: "Warren Rd, Leon Rd, Homeland Rd", towing_note: "Tight rural roads with deep drainage ditches. One wrong move and you're in the ditch." },
      { name: "74 Corridor (Homeland stretch)", roads: "CA-74, Warren Rd", towing_note: "Mountain pass approach. Overheated brakes and engines from the grade. Limited shoulders for safe pull-offs." },
      { name: "Warren / Leon rural area", roads: "Leon Rd, Fredericks St, Warren Rd", towing_note: "Unlit roads at night. Cows and wildlife crossings add to the risk. Flat tires from rural debris are common." },
    ],
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
