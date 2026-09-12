import React from "react";
import Image from "next/image";
import {
  Home,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  MapPin,
  Gift,
  ArrowRight,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

export function HomeServiceBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0808] via-[#1a0910] to-[#0a0808] relative overflow-hidden">
      {/* Dynamic Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4a1228]/30 rounded-full blur-3xl pointer-events-none animate-aura-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#c9a24a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="card-gradient-bg rounded-3xl border border-[#c9a24a]/40 p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative group">
          {/* Subtle gold grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(201,162,74,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Animated Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c9a24a]/20 via-[#e8c66a]/15 to-[#c9a24a]/20 border border-[#c9a24a]/50 text-[#e8c66a] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
                <Gift className="w-4 h-4 text-[#e8c66a] animate-bounce" />
                <span>Zero Extra Service Charge</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f1e7] leading-tight">
                Beauty, At Your <br className="hidden sm:inline" />
                <span className="gold-gradient-text italic font-normal">
                  Doorstep
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-[#c4b5a5] text-base sm:text-lg font-light leading-relaxed">
                Enjoy professional salon & makeover services from the comfort, privacy, and safety of your own home. Our certified female beauticians bring the full Glow & Rose boutique experience directly to your doorstep anywhere in Ahmedabad.
              </p>

              {/* Highlight Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/50 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:bg-[#1a0b12] transition-all">
                  <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f7f1e7]">
                      100% Sealed & Single-Use
                    </h4>
                    <p className="text-xs text-[#9e9082] mt-0.5">
                      Disposables, sanitized kit & strict hygiene.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/50 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:bg-[#1a0b12] transition-all">
                  <Clock className="w-5 h-5 text-[#e8c66a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f7f1e7]">
                      Flexible Home Slots
                    </h4>
                    <p className="text-xs text-[#9e9082] mt-0.5">
                      Available Mon–Sun (9:00 AM – 8:00 PM).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/50 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:bg-[#1a0b12] transition-all">
                  <Gift className="w-5 h-5 text-[#e8c66a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f7f1e7]">
                      0 Extra Service Fee
                    </h4>
                    <p className="text-xs text-[#9e9082] mt-0.5">
                      Pay regular salon menu prices only.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-black/50 border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:bg-[#1a0b12] transition-all">
                  <MapPin className="w-5 h-5 text-[#e8c66a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#f7f1e7]">
                      All Ahmedabad Localities
                    </h4>
                    <p className="text-xs text-[#9e9082] mt-0.5">
                      Bodakdev, Satellite, Bopal, Thaltej & more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <a
                  href={generateWhatsAppBookingUrl({
                    service: "Home Beauty Service",
                    serviceType: "Home Service",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(201,162,74,0.35)] hover:shadow-[0_0_35px_rgba(201,162,74,0.6)] hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 fill-[#0a0808]" />
                  <span>Book Home Service on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Image Display with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden border-2 border-[#c9a24a]/50 shadow-2xl group">
                <Image
                  src="/images/home-service.jpg"
                  alt="Professional home salon beauty service in Ahmedabad by Glow & Rose"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Pill */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#1a0b12]/95 backdrop-blur-md border border-[#c9a24a]/40 text-xs text-[#f7f1e7] flex items-center justify-between shadow-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                    <span className="font-semibold">Ahmedabad Doorstep Service</span>
                  </div>
                  <span className="text-[#e8c66a] font-bold">No Surcharge</span>
                </div>
              </div>

              {/* Floating top badge */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-full bg-[#18080f]/95 border border-[#c9a24a]/50 text-[11px] text-[#e8c66a] font-medium shadow-xl backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Certified Female Beauticians</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
