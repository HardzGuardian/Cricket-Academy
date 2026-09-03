import { MotionLink } from "./MotionLink";
import { PROGRAMS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-20 bg-ink text-cream">
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
        <SectionHeading index="02" label="Training programs" dark />

        <div className="grid md:grid-cols-2 gap-[clamp(26px,4vw,60px)] items-end mb-[clamp(34px,5vw,60px)]">
          <Reveal as="h2" className="font-display font-extrabold text-[clamp(32px,4.4vw,58px)] leading-[1.02] tracking-[-0.035em]">
            Batches for every stage of a cricketer.
          </Reveal>
          <p className="text-[clamp(15px,1.25vw,17px)] leading-relaxed text-cream/70 max-w-[46ch]">
            Groups are kept small so every player gets net time and individual
            correction. Fees and timings are confirmed at the trial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {PROGRAMS.map((p) => (
            <Reveal key={p.num}>
              <article className="h-full border border-cream/16 rounded-[22px] p-[clamp(22px,2.4vw,32px)] flex flex-col gap-4 min-h-[300px] bg-cream/3 transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:-translate-y-1.5">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="text-[10.5px] tracking-[0.2em] uppercase text-accent font-bold">
                    {p.tag}
                  </span>
                  <span className="font-display font-extrabold text-[13px] text-cream/40">
                    {p.num}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[clamp(23px,2.2vw,29px)] leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-cream/72 flex-1">
                  {p.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.meta.map((m) => (
                    <span
                      key={m}
                      className="text-[10.5px] tracking-[0.12em] uppercase py-1.5 px-2.5 border border-cream/22 rounded-full text-cream/80"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5.5 flex flex-wrap gap-3.5 items-center justify-between p-6 rounded-[22px] bg-cream/5">
          <p className="text-[15px] text-cream/78 m-0">
            Not sure which batch fits? Send us the player&apos;s age and experience.
          </p>
          <MotionLink
            href="#admission"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
            className="bg-accent text-cream py-3.5 px-5.5 rounded-full text-[11.5px] font-bold tracking-[0.14em] uppercase hover:bg-cream hover:text-ink transition-colors"
          >
            Ask a coach
          </MotionLink>
        </div>

        <MotionLink
          href="/programs"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          className="mt-6 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.16em] uppercase text-cream/80 hover:text-accent"
        >
          See full program details <span>→</span>
        </MotionLink>
      </div>
    </section>
  );
}
