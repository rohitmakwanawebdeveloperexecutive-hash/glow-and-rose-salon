"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  Home,
  Store,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { serviceCategories } from "@/data/services";
import { generateWhatsAppBookingUrl, BookingDetails } from "@/lib/utils";

interface ContactFormProps {
  initialService?: string;
  initialServiceType?: "Salon Visit" | "Home Service";
}

export function ContactForm({
  initialService,
  initialServiceType = "Salon Visit",
}: ContactFormProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    name: "",
    phone: "",
    service: initialService || "",
    serviceType: initialServiceType,
    preferredDate: "",
    preferredTime: "",
    address: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = generateWhatsAppBookingUrl(formData);
    setIsSubmitted(true);
    // Redirect to WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Get flat list of services
  const allServicesList = serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({
      category: cat.name,
      name: s.name,
      price: s.price,
    }))
  );

  return (
    <div className="card-gradient-bg rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#c9a24a]/30 shadow-2xl relative overflow-hidden">
      {/* Background Wine Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#421124]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-[#e8c66a] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Quick Appointment & Enquiry</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-[#f7f1e7] font-bold mb-2">
          Book Your Experience
        </h3>
        <p className="text-sm text-[#c4b5a5] mb-8 font-light">
          Fill out your details below. Submitting will format and open your booking directly in WhatsApp for immediate confirmation.
        </p>

        {isSubmitted && (
          <div className="mb-6 p-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-sm text-[#f7f1e7] flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#25D366]">
                WhatsApp Enquiry Launched!
              </p>
              <p className="text-xs text-[#c4b5a5] mt-1">
                If the chat window did not open automatically,{" "}
                <a
                  href={generateWhatsAppBookingUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#e8c66a] font-medium"
                >
                  click here to proceed to WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Preference Toggle: Salon vs Home Service */}
          <div>
            <label className="block text-xs font-medium text-[#f7f1e7] uppercase tracking-wider mb-2">
              Select Experience Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, serviceType: "Salon Visit" })
                }
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  formData.serviceType === "Salon Visit"
                    ? "border-[#c9a24a] bg-[#c9a24a]/20 text-[#e8c66a] font-semibold shadow-[0_0_15px_rgba(201,162,74,0.15)]"
                    : "border-white/10 bg-black/30 text-[#c4b5a5] hover:border-white/20"
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Salon Visit (Bodakdev)</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, serviceType: "Home Service" })
                }
                className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  formData.serviceType === "Home Service"
                    ? "border-[#c9a24a] bg-[#c9a24a]/20 text-[#e8c66a] font-semibold shadow-[0_0_15px_rgba(201,162,74,0.15)]"
                    : "border-white/10 bg-black/30 text-[#c4b5a5] hover:border-white/20"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home Service (0 Extra Fee)</span>
              </button>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9082]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Shah"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] placeholder-[#7d6c60] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9082]">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] placeholder-[#7d6c60] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
              Select Primary Service *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all"
            >
              <option value="" className="bg-[#12070c] text-[#7d6c60]">
                -- Select a beauty service --
              </option>
              {serviceCategories.map((cat) => (
                <optgroup key={cat.id} label={cat.name} className="bg-[#18080f] text-[#e8c66a]">
                  {cat.services.map((s) => (
                    <option key={s.id} value={`${cat.name} - ${s.name}`} className="bg-[#12070c] text-[#f7f1e7]">
                      {s.name} (₹{s.price})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
                Preferred Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9082]">
                  <Calendar className="w-4 h-4" />
                </div>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all scheme-dark"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
                Preferred Time Slot
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9082]">
                  <Clock className="w-4 h-4" />
                </div>
                <select
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all"
                >
                  <option value="" className="bg-[#12070c]">Any convenient time</option>
                  <option value="Morning (10:00 AM – 01:00 PM)" className="bg-[#12070c]">
                    Morning (10:00 AM – 01:00 PM)
                  </option>
                  <option value="Afternoon (01:00 PM – 04:00 PM)" className="bg-[#12070c]">
                    Afternoon (01:00 PM – 04:00 PM)
                  </option>
                  <option value="Evening (04:00 PM – 08:00 PM)" className="bg-[#12070c]">
                    Evening (04:00 PM – 08:00 PM)
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Location Area for Home Service */}
          {formData.serviceType === "Home Service" && (
            <div className="animate-fade-in">
              <label className="block text-xs font-medium text-[#e8c66a] uppercase tracking-wider mb-1.5">
                Ahmedabad Location / Society Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9e9082]">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required={formData.serviceType === "Home Service"}
                  placeholder="e.g. Near Iscon Platinum, Bopal / Bodakdev"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 bg-[#12070c] border border-[#c9a24a]/40 rounded-xl text-sm text-[#f7f1e7] placeholder-[#7d6c60] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all"
                />
              </div>
            </div>
          )}

          {/* Notes / Special Requests */}
          <div>
            <label className="block text-xs font-medium text-[#c4b5a5] uppercase tracking-wider mb-1.5">
              Special Requests or Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Multiple family members, sensitive skin, bridal trial..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#12070c] border border-[#c9a24a]/25 rounded-xl text-sm text-[#f7f1e7] placeholder-[#7d6c60] focus:outline-none focus:border-[#c9a24a] focus:ring-1 focus:ring-[#c9a24a] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-base shadow-[0_0_25px_rgba(201,162,74,0.3)] hover:opacity-95 hover:shadow-[0_0_35px_rgba(201,162,74,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <MessageCircle className="w-5 h-5 fill-[#0a0808]" />
            <span>Send Enquiry on WhatsApp</span>
          </button>

          <p className="text-center text-[11px] text-[#8e8072]">
            By sending, your request details will be sent directly to our salon WhatsApp line ({businessConfig.phoneDisplay}). We usually reply within 5–10 minutes.
          </p>
        </form>
      </div>
    </div>
  );
}
