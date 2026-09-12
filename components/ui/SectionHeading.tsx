import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 justify-center mb-3">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c9a24a]" />
          <span className="text-[#c9a24a] text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            {eyebrow}
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c9a24a]" />
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#f7f1e7] leading-tight mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-[#c4b5a5] text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}

      {/* Decorative Gold Rose Accent Line */}
      <div className={cn("flex items-center gap-2 mt-4", align === "center" ? "justify-center" : "justify-start")}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c9a24a]/60" />
        <div className="w-2 h-2 rotate-45 border border-[#c9a24a] bg-[#1a0b12]" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c9a24a]/60" />
      </div>
    </div>
  );
}
