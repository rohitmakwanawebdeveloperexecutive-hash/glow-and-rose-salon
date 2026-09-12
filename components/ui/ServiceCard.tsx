import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Sparkles,
  Flower2,
  Droplets,
  Feather,
  HeartHandshake,
  Moon,
  Crown,
  ArrowRight,
  Home,
} from "lucide-react";
import { ServiceCategory } from "@/data/services";
import { generateWhatsAppBookingUrl } from "@/lib/utils";

interface ServiceCardProps {
  category: ServiceCategory;
}

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Flower2: <Flower2 className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Feather: <Feather className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Moon: <Moon className="w-6 h-6" />,
  Crown: <Crown className="w-6 h-6" />,
};

export function ServiceCard({ category }: ServiceCardProps) {
  const icon = iconMap[category.iconName] || <Sparkles className="w-6 h-6" />;
  const minPrice = Math.min(...category.services.map((s) => s.price));

  return (
    <div className="group relative rounded-2xl overflow-hidden card-gradient-bg card-gradient-hover transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(201,162,74,0.18)]">
      {/* Top Image & Floating Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#12070c]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18080f] via-[#18080f]/40 to-transparent" />

        {/* Home Service Badge */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#c9a24a]/40 text-[11px] text-[#e8c66a] font-medium shadow-md">
          <Home className="w-3 h-3 text-[#25D366]" />
          <span>Home Service</span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute bottom-3.5 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e101d] to-[#14070c] border border-[#c9a24a]/40 text-[#e8c66a] flex items-center justify-center shadow-lg group-hover:border-[#e8c66a] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(201,162,74,0.3)] transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-[#f7f1e7] group-hover:text-[#e8c66a] transition-colors">
            {category.name}
          </h3>

          <p className="text-xs text-[#c9a24a] font-medium tracking-wide uppercase mt-1">
            {category.tagline}
          </p>

          <p className="text-sm text-[#c4b5a5] mt-2.5 line-clamp-2 font-light leading-relaxed">
            {category.description}
          </p>

          {/* Sub-services pills */}
          <div className="mt-4 pt-3 border-t border-[#c9a24a]/15 flex flex-wrap gap-1.5">
            {category.services.slice(0, 3).map((item) => (
              <span
                key={item.id}
                className="text-[11px] px-2.5 py-1 rounded-md bg-[#220b15] text-[#e8ded0] border border-[#c9a24a]/20 group-hover:border-[#c9a24a]/40 transition-colors"
              >
                {item.name}
              </span>
            ))}
            {category.services.length > 3 && (
              <span className="text-[11px] px-2 py-1 rounded-md text-[#9e9082]">
                +{category.services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-4 border-t border-[#c9a24a]/15 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-[#9e9082] tracking-wider block">
              Starting from
            </span>
            <span className="text-base font-bold text-[#e8c66a]">
              ₹{minPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={generateWhatsAppBookingUrl({ service: category.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#c9a24a]/15 hover:bg-[#c9a24a] text-[#e8c66a] hover:text-[#0a0808] border border-[#c9a24a]/40 transition-all font-semibold cursor-pointer"
            >
              Book
            </a>

            <Link
              href={`/services#${category.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#f7f1e7] hover:text-[#e8c66a] transition-colors p-1"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
