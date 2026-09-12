export interface GalleryItem {
  id: string;
  title: string;
  category: "Salon" | "Beauty Services" | "Facial" | "Waxing" | "Hair" | "Makeover";
  image: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Signature 24K Gold Glow Treatment",
    category: "Facial",
    image: "/images/services/facial.jpg",
    alt: "Luxury gold radiance facial treatment at Glow & Rose Salon Ahmedabad",
  },
  {
    id: "gal-2",
    title: "Royal Bridal HD Makeover",
    category: "Makeover",
    image: "/images/services/makeover.jpg",
    alt: "Indian bridal makeup with gold jewelry and burgundy silk",
  },
  {
    id: "gal-3",
    title: "Boutique Salon Lounge & Styling Mirrors",
    category: "Salon",
    image: "/images/about-salon.jpg",
    alt: "Luxury dark burgundy and gold interior of Glow & Rose Salon in Ahmedabad",
  },
  {
    id: "gal-4",
    title: "Rose Petal Manicure & Nail Polish",
    category: "Beauty Services",
    image: "/images/services/manicure.jpg",
    alt: "Nourishing luxury manicure and nail care with rose essence",
  },
  {
    id: "gal-5",
    title: "L'Oréal Nutritive Hair Spa & Aroma Steam",
    category: "Hair",
    image: "/images/services/hair-spa.jpg",
    alt: "Deep conditioning hair spa treatment in Ahmedabad",
  },
  {
    id: "gal-6",
    title: "Radiant Golden Glow Aesthetic",
    category: "Beauty Services",
    image: "/images/hero-beauty.jpg",
    alt: "Glowing radiant skin after boutique facial pampering",
  },
  {
    id: "gal-7",
    title: "Doorstep Home Beauty Care Experience",
    category: "Beauty Services",
    image: "/images/home-service.jpg",
    alt: "Personalized home salon service consultation in Ahmedabad",
  },
  {
    id: "gal-8",
    title: "Editorial Bridal Elegance",
    category: "Makeover",
    image: "/images/services/makeover.jpg",
    alt: "Exquisite bridal makeover by certified makeup artist in Ahmedabad",
  },
];
