import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Home,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl, generateDirectCallUrl } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Glow & Rose Salon Bodakdev Ahmedabad",
  description:
    "Contact Glow & Rose Salon & Makeover in Bodakdev, Ahmedabad. Book salon visits and doorstep home beauty services via WhatsApp or direct phone call.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Contact & Location", url: `${businessConfig.siteUrl}/contact` },
        ]}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200b14] border border-[#c9a24a]/40 text-xs text-[#e8c66a] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connect & Visit</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f1e7] leading-tight mb-4">
          Get in Touch with <br />
          <span className="gold-gradient-text italic font-normal">
            Glow & Rose
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#c4b5a5] max-w-3xl mx-auto font-light leading-relaxed">
          Book your salon appointment in Bodakdev, reserve a doorstep home visit with 0 extra fee, or ask us any questions about our beauty treatments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gradient-to-br from-[#1ebd59]/20 to-[#25D366]/10 border border-[#25D366]/40 hover:border-[#25D366] transition-all flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <span className="text-xs text-[#25D366] font-semibold uppercase tracking-wider block">
                    Instant Chat
                  </span>
                  <span className="text-sm font-bold text-[#f7f1e7]">
                    Chat on WhatsApp
                  </span>
                </div>
              </a>

              <a
                href={generateDirectCallUrl()}
                className="p-4 rounded-2xl bg-gradient-to-br from-[#2e101d] to-[#14060c] border border-[#c9a24a]/40 hover:border-[#e8c66a] transition-all flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e8c66a] to-[#c9a24a] text-[#0a0808] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#e8c66a] font-semibold uppercase tracking-wider block">
                    Call Direct
                  </span>
                  <span className="text-sm font-bold text-[#f7f1e7]">
                    {businessConfig.phoneDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Information Card */}
            <div className="card-gradient-bg rounded-3xl p-6 sm:p-8 border border-[#c9a24a]/25 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#f7f1e7] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c9a24a]" />
                <span>Salon Location & Info</span>
              </h3>

              <div className="space-y-4 text-sm text-[#c4b5a5]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#220b15] border border-[#c9a24a]/30 flex items-center justify-center text-[#e8c66a] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f7f1e7]">Salon Address:</h4>
                    <p className="font-light mt-0.5 leading-relaxed">
                      {businessConfig.address.fullAddress}
                    </p>
                    <a
                      href={businessConfig.socials.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#e8c66a] hover:underline mt-1.5 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#c9a24a]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#220b15] border border-[#c9a24a]/30 flex items-center justify-center text-[#e8c66a] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f7f1e7]">Working Hours:</h4>
                    <p className="font-light mt-0.5">
                      <strong>Mon – Sat:</strong> 10:00 AM – 08:30 PM
                    </p>
                    <p className="font-light">
                      <strong>Sunday:</strong> 10:30 AM – 07:00 PM
                    </p>
                    <p className="text-xs text-[#e8c66a] mt-1">
                      Home visits available from 09:00 AM daily
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#c9a24a]/15">
                  <div className="w-9 h-9 rounded-lg bg-[#220b15] border border-[#c9a24a]/30 flex items-center justify-center text-[#e8c66a] shrink-0 mt-0.5">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f7f1e7]">Instagram:</h4>
                    <a
                      href={businessConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#e8c66a] hover:underline block mt-0.5"
                    >
                      {businessConfig.socials.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Service Coverage Areas */}
            <div className="card-gradient-bg rounded-3xl p-6 sm:p-8 border border-[#c9a24a]/25 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-[#e8c66a]" />
                <h3 className="font-serif text-lg font-bold text-[#f7f1e7]">
                  Home Service Localities
                </h3>
              </div>
              <p className="text-xs text-[#c4b5a5] font-light">
                Our certified beauticians travel across Ahmedabad with zero extra service fee:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {businessConfig.homeService.coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1 rounded-full bg-[#200b14] border border-[#c9a24a]/20 text-[#e8ded0]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & WhatsApp Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Google Maps / Location Visual Card */}
        <div className="card-gradient-bg rounded-3xl p-8 sm:p-10 border border-[#c9a24a]/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#c9a24a] uppercase tracking-wider">
                Visit in Person
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#f7f1e7] mt-1">
                Find Us in Bodakdev, Ahmedabad
              </h3>
              <p className="text-xs sm:text-sm text-[#c4b5a5] mt-0.5">
                Conveniently situated near Sindhu Bhavan Road with ample customer parking.
              </p>
            </div>

            <a
              href={businessConfig.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs shadow hover:opacity-95 transition-all shrink-0 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions on Map</span>
            </a>
          </div>

          {/* Map Preview Graphic */}
          <div className="relative aspect-[21/9] min-h-[260px] rounded-2xl overflow-hidden border border-[#c9a24a]/30 bg-[#14060c] flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a0f22]/60 via-[#18080f]/80 to-[#0a0808]" />
            <div className="relative z-10 space-y-3 max-w-md">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e8c66a] to-[#c9a24a] text-[#0a0808] flex items-center justify-center mx-auto shadow-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#f7f1e7]">
                Glow & Rose Salon & Makeover
              </h4>
              <p className="text-xs text-[#c4b5a5]">
                Shop 4, Rosewood Elegance, Near Sindhu Bhavan Road, Bodakdev, Ahmedabad
              </p>
              <a
                href={businessConfig.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-[#e8c66a] underline mt-2 hover:text-[#f7f1e7]"
              >
                Click to open interactive navigation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
