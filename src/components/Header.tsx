"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-3.5 flex items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink hover:text-ink"
          onClick={() => setOpen(false)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="#E2571F" strokeWidth="1.6" />
            <path d="M4 13.5C7 11 17 11 20 13.5" stroke="#E2571F" strokeWidth="1.4" />
            <path d="M4 10.5C7 13 17 13 20 10.5" stroke="#E2571F" strokeWidth="1.4" />
          </svg>
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
          <Link
            href="/#admission"
            className="bg-accent text-cream px-5 py-2.5 rounded-full text-[11.5px] font-bold tracking-[0.14em] uppercase hover:bg-ink transition-colors"
          >
            Book a trial
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-[46px] h-[46px] border border-ink/18 rounded-2xl grid place-items-center gap-1.5 p-3"
        >
          <span className="block w-full h-[1.6px] bg-ink" />
          <span className="block w-full h-[1.6px] bg-ink" />
          <span className="block w-[70%] h-[1.6px] bg-ink self-start" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 px-[clamp(18px,4vw,56px)] py-3.5 pb-6 grid gap-0.5 animate-rise-sm">
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
          <Link
            href="/#admission"
            onClick={() => setOpen(false)}
            className="mt-3.5 bg-accent text-cream py-4 rounded-full text-center text-xs font-bold tracking-[0.16em] uppercase"
          >
            Book a trial
          </Link>
        </div>
      )}
    </header>
  );
}
