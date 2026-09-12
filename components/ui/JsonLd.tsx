import React from "react";
import { businessConfig } from "@/lib/business";

export function SalonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: businessConfig.name,
    alternateName: businessConfig.shortName,
    description: businessConfig.description,
    image: `${businessConfig.siteUrl}/images/logo.png`,
    telephone: businessConfig.phone,
    url: businessConfig.siteUrl,
    priceRange: businessConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.0416",
      longitude: "72.5074",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:30",
        closes: "19:00",
      },
    ],
    sameAs: [
      businessConfig.socials.instagram,
      businessConfig.socials.googleMaps,
    ],
    areaServed: [
      "Ahmedabad",
      "Bodakdev",
      "Satellite",
      "Sindhu Bhavan Road",
      "Vastrapur",
      "Prahlad Nagar",
      "Thaltej",
      "South Bopal",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon & Home Beauty Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Waxing Services (Honey & Rica)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24K Gold & O3+ Bridal Glow Facials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "L'Oréal Hair Spa & Scalp Therapy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Crystal Jelly Manicure & Pedicure",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal & Party Glam Makeover",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Doorstep Home Beauty Services (0 Extra Charge)",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: businessConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${businessConfig.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
