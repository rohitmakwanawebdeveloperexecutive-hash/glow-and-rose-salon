export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Home Service" | "Services & Hygiene" | "Pricing & Booking";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Home Service",
    question: "How does the doorstep home salon service work?",
    answer:
      "Our certified female beautician arrives at your doorstep in Ahmedabad with a complete professional kit, sanitized tools, disposable sheets, towels, and single-use spatulas. You can enjoy full salon pampering from the comfort of your living room or bedroom.",
  },
  {
    id: "faq-2",
    category: "Home Service",
    question: "Is there any extra service charge for home salon visits?",
    answer:
      "No! Glow & Rose proudly provides doorstep beauty services across Ahmedabad with ZERO extra service charge. You only pay for the services you select.",
  },
  {
    id: "faq-3",
    category: "Services & Hygiene",
    question: "What hygiene protocols do you follow?",
    answer:
      "Hygiene is our highest priority. We use 100% single-use disposable bed sheets, spatulas, headbands, sterilized metal tools, and sealed pre-packaged products. Beauticians follow strict sanitization before and after every appointment.",
  },
  {
    id: "faq-4",
    category: "Services & Hygiene",
    question: "What is the difference between Honey Wax and Rica Wax?",
    answer:
      "Honey wax is a traditional sugar-based wax suitable for normal skin. Italian Rica Wax is a luxury colophony-free liposoluble wax that adheres only to hair rather than skin, making the hair removal process significantly less painful while gently removing dead skin and sun tan.",
  },
  {
    id: "faq-5",
    category: "Pricing & Booking",
    question: "How do I book an appointment?",
    answer:
      "You can easily book online through our website by filling out the booking form or clicking any 'Book on WhatsApp' / 'Chat on WhatsApp' button. Your appointment details will be formatted instantly into a WhatsApp message for swift confirmation.",
  },
  {
    id: "faq-6",
    category: "Pricing & Booking",
    question: "Which areas in Ahmedabad do you cover for home visits?",
    answer:
      "We cover all major residential and commercial areas in Ahmedabad including Bodakdev, Satellite, Sindhu Bhavan Road, Vastrapur, Prahlad Nagar, Thaltej, South Bopal, Ambawadi, Navrangpura, and surrounding localities.",
  },
  {
    id: "faq-7",
    category: "General",
    question: "Do you offer pre-bridal and wedding makeover packages?",
    answer:
      "Yes! We offer customized pre-bridal skin/hair preparation timelines (starting 1 to 3 months before your big day) as well as day-of bridal, sagan, and sangeet HD makeup artistry and draping.",
  },
];
