import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group card-gradient-bg rounded-2xl overflow-hidden border border-[#c9a24a]/20 card-gradient-hover transition-all duration-300 flex flex-col justify-between">
      {/* Featured Cover Image */}
      <Link href={`/blog/${post.slug}`} className="relative h-48 sm:h-52 w-full block overflow-hidden bg-[#12070c]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18080f] via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#c9a24a]/40 text-[11px] text-[#e8c66a] font-medium flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          <span>{post.category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#9e9082] mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c9a24a]" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#c9a24a]" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f7f1e7] group-hover:text-[#e8c66a] transition-colors leading-snug">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-[#c4b5a5] mt-2 font-light line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#c9a24a]/15 flex items-center justify-between">
          <span className="text-xs text-[#9e9082]">
            By {post.author.name}
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8c66a] group-hover:text-[#f7f1e7] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
