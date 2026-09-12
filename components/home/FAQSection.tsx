"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0a0808]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about our salon appointments, home services in Ahmedabad, hygiene, and booking procedures."
        />

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="card-gradient-bg rounded-2xl border border-[#c9a24a]/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#f7f1e7] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#c9a24a] shrink-0" />
                    <span>{faq.question}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#c9a24a]/30 flex items-center justify-center shrink-0 text-[#e8c66a] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#c9a24a]/20" : "bg-[#18080f]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#c4b5a5] font-light leading-relaxed border-t border-[#c9a24a]/10 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-[#1c0c14] to-[#12070c] border border-[#c9a24a]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#f7f1e7]">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs text-[#c4b5a5] mt-0.5 font-light">
              Chat directly with our beauty consultants on WhatsApp.
            </p>
          </div>

          <a
            href={generateWhatsAppBookingUrl({
              message: "Hi, I have a quick question regarding your salon services.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
