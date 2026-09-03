import Image from "next/image";
import { COACHES, COACHES_INTRO } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Coaches() {
  return (
    <section id="coaches" className="scroll-target bg-forest text-cream">
      <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
        <SectionHeading index="04" label="Our team" dark />

        <div className="grid md:grid-cols-2 gap-[clamp(26px,4vw,60px)] items-end mb-[clamp(34px,5vw,60px)]">
          <Reveal as="h2" className="font-display font-extrabold text-[clamp(32px,4.4vw,58px)] leading-[1.02] tracking-[-0.035em]">
            Coaches and fitness trainers.
          </Reveal>
          <p className="text-[clamp(15px,1.25vw,17px)] leading-relaxed text-cream/72 max-w-[48ch]">
            {COACHES_INTRO}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          {COACHES.map((c) => (
            <Reveal key={c.name} className="aspect-[3/4]">
              <figure className="group relative m-0 rounded-[20px] overflow-hidden aspect-[3/4] bg-forest-2 h-full ring-1 ring-cream/0 transition-all duration-500 ease-out hover:ring-cream/25 hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.6)]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover object-[50%_20%] saturate-90 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.07]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-4.5 pt-5.5 pb-4.5 bg-gradient-to-t from-[rgba(11,22,16,0.92)] to-transparent transition-all duration-500 ease-out group-hover:from-[rgba(11,22,16,0.97)] group-hover:pb-6">
                  <div className="text-[9.5px] tracking-[0.2em] uppercase text-accent font-bold">
                    {c.role}
                  </div>
                  <div className="mt-1.5 font-display font-semibold text-lg tracking-tight">
                    {c.name}
                  </div>
                  <div className="mt-2 h-px w-0 bg-cream/70 transition-all duration-500 ease-out group-hover:w-9" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
