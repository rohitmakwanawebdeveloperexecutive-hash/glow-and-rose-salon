import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl, generateDirectCallUrl } from "@/lib/utils";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "All Services & Pricing", href: "/services" },
  { name: "About Glow & Rose", href: "/about" },
  { name: "Customer Reviews", href: "/reviews" },
  { name: "Beauty & Skincare Blog", href: "/blog" },
  { name: "Contact & Location", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const salonServices = [
  { name: "Threading & Facial Grooming", href: "/services#threading" },
  { name: "Italian Rica & Honey Waxing", href: "/services#waxing" },
  { name: "24K Gold & O3+ Facials", href: "/services#facials" },
  { name: "Deep Pore Skin Cleanup", href: "/services#cleanup" },
  { name: "L'Oréal Hair Spa & Scalp Detox", href: "/services#hair-spa" },
  { name: "Crystal Jelly Manicure & Pedicure", href: "/services#manicure-pedicure" },
  { name: "Bridal & Occasion Makeover", href: "/services#makeover" },
  { name: "Doorstep Home Service (0 Extra Fee)", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#14060c] via-[#0d0407] to-[#070204] border-t border-[#c9a24a]/20 text-[#f7f1e7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-[#c9a24a]/15">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full border border-[#c9a24a]/50 overflow-hidden bg-black shrink-0 group-hover:border-[#e8c66a] transition-colors">
                <Image
                  src="/images/logo.png"
                  alt={businessConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-[#f7f1e7] block leading-tight">
                  Glow & Rose
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a24a] font-medium block">
                  Salon & Makeover
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#c4b5a5] leading-relaxed font-light">
              Ahmedabad&apos;s premier boutique salon delivering refined beauty rituals, 
              organic skincare therapies, and seamless doorstep home salon pampering 
              with certified excellence and zero extra service charges.
            </p>

            {/* Socials & Trust Badge */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#c9a24a]/30 bg-[#1f0b15] flex items-center justify-center text-[#e8c66a] hover:text-[#f7f1e7] hover:border-[#c9a24a] hover:bg-[#c9a24a]/20 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#25D366]/30 bg-[#1f0b15] flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366] transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={businessConfig.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#c9a24a]/30 bg-[#1f0b15] flex items-center justify-center text-[#e8c66a] hover:text-[#f7f1e7] hover:border-[#c9a24a] hover:bg-[#c9a24a]/20 transition-all cursor-pointer"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-[#f7f1e7] font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a24a]" />
              <span>Explore</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#c4b5a5] hover:text-[#e8c66a] hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Menu */}
          <div>
            <h3 className="font-serif text-lg text-[#f7f1e7] font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a24a]" />
              <span>Services</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {salonServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#c4b5a5] hover:text-[#e8c66a] hover:translate-x-1 transition-all inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-[#f7f1e7] font-semibold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a24a]" />
              <span>Visit & Connect</span>
            </h3>

            <div className="space-y-3 text-sm text-[#c4b5a5]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a24a] shrink-0 mt-1" />
                <span>{businessConfig.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a24a] shrink-0" />
                <a
                  href={generateDirectCallUrl()}
                  className="hover:text-[#e8c66a] transition-colors"
                >
                  {businessConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={generateWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {businessConfig.whatsappDisplay}
                </a>
              </div>

              <div className="pt-2 border-t border-[#c9a24a]/15">
                <div className="flex items-start gap-3 text-xs text-[#9e9082]">
                  <Clock className="w-4 h-4 text-[#c9a24a] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#f7f1e7] font-medium">Salon Hours:</p>
                    <p>Mon – Sat: 10:00 AM – 08:30 PM</p>
                    <p>Sun: 10:30 AM – 07:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8e8072]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#c9a24a]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified & Hygienic</span>
            </span>
            <Link
              href="/privacy-policy"
              className="hover:text-[#e8c66a] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
