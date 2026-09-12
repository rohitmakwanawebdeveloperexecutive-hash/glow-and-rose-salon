import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, Clock, ArrowRight } from "lucide-react";
import { businessConfig } from "@/lib/business";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { BlogCard } from "@/components/ui/BlogCard";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Beauty, Skincare & Salon Blog | Glow & Rose Ahmedabad",
  description:
    "Explore expert tips on waxing, skincare rituals, pre-bridal prep, facials, and doorstep salon care in Ahmedabad by Glow & Rose estheticians.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Beauty Blog", url: `${businessConfig.siteUrl}/blog` },
        ]}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#200b14] border border-[#c9a24a]/40 text-xs text-[#e8c66a] uppercase tracking-[0.25em] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Beauty Knowledge & Editorial</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#f7f1e7] leading-tight mb-4">
          The Glow & Rose <br />
          <span className="gold-gradient-text italic font-normal">
            Beauty Journal
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#c4b5a5] max-w-3xl mx-auto font-light leading-relaxed">
          In-depth guides, dermatological tips, waxing comparisons, and bridal timelines crafted by our senior beauty experts in Ahmedabad.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Featured Post Banner */}
        {featuredPost && (
          <div className="card-gradient-bg rounded-3xl overflow-hidden border border-[#c9a24a]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 lg:pr-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#e8c66a]">
                  <span className="px-3 py-1 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="text-[#9e9082] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#c9a24a]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f7f1e7] leading-snug hover:text-[#e8c66a] transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#c4b5a5] font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs text-[#9e9082]">
                    By {featuredPost.author.name}
                  </span>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs shadow hover:opacity-95 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#c9a24a]/20 pb-4">
            <h3 className="font-serif text-2xl font-bold text-[#f7f1e7]">
              All Beauty Guides ({posts.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
