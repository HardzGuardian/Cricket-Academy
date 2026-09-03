import { SITE } from "@/lib/data";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const years = new Date().getFullYear() - SITE.founded;

  return (
    <section id="about" className="scroll-mt-20 max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="01" label="About" />

      <div className="grid lg:grid-cols-2 gap-[clamp(30px,5vw,70px)] items-start">
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(32px,4.4vw,58px)] leading-[1.02] tracking-[-0.035em] max-w-[20ch] text-balance">
            Not just a coaching class — a full-time cricket habit.
          </h2>
          <p className="mt-6 text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-soft max-w-[56ch]">
            <strong className="font-bold text-ink">{SITE.name}</strong> was founded in{" "}
            <strong className="font-bold text-accent">{SITE.founded}</strong> by{" "}
            <strong className="font-bold text-ink">{SITE.founderName}</strong>, a former
            state-trials batter, with one goal: give every player — from a first-timer
            to a district aspirant — the same structured, technically sound coaching
            used at elite levels.
          </p>
          <p className="mt-4.5 text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-soft max-w-[56ch]">
            Today the academy runs six age-wise batches out of Bandra West, with a
            full-time staff of coaches, a strength trainer and a sports physiotherapist.
          </p>
          <div className="mt-8 p-6 rounded-[20px] bg-forest text-cream">
            <p className="font-serif italic text-[clamp(20px,2.1vw,27px)] leading-tight">
              &ldquo;Our job isn&apos;t to make a child play like a professional overnight —
              it&apos;s to build habits that hold up under pressure, match after match.&rdquo;
            </p>
            <div className="mt-3.5 text-[10.5px] tracking-[0.2em] uppercase text-cream/55">
              — {SITE.founderName}, Founder &amp; Head Coach
            </div>
          </div>
          <a
            href="#pillars"
            className="mt-6.5 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] uppercase border-b border-accent pb-1"
          >
            Read our coaching philosophy <span>↓</span>
          </a>
        </Reveal>

        <Reveal className="grid gap-4">
          <PhotoPlaceholder
            caption="Photo — coach working with a young batter"
            tone="ink"
            className="rounded-[20px] aspect-[4/3]"
          />
          <div className="grid grid-cols-2 gap-4">
            <PhotoPlaceholder
              caption="Photo — squad huddle"
              tone="forest"
              className="rounded-[20px] aspect-square"
            />
            <div className="rounded-[20px] bg-cream border border-ink/14 p-5.5 flex flex-col justify-between aspect-square">
              <div className="font-display font-extrabold text-[clamp(40px,5vw,60px)] leading-[0.9] tracking-tight">
                {years}
              </div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted leading-relaxed">
                Years coaching
                <br />
                out of Bandra
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
