export const PRODUCTS = [
  // SOLAR PACKAGES
  {
    id: "pkg-starter",
    name: "Starter Pack",
    category: "solar-package",
    type: "low",
    price: 300000,
    image: "/product/smart.c___",
    description: "Basic solar solution for students and minimal users",
    fullDescription:
      "Perfect for students and light users. Get reliable power for your essential devices with the Starter Pack. Ideal for powering lights, phones, and laptops.",
    components: [
      "300W Inverter",
      "220Wh Lithium Battery",
      "100W Mono Solar Panel",
      "Charge Controller",
      "Installation Kit",
    ],
    specifications: {
      inverterCapacity: "300W",
      batteryCapacity: "220Wh",
      solarPanel: "100W Mono",
      backupTime: "6-8 hours (light use)",
      warranty: "5 years",
    },
    features: ["3 LED Bulbs", "Phones", "Laptop", "Small Fan"],
    whatsappMessage:
      "Hi! I'm interested in the *Starter Pack* (₦300,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-student",
    name: "Standard Student Pack",
    category: "solar-package",
    type: "low",
    price: 500000,
    image: "/product/shop.jpg",
    description: "Improved capacity for students with more devices",
    fullDescription:
      "Upgraded student pack with better capacity. Power multiple devices simultaneously including TV, laptop, and more.",
    components: [
      "500W Inverter",
      "400Wh Lithium Battery",
      "150W Mono Solar Panel",
    ],
    specifications: {
      inverterCapacity: "500W",
      batteryCapacity: "400Wh",
      solarPanel: "150W Mono",
      backupTime: "5-7 hours",
      warranty: "5 years",
    },
    features: ["5 LED Bulbs", "Laptop", "Phones", "WiFi Router", '24" TV'],
    whatsappMessage:
      "Hi! I'm interested in the *Standard Student Pack* (₦500,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-comfort",
    name: "Self-Con Comfort Pack",
    category: "solar-package",
    type: "low",
    price: 700000,
    image: "/product/shop.jpg",
    description: "Perfect for single-room apartments",
    fullDescription:
      "Designed specifically for self-contained apartments. Enjoy entertainment and comfort without worrying about power cuts.",
    components: [
      "1000W (1KVA) Inverter",
      "550Wh Lithium Battery",
      "180W Mono Solar Panel",
    ],
    specifications: {
      inverterCapacity: "1000W",
      batteryCapacity: "550Wh",
      solarPanel: "180W Mono",
      backupTime: "4-6 hours",
      warranty: "5 years",
    },
    features: [
      "6 LED Bulbs",
      '32" TV',
      "Decoder",
      "Laptop",
      "Phones",
      "DC Fan",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Self-Con Comfort Pack* (₦700,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-home-basic",
    name: "Home Basic Pack",
    category: "solar-package",
    type: "mid",
    price: 1200000,
    image: "/hero/hero-img.jpg",
    description: "Entry-level home solution",
    fullDescription:
      "Great entry point for homes. Power essential appliances and entertainment systems reliably.",
    components: [
      "1.5KVA Inverter",
      "1.2kWh Lithium Battery",
      "2 x 250W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "1.5KVA",
      batteryCapacity: "1.2kWh",
      solarPanel: "2 x 250W",
      backupTime: "6-8 hours",
      warranty: "5 years",
    },
    features: ["8 LED Bulbs", '43" TV', "Decoder", "Fan", "Laptop", "Phones"],
    whatsappMessage:
      "Hi! I'm interested in the *Home Basic Pack* (₦1,200,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-home-plus",
    name: "Home Plus Pack",
    category: "solar-package",
    type: "mid",
    price: 2200000,
    image: "/product/premium-home.jpg",
    description: "Balanced power for comfort living",
    fullDescription:
      "Balanced capacity for comfortable home living. Includes refrigeration and entertainment systems.",
    components: [
      "2.5KVA Inverter",
      "2.5kWh Lithium Battery",
      "4 x 300W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "2.5KVA",
      batteryCapacity: "2.5kWh",
      solarPanel: "4 x 300W",
      backupTime: "6-10 hours",
      warranty: "5 years",
    },
    features: [
      "10 LED Bulbs",
      "TV",
      "Sound System",
      "Small Fridge",
      "Fans",
      "Laptop",
      "Phones",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Home Plus Pack* (₦2,200,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-smart-home",
    name: "Smart Home Pack",
    category: "solar-package",
    type: "premium",
    price: 4200000,
    image: "/product/utimate.jpg",
    description: "Advanced home solar solution",
    fullDescription:
      "Premium home solution with advanced technology. Power your entire home with confidence.",
    components: [
      "3.5KVA Inverter",
      "5kWh Lithium Battery",
      "6 x 400W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "3.5KVA",
      batteryCapacity: "5kWh",
      solarPanel: "6 x 400W",
      backupTime: "8-12 hours",
      warranty: "5 years",
    },
    features: [
      "Full house lighting",
      "TVs",
      "Refrigerator",
      "Fans",
      "Washing Machine",
      "Laptops",
      "Phones",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Smart Home Pack* (₦4,200,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-ultimate",
    name: "Ultimate Power Pack",
    category: "solar-package",
    type: "premium",
    price: 7500000,
    image: "/product/home-setup.jpg",
    description: "High-end full home power solution",
    fullDescription:
      "Top-tier home solar solution. Experience almost 24/7 power with maximum capacity.",
    components: [
      "5KVA Inverter",
      "10kWh Lithium Battery",
      "10 x 450W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "5KVA",
      batteryCapacity: "10kWh",
      solarPanel: "10 x 450W",
      backupTime: "10-18 hours",
      warranty: "5 years",
    },
    features: [
      "Entire home",
      "Multiple TVs",
      "Large Fridge",
      "AC (limited)",
      "Microwave",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Ultimate Power Pack* (₦7,500,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-shop",
    name: "Shop Basic Pack",
    category: "solar-package",
    type: "commercial",
    price: 1500000,
    image: "/product/shop.jpg",
    description: "Ideal for small shops and kiosks",
    fullDescription:
      "Perfect for small retail businesses. Keep your shop running 24/7 with reliable power.",
    components: [
      "2KVA Inverter",
      "2kWh Lithium Battery",
      "3 x 300W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "2KVA",
      batteryCapacity: "2kWh",
      solarPanel: "3 x 300W",
      backupTime: "6-9 hours",
      warranty: "5 years",
    },
    features: ["Lights", "POS Machine", "Laptop", "Fan", "Small Freezer"],
    whatsappMessage:
      "Hi! I'm interested in the *Shop Basic Pack* (₦1,500,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-salon",
    name: "Salon Power Pack",
    category: "solar-package",
    type: "commercial",
    price: 2800000,
    image: "/product/shop.jpg",
    description: "Designed for salons and barbing shops",
    fullDescription:
      "Specialized for salons and barbing shops. Power clippers, dryers, and lighting continuously.",
    components: [
      "3KVA Inverter",
      "4kWh Lithium Battery",
      "5 x 400W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "3KVA",
      batteryCapacity: "4kWh",
      solarPanel: "5 x 400W",
      backupTime: "6-10 hours",
      warranty: "5 years",
    },
    features: [
      "Clippers",
      "Hair Dryers",
      "Lights",
      "Fans",
      "TV",
      "Sound System",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Salon Power Pack* (₦2,800,000). Can you provide more details and a quote?",
  },
  {
    id: "pkg-business",
    name: "Business Pro Pack",
    category: "solar-package",
    type: "commercial",
    price: 5500000,
    image:
      "/product/bussiness.com_how-to-use-solar-panel-kits-with-battery-and-inverter-simple-___",
    description: "For heavy commercial usage",
    fullDescription:
      "Heavy-duty commercial solution. Ideal for offices, restaurants, and large retail spaces.",
    components: [
      "5KVA Inverter",
      "8kWh Lithium Battery",
      "8 x 450W Solar Panels",
    ],
    specifications: {
      inverterCapacity: "5KVA",
      batteryCapacity: "8kWh",
      solarPanel: "8 x 450W",
      backupTime: "8-14 hours",
      warranty: "5 years",
    },
    features: [
      "Multiple workstations",
      "Refrigeration",
      "Lighting",
      "Fans",
      "Equipment",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Business Pro Pack* (₦5,500,000). Can you provide more details and a quote?",
  },

  // ADDITIONAL PRODUCTS
  {
    id: "prod-solar-panel",
    name: "Single Solar Panel 450W",
    category: "upgrade",
    price: 250000,
    image: "/product/panel.jpg",
    description: "Upgrade your setup with high-efficiency solar panels",
    fullDescription:
      "Looking to expand your solar system? Our 450W Mono Solar Panels are perfect for upgrading existing setups or building your custom solution.",
    specifications: {
      wattage: "450W",
      type: "Monocrystalline",
      efficiency: "21.5%",
      dimensions: "2.27 x 1.13 x 0.04m",
      weight: "21kg",
      warranty: "12 years",
    },
    features: [
      "High efficiency",
      "Lightweight",
      "Durable",
      "Weather resistant",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Single Solar Panel 450W* (₦250,000). Can you provide more details?",
  },
  {
    id: "prod-powerstation",
    name: "Portable Power Station 3.6kWh",
    category: "portable",
    price: 900000,
    image: "/product/power.jpg",
    description: "Mobile power for anywhere you go",
    fullDescription:
      "High-capacity portable power station perfect for camping, events, or as backup power. Lightweight yet powerful.",
    specifications: {
      capacity: "3.6kWh",
      peakPower: "6000W",
      batteryType: "LiFePO4",
      ports: "4x AC, 2x USB-C, 2x USB-A, 1x DC",
      weight: "38kg",
      warranty: "3 years",
    },
    features: [
      "Portable",
      "Wireless charging",
      "Multiple outputs",
      "Solar compatible",
      "Fast charging",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Portable Power Station 3.6kWh* (₦900,000). Can you provide more details?",
  },
  {
    id: "prod-streetlight",
    name: "Solar Street Light 200W",
    category: "commercial",
    price: 180000,
    image: "/product/street.jpg",
    description: "Illuminate streets and compounds with solar power",
    fullDescription:
      "Energy-efficient solar street lights. Perfect for streets, compounds, and outdoor areas. Automatic day/night operation.",
    specifications: {
      wattage: "200W LED",
      solarPanel: "150W",
      batteryCapacity: "100Ah LiFePO4",
      brightness: "20000 lumens",
      runtime: "12-15 hours",
      warranty: "3 years",
    },
    features: [
      "Motion sensor",
      "Dimmable",
      "Weather resistant",
      "Long lifespan",
      "Silent operation",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Solar Street Light 200W* (₦180,000). Can you provide more details?",
  },
  {
    id: "prod-cctv",
    name: "Complete Solar CCTV System",
    category: "security",
    price: 450000,
    image: "/product/cctv.jpg",
    description: "Solar-powered security system for your property",
    fullDescription:
      "Complete 4-camera solar-powered CCTV system. Monitor your property 24/7 without power concerns.",
    specifications: {
      cameras: "4x 2MP HD",
      storage: "1TB SSD",
      resolution: "1080p",
      nightVision: "Yes",
      connectivity: "WiFi + Ethernet",
      warranty: "2 years",
    },
    features: [
      "Complete system",
      "Cloud backup",
      "Mobile app",
      "Night vision",
      "Motion alerts",
    ],
    whatsappMessage:
      "Hi! I'm interested in the *Complete Solar CCTV System* (₦450,000). Can you provide more details?",
  },
];

export const getProductById = (id: string) => {
  return PRODUCTS.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string) => {
  return PRODUCTS.filter((p) => p.category === category);
};
