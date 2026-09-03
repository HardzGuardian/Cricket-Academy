import { GALLERY } from "@/lib/data";
import GalleryGrid from "./GalleryGrid";
import { MotionLink } from "./MotionLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-20 max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="07" label="Gallery" />

      <div className="flex flex-wrap gap-5 items-end justify-between mb-[clamp(26px,4vw,44px)]">
        <Reveal as="h2" className="font-display font-extrabold text-[clamp(32px,4.4vw,58px)] leading-[1.02] tracking-[-0.035em] max-w-[22ch]">
          Seasons at the maidan.
        </Reveal>
        <MotionLink
          href="/gallery"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          className="inline-flex items-center gap-2.5 border border-ink/22 px-5.5 py-3.5 rounded-full text-[11.5px] font-bold tracking-[0.14em] uppercase hover:bg-ink hover:text-cream transition-colors"
        >
          See all photos <span>→</span>
        </MotionLink>
      </div>

      <GalleryGrid items={GALLERY.slice(0, 6)} dense />
    </section>
  );
}
