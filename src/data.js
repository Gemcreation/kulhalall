// Mock data for KulHalal app

export const ingredients = [
  {
    id: 1,
    name: "Carmine E120",
    status: "Haram", // Red
    description: "A red pigment derived from cochineal insects, commonly used in food coloring.",
    reasoning: "Derived from insects, considered impure in Islamic dietary laws.",
    quranReference: "Al-Ma'idah 5:3 - Forbidden are dead animals, blood, and the flesh of swine."
  },
  {
    id: 2,
    name: "Lecithin E322",
    status: "Halal", // Green
    description: "An emulsifier derived from soybeans or eggs, used in chocolate and baked goods.",
    reasoning: "Can be sourced from halal-approved plants or animals.",
    quranReference: "Al-Baqarah 2:168 - Eat of what is lawful and good on the earth."
  },
  {
    id: 3,
    name: "Gelatin",
    status: "Doubtful", // Orange
    description: "A protein obtained by boiling skin, tendons, ligaments, and/or bones with water.",
    reasoning: "Often derived from non-halal sources like pigs; requires verification.",
    quranReference: "Al-An'am 6:145 - Say, 'I do not find within that which was revealed to me [anything] forbidden.'"
  },
  {
    id: 4,
    name: "Soy Lecithin",
    status: "Halal",
    description: "A natural emulsifier extracted from soybeans.",
    reasoning: "Plant-based and halal-certified.",
    quranReference: "Al-Baqarah 2:168"
  },
  {
    id: 5,
    name: "Organic Cocoa Butter",
    status: "Halal",
    description: "Fat extracted from cocoa beans, used in chocolate production.",
    reasoning: "Derived from plants, no animal products involved.",
    quranReference: "Al-Baqarah 2:168"
  }
];

export const products = [
  {
    id: 1,
    name: "Chocolate Bar",
    status: "Halal",
    ingredients: ["Soy Lecithin", "Organic Cocoa Butter"],
    image: "https://via.placeholder.com/300x200?text=Chocolate+Bar",
    timestamp: "2023-10-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Candy with Carmine",
    status: "Haram",
    ingredients: ["Carmine E120", "Sugar"],
    image: "https://via.placeholder.com/300x200?text=Candy",
    timestamp: "2023-10-02T14:30:00Z"
  },
  {
    id: 3,
    name: "Baked Goods",
    status: "Doubtful",
    ingredients: ["Gelatin", "Flour"],
    image: "https://via.placeholder.com/300x200?text=Baked+Goods",
    timestamp: "2023-10-03T09:15:00Z"
  }
];

export const features = [
  {
    title: "Scientific Precision",
    description: "Our AI analyzes ingredients with laboratory-grade accuracy, ensuring reliable halal verification.",
    icon: "🔬"
  },
  {
    title: "Global Reach",
    description: "Access halal information from over 190 countries, covering millions of products.",
    icon: "🌍"
  },
  {
    title: "Community Driven",
    description: "Powered by a global community of scholars and experts contributing to our knowledge base.",
    icon: "👥"
  }
];

export const processSteps = [
  {
    title: "Scan",
    description: "Upload or capture a photo of the product label.",
    icon: "📱"
  },
  {
    title: "Analyze",
    description: "AI extracts and analyzes ingredients in seconds.",
    icon: "🤖"
  },
  {
    title: "Verify",
    description: "Receive instant halal status with detailed reasoning.",
    icon: "✅"
  }
];