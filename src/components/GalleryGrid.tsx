"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/data";

const btnTap = { scale: 0.9 };
const btnHover = { scale: 1.08 };
const btnSpring = { type: "spring", stiffness: 420, damping: 24 } as const;

export default function GalleryGrid({
  items,
  dense = false,
}: {
  items: GalleryItem[];
  /** true on the home preview (allows tall spans), false on the full gallery page */
  dense?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState(-1);

  const step = useCallback(
    (d: number) => {
      setOpenIndex((i) => (i < 0 ? i : (i + d + items.length) % items.length));
    },
    [items.length]
  );

  useEffect(() => {
    if (openIndex < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(-1);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, step]);

  const active = openIndex >= 0 ? items[openIndex] : null;

  return (
    <>
      <div
        className={`grid gap-3 ${
          dense
            ? "grid-cols-2 md:grid-cols-4 auto-rows-[220px]"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        }`}
      >
        {items.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative border-0 p-0 cursor-zoom-in rounded-2xl overflow-hidden bg-cream-2 text-left"
            style={
              dense
                ? { gridRow: `span ${g.span}`, aspectRatio: g.ratio }
                : { aspectRatio: g.ratio }
            }
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setOpenIndex(-1)}
          className="fixed inset-0 z-100 bg-[rgba(10,12,15,0.94)] backdrop-blur-sm grid place-items-center p-[clamp(16px,4vw,56px)] animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden animate-pop-in cursor-default"
          >
            <Image src={active.src} alt={active.alt} fill className="object-contain" />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-x-0 bottom-6.5 flex gap-3 items-center justify-center cursor-default"
          >
            <motion.button
              type="button"
              aria-label="Previous image"
              onClick={() => step(-1)}
              whileHover={btnHover}
              whileTap={btnTap}
              transition={btnSpring}
              className="w-13 h-13 rounded-full border border-cream/30 bg-ink/60 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
            >
              ←
            </motion.button>
            <span className="text-cream/70 text-xs tracking-[0.18em] uppercase min-w-[90px] text-center">
              {openIndex + 1} / {items.length}
            </span>
            <motion.button
              type="button"
              aria-label="Next image"
              onClick={() => step(1)}
              whileHover={btnHover}
              whileTap={btnTap}
              transition={btnSpring}
              className="w-13 h-13 rounded-full border border-cream/30 bg-ink/60 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
            >
              →
            </motion.button>
          </div>
          <motion.button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(-1)}
            whileHover={btnHover}
            whileTap={btnTap}
            transition={btnSpring}
            className="fixed top-5.5 right-5.5 w-12 h-12 rounded-full border border-cream/30 bg-ink/60 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
          >
            ✕
          </motion.button>
        </div>
      )}
    </>
  );
}
