export const storeMeta = {
  name: "Retail Deal",
  fullName: "Retail Deal Mobile Electronics",
  location: "Bicholi Mardana, Indore, Madhya Pradesh",
  area: "Bicholi Mardana",
  city: "Indore",
  state: "Madhya Pradesh",
  phonePlaceholder: "Add verified business number",
  whatsappPlaceholder: "Add verified WhatsApp number",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Bicholi+Mardana+Indore+Madhya+Pradesh",
  defaultWhatsAppMessage: "Hi Retail Deal Mobile Electronics, I would like to enquire about a product."
};

export const popularProducts = [
  {
    id: 'prod-1',
    name: 'Smartphone',
    category: 'Mobiles',
    badge: 'DEAL',
    description: 'Crisp display, multi-lens camera module, and all-day battery performance.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-2',
    name: 'TWS Earbuds',
    category: 'Audio',
    badge: 'DEAL',
    description: 'Clear audio playback, low latency wireless connection, and portable charging pod.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-3',
    name: 'Smart Watch',
    category: 'Wearables',
    badge: 'DEAL',
    description: 'Touch display with activity tracking, alert notifications, and long battery life.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-4',
    name: 'Fast Charger',
    category: 'Accessories',
    badge: 'DEAL',
    description: 'Multi-protocol fast power adapter designed with surge and heat protection.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-5',
    name: 'Bluetooth Speaker',
    category: 'Audio',
    badge: 'DEAL',
    description: 'Portable wireless speaker with balanced bass and durable exterior.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-6',
    name: 'Mobile Cover',
    category: 'Accessories',
    badge: 'DEAL',
    description: 'Shockproof protective case with raised edge protection for screen and cameras.',
    priceLabel: 'Ask for Price',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=600&auto=format&fit=crop'
  }
];

export const storeServices = [
  {
    id: 'srv-1',
    title: 'Mobile Phones',
    icon: 'Smartphone',
    desc: 'Assistance in selecting reliable smartphones matching your budget and daily requirements.'
  },
  {
    id: 'srv-2',
    title: 'Accessories',
    icon: 'Layers',
    desc: 'Wide range of protective covers, screen guards, adapters, and data cables.'
  },
  {
    id: 'srv-3',
    title: 'Electronics',
    icon: 'Cpu',
    desc: 'Practical everyday personal electronics, power banks, and desk tech utilities.'
  },
  {
    id: 'srv-4',
    title: 'Smart Gadgets',
    icon: 'Watch',
    desc: 'Smart watches, wireless earbuds, and portable audio companions for daily use.'
  }
];

export const whyChoosePoints = [
  {
    title: 'Wide Product Selection',
    desc: 'Explore smartphones, genuine accessories, and smart devices in one organized place.',
    icon: 'Check'
  },
  {
    title: 'Easy Product Enquiry',
    desc: 'Message us directly on WhatsApp to check store stock, color options, and pricing.',
    icon: 'MessageSquare'
  },
  {
    title: 'Local Store Convenience',
    desc: 'Located right in Bicholi Mardana, making in-person product inspection quick and simple.',
    icon: 'MapPin'
  },
  {
    title: 'Helpful Assistance',
    desc: 'Get straightforward, friendly product guidance without unnecessary sales pressure.',
    icon: 'Users'
  }
];

export const sampleCustomerReviews = [
  {
    id: 1,
    review: "Convenient local store in Bicholi Mardana. Found the right charger and tempered glass quickly.",
    author: "Demo Customer",
    rating: 5
  },
  {
    id: 2,
    review: "Quick and helpful replies on WhatsApp when checking smartphone availability and accessories.",
    author: "Demo Customer",
    rating: 5
  },
  {
    id: 3,
    review: "Clean store setup with a good selection of mobile covers and daily electronics.",
    author: "Demo Customer",
    rating: 5
  }
];

export const generateWhatsAppLink = (productName = '') => {
  const text = productName
    ? `Hi, I want to enquire about ${productName} at Retail Deal Mobile Electronics.`
    : storeMeta.defaultWhatsAppMessage;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};
