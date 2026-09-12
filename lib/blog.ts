import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage: string;
  readTime: string;
  tags: string[];
  canonical?: string;
  featured?: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const wordCount = content.split(/\s+/g).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

      return {
        slug,
        title: data.title || "Untitled Post",
        metaTitle: data.metaTitle || data.title,
        metaDescription: data.metaDescription || data.excerpt,
        excerpt: data.excerpt || "",
        date: data.date || "2026-01-01",
        updatedDate: data.updatedDate,
        category: data.category || "Beauty Tips",
        author: {
          name: data.author?.name || "Glow & Rose Editorial",
          role: data.author?.role || "Senior Beauty Expert",
          avatar: data.author?.avatar || "/images/logo.png",
        },
        coverImage: data.coverImage || "/images/hero-beauty.jpg",
        readTime: data.readTime || readTime,
        tags: Array.isArray(data.tags) ? data.tags : [],
        canonical: data.canonical,
        featured: Boolean(data.featured),
      } as BlogPostMeta;
    });

  // Sort posts by date descending
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/g).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    return {
      slug,
      title: data.title || "Untitled Post",
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
      excerpt: data.excerpt || "",
      date: data.date || "2026-01-01",
      updatedDate: data.updatedDate,
      category: data.category || "Beauty Tips",
      author: {
        name: data.author?.name || "Glow & Rose Editorial",
        role: data.author?.role || "Senior Beauty Expert",
        avatar: data.author?.avatar || "/images/logo.png",
      },
      coverImage: data.coverImage || "/images/hero-beauty.jpg",
      readTime: data.readTime || readTime,
      tags: Array.isArray(data.tags) ? data.tags : [],
      canonical: data.canonical,
      featured: Boolean(data.featured),
      content,
    };
  } catch {
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories);
}
