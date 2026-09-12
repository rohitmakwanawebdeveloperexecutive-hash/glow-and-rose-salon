export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  ownerName: string;
  ownerRole: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
  };
  openingHours: {
    days: string;
    hours: string;
    homeServiceHours: string;
  }[];
  socials: {
    instagram: string;
    instagramHandle: string;
    googleMaps: string;
    whatsappDirect: string;
  };
  homeService: {
    available: boolean;
    freeServiceCharge: boolean;
    serviceNote: string;
    coverageAreas: string[];
  };
  priceRange: string;
  siteUrl: string;
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
}

export const businessConfig: BusinessConfig = {
  name: "Glow & Rose Salon & Makeover",
  shortName: "Glow & Rose",
  tagline: "Where Beauty Meets Elegance",
  description:
    "Glow & Rose Salon & Makeover in Ahmedabad offers luxury salon and professional doorstep beauty services led by Geeta Makwana. Specializing in waxing, facials, hair spa, bridal makeovers, cleanup, and personalized pampering with zero extra home service charge.",
  ownerName: "Geeta Makwana",
  ownerRole: "Founder & Senior Beauty Specialist",
  phone: "+916357082026",
  phoneDisplay: "+91 63570 82026",
  whatsapp: "916357082026",
  whatsappDisplay: "+91 63570 82026",
  email: "care@glowandrosesalon.com",
  address: {
    street: "Shop 4, Rosewood Elegance, Near Sindhu Bhavan Road",
    area: "Bodakdev",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380054",
    country: "India",
    fullAddress:
      "Shop 4, Rosewood Elegance, Near Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat 380054, India",
  },
  openingHours: [
    {
      days: "Monday – Saturday",
      hours: "10:00 AM – 08:30 PM",
      homeServiceHours: "09:00 AM – 08:00 PM",
    },
    {
      days: "Sunday",
      hours: "10:30 AM – 07:00 PM",
      homeServiceHours: "09:30 AM – 06:30 PM",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/glow_rose_parlour?stkn=MW1neGJ3bmszMjd0Yg==",
    instagramHandle: "@glow_rose_parlour",
    googleMaps: "https://maps.google.com/?q=Glow+and+Rose+Salon+Ahmedabad",
    whatsappDirect: "https://wa.me/916357082026",
  },
  homeService: {
    available: true,
    freeServiceCharge: true,
    serviceNote:
      "Enjoy premium salon services from the comfort of your home across Ahmedabad with no extra service charge.",
    coverageAreas: [
      "Bodakdev",
      "Satellite",
      "Prahlad Nagar",
      "Vastrapur",
      "Thaltej",
      "Sindhu Bhavan Road",
      "South Bopal",
      "Ambawadi",
      "Navrangpura",
      "Gota",
    ],
  },
  priceRange: "₹₹ (Affordable Luxury)",
  siteUrl: "https://glowandrosesalon.com",
  seo: {
    defaultTitle: "Glow & Rose Salon & Makeover | Luxury Beauty Salon & Home Service in Ahmedabad",
    titleTemplate: "%s | Glow & Rose Salon & Makeover",
    defaultDescription:
      "Premier luxury beauty salon in Ahmedabad founded by Geeta Makwana offering expert waxing, facials, bridal makeovers, hair spa, and doorstep home salon services with no extra service charge.",
    keywords: [
      "Beauty salon in Ahmedabad",
      "Beauty parlour in Ahmedabad",
      "Geeta Makwana salon Ahmedabad",
      "Salon services in Ahmedabad",
      "Waxing services in Ahmedabad",
      "Facial services in Ahmedabad",
      "Home salon service in Ahmedabad",
      "Doorstep salon Ahmedabad",
      "Bridal makeover Ahmedabad",
      "Rica wax Ahmedabad",
      "Best beauty parlour Ahmedabad",
    ],
  },
};
