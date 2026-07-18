import type { CityInfo } from "./cities";

export type CityServiceKey = `${string}:${string}`;

export interface CityServiceCopy {
  hook: string;
  commonScenarios: string[];
  localAngle: string;
  neighborhoods: string[];
  roads: string[];
  faqs?: { q: string; a: string }[];
  landmarks?: string[];
}

export const cityServiceCopy: Record<string, CityServiceCopy> = {
  // ─── HEMET ───────────────────────────────────────────────

  "hemet:roadside-assistance": {
    hook: "Hemet summers push cars to their limit. When it hits 110°F — and it does, every July through September — batteries die, tires blow, and cooling systems give out. We pull over a hundred Hemet drivers out of these situations every summer.",
    commonScenarios: [
      "Dead batteries on Florida Avenue after sitting in stop-and-go traffic at 105°F",
      "Senior lockouts in West Hemet and Valle Vista — older drivers accidentally lock keys in running cars",
      "Flat tires on Domenigoni Parkway from summer heat expansion and road debris",
      "Empty gas tanks on the 79 corridor — drivers misjudge the distance between stations",
    ],
    localAngle: "Hemet has 22.8% seniors — one of the highest concentrations in Riverside County. Seniors need more roadside assistance per capita: lockouts, dead batteries from short trips, and flat tires from aging tires they haven't replaced.",
    neighborhoods: ["East Hemet", "West Hemet / Valle Vista", "Diamond Valley Lake area", "Downtown Hemet"],
    roads: ["Florida Ave", "Domenigoni Parkway", "Warren Rd", "Stetson Ave"],
    faqs: [
      { q: "How fast can you get to Florida Avenue from a call?", a: "Most roadside calls within Hemet city limits see a truck in 20-30 minutes. We stage drivers based on the area — East Hemet and Florida Ave get priority because call volume is highest there." },
      { q: "Do you help with senior-specific issues like walker retrieval from locked cars?", a: "Absolutely. We help seniors get back into their vehicles, retrieve mobility aids, and arrange rides if needed. Just tell the dispatcher it's a senior call." },
    ],
  },

  "hemet:long-distance-towing": {
    hook: "Hemet sits at the junction of the 79, 74, and 79 corridor — the gateway to San Diego, Orange County, and the rest of the Inland Empire. When your car breaks down on the way out of the valley, you need a tow that can go the distance.",
    commonScenarios: [
      "Broken-down vehicles on the 79 heading toward Temecula for repairs",
      "Cars that overheated on the 74 grade coming out of Hemet toward Orange County",
      "Vehicle delivery to dealerships in San Diego or Los Angeles",
      "Classic car transport from Hemet to shows or buyers across Southern California",
    ],
    localAngle: "Hemet's valley location means any trip to a major metro involves a mountain pass or long highway stretch. The 74 west and the 79 south both have steep grades that push aging cooling systems past their limit.",
    neighborhoods: ["East Hemet (79 access)", "West Hemet (74 access)", "Downtown Hemet"],
    roads: ["CA-74", "CA-79", "Domenigoni Parkway", "Florida Ave"],
    faqs: [
      { q: "Can you tow from Hemet to San Diego?", a: "Yes — we handle cross-city tows to San Diego, Los Angeles, Orange County, and anywhere in the IE. Flatbed trucks keep your vehicle safe for the long haul." },
    ],
  },

  "hemet:motorcycle-towing": {
    hook: "Highway 74 through the San Jacinto Mountains is one of Southern California's best motorcycle roads — and one of the most dangerous when something goes wrong. We specialize in bike recovery from the mountain passes and valley roads Hemet riders know well.",
    commonScenarios: [
      "Sportbike breakdowns on the 74 twisties — overheated engines and electrical failures mid-corner",
      "Cruiser flats on the long straight stretches of Florida Avenue",
      "Dirt bike recoveries from the trails around Diamond Valley Lake",
      "Locked keys or dead batteries at Hemet biker meetups and events",
    ],
    localAngle: "The Ortega Highway (74) connection to San Juan Capistrano draws riders from across Southern California. The route is technical, remote, and hot — a bad combination for bikes that aren't perfectly maintained.",
    neighborhoods: ["Diamond Valley Lake area", "Downtown Hemet", "East Hemet", "Valle Vista"],
    roads: ["CA-74 (Ortega Highway)", "Florida Ave", "Warren Rd", "Domenigoni Parkway"],
    faqs: [
      { q: "Do you use soft straps for motorcycle towing?", a: "Always. Soft tie-downs, wheel chocks, and padded rails — your bike never touches metal. We also carry extra tie-downs for custom builds with unusual fairings." },
    ],
  },

  "hemet:heavy-duty-towing": {
    hook: "Hemet's industrial base on the east side and the growing warehouse distribution centers around Domenigoni Parkway mean Class 3-8 trucks are on Hemet roads every day. When a commercial vehicle goes down, downtime costs money — we get there fast.",
    commonScenarios: [
      "Semi-truck breakdowns on Domenigoni Parkway near the warehouse district",
      "Construction equipment transport from Hemet job sites to the next project",
      "Fleet vehicle recovery for local delivery companies during peak heat",
      "RV towing from Diamond Valley Lake campgrounds and storage lots",
    ],
    localAngle: "Hemet's commercial corridor is concentrated around Florida Avenue and Domenigoni Parkway, both of which see heavy truck traffic during business hours and limited shoulder space for breakdowns. Time is money — we know these operators can't wait.",
    neighborhoods: ["East Hemet (industrial)", "Domenigoni corridor", "Florida Ave commercial"],
    roads: ["Domenigoni Parkway", "Florida Ave", "Stetson Ave", "Warren Rd"],
    faqs: [
      { q: "What class trucks do you handle?", a: "Class 3 through Class 8 — from box trucks and delivery vans all the way up to semi-tractors and heavy equipment. We have the right rig for the job." },
    ],
  },

  // ─── SAN JACINTO ─────────────────────────────────────────

  "san-jacinto:roadside-assistance": {
    hook: "San Jacinto is a commuter city — people live here and drive to work, school, and the casino. That means cars are pushed daily, and breakdowns happen at the most inconvenient times. We know the roads and the rhythms.",
    commonScenarios: [
      "Dead batteries at Soboba Casino's parking lot after late-night sessions",
      "Student lockouts and flats near Mt. San Jacinto College — especially at semester start",
      "Accidents and breakdowns on the Ramona Expressway at peak commute hours",
      "Overheated vehicles on State Street during summer afternoons",
    ],
    localAngle: "The Ramona Expressway is a high-speed connector between San Jacinto and Hemet with limited shoulders. Accidents here back up fast and need priority response to clear lanes and get drivers to safety.",
    neighborhoods: ["Soboba Springs / Casino area", "Downtown San Jacinto", "Mt. San Jacinto College area"],
    roads: ["Ramona Expressway", "State St", "San Jacinto Ave", "Soboba Rd", "Esplanade Ave"],
    faqs: [
      { q: "How long does a roadside call take on the Ramona Expressway?", a: "We aim for 20-30 minutes on the Expressway. Traffic conditions can slow us down at peak hours, but we dispatch from the closest driver." },
    ],
  },

  "san-jacinto:long-distance-towing": {
    hook: "San Jacinto sits just north of Hemet with easy access to the 79 and the 74, making it a common starting point for trips to Temecula, Palm Springs, and the coast. When a trip gets cut short by a breakdown, we cover the distance.",
    commonScenarios: [
      "Cars that break down on the 79 toward Hemet and need continued transport to a specific shop",
      "Overheated vehicles on the way back from Soboba Casino to homes in other cities",
      "Transport from San Jacinto to dealerships or repair shops in the wider IE",
      "Student vehicles needing towing from the college area to home garages in other cities",
    ],
    localAngle: "San Jacinto's location north of the 79 junction means most long-distance routes involve at least one mountain grade or high-speed highway section. We plan routes that avoid steep tows when possible.",
    neighborhoods: ["Downtown San Jacinto", "Soboba area", "Ramona Expressway corridor"],
    roads: ["Ramona Expressway", "CA-79", "State St", "San Jacinto Ave"],
  },

  "san-jacinto: motorcycle-towing": {
    hook: "The roads around San Jacinto — from the Soboba foothills to the long stretches of the Ramona Expressway — are popular with local riders. But the combination of heat, rural roads, and occasional mountain gravel makes breakdowns a real risk.",
    commonScenarios: [
      "Sportbike stalls on the winding Soboba Rd approach to the casino area",
      "Cruiser breakdowns on long rides through the Ramona Expressway corridor",
      "Dirt bike recoveries from trails near Diamond Valley Lake access points",
      "Battery and electrical failures on bikes parked in the heat at Mt. San Jacinto College lots",
    ],
    localAngle: "San Jacinto's mix of suburban commuting and rural riding means bikes here face both stop-and-go heat stress and high-speed highway wear. We see electrical failures from both extremes.",
    neighborhoods: ["Soboba Springs area", "Ramona Expressway", "Mt. San Jacinto College"],
    roads: ["Soboba Rd", "Ramona Expressway", "State St", "Sanderson Ave"],
  },

  "san-jacinto:heavy-duty-towing": {
    hook: "San Jacinto's commercial activity centers around Soboba Casino's supply chain, local agriculture, and construction projects tied to the city's steady growth. When a heavy vehicle goes down, the impact ripples through the operation.",
    commonScenarios: [
      "Delivery trucks for Soboba Casino needing recovery on Soboba Rd",
      "Agricultural equipment transport from farms around the Ramona Expressway",
      "Construction equipment breakdowns at new development sites",
      "Fleet vehicle recovery for local service companies",
    ],
    localAngle: "Soboba Casino's supply chain runs 24/7 — delivery trucks, service vehicles, and shuttles. A breakdown at the wrong time can disrupt operations, so we prioritize commercial calls in the Soboba corridor.",
    neighborhoods: ["Soboba Casino area", "Ramona Expressway commercial", "Downtown industrial"],
    roads: ["Soboba Rd", "Ramona Expressway", "State St"],
  },

  // ─── WINCHESTER ──────────────────────────────────────────

  "winchester:roadside-assistance": {
    hook: "Winchester is rural — the kind of place where the next gas station is 10 miles away and cell service drops in patches along the 79. When you break down here, you're not just stuck — you're isolated. That's why we prioritize Winchester calls.",
    commonScenarios: [
      "Flat tires on the 79 between Winchester and Temecula — road debris is constant",
      "Overheating on the approach to Diamond Valley Lake during summer hiking season",
      "Dead batteries on rural roads like Simpson Rd where help is miles away",
      "Lockouts at the lake trailhead parking lots after sunset",
    ],
    localAngle: "Winchester is unincorporated with only 3,500 residents. Local towing options are basically nonexistent. If your car dies here, you're walking to a gas station or waiting hours for a national dispatcher — unless you call us.",
    neighborhoods: ["79 Corridor", "Winchester Creek area", "Sage / DVL approach"],
    roads: ["CA-79", "Winchester Rd", "Simpson Rd", "Newport Rd", "Sage Rd"],
    faqs: [
      { q: "What if I have no cell service on the 79 near Winchester?", a: "Our dispatch logs the last known location from your call. Tell us what mile marker or landmark you passed, and we'll find you. We know every stretch of the 79." },
    ],
  },

  "winchester:long-distance-towing": {
    hook: "Winchester sits on the 79 between Hemet and Temecula — a rural corridor where cars commuting to the cities break down far from home. A long-distance tow from here isn't a luxury; it's the only way to get your car to a real repair shop.",
    commonScenarios: [
      "Cars that die on the 79 commute to Temecula and need transport to a Hemet or Murrieta shop",
      "Overheating on the long uphill grade from Winchester toward Diamond Valley Lake",
      "Breakdowns on the way to San Diego or Orange County that strand drivers in the rural stretch",
      "Vehicle delivery from Winchester to buyers or dealerships in other cities",
    ],
    localAngle: "Winchester's location between two major city clusters means people pass through, not stop. A breakdown here leaves you stranded in the middle of a 20-mile rural stretch with no services in sight.",
    neighborhoods: ["79 Corridor", "Winchester Creek"],
    roads: ["CA-79", "Winchester Rd", "Newport Rd"],
  },

  "winchester:motorcycle-towing": {
    hook: "The 79 through Winchester is a favorite route for riders connecting Hemet to Temecula — sweeping curves, open stretches, and minimal traffic. But it's also remote, hot, and unforgiving if your bike decides to quit.",
    commonScenarios: [
      "Overheated engines on the long 79 stretch with no shade or pull-offs",
      "Flat tires from road debris scattered on the rural highway shoulder",
      "Electrical failures on older cruiser bikes during summer heat",
      "Rider breakdowns — literally — where the biker needs a lift too",
    ],
    localAngle: "The 79 corridor between Hemet and Temecula has exactly one gas station with a repair shop for the entire stretch. If your bike goes down between them, you're waiting on a tow regardless.",
    neighborhoods: ["79 Corridor", "Sage / DVL approach"],
    roads: ["CA-79", "Winchester Rd", "Sage Rd"],
  },

  "winchester:heavy-duty-towing": {
    hook: "Winchester's agricultural roots mean heavy equipment — tractors, hay trucks, livestock haulers — shares the road with commuters. When a farm vehicle goes down on the 79, it blocks the corridor and needs heavy gear to move.",
    commonScenarios: [
      "Farm equipment breakdowns on Winchester Rd during harvest season",
      "Hay truck and livestock trailer recoveries on the 79",
      "Construction equipment transport for rural development projects",
      "Flatbed recovery of disabled vehicles too large for standard tow trucks",
    ],
    localAngle: "Rural roads mean heavier equipment and fewer shoulders. A broken-down tractor on Winchester Rd can block both lanes. Our heavy-duty fleet can clear it without damaging the equipment or the road.",
    neighborhoods: ["Winchester Creek area", "79 Corridor", "Sage area"],
    roads: ["Winchester Rd", "Simpson Rd", "CA-79", "Newport Rd"],
  },

  // ─── MENIFEE ─────────────────────────────────────────────

  "menifee:roadside-assistance": {
    hook: "Menifee is growing fast — 117,000 people and counting — which means more cars on the road, more construction debris, and more breakdowns. The retirement community in Sun City alone generates more roadside calls per capita than any other part of the valley.",
    commonScenarios: [
      "Sun City senior lockouts and dead batteries — the most common call we get in Menifee",
      "Flat tires from construction debris on Scott Rd and Ethanac Rd in the new development areas",
      "Overheating on Newport Rd during the afternoon commute",
      "Empty gas tank calls from drivers who underestimated the distance between Menifee stations",
    ],
    localAngle: "Sun City is a 55+ planned community with thousands of older drivers. They drive less, so batteries die more often. They're more prone to lockouts. And they need patient, respectful service — which is exactly what we provide.",
    neighborhoods: ["Sun City", "Menifee Lakes", "Newport Road corridor", "East Menifee developments"],
    roads: ["Newport Rd", "Sun City Blvd", "Scott Rd", "Antelope Rd", "Ethanac Rd", "Evans Rd", "Bradley Rd"],
    faqs: [
      { q: "Do you offer senior discounts in Menifee?", a: "Yes — 10% off for Sun City and Menifee seniors. Just mention it when you call." },
    ],
  },

  "menifee:long-distance-towing": {
    hook: "Menifee is a bedroom community — thousands of residents commute to San Diego, Orange County, and Los Angeles every day. When your car breaks down on the way home, you need a tow that can get it the rest of the way.",
    commonScenarios: [
      "Cars that break down on the 215 or I-15 commute and need transport back to Menifee",
      "Overheating on the 74 grade toward Lake Elsinore during the evening commute",
      "Vehicle delivery from Menifee dealerships to buyers across Southern California",
      "Moving families whose vehicles don't survive the relocation trip",
    ],
    localAngle: "Menifee's growth means more commuters spread across more freeways. A breakdown on the 215 or I-15 can leave you an hour from home. We bring it back for you.",
    neighborhoods: ["Sun City", "Menifee Lakes", "Newport Rd corridor"],
    roads: ["Newport Rd", "I-215", "I-15", "CA-74", "Antelope Rd"],
  },

  "menifee:motorcycle-towing": {
    hook: "Menifee's grid of wide boulevards and the proximity to the 74 mountain roads make it a natural base for riders. But the same construction boom that's building new homes also leaves debris that takes down bikes.",
    commonScenarios: [
      "Cruiser breakdowns on the long straight of Newport Rd between developments",
      "Sportbike recoveries from the 74 approach to the Ortega Highway",
      "Golf cart and neighborhood vehicle transport from Sun City and Menifee Lakes",
      "Bike flats from construction screws and nails on recently paved roads",
    ],
    localAngle: "Menifee's rapid development is great for the city but hard on tires. Construction debris — screws, nails, sharp metal — is everywhere on newer roads. Bikes are especially vulnerable.",
    neighborhoods: ["Sun City", "Menifee Lakes", "Newport corridor", "East Menifee"],
    roads: ["Newport Rd", "Sun City Blvd", "Menifee Lakes Dr", "Scott Rd", "Antelope Rd"],
  },

  "menifee:heavy-duty-towing": {
    hook: "Menifee's construction boom means heavy equipment is everywhere — excavators, dump trucks, concrete mixers. When a piece of commercial equipment goes down mid-project, every hour of downtime costs money.",
    commonScenarios: [
      "Dump truck and mixer breakdowns at active construction sites in East Menifee",
      "Fleet vehicle recovery for delivery and service companies operating in the Menifee area",
      "RV towing from storage lots and the Menifee Lakes campground area",
      "Construction equipment transport between Menifee job sites",
    ],
    localAngle: "Menifee is the fastest-growing city in the valley at +14% since 2020. Every new development means construction equipment on the road. When a truck or excavator breaks down, we're the call that gets the project moving again.",
    neighborhoods: ["East Menifee (development zones)", "Newport Rd commercial", "Scott Rd industrial"],
    roads: ["Scott Rd", "Ethanac Rd", "Newport Rd", "Menifee Rd"],
  },

  // ─── HOMELAND ────────────────────────────────────────────

  "homeland:roadside-assistance": {
    hook: "Homeland is small, rural, and easy to miss — but if your car breaks down on Warren Road or the 74 corridor, you notice. There's no gas station in Homeland. No repair shop. No tow company (except us). When you're stuck here, you're really stuck.",
    commonScenarios: [
      "Cars in the ditch on Warren Rd — the drainage ditches are deep and easy to miss at night",
      "Overheating on the 74 mountain approach just outside Homeland during summer",
      "Flat tires from rural debris on Leon Rd and Fredericks St",
      "Dead batteries on unlit rural roads where drivers left lights on",
    ],
    localAngle: "Homeland has one elementary school and nothing else. No services, no gas, no cell reception in some spots. A breakdown here is genuinely dangerous in summer heat. We prioritize Homeland calls because there's no backup.",
    neighborhoods: ["Homeland Village", "74 Corridor", "Warren / Leon rural area"],
    roads: ["Warren Rd", "Leon Rd", "Homeland Rd", "CA-74", "Fredericks St"],
    faqs: [
      { q: "What if I break down on the 74 near Homeland at night?", a: "Call us immediately. The 74 has no lighting through this stretch and limited shoulders. Stay in your vehicle with hazards on, and we'll find you. Tell us the nearest cross street if you can see one." },
    ],
  },

  "homeland:long-distance-towing": {
    hook: "Homeland sits on the 74 between Hemet and the mountain pass — a rural pinch point where cars heading to the coast or the valley often break down far from either destination.",
    commonScenarios: [
      "Cars that die on the 74 grade and need to be towed to Hemet or Lake Elsinore",
      "Breakdowns on the way to or from the Ortega Highway that strand drivers in the rural stretch",
      "Vehicle transport from Homeland to repair shops in Hemet or Perris",
      "Recreational vehicle towing from Diamond Valley Lake access points near Homeland",
    ],
    localAngle: "Homeland's location on the 74 means any long-distance trip involves a mountain pass. Cars that are marginal in the valley overheat on the way up. Cars that break down on the coast have to come back through.",
    neighborhoods: ["74 Corridor", "Homeland Village"],
    roads: ["CA-74", "Warren Rd", "Leon Rd"],
  },

  "homeland:motorcycle-towing": {
    hook: "The 74 through Homeland is the gateway to some of the best riding in Southern California — but it's also a dead zone for bike services. If your bike goes down in the Homeland stretch, the next help is 15 miles in either direction.",
    commonScenarios: [
      "Sportbike breakdowns on the 74 twisties approaching the mountain pass",
      "Cruiser stalls on the long rural stretches with no shoulder to pull off safely",
      "Dirt bike recoveries from the trails branching off Leon Rd and Warren Rd",
      "Electrical failures on bikes after riding through the evening heat",
    ],
    localAngle: "The 74 corridor through Homeland has patches with zero cell reception and no street lighting. If your bike dies in a dead zone, you're walking to the nearest house — unless you have a way to call us before you lose signal.",
    neighborhoods: ["74 Corridor", "Homeland Village", "Warren Road area"],
    roads: ["CA-74", "Leon Rd", "Warren Rd", "Fredericks St"],
  },

  "homeland:heavy-duty-towing": {
    hook: "Homeland may be small, but it sits on a route that sees agricultural equipment, horse trailers, and commercial delivery trucks passing through daily. When a heavy vehicle breaks down on these narrow rural roads, it blocks the entire corridor.",
    commonScenarios: [
      "Agricultural equipment breakdowns on Leon Rd during farming season",
      "Horse trailer and livestock transport recovery on the 74",
      "Delivery truck recoveries on Warren Rd and Homeland Rd",
      "Construction equipment transport for rural property development",
    ],
    localAngle: "Homeland's rural roads are narrow, unlit, and bordered by deep drainage ditches. A heavy vehicle breakdown here doesn't just block traffic — it can damage the equipment if it slides into a ditch. We bring the right recovery gear.",
    neighborhoods: ["Homeland Village", "74 Corridor", "Warren / Leon area"],
    roads: ["CA-74", "Warren Rd", "Leon Rd", "Homeland Rd", "Fredericks St"],
  },
};
