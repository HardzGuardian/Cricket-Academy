import Image from "next/image";
import { PILLARS } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-target max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="03" label="The 4 pillars of SCA" />

      <div className="grid gap-[clamp(20px,3vw,40px)]">
        {PILLARS.map((p, i) => (
          <Reveal key={p.num}>
            <article className="grid md:grid-cols-2 gap-[clamp(22px,3vw,54px)] items-center pb-[clamp(20px,3vw,40px)] border-b border-ink/12">
              <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="font-display font-extrabold text-[clamp(52px,7vw,96px)] leading-[0.85] tracking-tight text-ink/12">
                  {p.num}
                </div>
                <h3 className="mt-2.5 font-display font-semibold text-[clamp(24px,2.6vw,34px)] leading-tight tracking-tight max-w-[22ch]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[clamp(14.5px,1.2vw,17px)] leading-relaxed text-ink-soft max-w-[58ch]">
                  {p.body}
                </p>
              </div>
              <div
                className={`relative rounded-[20px] overflow-hidden aspect-[16/11] bg-cream-2 ${
                  i % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image src={p.img} alt={p.alt} fill className="object-cover" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
