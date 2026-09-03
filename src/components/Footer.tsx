"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_ICONS } from "@/components/icons/SocialIcons";
import { FOOTER_COLS, SITE, SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-cream/12 mt-auto">
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(48px,7vw,96px)] pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(30px,4vw,60px)]">
          <div>
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-cream/62 max-w-[34ch]">
              Structured cricket coaching in Mumbai — building technique, fitness and
              match temperament since {SITE.founded}.
            </p>
            <div className="mt-5.5 flex gap-2">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    title={s.label}
                    aria-label={s.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                    className="w-10 h-10 rounded-full border border-cream/24 grid place-items-center hover:bg-accent hover:border-accent transition-colors"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <div className="text-[10.5px] tracking-[0.2em] uppercase text-cream/45 font-bold">
                {col.title}
              </div>
              <div className="mt-4.5 grid gap-2.5">
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="text-[15px] text-cream/78 hover:text-accent">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="text-[10.5px] tracking-[0.2em] uppercase text-cream/45 font-bold">
              Visit
            </div>
            <p className="mt-4.5 text-[15px] leading-relaxed text-cream/78">{SITE.address}</p>
            <a href={SITE.phoneHref} className="mt-4 block font-display font-semibold text-xl tracking-tight hover:text-accent">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-1.5 block text-sm text-cream/70 hover:text-accent">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-[clamp(40px,6vw,72px)] pt-6 border-t border-cream/12 flex flex-wrap gap-3.5 justify-between text-xs text-cream/45">
          <span>© {new Date().getFullYear()} {SITE.name}. Concept design.</span>
          <span>{SITE.area} · Maharashtra</span>
        </div>
      </div>
    </footer>
  );
}
