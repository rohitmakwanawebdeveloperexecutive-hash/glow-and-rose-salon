import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Home,
  CheckCircle2,
  Gem,
  Award,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

// Subtle ambient gold particles
const particles = [
  { top: "12%", left: "15%", delay: "0s", size: "w-2 h-2" },
  { top: "25%", left: "80%", delay: "1.2s", size: "w-1.5 h-1.5" },
  { top: "65%", left: "8%", delay: "2.1s", size: "w-2.5 h-2.5" },
  { top: "78%", left: "88%", delay: "0.8s", size: "w-2 h-2" },
  { top: "40%", left: "48%", delay: "1.7s", size: "w-1.5 h-1.5" },
  { top: "85%", left: "42%", delay: "2.5s", size: "w-2 h-2" },
];

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#0a0808] via-[#16090f] to-[#0a0808]">
      {/* 1. Dynamic Ambient Glowing Auras */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#3f1025]/40 via-[#c9a24a]/15 to-transparent rounded-full blur-3xl pointer-events-none animate-aura-pulse" />
      <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#2a0c1a]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1d0a14]/60 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Floating Gold Twinkle Particles */}
      {particles.map((p, idx) => (
        <div
          key={idx}
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          className={`absolute ${p.size} rounded-full bg-[#e8c66a] pointer-events-none animate-twinkle shadow-[0_0_12px_#e8c66a]`}
        />
      ))}

      {/* 3. Subtle Rose Gold Grid Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(201,162,74,0.07)_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Copy & Animated CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Animated Luxury Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#200b14] via-[#2d0e1d] to-[#18080f] border border-[#c9a24a]/50 shadow-[0_0_20px_rgba(201,162,74,0.15)] group hover:border-[#e8c66a] transition-all">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c66a]">
                Ahmedabad&apos;s Boutique Salon & Makeover
              </span>
            </div>

            {/* Main Headline with Shimmering Metallic Gold Text */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f7f1e7] leading-[1.12] tracking-tight font-bold">
              Where Beauty <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal text-5xl sm:text-6xl lg:text-7xl">
                Meets Elegance
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#c4b5a5] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the pinnacle of feminine pampering with certified beauty specialists in Bodakdev, Ahmedabad. From Italian Rica waxing and 24K gold radiance facials to personalized bridal artistry and{" "}
              <strong className="text-[#e8c66a] font-medium underline decoration-[#c9a24a]/40 underline-offset-4">
                doorstep home salon services with 0 extra service fee
              </strong>
              .
            </p>

            {/* Animated CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={generateWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(201,162,74,0.4)] hover:shadow-[0_0_40px_rgba(201,162,74,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-[#0a0808]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#c9a24a] text-[#f7f1e7] hover:text-[#0a0808] hover:bg-gradient-to-r hover:from-[#e8c66a] hover:to-[#c9a24a] hover:border-[#e8c66a] text-sm sm:text-base font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Explore Services & Menu</span>
                <ArrowRight className="w-4 h-4 text-[#c9a24a] group-hover:text-[#0a0808] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-[#c9a24a]/20 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div className="p-3 rounded-xl bg-black/40 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 transition-colors">
                <div className="flex items-center gap-1.5 text-[#e8c66a]">
                  <Star className="w-4 h-4 fill-[#e8c66a]" />
                  <span className="font-bold text-sm sm:text-base">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-[#9e9082] mt-0.5">120+ Verified Reviews</p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 transition-colors">
                <div className="flex items-center gap-1.5 text-[#e8c66a]">
                  <Home className="w-4 h-4" />
                  <span className="font-bold text-sm sm:text-base">0 Extra Fee</span>
                </div>
                <p className="text-[11px] text-[#9e9082] mt-0.5">Doorstep Home Salon</p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 transition-colors">
                <div className="flex items-center gap-1.5 text-[#e8c66a]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-sm sm:text-base">100% Clean</span>
                </div>
                <p className="text-[11px] text-[#9e9082] mt-0.5">Single-Use Disposables</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Animated Halo & Floating Interactive Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Slow-Rotating Gold Ornamental Ring */}
            <div className="absolute -inset-6 sm:-inset-10 border border-[#c9a24a]/20 rounded-full animate-spin-slow pointer-events-none flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-dashed border-[#c9a24a]/30" />
              {/* Ornamental Gold Dots on Ring */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a24a] shadow-[0_0_10px_#c9a24a]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a24a] shadow-[0_0_10px_#c9a24a]" />
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a24a] shadow-[0_0_10px_#c9a24a]" />
              <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#c9a24a] shadow-[0_0_10px_#c9a24a]" />
            </div>

            {/* Main Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#c9a24a]/50 shadow-[0_20px_60px_rgba(0,0,0,0.9)] group">
              <Image
                src="/images/hero-beauty.jpg"
                alt="Glow & Rose Salon & Makeover luxury beauty care in Ahmedabad"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808] via-transparent to-black/25 pointer-events-none" />

              {/* Floating Salon Logo Emblem */}
              <div className="absolute top-5 left-5 flex items-center gap-3 p-2.5 pr-4 rounded-full bg-black/85 backdrop-blur-md border border-[#c9a24a]/60 shadow-2xl z-20">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c9a24a] bg-black">
                  <Image
                    src="/images/logo.png"
                    alt={businessConfig.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif text-xs font-bold text-[#f7f1e7] block leading-tight">
                    Glow & Rose
                  </span>
                  <span className="text-[9px] uppercase text-[#c9a24a] font-medium tracking-wider block">
                    Boutique Salon
                  </span>
                </div>
              </div>

              {/* Floating Highlight Card at Bottom */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-gradient-to-r from-[#1c0c14]/95 via-[#18080f]/95 to-[#12070c]/95 backdrop-blur-md border border-[#c9a24a]/50 shadow-2xl z-20 group-hover:border-[#e8c66a] transition-all">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-[#e8c66a] tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Signature Treatment</span>
                    </span>
                    <h4 className="text-sm font-serif font-bold text-[#f7f1e7]">
                      Nourishing Glow Facial
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#9e9082] block">facials from</span>
                    <span className="text-base font-bold text-[#e8c66a]">
                      ₹800
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Floating Animated Badges (Left & Right) */}
            {/* Top-Right Floating Badge */}
            {/* <div className="absolute -top-3 -right-3 sm:-right-6 px-3.5 py-2 rounded-2xl bg-[#1c0c14]/95 border border-[#c9a24a]/60 text-xs text-[#f7f1e7] shadow-2xl backdrop-blur-md z-30 animate-float-slow hidden sm:flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 flex items-center justify-center text-[#e8c66a] shrink-0">
                <Gem className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-semibold text-[11px] text-[#e8c66a] block">Italian Rica Wax</span>
                <span className="text-[10px] text-[#c4b5a5]">Pain-Free & De-Tan</span>
              </div>
            </div> */}

            {/* Bottom-Left Floating Badge */}
            {/* <div className="absolute -bottom-4 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#1c0c14]/95 border border-[#c9a24a]/60 text-xs text-[#f7f1e7] shadow-2xl backdrop-blur-md z-30 animate-float-reverse hidden sm:flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-semibold text-[11px] text-[#f7f1e7] block">Zero Surcharge</span>
                <span className="text-[10px] text-[#e8c66a]">Ahmedabad Home Service</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
