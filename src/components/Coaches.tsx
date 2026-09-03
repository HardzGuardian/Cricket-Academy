"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { COACHES, COACHES_INTRO } from "@/lib/data";
import { spring } from "@/lib/motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Coach = (typeof COACHES)[number];

const CARD_WIDTH = 240; // px, kept in sync with the w-[240px] class below
const CARD_GAP = 14; // px, kept in sync with the gap-3.5 class below

function CoachCard({ coach, sizes, className = "" }: { coach: Coach; sizes: string; className?: string }) {
  return (
    <figure
      className={`group relative m-0 rounded-[20px] overflow-hidden aspect-[3/4] bg-forest-2 ring-1 ring-cream/0 transition-all duration-500 ease-out hover:ring-cream/25 hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.6)] ${className}`}
    >
      <Image
        src={coach.img}
        alt={coach.name}
        fill
        sizes={sizes}
        className="object-cover object-[50%_20%] saturate-90 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.07]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 px-4.5 pt-5.5 pb-4.5 bg-gradient-to-t from-[rgba(11,22,16,0.92)] to-transparent transition-all duration-500 ease-out group-hover:from-[rgba(11,22,16,0.97)] group-hover:pb-6">
        <div className="text-[9.5px] tracking-[0.2em] uppercase text-accent font-bold">
          {coach.role}
        </div>
        <div className="mt-1.5 font-display font-semibold text-lg tracking-tight">
          {coach.name}
        </div>
        <div className="mt-2 h-px w-0 bg-cream/70 transition-all duration-500 ease-out group-hover:w-9" />
      </figcaption>
    </figure>
  );
}

export default function Coaches() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Belt-and-suspenders reset to the first card. Two things were fighting
  // each other here, not one bug:
  //   1. The browser's own fragment-navigation scroll-into-view (landing
  //      on #coaches) nudges this nested horizontal scroller along with
  //      the page's vertical scroll, by an amount that isn't predictable
  //      or tied to a fixed delay.
  //   2. This track has scroll-smooth (scroll-behavior: smooth) for the
  //      Prev/Next buttons -- which also applies to direct `scrollLeft =`
  //      assignment, not just .scrollTo(). Re-asserting scrollLeft every
  //      frame under smooth behavior kept restarting an animation that
  //      never got a chance to finish before the next frame interrupted
  //      it, settling wherever it happened to be paused (consistently
  //      ~18px off in testing) instead of actually reaching 0.
  // Forcing scroll-behavior: auto for the duration of the correction
  // makes each reset land instantly, then smooth is restored so the
  // buttons keep their animated scroll.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.scrollBehavior = "auto";

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      track.scrollLeft = 0;
      if (now - start < 500) {
        frame = requestAnimationFrame(tick);
      } else {
        track.style.scrollBehavior = "";
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      track.style.scrollBehavior = "";
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <section id="coaches" className="scroll-target bg-forest text-cream">
      <div className="section-inner max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
        <SectionHeading index="04" label="Our team" dark />

        <div className="mb-[clamp(34px,5vw,60px)]">
          <div className="grid md:grid-cols-2 gap-[clamp(26px,4vw,60px)] items-end">
            <Reveal as="h2" className="font-display font-extrabold text-[clamp(32px,4.4vw,58px)] leading-[1.02] tracking-[-0.035em]">
              Coaches and fitness trainers.
            </Reveal>
            <p className="text-[clamp(15px,1.25vw,17px)] leading-relaxed text-cream/72 max-w-[48ch]">
              {COACHES_INTRO}
            </p>
          </div>

          {/* Carousel controls — mobile/tablet only, on their own row below
              the heading so they never compete for space with it (a
              shared flex-wrap row here squeezed both at tablet widths).
              Same spring(24)/icon-button pattern used by the testimonial
              and lightbox arrows elsewhere on the site. */}
          <div className="lg:hidden flex items-center justify-end gap-3 mt-6">
            <motion.button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous coach"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={spring(24)}
              className="w-11 h-11 rounded-full border border-cream/28 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next coach"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={spring(24)}
              className="w-11 h-11 rounded-full border border-cream/28 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Mobile/tablet: horizontal scroll-snap carousel. Deliberately NOT
            bled to the viewport edge (no negative-margin trick): that
            trick makes the track's own left edge sit inside the section's
            padding, so a snap-start card's snap point no longer lines up
            with scrollLeft: 0 -- the browser was resting a few px into the
            first card, showing a sliver of it cut off. Keeping the track
            flush with the section's own padding means scrollLeft: 0 IS
            the first card's snap point, no scroll-padding math needed. */}
        <Reveal className="lg:hidden">
          <div
            ref={trackRef}
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [overflow-anchor:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {COACHES.map((c) => (
              <CoachCard key={c.name} coach={c} sizes="240px" className="flex-none w-[240px] snap-start" />
            ))}
          </div>
        </Reveal>

        {/* Desktop: the original static grid, all five coaches at once. */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-3.5">
          {COACHES.map((c) => (
            <Reveal key={c.name} className="aspect-[3/4]">
              <CoachCard coach={c} sizes="250px" className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
