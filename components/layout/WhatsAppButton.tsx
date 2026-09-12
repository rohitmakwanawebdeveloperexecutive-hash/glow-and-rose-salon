"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { businessConfig } from "@/lib/business";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip / Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1a0b12] border border-[#c9a24a]/40 text-xs text-[#f7f1e7] shadow-2xl animate-fade-in backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat with us / Book appointment</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9e9082] hover:text-[#f7f1e7] ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={generateWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#1ebd59] to-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-gold-pulse"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />

        {/* Outer Glow Halo */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 opacity-70 group-hover:scale-110 transition-transform pointer-events-none" />
      </a>
    </div>
  );
}
