"use client";

import { motion } from "motion/react";
import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  // No window on the server; assume motion is fine so SSR and the first
  // client render agree, then useSyncExternalStore corrects it right
  // after mount without a hydration mismatch.
  return false;
}

/**
 * Live-status indicator: a solid dot with a ring that expands and fades
 * outward, the way an "open now" badge reads. Animates transform/opacity
 * only, and falls back to a plain dot when the viewer prefers reduced
 * motion.
 *
 * Reduced-motion is read via useSyncExternalStore rather than motion's
 * own useReducedMotion, which reads window.matchMedia synchronously in a
 * useState lazy initializer -- during SSR that reads as false, but
 * during the client's first (hydrating) render it reads the real OS
 * setting, so the two can render different markup and React flags a
 * hydration mismatch. useSyncExternalStore is the correct primitive for
 * subscribing to external browser state like this: it takes a separate
 * server-snapshot function, so SSR and the first client paint agree, and
 * corrects itself right after mount without an effect calling setState.
 */
export default function PulseDot({ className = "" }: { className?: string }) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
