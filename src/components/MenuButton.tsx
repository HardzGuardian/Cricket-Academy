"use client";

import { motion } from "motion/react";

export default function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className="lg:hidden relative w-[46px] h-[46px] rounded-2xl border border-ink/18 bg-cream grid place-items-center overflow-hidden"
    >
      <span className="sr-only">Menu</span>
      <motion.span
        className="absolute w-4.5 h-[1.6px] bg-ink rounded-full"
        initial={false}
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      />
      <motion.span
        className="absolute w-4.5 h-[1.6px] bg-ink rounded-full"
        initial={false}
        animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="absolute w-4.5 h-[1.6px] bg-ink rounded-full"
        initial={false}
        animate={open ? { rotate: -45, y: 0, width: "18px" } : { rotate: 0, y: 6, width: "12.6px" }}
        style={{ alignSelf: open ? "center" : "flex-start" }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      />
    </motion.button>
  );
}
