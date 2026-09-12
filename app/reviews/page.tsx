import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ThumbsUp,
  Heart,
  ArrowRight,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { reviewsData, reviewStats } from "@/data/reviews";
import { generateWhatsAppBookingUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Glow & Rose Salon & Makeover",
  description:
    "Read real client testimonials and reviews for Glow & Rose Salon & Makeover in Ahmedabad. 4.9-star rated boutique beauty parlour and doorstep salon services.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Client Reviews", url: `${businessConfig.siteUrl}/reviews` },
        ]}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200b14] border border-[#c9a24a]/40 text-xs text-[#e8c66a] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Client Testimonials</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f1e7] leading-tight mb-4">
          Trusted by Hundreds of <br />
          <span className="gold-gradient-text italic font-normal">
            Ahmedabad Women
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#c4b5a5] max-w-3xl mx-auto font-light leading-relaxed">
          We treat every appointment as a sacred ritual of self-care. Discover why our clients love our salon ambiance, gentle waxing techniques, and reliable doorstep service.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Rating Overview Card */}
        <div className="card-gradient-bg rounded-3xl p-8 sm:p-10 border border-[#c9a24a]/30 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Score */}
            <div className="md:col-span-5 text-center md:text-left md:border-r border-[#c9a24a]/20 md:pr-8">
              <span className="text-5xl sm:text-6xl font-serif font-bold text-[#e8c66a]">
                {reviewStats.averageRating}
              </span>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#e8c66a] text-[#e8c66a]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#f7f1e7] font-semibold">
                Overall Client Satisfaction
              </p>
              <p className="text-xs text-[#9e9082] mt-0.5">
                Based on {reviewStats.totalReviews}+ verified local reviews
              </p>
            </div>

            {/* Right Rating Distribution */}
            <div className="md:col-span-7 space-y-2.5">
              {reviewStats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-[#f7f1e7] font-medium flex items-center gap-1">
                    <span>{item.stars}</span>
                    <Star className="w-3 h-3 fill-[#e8c66a] text-[#e8c66a]" />
                  </span>

                  <div className="flex-1 h-2 rounded-full bg-black/50 overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[#c9a24a] to-[#e8c66a] rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <span className="w-10 text-right text-[#9e9082] font-mono">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* CTA to Book / Leave Review */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#220b15] via-[#1a0b12] to-[#12070c] border border-[#c9a24a]/30 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 text-[#e8c66a] flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f7f1e7]">
            Ready to Experience the Glow & Rose Difference?
          </h3>

          <p className="text-sm text-[#c4b5a5] max-w-xl mx-auto font-light leading-relaxed">
            Join hundreds of satisfied clients in Ahmedabad. Book your salon visit or doorstep home appointment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={generateWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-sm shadow-[0_0_25px_rgba(201,162,74,0.35)] hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>

            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-[#c9a24a] text-[#f7f1e7] hover:text-[#e8c66a] hover:bg-[#c9a24a]/10 text-sm font-semibold transition-all"
            >
              <span>Explore Services & Menu</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
