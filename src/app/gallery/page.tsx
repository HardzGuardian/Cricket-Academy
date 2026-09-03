import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Header from "@/components/Header";
import { GALLERY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery — Sunil Cricket Academy",
  description: "Photos from training sessions, matches and events at Sunil Cricket Academy, Cross Maidan.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-forest text-cream">
          <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(56px,9vw,120px)] pb-[clamp(40px,6vw,80px)]">
            <div className="text-[10.5px] tracking-[0.24em] uppercase text-accent font-bold animate-rise-sm">
              Gallery
            </div>
            <h1 className="mt-4.5 font-display font-extrabold text-[clamp(40px,8vw,96px)] leading-[0.94] tracking-tight max-w-[14ch] animate-rise [animation-delay:0.08s]">
              Nets, matches, medals.
            </h1>
            <p className="mt-6.5 max-w-[52ch] text-[clamp(15px,1.3vw,19px)] leading-relaxed text-cream/72 animate-rise [animation-delay:0.2s]">
              Photographs from training sessions, tournaments and camps at Cross
              Maidan. Click any frame to enlarge.
            </p>
          </div>
        </section>

        <section className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(40px,6vw,90px)]">
          <GalleryGrid items={GALLERY} />
        </section>
      </main>
      <Footer />
    </>
  );
}
