export interface ProjectLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  type: "residential" | "commercial" | "industrial";
  systemSize: string;
  savingsPerMonth: string;
  completionDate: string;
  description: string;
  image: string;
  gallery: string[];
  lat: number;
  lng: number;
}

export const PROJECT_LOCATIONS: ProjectLocation[] = [
  {
    id: "proj-001",
    name: "Lekki Luxury Home",
    city: "Lagos",
    state: "Lagos",
    address: "Lekki Phase 1, Lagos",
    type: "residential",
    systemSize: "5KVA System",
    savingsPerMonth: "₦150,000+",
    completionDate: "March 2024",
    description:
      "A premium residential installation in one of Lagos' most exclusive neighborhoods. This 5KVA system powers a luxury home with complete energy independence.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 6.4294,
    lng: 3.5732,
  },
  {
    id: "proj-002",
    name: "Victoria Island Office Complex",
    city: "Lagos",
    state: "Lagos",
    address: "Victoria Island, Lagos",
    type: "commercial",
    systemSize: "10KVA System",
    savingsPerMonth: "₦350,000+",
    completionDate: "February 2024",
    description:
      "Commercial office installation serving a 5-story office complex with dedicated solar setup, ensuring uninterrupted business operations.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 6.426,
    lng: 3.5235,
  },
  {
    id: "proj-003",
    name: "Ikoyi Residential Estate",
    city: "Lagos",
    state: "Lagos",
    address: "Ikoyi, Lagos",
    type: "residential",
    systemSize: "3.5KVA System",
    savingsPerMonth: "₦120,000+",
    completionDate: "January 2024",
    description:
      "Beautiful residential solar installation in Ikoyi serving a modern apartment complex with multiple units and shared power management.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 6.4623,
    lng: 3.5841,
  },
  {
    id: "proj-004",
    name: "Abuja Business Hub",
    city: "Abuja",
    state: "FCT",
    address: "Central Business District, Abuja",
    type: "commercial",
    systemSize: "8KVA System",
    savingsPerMonth: "₦280,000+",
    completionDate: "December 2023",
    description:
      "Large-scale commercial solar setup in Abuja's CBD powering a busy business hub with high energy demands and excellent ROI.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 9.0765,
    lng: 7.3986,
  },
  {
    id: "proj-005",
    name: "Port Harcourt Factory",
    city: "Port Harcourt",
    state: "Rivers",
    address: "Rumueme, Port Harcourt",
    type: "industrial",
    systemSize: "15KVA System",
    savingsPerMonth: "₦500,000+",
    completionDate: "November 2023",
    description:
      "Large industrial installation powering manufacturing operations with 24/7 reliability and significant operational cost reduction.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 4.8467,
    lng: 7.0379,
  },
  {
    id: "proj-006",
    name: "Kano Mall Installation",
    city: "Kano",
    state: "Kano",
    address: "Kano Central, Kano",
    type: "commercial",
    systemSize: "12KVA System",
    savingsPerMonth: "₦380,000+",
    completionDate: "October 2023",
    description:
      "Modern mall installation providing reliable backup power to shops and commercial establishments with intelligent load management.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 12.0022,
    lng: 8.6753,
  },
  {
    id: "proj-007",
    name: "Ibadan University Campus",
    city: "Ibadan",
    state: "Oyo",
    address: "University of Ibadan, Oyo",
    type: "commercial",
    systemSize: "20KVA System",
    savingsPerMonth: "₦600,000+",
    completionDate: "September 2023",
    description:
      "Educational institution solar setup providing reliable power to multiple buildings on campus, reducing operational costs significantly.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 7.3869,
    lng: 3.9042,
  },
  {
    id: "proj-008",
    name: "Enugu Hospital Complex",
    city: "Enugu",
    state: "Enugu",
    address: "Enugu Town, Enugu",
    type: "commercial",
    systemSize: "25KVA System",
    savingsPerMonth: "₦700,000+",
    completionDate: "August 2023",
    description:
      "Critical healthcare facility installation ensuring continuous power for medical operations with redundant backup systems.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 6.44404,
    lng: 7.50834,
  },
  {
    id: "proj-009",
    name: "Calabar Beachfront Resort",
    city: "Calabar",
    state: "Cross River",
    address: "Calabar Waterfront, Cross River",
    type: "commercial",
    systemSize: "7KVA System",
    savingsPerMonth: "₦200,000+",
    completionDate: "July 2023",
    description:
      "Resort hospitality installation providing reliable power for guest accommodation and facilities with eco-friendly operations.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 4.9521,
    lng: 8.3381,
  },
  {
    id: "proj-010",
    name: "Jos Residential Community",
    city: "Jos",
    state: "Plateau",
    address: "Jos North, Plateau",
    type: "residential",
    systemSize: "4KVA System",
    savingsPerMonth: "₦140,000+",
    completionDate: "June 2023",
    description:
      "Residential community project providing sustainable energy solutions to multiple households in a developing neighborhood.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 9.9241,
    lng: 8.8901,
  },
  {
    id: "proj-011",
    name: "Akure Commercial Plaza",
    city: "Akure",
    state: "Ondo",
    address: "Akure Central, Ondo",
    type: "commercial",
    systemSize: "6KVA System",
    savingsPerMonth: "₦180,000+",
    completionDate: "May 2023",
    description:
      "Multi-tenant commercial building installation with individual metering and transparent energy consumption tracking.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 7.257,
    lng: 5.1948,
  },
  {
    id: "proj-012",
    name: "Lagos Island Smart Home",
    city: "Lagos",
    state: "Lagos",
    address: "Lagos Island, Lagos",
    type: "residential",
    systemSize: "6KVA System",
    savingsPerMonth: "₦180,000+",
    completionDate: "April 2023",
    description:
      "Ultra-modern smart home with integrated solar system, battery management, and IoT monitoring capabilities.",
    image: "/hero/hero-img.jpg",
    gallery: ["/hero/hero-img.jpg", "/hero/hero-img.jpg", "/hero/hero-img.jpg"],
    lat: 6.4344,
    lng: 3.3842,
  },
];

export const getProjectsByCity = (city: string) => {
  return PROJECT_LOCATIONS.filter((p) => p.city === city);
};

export const getProjectsByType = (type: string) => {
  return PROJECT_LOCATIONS.filter((p) => p.type === type);
};

export const getCitiesList = () => {
  const cities = [...new Set(PROJECT_LOCATIONS.map((p) => p.city))];
  return cities.sort();
};
