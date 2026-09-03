import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import Scrollbars from "@/components/Scrollbars";
import { SITE } from "@/lib/data";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

// Update NEXT_PUBLIC_SITE_URL (in Vercel's project env vars) once the real
// production domain is known -- this only affects absolute-URL resolution
// for Open Graph/Twitter images and the canonical tag, nothing breaks
// without it, but social previews will point at the wrong host.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cricket-academy.vercel.app";

const title = `${SITE.name} — Best Cricket Academy in Mumbai`;
const description =
  "A group of cricket enthusiasts with keen and passionate intent to produce proficient cricketers for representing on national and international level, at Cross Maidan, Churchgate.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#14261d", // matches the forest tone used across the site
};

// LocalBusiness/SportsActivityLocation structured data: helps Google
// associate this page with the academy for local search and the map
// pack. Built from the same SITE data the rest of the page renders, so
// it can't silently drift out of sync with the visible contact info.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE.name,
  description,
  url: siteUrl,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${serif.variable} h-full`}
    >
      <head>
        {/* Static JSON built from our own SITE constant above, not user input. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {/* Visually hidden until focused, so keyboard users can jump past
            the nav without sighted users ever seeing it. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-accent focus:text-cream focus:px-4 focus:py-2.5 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <Scrollbars />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
