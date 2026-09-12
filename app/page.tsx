import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { serviceCategories } from "@/data/services";
import { reviewsData } from "@/data/reviews";
import { getAllPosts } from "@/lib/blog";
import { generateWhatsAppBookingUrl, generateDirectCallUrl } from "@/lib/utils";

import { Hero } from "@/components/home/Hero";
import { HomeServiceBanner } from "@/components/home/HomeServiceBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GallerySection } from "@/components/home/GallerySection";
import { FAQSection } from "@/components/home/FAQSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PricingTable } from "@/components/ui/PricingTable";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { ContactForm } from "@/components/ui/ContactForm";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const featuredReviews = reviewsData.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Home Service Highlight */}
      <HomeServiceBanner />

      {/* 3. Popular Services Section */}
      <section className="py-20 bg-[#0a0808] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curated Beauty Rituals"
            title="Popular Salon & Grooming Services"
            description="Explore our most requested beauty treatments in Ahmedabad, crafted with organic care, skin-nourishing ingredients, and flawless precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.slice(0, 6).map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#c9a24a] text-[#f7f1e7] hover:text-[#0a0808] hover:bg-gradient-to-r hover:from-[#e8c66a] hover:via-[#c9a24a] hover:to-[#a37f30] font-bold text-sm transition-all duration-300 shadow-lg group"
            >
              <span>View Full Services & Price Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Pricing & Combos Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0808] via-[#14060c] to-[#0a0808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Honest & Transparent"
            title="Salon & Doorstep Service Pricing"
            description="Clear, upfront pricing with zero hidden fees. Compare classic Honey Wax vs Italian Rica Wax and discover value-packed pamper combos."
          />

          <PricingTable />
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. About Story Teaser */}
      <section className="py-20 bg-gradient-to-b from-[#0a0808] via-[#180810] to-[#0a0808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#c9a24a]/30 shadow-2xl group">
                <Image
                  src="/images/about-salon.jpg"
                  alt="Glow & Rose Boutique Salon Interior in Bodakdev Ahmedabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1a0b12]/90 backdrop-blur-md border border-[#c9a24a]/30 text-xs text-[#f7f1e7]">
                  <p className="font-serif italic text-sm text-[#e8c66a]">
                    &ldquo;Beauty is an art of comfort, confidence, and genuine care.&rdquo;
                  </p>
                  <p className="text-[11px] text-[#9e9082] mt-1">
                    — The Philosophy of Glow & Rose
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-[#e8c66a] text-xs font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4" />
                <span>Our Heritage & Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f7f1e7] leading-tight">
                Crafting Radiant Glows, <br />
                <span className="gold-gradient-text italic font-normal">
                  One Client at a Time
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed font-light">
                Founded with a mission to bring world-class boutique pampering to Ahmedabad, 
                <strong> Glow & Rose Salon & Makeover</strong> blends Ayurvedic herbal wisdom, 
                cutting-edge Italian skincare formulations, and warm hospitality.
              </p>

              <p className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed font-light">
                Whether you visit our serene salon near Sindhu Bhavan Road in Bodakdev or enjoy our certified doorstep service with zero extra service fee, our focus is unwavering: uncompromised hygiene, skin health, and your personal delight.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={generateDirectCallUrl()}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#c9a24a]/40 text-[#f7f1e7] hover:border-[#c9a24a] hover:bg-[#c9a24a]/10 font-semibold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-[#c9a24a]" />
                  <span>Call {businessConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <GallerySection />

      {/* 8. Customer Reviews Section */}
      <section className="py-20 bg-[#0a0808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Loved by Ahmedabad Women"
            title="What Our Clients Say"
            description="Real experiences from women who trust Glow & Rose for their everyday grooming, bridal makeovers, and relaxing home salon visits."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#c9a24a] text-[#e8c66a] hover:bg-[#c9a24a]/10 font-semibold text-sm transition-all"
            >
              <span>View All 120+ Client Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Latest Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-[#0a0808] via-[#14060c] to-[#0a0808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Beauty Journal & Advice"
            title="Latest from Our Beauty Blog"
            description="Expert skincare guides, waxing comparisons, pre-bridal checklists, and home care secrets written by our senior estheticians."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#c9a24a] text-[#f7f1e7] hover:text-[#0a0808] hover:bg-[#c9a24a] font-semibold text-sm transition-all"
            >
              <span>Read All Beauty Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Interactive Booking & WhatsApp Form Section */}
      <section className="py-20 bg-[#0a0808] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Instant Reservation"
            title="Book Your Salon or Home Session"
            description="Select your service, choose your preferred time slot, and receive instant booking confirmation directly on WhatsApp."
          />

          <ContactForm />
        </div>
      </section>

      {/* 11. FAQ Accordion Section */}
      <FAQSection />
    </div>
  );
}
