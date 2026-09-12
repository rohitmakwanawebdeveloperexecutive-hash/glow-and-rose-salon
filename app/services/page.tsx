import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  Home,
  MessageCircle,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { serviceCategories } from "@/data/services";
import { pricingGroups } from "@/data/pricing";
import { generateWhatsAppBookingUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingTable } from "@/components/ui/PricingTable";
import { ContactForm } from "@/components/ui/ContactForm";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Services & Price Menu | Waxing, Facials, Hair Spa, Bridal Makeover in Ahmedabad",
  description:
    "Explore complete salon services and transparent price menu for Glow & Rose Salon & Makeover. Honey & Rica waxing, 24K Gold facials, bridal makeover, and home salon service with 0 extra fee.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Services & Pricing", url: `${businessConfig.siteUrl}/services` },
        ]}
      />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200b14] border border-[#c9a24a]/40 text-xs text-[#e8c66a] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Beauty & Wellness Menu</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f1e7] leading-tight mb-4">
          Our Services & <br />
          <span className="gold-gradient-text italic font-normal">
            Transparent Pricing
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#c4b5a5] max-w-3xl mx-auto font-light leading-relaxed">
          From precision threading and pain-free Italian Rica waxing to customized 24K gold facials and royal bridal makeovers. Available both at our Bodakdev boutique salon and through our doorstep home service across Ahmedabad.
        </p>

        {/* Quick Home Service Note */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-[#220b15] to-[#14060c] border border-[#c9a24a]/30 flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 flex items-center justify-center text-[#e8c66a] shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#f7f1e7]">
                Doorstep Home Service
              </h4>
              <p className="text-xs text-[#c4b5a5]">
                Available across Ahmedabad with 0 extra service fee!
              </p>
            </div>
          </div>

          <a
            href={generateWhatsAppBookingUrl({ serviceType: "Home Service" })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#e8c66a] to-[#c9a24a] text-[#0a0808] font-bold text-xs shrink-0 shadow hover:opacity-95 transition-all"
          >
            Book Home Visit
          </a>
        </div>
      </div>

      {/* Detailed Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {serviceCategories.map((category, index) => (
          <div
            key={category.id}
            id={category.slug}
            className="scroll-mt-32 card-gradient-bg rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#c9a24a]/25 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Category Visual & Summary */}
              <div className="lg:col-span-4 space-y-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#c9a24a]/30 bg-[#12070c]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-[#c9a24a]/40 text-[10px] text-[#e8c66a] font-semibold uppercase tracking-wider">
                    Category #{index + 1}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f7f1e7]">
                    {category.name}
                  </h2>
                  <p className="text-xs text-[#e8c66a] font-medium uppercase tracking-wider mt-1">
                    {category.tagline}
                  </p>
                  <p className="text-sm text-[#c4b5a5] font-light leading-relaxed mt-3">
                    {category.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsAppBookingUrl({ service: category.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a] text-[#e8c66a] hover:bg-[#c9a24a] hover:text-[#0a0808] text-xs font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About {category.name}</span>
                  </a>
                </div>
              </div>

              {/* Sub-services List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="border-b border-[#c9a24a]/20 pb-3 flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-[#e8c66a] tracking-wider">
                    Available Treatments & Pricing
                  </span>
                  <span className="text-xs text-[#9e9082]">
                    {category.services.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 rounded-xl bg-black/40 border border-[#c9a24a]/15 hover:border-[#c9a24a]/40 transition-all flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-base font-bold text-[#f7f1e7]">
                            {item.name}
                          </h3>
                          <span className="text-base font-bold text-[#e8c66a] shrink-0">
                            ₹{item.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#c4b5a5] mt-1.5 font-light leading-relaxed">
                          {item.description}
                        </p>

                        {item.details && (
                          <ul className="mt-3 space-y-1 text-[11px] text-[#9e9082]">
                            {item.details.map((d, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-[#c9a24a] shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-[#8e8072] flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-[#c9a24a]" />
                          <span>{item.duration}</span>
                        </span>

                        <a
                          href={generateWhatsAppBookingUrl({
                            service: `${category.name} - ${item.name}`,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#e8c66a] hover:text-[#f7f1e7] font-semibold text-xs"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pricing Comparison Matrix */}
        <div className="pt-12">
          <SectionHeading
            eyebrow="Quick Scan Price Guide"
            title="Categorized Pricing Table"
            description="Easily browse all rates across waxing, threading, hair treatments, and facial therapies."
          />
          <PricingTable />
        </div>

        {/* Interactive Booking Form */}
        <div className="pt-12">
          <SectionHeading
            eyebrow="Ready for Your Glow?"
            title="Book Your Appointment Today"
            description="Choose your service and date below to confirm instantly on WhatsApp."
          />
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
