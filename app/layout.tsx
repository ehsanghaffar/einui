import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TopHeader } from "@/components/top-header";
// @ts-ignore
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ui.eindev.ir";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ein UI - Liquid Glass Component Library for React & Next.js",
    template: "%s | Ein UI",
  },
  description:
    "Beautiful, accessible React components with frosted glass morphism. Built with Radix UI primitives, Framer Motion animations, and Tailwind CSS v4. Install via Shadcn registry.",
  generator: "Next.js",
  applicationName: "Ein UI",
  referrer: "origin-when-cross-origin",
  keywords: [
    "shadcn",
    "ui components",
    "liquid glass",
    "glass morphism",
    "tailwind css",
    "react components",
    "nextjs",
    "radix ui",
    "framer motion",
    "component library",
    "design system",
  ],
  authors: [{ name: "Ehsan", url: "https://eindev.ir" }],
  creator: "Ein",
  publisher: "Ein",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-white.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ein UI",
    title: "Ein UI - Liquid Glass Component Library",
    description:
      "Beautiful, accessible React components with frosted glass morphism and smooth animations.",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "Ein UI - Liquid Glass Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ein UI - Liquid Glass Component Library",
    description: "Beautiful, accessible React components with frosted glass morphism.",
    creator: "@ehsanghaffar",
    site: "@einui",
    images: ["/logo-white.png"],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: "Ein UI",
                  url: SITE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${SITE_URL}/logo.png`,
                  },
                  sameAs: ["https://github.com/ehsanghaffar", "https://twitter.com/ehsanghaffar"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "Ein UI",
                  description: "Liquid Glass Component Library for React & Next.js",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: `${SITE_URL}/docs?search={search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <TopHeader />
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
