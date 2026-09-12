import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowLeft } from "lucide-react";
import { businessConfig } from "@/lib/business";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Glow & Rose Salon & Makeover",
  description:
    "Privacy Policy for Glow & Rose Salon & Makeover. Learn how we handle appointment enquiries, contact data, and privacy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Privacy Policy", url: `${businessConfig.siteUrl}/privacy-policy` },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#c9a24a] hover:text-[#f7f1e7] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#200b14] border border-[#c9a24a]/30 text-xs text-[#e8c66a] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal & Data Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f7f1e7] leading-tight mb-3">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#9e9082]">
            Last Updated: March 2026 | {businessConfig.name}
          </p>
        </div>

        <div className="card-gradient-bg rounded-3xl p-6 sm:p-10 border border-[#c9a24a]/20 shadow-xl space-y-8 text-sm sm:text-base text-[#c4b5a5] font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#e8c66a]">
              1. Introduction
            </h2>
            <p>
              At <strong>{businessConfig.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your personal privacy and are committed to protecting the information you share when inquiring about or booking salon and home beauty services in Ahmedabad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#e8c66a]">
              2. Information We Collect
            </h2>
            <p>
              When you submit an appointment enquiry or message us via WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Your full name</li>
              <li>Contact phone number & WhatsApp number</li>
              <li>Requested beauty services, preferred dates, and times</li>
              <li>Residential or society address (specifically for doorstep home services in Ahmedabad)</li>
              <li>Skin sensitivity preferences or notes you voluntarily provide</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#e8c66a]">
              3. How We Use Your Information
            </h2>
            <p>
              Your data is used strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Scheduling and confirming your beauty salon or home visit appointments</li>
              <li>Sending appointment reminders and service updates via WhatsApp or phone call</li>
              <li>Ensuring our beauticians arrive at the correct address with customized supplies</li>
              <li>Improving customer service and responding to client enquiries</li>
            </ul>
            <p className="text-xs text-[#e8c66a] font-medium mt-2">
              We never sell, rent, or trade your personal contact details to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#e8c66a]">
              4. WhatsApp & Third-Party Communications
            </h2>
            <p>
              Our website uses WhatsApp integration to allow seamless booking. When initiating a chat, your conversation is encrypted and subject to WhatsApp&apos;s standard terms and privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#e8c66a]">
              5. Contacting Us Regarding Your Data
            </h2>
            <p>
              If you have any questions about how your booking details are handled or wish to update your preferences, you may reach out to us directly:
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-[#c9a24a]/20 text-xs space-y-1 text-[#f7f1e7]">
              <p><strong>{businessConfig.name}</strong></p>
              <p>Address: {businessConfig.address.fullAddress}</p>
              <p>Phone / WhatsApp: {businessConfig.phoneDisplay}</p>
              <p>Email: {businessConfig.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
