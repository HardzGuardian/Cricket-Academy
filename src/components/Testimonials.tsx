"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setI((v) => (v + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const q = TESTIMONIALS[i];

  const go = (next: number) => {
    setI(next);
    restart();
  };

  return (
    <section id="testimonials" className="scroll-mt-20 bg-ink text-cream">
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
        <SectionHeading index="08" label="What our students say" dark />

        <blockquote className="m-0">
          <p className="font-serif text-[clamp(28px,4.4vw,58px)] leading-[1.14] tracking-tight max-w-[30ch] min-h-[4.6em]">
            &ldquo;{q.text}&rdquo;
          </p>
        </blockquote>

        <div className="mt-[clamp(26px,4vw,44px)] flex flex-wrap gap-6 items-center justify-between">
          <div>
            <div className="font-display font-semibold text-xl tracking-tight">{q.name}</div>
            <div className="mt-1.5 text-[10.5px] tracking-[0.2em] uppercase text-cream/50">
              SCA student · Google review
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={() => go((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="w-12.5 h-12.5 rounded-full border border-cream/28 text-cream text-lg hover:bg-accent hover:border-accent transition-colors"
            >
              ←
            </motion.button>
            <motion.button
              type="button"
              onClick={() => go((i + 1) % TESTIMONIALS.length)}
              aria-label="Next"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="w-12.5 h-12.5 rounded-full border border-cream/28 text-cream text-lg hover:bg-accent hover:border-accent transition-colors"
            >
              →
            </motion.button>
          </div>
        </div>

        <div className="mt-6.5 flex gap-1.5">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              onClick={() => go(idx)}
              aria-label={t.name}
              className={`flex-1 h-[3px] border-0 p-0 cursor-pointer transition-colors ${
                idx === i ? "bg-accent" : "bg-cream/22"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
