"use client";

import React, { useState } from "react";
import { MessageCircle, Sparkles, Check, Info } from "lucide-react";
import { pricingGroups, pamperCombos } from "@/data/pricing";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

export function PricingTable() {
  const [activeTab, setActiveTab] = useState(pricingGroups[0].id);

  const currentGroup =
    pricingGroups.find((g) => g.id === activeTab) || pricingGroups[0];

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none px-2">
        {pricingGroups.map((group) => {
          const isActive = group.id === activeTab;
          return (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold shadow-[0_0_20px_rgba(201,162,74,0.3)] scale-105"
                  : "bg-[#18080f] text-[#c4b5a5] border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:text-[#f7f1e7]"
              }`}
            >
              {group.title}
            </button>
          );
        })}
      </div>

      {/* Pricing Container */}
      <div className="card-gradient-bg rounded-2xl border border-[#c9a24a]/30 overflow-hidden shadow-2xl">
        {/* Table Header / Subtitle */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#220b15] via-[#18080f] to-[#12070c] border-b border-[#c9a24a]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f7f1e7]">
                {currentGroup.title}
              </h3>
              {currentGroup.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 text-[10px] text-[#e8c66a] font-semibold uppercase tracking-wider">
                  {currentGroup.badge}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#c4b5a5] mt-1 font-light">
              {currentGroup.subtitle}
            </p>
          </div>

          <div className="shrink-0 text-xs text-[#e8c66a] flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-[#c9a24a]/20">
            <Info className="w-4 h-4 shrink-0" />
            <span>Salon & Home Service Available</span>
          </div>
        </div>

        {/* Wax Comparison Table Specific */}
        {currentGroup.isWaxComparison ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#c9a24a]/20 bg-[#12070c] text-[11px] sm:text-xs uppercase tracking-wider text-[#e8c66a]">
                  <th className="py-3.5 px-4 sm:px-6">Service Area</th>
                  <th className="py-3.5 px-4 sm:px-6">Classic Honey</th>
                  <th className="py-3.5 px-4 sm:px-6">
                    <span className="flex items-center gap-1">
                      <span>Italian Rica</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-[#c9a24a]/30 rounded text-[#f7f1e7]">
                        Popular
                      </span>
                    </span>
                  </th>
                  <th className="py-3.5 px-4 sm:px-6">Brazilian Peel-Off</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c9a24a]/10 text-sm">
                {currentGroup.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#220b15]/40 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-medium text-[#f7f1e7] flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.popular && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#c9a24a]/20 text-[#e8c66a] font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                      {item.note && (
                        <span className="text-xs text-[#9e9082] block mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 sm:px-6 font-semibold text-[#c4b5a5]">
                      {typeof item.honeyPrice === "number"
                        ? `₹${item.honeyPrice}`
                        : item.honeyPrice || "—"}
                    </td>

                    <td className="py-4 px-4 sm:px-6 font-bold text-[#e8c66a]">
                      {typeof item.ricaPrice === "number"
                        ? `₹${item.ricaPrice}`
                        : item.ricaPrice || "—"}
                    </td>

                    <td className="py-4 px-4 sm:px-6 font-bold text-[#e8ded0]">
                      {typeof item.brazilianPrice === "number"
                        ? `₹${item.brazilianPrice}`
                        : item.brazilianPrice || "—"}
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right">
                      <a
                        href={generateWhatsAppBookingUrl({
                          service: `Waxing - ${item.name}`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#c9a24a]/15 hover:bg-[#c9a24a] text-[#e8c66a] hover:text-[#0a0808] border border-[#c9a24a]/40 text-xs font-semibold transition-all hover:scale-105"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Book</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Standard Category Table */
          <div className="divide-y divide-[#c9a24a]/10">
            {currentGroup.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 hover:bg-[#220b15]/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#f7f1e7]">
                      {item.name}
                    </span>
                    {item.popular && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c9a24a]/20 text-[#e8c66a] font-semibold border border-[#c9a24a]/30">
                        Popular
                      </span>
                    )}
                  </div>
                  {item.note && (
                    <p className="text-xs text-[#c4b5a5] font-light">
                      {item.note}
                    </p>
                  )}
                  {item.duration && (
                    <p className="text-[11px] text-[#9e9082]">
                      Duration: {item.duration}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#c9a24a]/10">
                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-bold text-[#e8c66a]">
                      ₹{item.price}
                    </span>
                  </div>

                  <a
                    href={generateWhatsAppBookingUrl({
                      service: `${currentGroup.title} - ${item.name}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] text-xs font-bold shadow-md hover:opacity-95 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Special Pamper Combos & Packages */}
      <div className="space-y-6 pt-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c9a24a] font-medium">
            Curated Pampering
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#f7f1e7] mt-1">
            Signature Spa & Beauty Combos
          </h3>
          <p className="text-xs sm:text-sm text-[#c4b5a5] mt-1 font-light">
            Bundle your favorite beauty rituals for maximum radiance and exclusive savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pamperCombos.map((combo) => (
            <div
              key={combo.id}
              className={`rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 ${
                combo.popular
                  ? "bg-gradient-to-b from-[#2e101d] via-[#1a0b12] to-[#12070c] border-2 border-[#c9a24a] shadow-[0_0_30px_rgba(201,162,74,0.2)]"
                  : "card-gradient-bg border border-[#c9a24a]/25"
              }`}
            >
              {combo.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#e8c66a] to-[#c9a24a] text-[#0a0808] text-[10px] font-bold uppercase tracking-wider shadow">
                  Most Loved Combo
                </div>
              )}

              <div>
                <h4 className="text-lg font-serif font-bold text-[#f7f1e7] mt-2">
                  {combo.name}
                </h4>

                <div className="flex items-baseline gap-2 my-3">
                  <span className="text-2xl sm:text-3xl font-bold text-[#e8c66a]">
                    ₹{combo.comboPrice}
                  </span>
                  <span className="text-sm text-[#9e9082] line-through">
                    ₹{combo.originalPrice}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] font-semibold">
                    Save ₹{combo.savings}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-[#c4b5a5] my-4 pt-3 border-t border-[#c9a24a]/15">
                  {combo.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#c9a24a] shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={generateWhatsAppBookingUrl({ service: `Combo: ${combo.name}` })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-3 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs flex items-center justify-center gap-2 hover:opacity-95 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book This Combo</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
