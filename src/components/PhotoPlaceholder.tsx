const TONES = {
  forest: "from-[#26402f] to-[#14261d]",
  ink: "from-[#262c33] to-[#0f1216]",
  accent: "from-[#e2571f] to-[#9c3d15]",
};

export default function PhotoPlaceholder({
  caption,
  tone = "forest",
  className = "",
}: {
  caption: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${TONES[tone]} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center text-cream/45">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M3 17l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span className="text-[11.5px] leading-snug tracking-wide">{caption}</span>
      </div>
    </div>
  );
}
