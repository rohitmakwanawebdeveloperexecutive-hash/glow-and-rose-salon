import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Award,
  HeartHandshake,
  Home,
  ReceiptText,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: <Award className="w-7 h-7 text-[#e8c66a]" />,
    title: "Experienced Beauticians",
    description:
      "Our certified aestheticians and makeup artists carry years of specialized experience in delicate skin therapies and precision grooming.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#e8c66a]" />,
    title: "Hygienic & Single-Use Care",
    description:
      "We practice uncompromising sanitation with 100% disposable bed sheets, single-use wax spatulas, and sealed premium product sachets.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#e8c66a]" />,
    title: "Personalized Beauty Rituals",
    description:
      "No two skins are identical. We analyze your skin texture and hair type before customizing suitable organic and medical-grade products.",
  },
  {
    icon: <Home className="w-7 h-7 text-[#e8c66a]" />,
    title: "Doorstep Home Service",
    description:
      "Relax in the comfort of your living space. We bring the complete luxury salon experience across Ahmedabad with zero extra service surcharge.",
  },
  {
    icon: <ReceiptText className="w-7 h-7 text-[#e8c66a]" />,
    title: "Transparent & Honest Pricing",
    description:
      "No surprise bills or hidden fees. Every service price is clearly listed upfront with premium international brand formulations.",
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-[#e8c66a]" />,
    title: "Warm & Trustworthy Hospitality",
    description:
      "We treat every client like family in an unhurried, serene, and respectful atmosphere tailored to make you feel cherished.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0a0808] relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1d0a14]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Glow & Rose Standard"
          title="Why Choose Our Boutique Salon?"
          description="Crafted with devotion to beauty, precision hygiene, and unmatched comfort for the modern woman in Ahmedabad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-gradient-bg rounded-2xl p-7 border border-[#c9a24a]/20 card-gradient-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2a0e1b] to-[#12070c] border border-[#c9a24a]/30 flex items-center justify-center mb-5 group-hover:border-[#c9a24a] group-hover:shadow-[0_0_20px_rgba(201,162,74,0.2)] transition-all">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#f7f1e7] group-hover:text-[#e8c66a] transition-colors mb-2.5">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[#c4b5a5] leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c9a24a]/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a24a]" />
                <span className="text-[11px] uppercase tracking-wider text-[#9e9082]">
                  Premium Care
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
