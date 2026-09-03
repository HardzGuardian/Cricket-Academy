"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./MenuButton";
import { MotionLink } from "./MotionLink";
import { NAV, SITE } from "@/lib/data";
import { SPRING } from "@/lib/motion";

const tap = { scale: 0.96 };

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Publish the header's height as --header-h so the overlay scrollbar can
  // start below it instead of running across it. Measured rather than
  // hardcoded, since the header grows when the logo text wraps on narrow
  // viewports.
  // SCROLL SUBSYSTEM: this is the publisher — see the canonical contract
  // in the SCROLL SUBSYSTEM block in src/app/globals.css.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    // getBoundingClientRect keeps the fractional height; offsetHeight rounds
    // to an integer and leaves a sub-pixel sliver of bar above the header.
    const publish = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.getBoundingClientRect().height}px`
      );
    publish();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/10"
    >
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-3.5 flex items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink hover:text-ink"
          onClick={() => setOpen(false)}
        >
          <Image
            src={SITE.logo}
            alt={SITE.name}
            width={57}
            height={34}
            unoptimized
            priority
            className="h-8.5"
            style={{ width: "auto" }}
          />
          <span className="grid gap-0.5 leading-none">
            <span className="font-display font-extrabold text-[15px] tracking-tight">
              {SITE.name}
            </span>
            <span className="text-[9.5px] tracking-[0.22em] uppercase text-muted">
              {SITE.area} · Est. {SITE.founded}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-[clamp(14px,2vw,30px)]">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-ink hover:text-accent transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <MotionLink
            href="/#admission"
            whileHover={{ scale: 1.04 }}
            whileTap={tap}
            transition={SPRING}
            className="bg-accent text-cream px-5 py-2.5 rounded-full text-[11.5px] font-bold tracking-[0.14em] uppercase hover:bg-ink transition-colors"
          >
            Book a trial
          </MotionLink>
        </nav>

        <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden absolute top-full inset-x-0 bg-cream border-t border-ink/10 px-[clamp(18px,4vw,56px)] py-3.5 pb-6 grid gap-0.5 shadow-[0_16px_30px_-10px_rgba(15,18,22,0.25)]"
          >
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-[26px] tracking-tight py-2.5 border-b border-ink/8"
              >
                {n.label}
              </Link>
            ))}
            <MotionLink
              href="/#admission"
              onClick={() => setOpen(false)}
              whileTap={tap}
              transition={SPRING}
              className="mt-3.5 bg-accent text-cream py-4 rounded-full text-center text-xs font-bold tracking-[0.16em] uppercase"
            >
              Book a trial
            </MotionLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
