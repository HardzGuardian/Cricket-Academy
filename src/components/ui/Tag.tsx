"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const TONES = {
  light: "bg-ink/[0.035] border-ink/12 text-ink-soft",
  dark: "bg-cream/[0.06] border-cream/18 text-cream/80",
};

/**
 * Small metadata pill (batch frequency, group size, etc). Reveals with a
 * slight stagger when scrolled into view. Static otherwise — these are
 * labels, not controls, so they intentionally have no hover state.
 */
export default function Tag({
  children,
  tone = "light",
  index = 0,
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  index?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        opacity: { duration: 0.35, delay: index * 0.06 },
        y: { type: "spring", stiffness: 420, damping: 30, delay: index * 0.06 },
      }}
      className={`inline-flex items-center gap-2 text-[10.5px] tracking-[0.12em] uppercase font-medium py-2 pl-2.5 pr-3.5 border rounded-full ${TONES[tone]}`}
    >
      <span className="w-1 h-1 rounded-full bg-current opacity-40" />
      {children}
    </motion.span>
  );
}
