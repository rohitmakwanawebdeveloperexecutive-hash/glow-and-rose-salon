import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Award,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Home,
  Star,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl, generateDirectCallUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "About Glow & Rose | Luxury Beauty Salon & Makeover in Ahmedabad",
  description:
    "Discover the story, certified expertise, and hygiene philosophy behind Glow & Rose Salon & Makeover in Bodakdev, Ahmedabad. Dedicated to refined beauty rituals and doorstep pampering.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "About Us", url: `${businessConfig.siteUrl}/about` },
        ]}
      />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200b14] border border-[#c9a24a]/40 text-xs text-[#e8c66a] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Mission</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f1e7] leading-tight mb-4">
          The Story Behind <br />
          <span className="gold-gradient-text italic font-normal">
            Glow & Rose
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#c4b5a5] max-w-3xl mx-auto font-light leading-relaxed">
          Founded on the conviction that every woman deserves personalized, gentle, and deeply restorative beauty rituals in an environment of serene luxury and clinical cleanliness.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: The Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-semibold text-[#c9a24a] tracking-widest">
              Boutique Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f1e7] leading-tight">
              A Personal Sanctuary of Warmth & Elegance
            </h2>

            <p className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed font-light">
              Founded by <strong>Geeta Makwana</strong>, <strong>Glow & Rose Salon & Makeover</strong> was created to offer a private beauty sanctuary where every woman receives unhurried, personalized care. We believe that true beauty pampering is as much about emotional tranquility and self-confidence as it is about aesthetic radiance.
            </p>

            <p className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed font-light">
              With years of hands-on expertise in Italian Rica waxing, customized skin glow therapies, and wedding makeovers, Geeta Makwana and her certified team bring clinical hygiene and heartfelt warmth to clients in Bodakdev and across Ahmedabad through doorstep home salon sessions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-[#c9a24a]/20">
                <span className="text-2xl font-serif font-bold text-[#e8c66a]">
                  100%
                </span>
                <p className="text-xs text-[#c4b5a5] mt-1">
                  Single-Use Hygiene & Sealed Kits
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-[#c9a24a]/20">
                <span className="text-2xl font-serif font-bold text-[#e8c66a]">
                  0 Extra Fee
                </span>
                <p className="text-xs text-[#c4b5a5] mt-1">
                  Doorstep Home Service Across Ahmedabad
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#c9a24a]/30 shadow-2xl">
              <Image
                src="/images/about-salon.jpg"
                alt="Glow & Rose luxury boutique salon in Bodakdev Ahmedabad"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-[#f7f1e7] bg-[#1a0b12]/90 backdrop-blur-md p-4 rounded-xl border border-[#c9a24a]/30">
                <p className="font-medium text-[#e8c66a]">
                  Bodakdev Salon Interior
                </p>
                <p className="text-[#c4b5a5] text-[11px] mt-0.5">
                  Spotless workstations, plush velvet seating, and relaxing aroma ambience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Pillars */}
        <div className="card-gradient-bg rounded-3xl p-8 sm:p-12 border border-[#c9a24a]/25 shadow-2xl space-y-10">
          <SectionHeading
            eyebrow="Our Commitment"
            title="The 4 Pillars of the Glow & Rose Promise"
            description="How we ensure every single service exceeds your expectations in comfort, technique, and safety."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-black/40 border border-[#c9a24a]/20 space-y-3">
              <Award className="w-8 h-8 text-[#e8c66a]" />
              <h3 className="font-serif text-lg font-bold text-[#f7f1e7]">
                Certified Beauticians
              </h3>
              <p className="text-xs text-[#c4b5a5] leading-relaxed font-light">
                Our team undergoes rigorous training in skin anatomy, painless waxing methods, and high-definition bridal artistry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-[#c9a24a]/20 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#e8c66a]" />
              <h3 className="font-serif text-lg font-bold text-[#f7f1e7]">
                Clinical Cleanliness
              </h3>
              <p className="text-xs text-[#c4b5a5] leading-relaxed font-light">
                Disposable bed covers, individual spatulas, sealed skincare vials, and autoclaved tweezers for zero contamination risk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-[#c9a24a]/20 space-y-3">
              <Sparkles className="w-8 h-8 text-[#e8c66a]" />
              <h3 className="font-serif text-lg font-bold text-[#f7f1e7]">
                Premium Ingredients
              </h3>
              <p className="text-xs text-[#c4b5a5] leading-relaxed font-light">
                We use authentic Italian Rica waxes, O3+ brightening complexes, L&apos;Oréal Mythic oils, and pure 24K gold foil extracts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-[#c9a24a]/20 space-y-3">
              <Home className="w-8 h-8 text-[#e8c66a]" />
              <h3 className="font-serif text-lg font-bold text-[#f7f1e7]">
                Doorstep Comfort
              </h3>
              <p className="text-xs text-[#c4b5a5] leading-relaxed font-light">
                We bring full salon luxury right into your living room with no extra service charge across Ahmedabad.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Location & Community Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#c9a24a]/30 shadow-2xl">
              <Image
                src="/images/services/makeover.jpg"
                alt="Bridal makeover and personal consultation at Glow & Rose"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase font-semibold text-[#c9a24a] tracking-widest">
              Local Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#f7f1e7] leading-tight">
              Proudly Serving Ahmedabad&apos;s Discerning Women
            </h2>

            <p className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed font-light">
              We take deep pride in being a trusted beauty partner for families across Ahmedabad. From young college students getting regular cleanups in Vastrapur to brides getting ready for lavish destination weddings on Sindhu Bhavan Road, we tailor our service to your exact celebration.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#f7f1e7]">
                <MapPin className="w-5 h-5 text-[#c9a24a] shrink-0" />
                <span>Shop 4, Rosewood Elegance, Near Sindhu Bhavan Road, Bodakdev</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#f7f1e7]">
                <Clock className="w-5 h-5 text-[#c9a24a] shrink-0" />
                <span>Mon–Sat: 10:00 AM – 8:30 PM | Sun: 10:30 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#f7f1e7]">
                <Phone className="w-5 h-5 text-[#c9a24a] shrink-0" />
                <span>Direct Hotline: {businessConfig.phoneDisplay}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book an Appointment</span>
              </a>

              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full border border-[#c9a24a] text-[#e8c66a] hover:bg-[#c9a24a]/10 font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Find Our Location</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
