export interface Review {
  id: string;
  author: string;
  initial: string;
  rating: number;
  date: string;
  location: string;
  service: string;
  comment: string;
  serviceType: "Salon Visit" | "Home Service";
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    author: "Pooja Patel",
    initial: "P",
    rating: 5,
    date: "2 weeks ago",
    location: "Bodakdev, Ahmedabad",
    service: "24K Gold Radiance Facial & Rica Waxing",
    serviceType: "Salon Visit",
    comment:
      "The salon atmosphere is so luxurious and relaxing! The gold facial left my skin glowing for days, and the Rica wax was virtually painless. The beautician was extremely gentle and hygienic. Glow & Rose is hands down the best beauty salon in Bodakdev.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Ananya Shah",
    initial: "A",
    rating: 5,
    date: "1 month ago",
    location: "Satellite, Ahmedabad",
    service: "Home Salon Service - Full Body Wax & Cleanup",
    serviceType: "Home Service",
    comment:
      "I booked their home service for the first time and was blown away! The beautician arrived right on time with disposable sheets, sealed tools, and gave such a professional service without any extra home service charge. Highly recommended for busy women!",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Meera Joshi",
    initial: "M",
    rating: 5,
    date: "3 weeks ago",
    location: "Sindhu Bhavan Road, Ahmedabad",
    service: "Party Glam Makeover & Hair Styling",
    serviceType: "Salon Visit",
    comment:
      "Booked Glow & Rose for my cousin's sangeet and received endless compliments on my makeup and hairdo. The makeup stayed intact for 8+ hours without oxidizing or creasing. So grateful to have found this gem.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Dhwani Mehta",
    initial: "D",
    rating: 5,
    date: "2 months ago",
    location: "Prahlad Nagar, Ahmedabad",
    service: "L'Oréal Mythic Hair Spa & Manicure",
    serviceType: "Salon Visit",
    comment:
      "The scalp massage during the hair spa melted all my weekly work stress away. My hair feels feather-soft. The dark burgundy and gold salon aesthetics give a real VIP boutique experience.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Kinjal Dave",
    initial: "K",
    rating: 5,
    date: "1 month ago",
    location: "Vastrapur, Ahmedabad",
    service: "O3+ Bridal Glow Facial",
    serviceType: "Home Service",
    comment:
      "I had stubborn sun tan from my Goa vacation and the O3+ facial restored my original complexion instantly. Cleanliness and hygiene were 10/10. Will definitely be a regular customer!",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Ritu Sharma",
    initial: "R",
    rating: 5,
    date: "3 months ago",
    location: "Thaltej, Ahmedabad",
    service: "Crystal Jelly Mani-Pedi & Eyebrow Shaping",
    serviceType: "Salon Visit",
    comment:
      "The crystal jelly pedicure is pure bliss! Also, getting my eyebrows shaped exactly how I wanted without thinning them was such a relief. Super talented staff and warm hospitality.",
    verified: true,
  },
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 128,
  breakdown: [
    { stars: 5, percentage: 94 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
};
