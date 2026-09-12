export interface PricingItem {
  name: string;
  honeyPrice?: number | string;
  ricaPrice?: number | string;
  brazilianPrice?: number | string;
  price?: number;
  duration?: string;
  note?: string;
  popular?: boolean;
}

export interface PricingCategoryGroup {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  isWaxComparison?: boolean;
  items: PricingItem[];
}

export const pricingGroups: PricingCategoryGroup[] = [
  {
    id: "waxing-table",
    title: "Waxing Services",
    subtitle: "Compare Classic Honey Wax, Italian Rica Wax, and Gentle Brazilian formulations",
    badge: "Official Rates",
    isWaxComparison: true,
    items: [
      {
        name: "Underarms",
        honeyPrice: 80,
        ricaPrice: 100,
        brazilianPrice: 150,
        popular: true,
      },
      {
        name: "Half Hand",
        honeyPrice: 200,
        ricaPrice: 300,
      },
      {
        name: "Half Leg",
        honeyPrice: 250,
        ricaPrice: 350,
      },
      {
        name: "Full Leg + Full Hand + Underarm Package",
        honeyPrice: 750,
        ricaPrice: 1100,
        popular: true,
        note: "Best-selling full waxing combination",
      },
      {
        name: "Stomach Wax",
        honeyPrice: 150,
        ricaPrice: 200,
        brazilianPrice: 250,
      },
      {
        name: "Back Wax",
        honeyPrice: 550,
        ricaPrice: 750,
      },
      {
        name: "Full Face Wax",
        honeyPrice: 250,
        ricaPrice: 350,
      },
      {
        name: "Upper Lip Wax (Brazilian)",
        brazilianPrice: 50,
        note: "Gentle peel-off wax",
      },
      {
        name: "Chin Wax (Brazilian)",
        brazilianPrice: 50,
      },
      {
        name: "Forehead Wax (Brazilian)",
        brazilianPrice: 50,
      },
      {
        name: "Side Locks Wax",
        ricaPrice: 150,
        brazilianPrice: 150,
      },
      {
        name: "Bikini Wax",
        honeyPrice: 750,
        ricaPrice: 950,
        brazilianPrice: 1450,
        popular: true,
        note: "100% disposable & private hygiene care",
      },
    ],
  },
  {
    id: "threading-table",
    title: "Threading & Facial Shaping",
    subtitle: "Precision shaping with anti-bacterial thread",
    items: [
      {
        name: "Forehead + Upper Lip (Eyebrow FREE)",
        price: 50,
        duration: "15 min",
        popular: true,
        note: "Special offer: Eyebrow threading included free!",
      },
      { name: "Chin Threading", price: 20, duration: "5 min" },
      { name: "Side Locks Threading", price: 80, duration: "10 min" },
      {
        name: "Full Face Threading",
        price: 230,
        duration: "25 min",
        popular: true,
        note: "Complete facial grooming & cooling toner mist",
      },
    ],
  },
  {
    id: "dtan-cleanup-table",
    title: "Cleanup, D-Tan & Body Polishing",
    subtitle: "Pore purification, steam, and sun tan removal",
    badge: "De-Tan Care",
    items: [
      { name: "Regular Clean Up", price: 650, duration: "35 min" },
      { name: "Regular Clean Up with D-Tan", price: 950, duration: "45 min", popular: true },
      { name: "Face D-Tan", price: 450, duration: "25 min" },
      { name: "Face D-Tan with Steam", price: 550, duration: "30 min" },
      { name: "Face & Neck D-Tan", price: 750, duration: "35 min", popular: true },
      { name: "Half Hand D-Tan", price: 450, duration: "20 min" },
      { name: "Full Hand D-Tan", price: 850, duration: "30 min" },
      { name: "Half Leg D-Tan", price: 450, duration: "25 min" },
      { name: "Full Leg D-Tan", price: 850, duration: "35 min" },
      { name: "Full Front & Back D-Tan", price: 950, duration: "40 min" },
      { name: "Full Body D-Tan", price: 2459, duration: "90 min", popular: true, note: "Head-to-toe sun tan lifting" },
      { name: "Full Body Polishing", price: 2949, duration: "105 min", popular: true, note: "Complete body scrub, pack & radiance massage" },
    ],
  },
  {
    id: "facials-table",
    title: "Facials & Skin Radiance",
    subtitle: "Customized dermatological and herbal glow therapies",
    badge: "Glowing Skin",
    items: [
      { name: "Regular Facial", price: 800, duration: "45 min" },
      { name: "Regular Facial with Steam", price: 1000, duration: "55 min", popular: true },
      { name: "Nourishing Facial", price: 1400, duration: "60 min", popular: true, note: "Intense moisture & vitamin infusion" },
      { name: "Whitening Facial", price: 1700, duration: "70 min", popular: true, note: "Active brightening & dark spot correction" },
      { name: "Skin Lightening Facial", price: 1900, duration: "75 min", popular: true, note: "Signature photo-ready bridal radiance" },
    ],
  },
  {
    id: "hair-spa-table",
    title: "Hair Spa & Hair Care",
    subtitle: "Intense nourishment for soft, shiny, and frizz-free hair",
    items: [
      { name: "Hair Oil Head Massage", price: 300, duration: "25 min", popular: true, note: "Warm herbal oil acupressure" },
      { name: "Matrix Hair Spa", price: 950, duration: "45 min", note: "Deep conditioning cream bath" },
      { name: "L'Oréal Professional Hair Spa", price: 1450, duration: "55 min", popular: true, note: "Nutritive cream with aroma steam & serum" },
    ],
  },
  {
    id: "hands-feet-table",
    title: "Manicure, Pedicure & Body Spa",
    subtitle: "Hand and foot care with botanical scrubs, steam & massage",
    items: [
      { name: "Regular Manicure", price: 550, duration: "30 min" },
      { name: "Regular Manicure with D-Tan & Steam", price: 1100, duration: "45 min" },
      { name: "Nourishing Manicure with Massage", price: 1200, duration: "50 min", popular: true },
      { name: "Regular Pedicure", price: 650, duration: "40 min" },
      { name: "Regular Pedicure with D-Tan & Steam", price: 1300, duration: "55 min" },
      { name: "Nourishing Pedicure with Massage", price: 1200, duration: "55 min", popular: true },
      { name: "Regular Manicure & Pedicure Duo", price: 1200, duration: "70 min", popular: true, note: "Complete hand & foot combo" },
      { name: "Back Relaxation Massage", price: 500, duration: "30 min", popular: true },
      { name: "Full Body Massage (Females Only)", price: 3000, duration: "60 min", popular: true, note: "Full body Swedish therapy with warm aroma oils" },
    ],
  },
];

export const pamperCombos = [
  {
    id: "full-wax-package-rica",
    name: "Full Body Smooth Silk Package (Rica)",
    originalPrice: 1400,
    comboPrice: 1100,
    savings: 300,
    popular: true,
    items: [
      "Full Leg Rica Wax",
      "Full Hand Rica Wax",
      "Underarm Rica Wax",
      "Soothing Post-Wax Lotion",
    ],
  },
  {
    id: "glow-dtan-combo",
    name: "Radiant Clean & De-Tan Combo",
    originalPrice: 1750,
    comboPrice: 1450,
    savings: 300,
    popular: true,
    items: [
      "Regular Clean Up with D-Tan",
      "Face & Neck D-Tan with Steam",
      "Forehead + Upper Lip (Eyebrow Free)",
      "Hair Oil Head Massage (15 min)",
    ],
  },
  {
    id: "royal-pamper-duo",
    name: "Complete Mani-Pedi & Hair Spa Ritual",
    originalPrice: 2650,
    comboPrice: 2150,
    savings: 500,
    popular: false,
    items: [
      "Regular Manicure & Pedicure Duo",
      "Matrix Hair Spa with Aroma Steam",
      "Nourishing Head Massage",
    ],
  },
];
