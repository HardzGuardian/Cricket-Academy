import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <Reveal as="div" className="flex items-baseline gap-4 mb-10 md:mb-14">
      <span className="text-[10.5px] tracking-[0.24em] uppercase text-accent font-bold whitespace-nowrap">
        {index} — {label}
      </span>
      <span
        className={`flex-1 h-px animate-grow-x ${
          dark ? "bg-cream/20" : "bg-ink/14"
        }`}
      />
    </Reveal>
  );
}
