import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MotionLink } from "@/components/MotionLink";
import Reveal from "@/components/Reveal";
import Tag from "@/components/ui/Tag";
import { PILLARS, PROGRAMS, PROGRAMS_INTRO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Training Programs — Sunil Cricket Academy",
  description: "Age-wise cricket training batches and the orthodox training module at Sunil Cricket Academy.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink text-cream">
          <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] pt-[clamp(56px,9vw,120px)] pb-[clamp(40px,6vw,80px)]">
            <div className="text-[10.5px] tracking-[0.24em] uppercase text-accent font-bold animate-rise-sm">
              Training
            </div>
            <h1 className="mt-4.5 font-display font-extrabold text-[clamp(40px,8vw,96px)] leading-[0.94] tracking-tight max-w-[16ch] animate-rise [animation-delay:0.08s]">
              Programs &amp; the orthodox module
            </h1>
            <p className="mt-6.5 max-w-[58ch] text-[clamp(15px,1.3vw,19px)] leading-relaxed text-cream/72 animate-rise [animation-delay:0.2s]">
              {PROGRAMS_INTRO}
            </p>
          </div>
        </section>

        <section className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(56px,8vw,110px)]">
          <div className="grid">
            {PROGRAMS.map((p) => (
              <Reveal key={p.num}>
                <article className="grid md:grid-cols-2 gap-[clamp(18px,3vw,48px)] py-[clamp(26px,3vw,44px)] border-t border-ink/14">
                  <div>
                    <div className="text-[10.5px] tracking-[0.2em] uppercase text-accent font-bold">
                      {p.tag}
                    </div>
                    <h2 className="mt-3 font-display font-semibold text-[clamp(26px,3vw,38px)] leading-tight tracking-tight max-w-[18ch]">
                      {p.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[clamp(15px,1.2vw,17px)] leading-relaxed text-ink-soft max-w-[54ch]">
                      {p.body}
                    </p>
                    <div className="mt-4.5 flex flex-wrap gap-2">
                      {p.meta.map((m, i) => (
                        <Tag key={m} index={i}>
                          {m}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-[clamp(40px,6vw,80px)] grid gap-[clamp(20px,3vw,40px)]">
            {PILLARS.map((p) => (
              <Reveal key={p.num}>
                <article className="grid md:grid-cols-2 gap-[clamp(22px,3vw,54px)] items-center">
                  <div className="relative rounded-[20px] overflow-hidden aspect-[16/11] bg-cream-2">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-[13px] text-accent">
                      Pillar {p.num}
                    </div>
                    <h3 className="mt-2.5 font-display font-semibold text-[clamp(24px,2.6vw,32px)] leading-tight tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3.5 text-[clamp(14.5px,1.2vw,17px)] leading-relaxed text-ink-soft max-w-[56ch]">
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-[clamp(44px,6vw,84px)] p-[clamp(28px,4vw,56px)] rounded-3xl bg-forest text-cream flex flex-wrap gap-5.5 items-center justify-between">
            <h3 className="font-display font-extrabold text-[clamp(24px,3vw,38px)] leading-tight tracking-tight max-w-[24ch]">
              Come see a session before you decide.
            </h3>
            <MotionLink
              href="/#admission"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              className="bg-accent text-cream py-4.5 px-6.5 rounded-full text-xs font-bold tracking-[0.16em] uppercase hover:bg-cream hover:text-ink transition-colors"
            >
              Book a free trial →
            </MotionLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
