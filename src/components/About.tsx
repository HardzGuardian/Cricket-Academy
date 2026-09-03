import Image from "next/image";
import { SITE } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  // Server Component — computed at build/deploy time, so this figure
  // refreshes on the next redeploy, not on New Year's Day. Deliberate:
  // see Phase 1 CONTEXT.md D-13/D-14 (client-side computation and a fixed
  // "since 2016" string were both rejected).
  const years = new Date().getFullYear() - SITE.founded;

  return (
    <section id="about" className="scroll-target max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="01" label="About" />

      <div className="grid lg:grid-cols-2 gap-[clamp(30px,5vw,70px)] items-start">
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(32px,4.4vw,60px)] leading-[1.02] tracking-[-0.035em] max-w-[20ch] text-balance">
            Not just an institution for cricket.
          </h2>
          <p className="mt-6 text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-soft max-w-[56ch]">
            <strong className="font-bold text-ink">SCA</strong> flourished in{" "}
            <strong className="font-bold text-accent">{SITE.founded}</strong> with the
            determination and efforts of Coach{" "}
            <strong className="font-bold text-ink">{SITE.founderName}</strong>. Nowadays
            the orthodox training module is seen to be declining gradually, but SCA
            utilizes this excellent module to give insight and intense technical
            knowledge about the game and prepare players to be extremely efficient
            professionals.
          </p>
          <p className="mt-4.5 text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-soft max-w-[56ch]">
            We warmly welcome all lovers of cricket in our academy who wish to learn
            and improve their techniques.
          </p>
          <div className="mt-8 p-6 rounded-[20px] bg-forest text-cream">
            <p className="font-serif italic text-[clamp(20px,2.1vw,27px)] leading-tight">
              &ldquo;We have an open-door policy of student&ndash;coach interaction.&rdquo;
            </p>
            <div className="mt-3.5 text-[10.5px] tracking-[0.2em] uppercase text-cream/55">
              How we work
            </div>
          </div>
          <a
            href="#pillars"
            className="mt-6.5 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] uppercase border-b border-accent pb-1"
          >
            Read the 4 pillars <span>↓</span>
          </a>
        </Reveal>

        <Reveal className="grid gap-4">
          <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-cream-2">
            <Image src="/images/about-1.jpg" alt="SCA junior squad seated with certificates, medals and a trophy" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-[20px] overflow-hidden aspect-square bg-cream-2">
              <Image src="/images/about-2.jpg" alt="Player holding a trophy, a medal and an SCA Certificate of Honour" fill className="object-cover" />
            </div>
            <div className="relative rounded-[20px] bg-forest text-cream p-5.5 flex flex-col justify-end aspect-square overflow-hidden">
              <div className="absolute top-5.5 left-5.5 right-5.5 flex items-center gap-2.5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream/45 whitespace-nowrap">
                  Since {SITE.founded}
                </span>
                <span className="flex-1 h-px bg-cream/15" />
              </div>
              <div className="font-display font-extrabold text-[clamp(56px,7.5vw,88px)] leading-[0.8] tracking-[-0.045em]">
                {years}
              </div>
              <div className="mt-2.5 text-[11px] tracking-[0.18em] uppercase text-cream/55 leading-relaxed">
                Years coaching
                <br />
                at Cross Maidan
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
