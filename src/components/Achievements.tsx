"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, TOURNAMENTS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setProgress(1);
      setDone(true);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setProgress(eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setDone(true);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const p = done ? 1 : progress;

  return (
    <section id="achievements" ref={ref} className="scroll-target bg-accent text-ink">
      <div className="section-inner max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,130px)]">
        <SectionHeading index="06" label="Achievements" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 pb-[clamp(36px,5vw,64px)]">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-[clamp(46px,6.5vw,92px)] leading-[0.88] tracking-tight">
                {Math.round(s.to * p)}
                {s.suffix ?? ""}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-ink/66 leading-relaxed max-w-[20ch]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-3.5">
          {TOURNAMENTS.map((t) => (
            <div key={t.name} className="bg-ink text-cream rounded-[20px] p-[clamp(22px,2.4vw,30px)]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-accent font-bold">
                {t.kind}
              </div>
              <h3 className="mt-3 font-display font-semibold text-[clamp(20px,1.9vw,25px)] leading-tight tracking-tight">
                {t.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/68">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
