"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Sparkles } from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services & Pricing", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0808]/92 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-[#c9a24a]/20"
            : "bg-gradient-to-b from-[#0a0808]/90 via-[#0a0808]/60 to-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label={`${businessConfig.name} - Home`}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#c9a24a]/40 overflow-hidden bg-black shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#e8c66a]">
                <Image
                  src="/images/logo.png"
                  alt={businessConfig.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-[#f7f1e7] group-hover:text-[#e8c66a] transition-colors leading-tight">
                  Glow & Rose
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#c9a24a] font-medium leading-tight">
                  Salon & Makeover
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-[#e8c66a] bg-[#c9a24a]/10 font-semibold"
                        : "text-[#e8ded0] hover:text-[#e8c66a] hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#c9a24a]"
              >
                {/* Metallic Gold Border Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] rounded-full transition-all group-hover:opacity-100" />
                <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18080f] text-[#f7f1e7] text-xs md:text-sm font-semibold tracking-wide transition-colors group-hover:bg-transparent group-hover:text-[#0a0808]">
                  <Sparkles className="w-3.5 h-3.5 text-[#e8c66a] group-hover:text-[#0a0808]" />
                  <span>Book Appointment</span>
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on WhatsApp"
                className="p-2 text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-colors sm:hidden"
              >
                <MessageCircle className="w-6 h-6" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#f7f1e7] hover:text-[#e8c66a] hover:bg-[#c9a24a]/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
