import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/lib/business";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SalonJsonLd } from "@/components/ui/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: {
    default: businessConfig.seo.defaultTitle,
    template: businessConfig.seo.titleTemplate,
  },
  description: businessConfig.seo.defaultDescription,
  keywords: businessConfig.seo.keywords,
  authors: [{ name: businessConfig.name }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/logo.png?v=2", type: "image/png" },
      { url: "/icon.png?v=2", type: "image/png" },
    ],
    shortcut: "/images/logo.png?v=2",
    apple: "/images/logo.png?v=2",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: businessConfig.siteUrl,
    title: businessConfig.seo.defaultTitle,
    description: businessConfig.seo.defaultDescription,
    siteName: businessConfig.name,
    images: [
      {
        url: "/images/hero-beauty.jpg",
        width: 1200,
        height: 630,
        alt: businessConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.defaultTitle,
    description: businessConfig.seo.defaultDescription,
    images: ["/images/hero-beauty.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <head>
        <SalonJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0808] text-[#f7f1e7] antialiased selection:bg-[#c9a24a] selection:text-[#0a0808]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
