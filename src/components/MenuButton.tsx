"use client";

import { motion } from "motion/react";

const spring = { type: "spring", stiffness: 420, damping: 28 } as const;

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
      transition={spring}
      className="lg:hidden w-[46px] h-[46px] rounded-2xl border border-ink/12 bg-white/70 backdrop-blur-sm shadow-[0_1px_2px_rgba(15,18,22,0.06)] grid place-items-center"
    >
      <span className="sr-only">Menu</span>
      <span className="relative block w-4.5 h-3.5">
        <motion.span
          className="absolute left-0 w-4.5 h-[1.6px] bg-ink rounded-full"
          initial={false}
          animate={{ top: open ? 6 : 0, rotate: open ? 45 : 0 }}
          transition={spring}
        />
        <motion.span
          className="absolute left-0 top-1.5 w-4.5 h-[1.6px] bg-ink rounded-full"
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.12 }}
        />
        <motion.span
          className="absolute left-0 w-4.5 h-[1.6px] bg-ink rounded-full"
          initial={false}
          animate={{ top: open ? 6 : 12, rotate: open ? -45 : 0 }}
          transition={spring}
        />
      </span>
    </motion.button>
  );
}
