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
  {
    name: "East Hemet",
    slug: "east-hemet",
    county: "Riverside",
    population: "—",
    description:
      "East Hemet covers the warmer side of town, stretching from Florida Avenue and Stetson Avenue out toward Warren Road. This area has the highest concentration of heat-related breakdowns in the San Jacinto Valley, and we know every block of it.",
    landmarks: ["Hemet Valley Mall", "Stetson Avenue corridor", "Warren Road"],
    keywords: ["East Hemet towing", "towing East Hemet", "East Hemet roadside"],
    neighborhoods: [
      { name: "Florida Ave / Stetson Ave area", roads: "Florida Ave, Stetson Ave", towing_note: "Busiest commercial intersection in East Hemet. Heat-related battery and cooling failures peak here in summer." },
      { name: "Warren Road corridor", roads: "Warren Rd, Chambers Ave", towing_note: "Long rural stretch with limited services. A breakdown here means waiting — we aim to change that." },
      { name: "Eastside residential", roads: "Lillian St, Johnston Ave, Menlo Ave", towing_note: "Quiet residential streets. Seniors living alone account for most lockout and jump-start calls." },
    ],
  },
  {
    name: "Valle Vista",
    slug: "valle-vista",
    county: "Riverside",
    population: "—",
    description:
      "Valle Vista sits on the western edge of Hemet, a quieter residential pocket along Florida Avenue with citrus groves, older homes, and a large senior population. Breakdowns here are more about daily life than highway emergencies.",
    landmarks: ["Valle Vista Shopping Center", "Stanford Street", "Diamond Valley Lake approach"],
    keywords: ["Valle Vista towing", "towing Valle Vista", "Valle Vista roadside"],
    neighborhoods: [
      { name: "Stanford Street area", roads: "Stanford St, California Ave", towing_note: "Dense residential with narrow streets. Seniors lock themselves out or need jump starts more than any other group." },
      { name: "Florida Avenue (Valle Vista stretch)", roads: "Florida Ave", towing_note: "Long commercial strip with stop-and-go traffic. Frequent fender benders and overheating cars." },
      { name: "West Hemet gateway", roads: "Warren Rd, Sageland Dr", towing_note: "Transition zone between Hemet's suburban grid and the rural roads toward the lake." },
    ],
  },
  {
    name: "Sage",
    slug: "sage",
    county: "Riverside",
    population: "—",
    description:
      "Sage is the rural gateway to Diamond Valley Lake, sitting along Sage Road and Newport Road between Hemet and Winchester. It's a quiet area most of the year, but during fishing and hiking season the traffic spikes — and so do breakdowns.",
    landmarks: ["Diamond Valley Lake", "Sage Road", "Newport Road"],
    keywords: ["Sage towing", "towing Sage CA", "Sage roadside assistance"],
    neighborhoods: [
      { name: "Diamond Valley Lake approach", roads: "Sage Rd, Newport Rd", towing_note: "Steep, winding road to the lake. Brake overheating and cooling failures spike during summer recreation season." },
      { name: "Sage rural corridor", roads: "Sage Rd, Simpson Rd", towing_note: "Unlit rural roads with long stretches between services. Wildlife crossings add risk at dawn and dusk." },
      { name: "Newport Road connector", roads: "Newport Rd, Domenigoni Pkwy", towing_note: "Major connector between Hemet and Winchester. Construction traffic from new developments causes debris-related tire damage." },
    ],
  },
  {
    name: "Idyllwild",
    slug: "idyllwild",
    county: "Riverside",
    population: "—",
    description:
      "Idyllwild is a mountain community at 5,400 feet in the San Jacinto Mountains. Our coverage here is limited — we can respond to most breakdowns but the mountain roads mean longer response times. For serious accidents, we coordinate with mountain-based tow operators.",
    landmarks: ["Idyllwild Village", "Mount San Jacinto State Park", "Humber Park"],
    keywords: ["Idyllwild towing", "towing Idyllwild", "Idyllwild roadside"],
    neighborhoods: [
      { name: "Idyllwild Village", roads: "CA-243, N Circle Dr, Village Center Dr", towing_note: "Tight village streets with limited parking. A breakdown in town blocks traffic for blocks." },
      { name: "CA-243 corridor", roads: "CA-243", towing_note: "Mountain highway with steep grades and tight curves. Brake failures and overheated engines are common." },
      { name: "Strawberry Valley / Fern Valley", roads: "CA-243, Fern Valley Rd", towing_note: "Residential areas off the main highway. Remote — our response times are longer here due to winding roads." },
    ],
  },
  {
    name: "Aguanga",
    slug: "aguanga",
    county: "Riverside",
    population: "—",
    description:
      "Aguanga is a remote rural community along the 79 corridor between Temecula and Anza. Our coverage here is limited — we can reach Aguanga for most breakdowns but response times are longer due to the distance and winding mountain roads.",
    landmarks: ["Aguanga General Store", "CA-79", "Vail Lake"],
    keywords: ["Aguanga towing", "towing Aguanga", "Aguanga roadside"],
    neighborhoods: [
      { name: "79 Corridor (Aguanga stretch)", roads: "CA-79, Aguanga Rd", towing_note: "Remote rural highway with long gaps between services. Cell coverage drops in spots. Flat tires and overheating dominate." },
      { name: "Vail Lake area", roads: "Vail Lake Rd, CA-79", towing_note: "Recreation area access road. Boats and trailers breakdown here more than passenger cars." },
      { name: "Wilson Valley / Rangeland", roads: "Wilson Valley Rd, Cahuilla Rd", towing_note: "Deep rural. Unpaved roads, cattle crossings, and extreme isolation. Recovery here requires precise location coordination." },
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
