import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: `${SITE.name} — Cricket Coaching in Mumbai`,
  description:
    "Structured, age-wise cricket coaching in Mumbai for players aged 6 to 22 — technique, fitness and match temperament under BCCI-certified coaches.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
