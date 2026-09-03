import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif } from "next/font/google";
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

export const metadata: Metadata = {
  title: `${SITE.name} — Best Cricket Academy in Mumbai`,
  description:
    "A group of cricket enthusiasts with keen and passionate intent to produce proficient cricketers for representing on national and international level, at Cross Maidan, Churchgate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${serif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Scrollbars />
        {children}
      </body>
    </html>
  );
}
