import { MetadataRoute } from "next";
import { businessConfig } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessConfig.siteUrl}/sitemap.xml`,
  };
}
