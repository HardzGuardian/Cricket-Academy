import { TICKER } from "@/lib/data";

export default function Marquee() {
  const row = (key: string) => (
    <div
      key={key}
      className="flex items-center gap-11 pr-11 font-display font-semibold text-sm tracking-[0.12em] uppercase whitespace-nowrap"
    >
      {TICKER.map((t, i) => (
        <span key={i}>
          {t} <span className="opacity-50">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-accent text-ink overflow-hidden py-3.5 border-b border-ink/14">
      <div className="flex w-max animate-marquee">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
