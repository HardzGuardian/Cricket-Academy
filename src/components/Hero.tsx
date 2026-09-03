"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SOCIAL_ICONS } from "@/components/icons/SocialIcons";
import PulseDot from "@/components/ui/PulseDot";
import { MotionLink } from "@/components/MotionLink";
import { HERO_BADGE, HERO_FACTS, SOCIALS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[min(88vh,820px)] grid items-end overflow-hidden bg-forest">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Batting practice at Cross Maidan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%] animate-zoom-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/62 via-ink/28 to-ink/90" />
      </div>

      <div className="relative w-full max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(90px,14vh,160px)] pb-[clamp(26px,4vw,46px)]">
        <div className="inline-flex items-center gap-2.5 py-1.5 pl-2 pr-3.5 border border-cream/28 rounded-full text-cream text-[10.5px] tracking-[0.2em] uppercase animate-rise-sm">
          <PulseDot />
          {HERO_BADGE}
        </div>

        <h1 className="mt-5 text-cream font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-[clamp(46px,9vw,112px)] max-w-[15ch] text-balance">
          <span className="block overflow-hidden">
            <span className="block animate-rise [animation-delay:0.1s]">Best Cricket</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-rise [animation-delay:0.22s]">Academy in</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-rise text-accent [animation-delay:0.34s]">Mumbai</span>
          </span>
        </h1>

        <p className="mt-6 max-w-[54ch] text-cream/82 text-[clamp(15px,1.35vw,19px)] leading-relaxed animate-rise [animation-delay:0.5s]">
          A group of cricket enthusiasts with keen and passionate intent to produce
          proficient cricketers for representing on national and international level.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:0.62s]">
          <MotionLink
            href="#admission"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="inline-flex items-center gap-3 bg-accent text-cream px-6.5 py-4 rounded-full text-xs font-bold tracking-[0.16em] uppercase hover:bg-cream hover:text-ink transition-colors"
          >
            Book a free trial <span className="text-base">→</span>
          </MotionLink>
          <MotionLink
            href="/programs"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="inline-flex items-center gap-3 border border-cream/34 text-cream px-6.5 py-4 rounded-full text-xs font-bold tracking-[0.16em] uppercase hover:bg-cream/12 transition-colors"
          >
            Training programs
          </MotionLink>
        </div>

        <div className="mt-[clamp(40px,7vw,84px)] pt-5.5 border-t border-cream/18 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-5.5 animate-fade-in [animation-delay:0.9s]">
          {HERO_FACTS.map((f) => (
            <div key={f.k}>
              <div className="font-display font-extrabold text-cream text-[clamp(26px,3vw,40px)] leading-none tracking-tight">
                {f.v}
              </div>
              <div className="mt-2 text-[10.5px] tracking-[0.18em] uppercase text-cream/60">
                {f.k}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[clamp(18px,4vw,56px)] top-1/2 -translate-y-1/2 hidden sm:grid gap-3.5 animate-fade-in [animation-delay:1.1s]">
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
              className="w-10 h-10 rounded-full border border-cream/30 text-cream grid place-items-center hover:bg-accent hover:border-accent transition-colors"
            >
              <Icon className="w-4.5 h-4.5" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
