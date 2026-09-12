"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl, generateDirectCallUrl } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services & Pricing", href: "/services" },
  { name: "About Glow & Rose", href: "/about" },
  { name: "Client Reviews", href: "/reviews" },
  { name: "Beauty Blog", href: "/blog" },
  { name: "Contact & Location", href: "/contact" },
];

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-gradient-to-b from-[#18080f] via-[#12070c] to-[#0a0808] border-l border-[#c9a24a]/25 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#c9a24a]/20">
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border border-[#c9a24a]/40 overflow-hidden bg-black shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={businessConfig.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#f7f1e7] tracking-wide block">
                  Glow & Rose
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a24a] block">
                  Salon & Makeover
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="p-2 text-[#c4b5a5] hover:text-[#e8c66a] hover:bg-[#c9a24a]/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-[#c9a24a]/15 text-[#e8c66a] border-l-2 border-[#c9a24a] font-semibold"
                      : "text-[#f7f1e7] hover:text-[#e8c66a] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Contact */}
        <div className="space-y-4 pt-6 border-t border-[#c9a24a]/20">
          <a
            href={generateWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-sm shadow-lg tracking-wide hover:opacity-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href={generateDirectCallUrl()}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#c9a24a]/40 text-[#f7f1e7] hover:border-[#c9a24a] hover:bg-[#c9a24a]/10 text-sm font-medium transition-all"
          >
            <Phone className="w-4 h-4 text-[#c9a24a]" />
            <span>Call: {businessConfig.phoneDisplay}</span>
          </a>

          {/* Location & Hours Info */}
          <div className="text-xs text-[#c4b5a5] space-y-1.5 pt-2 px-1">
            <div className="flex items-center gap-2 text-[#e8c66a]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{businessConfig.address.area}, Ahmedabad</span>
            </div>
            <div className="flex items-center gap-2 text-[#9e9082]">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Mon-Sat: 10AM–8:30PM | Sun: 10:30AM–7PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
