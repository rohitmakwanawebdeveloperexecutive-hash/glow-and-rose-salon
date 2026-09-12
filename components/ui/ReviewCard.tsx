import React from "react";
import { Star, ShieldCheck, MapPin, Quote } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="card-gradient-bg rounded-2xl p-6 sm:p-7 border border-[#c9a24a]/20 card-gradient-hover transition-all duration-300 flex flex-col justify-between relative group">
      {/* Decorative subtle gold quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-[#c9a24a]/10 group-hover:text-[#c9a24a]/20 transition-colors pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#e8c66a] text-[#e8c66a]"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm text-[#f7f1e7] leading-relaxed font-light italic mb-4">
          &ldquo;{review.comment}&rdquo;
        </p>

        {/* Service Tag */}
        {review.service && (
          <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#240b15] border border-[#c9a24a]/20 text-[11px] text-[#e8c66a]">
            <span>{review.service}</span>
          </div>
        )}
      </div>

      {/* Author & Location Footer */}
      <div className="pt-4 border-t border-[#c9a24a]/15 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar / Initial circle */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a24a] to-[#7d6022] text-[#0a0808] font-bold font-serif text-sm flex items-center justify-center shrink-0 shadow">
            {review.initial}
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-[#f7f1e7]">
                {review.author}
              </span>
              {review.verified && (
                <span title="Verified Client">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#9e9082]">
              <MapPin className="w-3 h-3 text-[#c9a24a]" />
              <span>{review.location}</span>
            </div>
          </div>
        </div>

        <span className="text-[10px] text-[#8e8072] shrink-0">{review.date}</span>
      </div>
    </div>
  );
}
