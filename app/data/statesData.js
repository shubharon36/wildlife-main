/**
 * State data for the interactive India map.
 * Keyed by state code (matches SVG path IDs via svgIdToStateCode).
 */

export const stateData = {
  AP: { name: "Andhra Pradesh", sanctuaries: 13, habitat: "Coastal", biogeographicZone: "Deccan Peninsula", keySpecies: "Olive Ridley Turtle · Blackbuck", notableSanctuary: "Coringa Wildlife Sanctuary", tags: ["Wetland", "Coastal"], image: "/img/dearimage.jpg" },
  AR: { name: "Arunachal Pradesh", sanctuaries: 13, habitat: "Alpine", biogeographicZone: "Trans-Himalaya", keySpecies: "Red Panda · Snow Leopard", notableSanctuary: "Eaglenest Wildlife Sanctuary", tags: ["Forest", "Alpine"], image: "/img/north3.png" },
  AS: { name: "Assam", sanctuaries: 18, habitat: "Tropical", biogeographicZone: "North-East", keySpecies: "One-Horned Rhino · Tiger", notableSanctuary: "Manas Wildlife Sanctuary", tags: ["Grassland", "Wetland"], image: "/img/e3.png" },
  BR: { name: "Bihar", sanctuaries: 12, habitat: "Wetland", biogeographicZone: "Gangetic Plain", keySpecies: "Gangetic Dolphin · Wild Boar", notableSanctuary: "Valmiki Wildlife Sanctuary", tags: ["Forest", "Wetland"], image: "/img/v4.png" },
  CT: { name: "Chhattisgarh", sanctuaries: 11, habitat: "Forest", biogeographicZone: "Deccan Peninsula", keySpecies: "Wild Buffalo · Leopard", notableSanctuary: "Achanakmar Wildlife Sanctuary", tags: ["Forest", "Tribal"], image: "/img/v3.png" },
  GA: { name: "Goa", sanctuaries: 6, habitat: "Coastal", biogeographicZone: "Western Ghats", keySpecies: "Black Panther · Indian Bison", notableSanctuary: "Bhagwan Mahavir Sanctuary", tags: ["Forest", "Coastal"], image: "/img/cd9.png" },
  GJ: { name: "Gujarat", sanctuaries: 23, habitat: "Arid", biogeographicZone: "Desert", keySpecies: "Asiatic Lion · Wild Ass", notableSanctuary: "Gir Wildlife Sanctuary", tags: ["Grassland", "Desert"], image: "/img/e2.png" },
  HP: { name: "Himachal Pradesh", sanctuaries: 14, habitat: "Alpine", biogeographicZone: "Himalaya", keySpecies: "Snow Leopard · Himalayan Tahr", notableSanctuary: "Great Himalayan National Park", tags: ["Alpine", "Forest"], image: "/img/north4.png" },
  HR: { name: "Haryana", sanctuaries: 14, habitat: "Grassland", biogeographicZone: "Semi-Arid", keySpecies: "Blackbuck · Blue Bull", notableSanctuary: "Sultanpur National Park", tags: ["Wetland", "Grassland"], image: "/img/wetland3.png" },
  JH: { name: "Jharkhand", sanctuaries: 11, habitat: "Forest", biogeographicZone: "Deccan Peninsula", keySpecies: "Elephant · Sloth Bear", notableSanctuary: "Dalma Wildlife Sanctuary", tags: ["Forest", "Tribal"], image: "/img/v2.png" },
  JK: { name: "Jammu & Kashmir", sanctuaries: 14, habitat: "Alpine", biogeographicZone: "Himalaya", keySpecies: "Hangul · Markhor", notableSanctuary: "Dachigam National Park", tags: ["Alpine", "Forest"], image: "/img/north1.png" },
  KA: { name: "Karnataka", sanctuaries: 38, habitat: "Forest", biogeographicZone: "Western Ghats", keySpecies: "Tiger · Indian Elephant", notableSanctuary: "Bandipur Wildlife Sanctuary", tags: ["Forest", "Grassland"], image: "/img/e10.png" },
  KL: { name: "Kerala", sanctuaries: 14, habitat: "Tropical", biogeographicZone: "Western Ghats", keySpecies: "Nilgiri Tahr · Lion-tailed Macaque", notableSanctuary: "Periyar Wildlife Sanctuary", tags: ["Forest", "Wetland"], image: "/img/e8.png" },
  LA: { name: "Ladakh", sanctuaries: 2, habitat: "Alpine", biogeographicZone: "Trans-Himalaya", keySpecies: "Snow Leopard · Black-necked Crane", notableSanctuary: "Hemis National Park", tags: ["Alpine", "Desert"], image: "/img/north3.png" },
  LD: { name: "Lakshadweep", sanctuaries: 1, habitat: "Marine", biogeographicZone: "Islands", keySpecies: "Sea Turtle · Coral Reef Fish", notableSanctuary: "Pitti Bird Sanctuary", tags: ["Marine", "Coastal"], image: "/img/v7.png" },
  MH: { name: "Maharashtra", sanctuaries: 49, habitat: "Forest", biogeographicZone: "Deccan Peninsula", keySpecies: "Tiger · Indian Giant Squirrel", notableSanctuary: "Tadoba Wildlife Sanctuary", tags: ["Forest", "Grassland"], image: "/img/v1.png" },
  ML: { name: "Meghalaya", sanctuaries: 4, habitat: "Tropical", biogeographicZone: "North-East", keySpecies: "Clouded Leopard · Hoolock Gibbon", notableSanctuary: "Nongkhyllem Wildlife Sanctuary", tags: ["Forest", "Wetland"], image: "/img/e6.png" },
  MN: { name: "Manipur", sanctuaries: 7, habitat: "Forest", biogeographicZone: "North-East", keySpecies: "Sangai Deer · Hoolock Gibbon", notableSanctuary: "Keibul Lamjao National Park", tags: ["Wetland", "Forest"], image: "/img/cd2.png" },
  MP: { name: "Madhya Pradesh", sanctuaries: 26, habitat: "Forest", biogeographicZone: "Deccan Peninsula", keySpecies: "Tiger · Barasingha", notableSanctuary: "Kanha Wildlife Sanctuary", tags: ["Forest", "Grassland"], image: "/img/e1.png" },
  MZ: { name: "Mizoram", sanctuaries: 8, habitat: "Tropical", biogeographicZone: "North-East", keySpecies: "Hoolock Gibbon · Serow", notableSanctuary: "Dampa Tiger Reserve", tags: ["Forest", "Tribal"], image: "/img/cd10.png" },
  NL: { name: "Nagaland", sanctuaries: 4, habitat: "Forest", biogeographicZone: "North-East", keySpecies: "Tragopan · Hoolock Gibbon", notableSanctuary: "Intanki Wildlife Sanctuary", tags: ["Forest", "Tribal"], image: "/img/cd7.png" },
  OR: { name: "Odisha", sanctuaries: 19, habitat: "Coastal", biogeographicZone: "Deccan Peninsula", keySpecies: "Olive Ridley Turtle · Saltwater Crocodile", notableSanctuary: "Bhitarkanika Wildlife Sanctuary", tags: ["Coastal", "Wetland"], image: "/img/v6.png" },
  PB: { name: "Punjab", sanctuaries: 13, habitat: "Grassland", biogeographicZone: "Semi-Arid", keySpecies: "Blackbuck · Indian Peafowl", notableSanctuary: "Harike Wetland Sanctuary", tags: ["Wetland", "Grassland"], image: "/img/wetland1.png" },
  PY: { name: "Puducherry", sanctuaries: 1, habitat: "Coastal", biogeographicZone: "Coromandel", keySpecies: "Blackbuck · Spotted Deer", notableSanctuary: "Oussudu Lake Sanctuary", tags: ["Wetland", "Coastal"], image: "/img/cd6.png" },
  RJ: { name: "Rajasthan", sanctuaries: 25, habitat: "Arid", biogeographicZone: "Desert", keySpecies: "Tiger · Great Indian Bustard", notableSanctuary: "Ranthambore Wildlife Sanctuary", tags: ["Desert", "Forest"], image: "/img/cd1.png" },
  SK: { name: "Sikkim", sanctuaries: 7, habitat: "Alpine", biogeographicZone: "Himalaya", keySpecies: "Red Panda · Snow Leopard", notableSanctuary: "Khangchendzonga National Park", tags: ["Alpine", "Forest"], image: "/img/e7.png" },
  TG: { name: "Telangana", sanctuaries: 9, habitat: "Forest", biogeographicZone: "Deccan Peninsula", keySpecies: "Tiger · Sloth Bear", notableSanctuary: "Kawal Wildlife Sanctuary", tags: ["Forest", "Grassland"], image: "/img/v2.png" },
  TN: { name: "Tamil Nadu", sanctuaries: 33, habitat: "Tropical", biogeographicZone: "Western Ghats", keySpecies: "Nilgiri Tahr · Indian Elephant", notableSanctuary: "Mudumalai Wildlife Sanctuary", tags: ["Forest", "Coastal"], image: "/img/e8.png" },
  TR: { name: "Tripura", sanctuaries: 4, habitat: "Tropical", biogeographicZone: "North-East", keySpecies: "Bison · Capped Langur", notableSanctuary: "Sepahijala Wildlife Sanctuary", tags: ["Forest", "Wetland"], image: "/img/cd8.png" },
  UP: { name: "Uttar Pradesh", sanctuaries: 25, habitat: "Wetland", biogeographicZone: "Gangetic Plain", keySpecies: "Gangetic Dolphin · Swamp Deer", notableSanctuary: "Dudhwa National Park", tags: ["Grassland", "Wetland"], image: "/img/cd3.png" },
  UT: { name: "Uttarakhand", sanctuaries: 7, habitat: "Alpine", biogeographicZone: "Himalaya", keySpecies: "Snow Leopard · Musk Deer", notableSanctuary: "Jim Corbett National Park", tags: ["Alpine", "Forest"], image: "/img/north2.png" },
  WB: { name: "West Bengal", sanctuaries: 16, habitat: "Tropical", biogeographicZone: "Gangetic Delta", keySpecies: "Royal Bengal Tiger · Gangetic Dolphin", notableSanctuary: "Sundarbans Wildlife Sanctuary", tags: ["Mangrove", "Wetland"], image: "/img/e1.png" },
  AN: { name: "Andaman & Nicobar Islands", sanctuaries: 97, habitat: "Marine", biogeographicZone: "Islands", keySpecies: "Dugong · Saltwater Crocodile", notableSanctuary: "Mahatma Gandhi Marine Park", tags: ["Marine", "Coastal"], image: "/img/cd3.png" },
  CH: { name: "Chandigarh", sanctuaries: 2, habitat: "Urban", biogeographicZone: "Semi-Arid", keySpecies: "Sambar Deer · Indian Peafowl", notableSanctuary: "Sukhna Wildlife Sanctuary", tags: ["Urban", "Wetland"], image: "/img/wetland3.png" },
  DD: { name: "Daman & Diu", sanctuaries: 2, habitat: "Coastal", biogeographicZone: "Western Coast", keySpecies: "Flamingo · Jackal", notableSanctuary: "Fudam Bird Sanctuary", tags: ["Coastal", "Wetland"], image: "/img/cd5.png" },
  DN: { name: "Dadra & Nagar Haveli", sanctuaries: 1, habitat: "Forest", biogeographicZone: "Western Ghats", keySpecies: "Leopard · Flying Squirrel", notableSanctuary: "Dadra Nagar Haveli Sanctuary", tags: ["Forest"], image: "/img/v9.png" },
  DL: { name: "Delhi", sanctuaries: 1, habitat: "Urban", biogeographicZone: "Semi-Arid", keySpecies: "Nilgai · Indian Peafowl", notableSanctuary: "Asola Bhatti Wildlife Sanctuary", tags: ["Urban", "Scrubland"], image: "/img/v9.png" },
}

/**
 * Maps SVG path IDs (from @aryanjsx/indiamap) to our state codes.
 */
export const svgIdToStateCode = {
  "andhra-pradesh": "AP", "arunachal-pradesh": "AR", "assam": "AS",
  "bihar": "BR", "chhattisgarh": "CT", "goa": "GA", "gujarat": "GJ",
  "himachal-pradesh": "HP", "haryana": "HR", "jharkhand": "JH",
  "jammu-kashmir": "JK", "karnataka": "KA", "kerala": "KL",
  "ladakh": "LA", "lakshadweep": "LD", "maharashtra": "MH",
  "meghalaya": "ML", "manipur": "MN", "madhya-pradesh": "MP",
  "mizoram": "MZ", "nagaland": "NL", "odisha": "OR", "punjab": "PB",
  "puducherry": "PY", "rajasthan": "RJ", "sikkim": "SK",
  "telangana": "TG", "tamil-nadu": "TN", "tripura": "TR",
  "uttar-pradesh": "UP", "uttarakhand": "UT", "west-bengal": "WB",
  "andaman-nicobar": "AN", "chandigarh": "CH", "daman-diu": "DD",
  "dadra-nagar-haveli": "DN", "delhi": "DL",
}

/**
 * Map display labels for each state.
 * Full name if ≤15 chars, abbreviation if longer.
 */
export const stateMapLabel = {
  AP: 'Andhra Pr.',
  AR: 'Arunachal Pr.',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HP: 'Himachal Pr.',
  HR: 'Haryana',
  JH: 'Jharkhand',
  JK: 'J&K',
  KA: 'Karnataka',
  KL: 'Kerala',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  MH: 'Maharashtra',
  ML: 'Meghalaya',
  MN: 'Manipur',
  MP: 'Madhya Pr.',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  PY: 'Puducherry',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TG: 'Telangana',
  TN: 'Tamil Nadu',
  TR: 'Tripura',
  UP: 'Uttar Pr.',
  UT: 'Uttarakhand',
  WB: 'West Bengal',
  AN: 'A&N Islands',
  CH: 'Chandigarh',
  DD: 'Daman & Diu',
  DN: 'D&N Haveli',
  DL: 'Delhi',
}

/**
 * Region colors matching the Figma design
 */
export const regionColors = {
  North: '#5B9BD5',
  West: '#D4826A',
  Central: '#A89B8C',
  East: '#F5B942',
  South: '#8ED47C',
  Islands: '#5BC0BE',
  Northeast: '#3A8A8C',
}

/**
 * Maps each state code to its region
 */
export const stateToRegion = {
  JK: 'North', LA: 'North', HP: 'North', PB: 'North', HR: 'North',
  DL: 'North', UT: 'North', CH: 'North', UP: 'North', RJ: 'North',
  MP: 'Central', CT: 'Central',
  GJ: 'West', MH: 'West', GA: 'West', DD: 'West', DN: 'West',
  BR: 'East', JH: 'East', WB: 'East', OR: 'East',
  KA: 'South', KL: 'South', TN: 'South', AP: 'South', TG: 'South', PY: 'South',
  AS: 'Northeast', AR: 'Northeast', MN: 'Northeast', ML: 'Northeast',
  MZ: 'Northeast', NL: 'Northeast', SK: 'Northeast', TR: 'Northeast',
  AN: 'Islands', LD: 'Islands',
}

/**
 * Region legend data for the sidebar
 */
export const regionLegend = [
  { color: '#5B9BD5', label: 'North', count: 120 },
  { color: '#D4826A', label: 'West', count: 116 },
  { color: '#A89B8C', label: 'Central', count: 76 },
  { color: '#F5B942', label: 'East', count: 68 },
  { color: '#8ED47C', label: 'South', count: 145 },
  { color: '#5BC0BE', label: 'Islands', count: 89 },
  { color: '#3A8A8C', label: 'Northeast', count: 97 },
]
