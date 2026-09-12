"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "Facial", "Makeover", "Hair", "Salon", "Beauty Services"];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0808] via-[#14060c] to-[#0a0808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editorial Visuals"
          title="The Glow & Rose Visual Experience"
          description="A glimpse into our serene boutique ambiance, meticulous beauty rituals, and glowing bridal transformations."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold shadow-[0_0_15px_rgba(201,162,74,0.3)] scale-105"
                  : "bg-[#18080f] text-[#c4b5a5] border border-[#c9a24a]/20 hover:border-[#c9a24a]/50 hover:text-[#f7f1e7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#12070c] border border-[#c9a24a]/25 shadow-xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0808]/90 via-[#0a0808]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-[#e8c66a] tracking-widest px-2.5 py-0.5 rounded bg-black/60 border border-[#c9a24a]/30 mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#f7f1e7] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
