import { FACILITIES, SITE } from "@/lib/data";
import PhotoPlaceholder from "./PhotoPlaceholder";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-20 max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(64px,9vw,140px)]">
      <SectionHeading index="05" label="Facilities" />

      <div className="grid lg:grid-cols-2 gap-[clamp(28px,4vw,60px)] items-start">
        <Reveal className="relative rounded-3xl overflow-hidden aspect-[4/5]">
          <PhotoPlaceholder caption="Photo — the home ground" tone="ink" className="absolute inset-0" />
          <div className="absolute inset-x-4 bottom-4 p-5 rounded-2xl bg-ink/72 backdrop-blur-sm text-cream">
            <div className="text-[10px] tracking-[0.2em] uppercase text-cream/60">Home ground</div>
            <div className="mt-1.5 font-display font-semibold text-xl tracking-tight">
              {SITE.area}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(30px,4vw,50px)] leading-[1.04] tracking-[-0.035em] max-w-[20ch]">
            Everything a season needs, on one ground.
          </h2>
          <div className="mt-6.5 grid">
            {FACILITIES.map((f) => (
              <div key={f.num} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-ink/12">
                <div className="font-display font-extrabold text-[13px] text-accent pt-0.5">
                  {f.num}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#55595f] max-w-[52ch]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
