"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Live-status indicator: a solid dot with a ring that expands and fades
 * outward, the way an "open now" badge reads. Animates transform/opacity
 * only, and falls back to a plain dot when the viewer prefers reduced
 * motion.
 */
export default function PulseDot({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className={`relative grid place-items-center w-2 h-2 ${className}`}>
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-accent"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 3 }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            repeatDelay: 0.25,
            ease: "easeOut",
          }}
        />
      )}
      <span className="relative w-2 h-2 rounded-full bg-accent" />
    </span>
  );
}
