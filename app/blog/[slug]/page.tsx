import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Sparkles,
  MessageCircle,
  Share2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import { businessConfig } from "@/lib/business";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { generateWhatsAppBookingUrl } from "@/lib/utils";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
import { BlogCard } from "@/components/ui/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Glow & Rose",
    };
  }

  const postUrl = `${businessConfig.siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.metaTitle || post.title} | Glow & Rose`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// Markdown renderer helper for clean typography without heavy packages
function renderSimpleMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushTable = (key: string) => {
    if (tableRows.length > 0) {
      const headers = tableRows[0];
      const body = tableRows.slice(2); // skip separator row

      elements.push(
        <div key={key} className="overflow-x-auto my-8">
          <table className="w-full text-left border-collapse border border-[#c9a24a]/25 text-sm">
            <thead>
              <tr className="bg-[#18080f] border-b border-[#c9a24a]/30">
                {headers.map((h, i) => (
                  <th key={i} className="p-3.5 text-[#e8c66a] font-semibold">
                    {h.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c9a24a]/10">
              {body.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/5">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 text-[#c4b5a5]">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const flushList = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key} className="my-5 space-y-2.5 pl-2 text-sm sm:text-base text-[#c4b5a5]">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c9a24a] shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Tables
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      if (!inTable) {
        flushList(`list-before-table-${index}`);
        inTable = true;
      }
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      tableRows.push(cells);
      return;
    } else if (inTable) {
      flushTable(`table-${index}`);
    }

    // Unordered lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (!inList) {
        inList = true;
      }
      listItems.push(trimmed.slice(2));
      return;
    } else if (inList) {
      flushList(`list-${index}`);
    }

    // Headings
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${index}`}
          className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#f7f1e7] mt-10 mb-5 leading-tight"
        >
          {trimmed.slice(2)}
        </h1>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="text-xl sm:text-2xl font-serif font-bold text-[#e8c66a] mt-8 mb-4 border-b border-[#c9a24a]/20 pb-2"
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="text-lg sm:text-xl font-serif font-semibold text-[#f7f1e7] mt-6 mb-3"
        >
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed === "---") {
      elements.push(
        <hr key={`hr-${index}`} className="my-8 border-t border-[#c9a24a]/20" />
      );
    } else if (trimmed.length > 0) {
      // Regular paragraph with bold inline formatting
      const formatted = trimmed
        .replace(/\*\*(.*?)\*\*/g, "$1") // for simple clean parsing
        .replace(/\*(.*?)\*/g, "$1");

      elements.push(
        <p
          key={`p-${index}`}
          className="text-sm sm:text-base text-[#c4b5a5] leading-relaxed my-4 font-light"
        >
          {trimmed.includes("**") ? (
            <span dangerouslySetInnerHTML={{
              __html: trimmed
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#f7f1e7] font-semibold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-[#e8c66a]">$1</em>')
            }} />
          ) : (
            trimmed
          )}
        </p>
      );
    }
  });

  flushTable("final-table");
  flushList("final-list");

  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const postUrl = `${businessConfig.siteUrl}/blog/${post.slug}`;

  return (
    <div className="pt-28 pb-20 bg-[#0a0808]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: businessConfig.siteUrl },
          { name: "Beauty Blog", url: `${businessConfig.siteUrl}/blog` },
          { name: post.title, url: postUrl },
        ]}
      />

      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        dateModified={post.updatedDate}
        authorName={post.author.name}
        image={post.coverImage}
        url={postUrl}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#c9a24a] hover:text-[#f7f1e7] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Category Pill */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[#c9a24a]/20 border border-[#c9a24a]/40 text-xs text-[#e8c66a] font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-[#9e9082] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#c9a24a]" />
            {post.readTime}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#f7f1e7] leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author & Date Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#c9a24a]/20 mb-8 text-xs text-[#c4b5a5]">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border border-[#c9a24a]/40 overflow-hidden bg-black shrink-0">
              <Image
                src={post.author.avatar || "/images/logo.png"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-[#f7f1e7]">{post.author.name}</p>
              <p className="text-[11px] text-[#9e9082]">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#9e9082]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#c9a24a]" />
              <span>Published: {post.date}</span>
            </span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-[#c9a24a]/30 mb-10 shadow-2xl bg-[#12070c]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Article Content Body */}
        <div className="card-gradient-bg rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#c9a24a]/20 shadow-xl mb-12">
          {renderSimpleMarkdown(post.content)}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 mt-8 border-t border-[#c9a24a]/20 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-semibold text-[#c9a24a] mr-2">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-[#18080f] border border-[#c9a24a]/25 text-[#c4b5a5]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Direct WhatsApp Consultation CTA Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2a0e1c] via-[#1a0b12] to-[#12070c] border border-[#c9a24a]/40 shadow-2xl text-center space-y-4 mb-16">
          <Sparkles className="w-8 h-8 text-[#e8c66a] mx-auto" />
          <h3 className="text-2xl font-serif font-bold text-[#f7f1e7]">
            Want Personalized Beauty Advice or a Booking?
          </h3>
          <p className="text-sm text-[#c4b5a5] max-w-lg mx-auto font-light">
            Have questions regarding your skin type, waxing choices, or doorstep appointment in Ahmedabad? Chat directly with our senior beauticians.
          </p>
          <a
            href={generateWhatsAppBookingUrl({
              message: `Hi, I just read your article "${post.title}" and would like to enquire about your services.`,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#a37f30] text-[#0a0808] font-bold text-xs sm:text-sm shadow hover:opacity-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-[#c9a24a]/20">
            <h3 className="font-serif text-2xl font-bold text-[#f7f1e7]">
              Related Beauty Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
