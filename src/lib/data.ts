export const SITE = {
  name: "Coverdrive Cricket Academy",
  shortName: "Coverdrive CA",
  tagline: "Built on the boundary. Forged in the nets.",
  founded: 2014,
  founderName: "Coach Arjun Deshmukh",
  area: "Bandra West, Mumbai",
  address: "123 Sportsfield Road, Bandra West, Mumbai, Maharashtra 400050",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "info@coverdrivecricketacademy.in",
  mapsHref: "https://maps.google.com/?q=Bandra+West+Mumbai",
};

export const NAV = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/programs" },
  { label: "Coaches", href: "/#coaches" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#admission" },
];

export const SOCIALS = [
  { abbr: "Fb", label: "Facebook", href: "https://facebook.com" },
  { abbr: "Ig", label: "Instagram", href: "https://instagram.com" },
  { abbr: "Yt", label: "YouTube", href: "https://youtube.com" },
];

export const HERO_FACTS = [
  { v: String(SITE.founded), k: `Founded by ${SITE.founderName}` },
  { v: "Bandra", k: "Home ground, Mumbai" },
  { v: "6–22", k: "Age groups coached" },
  { v: "4", k: "Pillars of our method" },
];

export const TICKER = [
  "Admissions open · 2026 season",
  "Age-wise batches",
  "BCCI-certified coaches",
  "Video-backed feedback",
  "Match exposure every month",
  "Strength & conditioning gym",
  "Free trial session",
];

export const PROGRAMS = [
  {
    num: "01",
    tag: "Ages 6–10",
    title: "Foundation",
    body: "Motor skills, hand-eye coordination and a love for the game, taught through play-based drills in small groups.",
    meta: ["4 sessions / week", "Small groups"],
  },
  {
    num: "02",
    tag: "Ages 11–14",
    title: "Junior Development",
    body: "Technical correction in batting, bowling and fielding, plus introductory strength and conditioning work.",
    meta: ["5 sessions / week", "Skill assessments"],
  },
  {
    num: "03",
    tag: "Ages 15–18",
    title: "Advanced Performance",
    body: "Match-intensity training, video analysis, tournament selection prep and structured fitness benchmarks.",
    meta: ["6 sessions / week", "Tournament prep"],
  },
  {
    num: "04",
    tag: "Ages 18–22",
    title: "Elite / Pro Track",
    body: "One-to-one coaching, trial preparation for state and university teams, sports-science backed conditioning.",
    meta: ["By assessment", "1-on-1 coaching"],
  },
];

export const PILLARS = [
  {
    num: "01",
    title: "Technique first, always",
    body: "Every batch starts with the fundamentals — grip, stance, base movements — before anything else. We'd rather build a correct habit slowly than a fast one that breaks under pressure.",
  },
  {
    num: "02",
    title: "Match temperament",
    body: "Monthly fixtures against partner academies and in-house tournaments mean players face real pressure long before a selection trial does.",
  },
  {
    num: "03",
    title: "Fitness & recovery",
    body: "A dedicated strength coach and an on-call physiotherapist manage conditioning and injury prevention side by side with skills training.",
  },
  {
    num: "04",
    title: "Video-backed feedback",
    body: "Every player gets a fortnightly video review — frame-by-frame technique breakdowns shared with the player and their parents.",
  },
];

export const COACHES = [
  { role: "Founder & Head Coach", name: "Arjun Deshmukh" },
  { role: "Batting & Junior Programs", name: "Priya Kulkarni" },
  { role: "Fast Bowling Coach", name: "Sameer Patil" },
  { role: "Fitness & Conditioning", name: "Vikram Rao" },
  { role: "Sports Physiotherapist", name: "Dr. Neha Shah" },
];

export const FACILITIES = [
  {
    num: "01",
    title: "Turf & cement nets",
    body: "Eight practice nets — four turf, four cement — so batches train under varied match conditions year-round.",
  },
  {
    num: "02",
    title: "Bowling machines",
    body: "Variable-speed machines for dedicated pace and spin-facing practice, used across every advanced batch.",
  },
  {
    num: "03",
    title: "Strength & conditioning gym",
    body: "An on-site gym supervised by a certified strength coach, built into every player's weekly schedule.",
  },
  {
    num: "04",
    title: "Video analysis room",
    body: "Frame-by-frame technique review after every fortnightly assessment, shared with players and parents alike.",
  },
  {
    num: "05",
    title: "Recovery & physio zone",
    body: "On-call physiotherapy and structured injury-prevention routines built around each player's training load.",
  },
];

export const STATS = [
  { to: 11, label: "Years of coaching", plain: false },
  { to: 500, label: "Students trained", plain: false, suffix: "+" },
  { to: 14, label: "State-level players produced", plain: false },
  { to: 27, label: "Tournaments won", plain: false },
];

export const TOURNAMENTS = [
  {
    kind: "Zonal",
    name: "U-16 Zonal Champions, 2024 & 2025",
    note: "Back-to-back zonal titles for our Junior Development batch.",
  },
  {
    kind: "Selection",
    name: "3 alumni to state U-19 trials",
    note: "Players selected for state-level U-19 trials in the last two seasons.",
  },
  {
    kind: "District",
    name: "District Champions, Kids category",
    note: "Four years running (2022–2025) in the U-10 district league.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Meera Rane",
    text: "My son joined the Foundation batch at seven, hesitant and unsure. Two years on, he's opening the batting for his school team. The coaches notice everything.",
  },
  {
    name: "Rohan Thakkar",
    text: "The video analysis sessions changed my bowling action completely. I went from getting hit around to picking up wickets consistently within one season.",
  },
  {
    name: "Sanjay Kamble",
    text: "Professional, structured, and genuinely invested in the kids — not just another coaching class. Worth every rupee of the fee.",
  },
  {
    name: "Ayesha Sheikh",
    text: "What stood out was how personal it felt despite the numbers. Every coach knew exactly where my daughter needed work.",
  },
  {
    name: "Vivaan Joshi",
    text: "Joined for the Advanced batch before my school trials and made the state U-19 shortlist the same year. The match-intensity drills made the real thing feel slower.",
  },
  {
    name: "Farhan Qureshi",
    text: "The fitness program alone was worth joining for — I stopped breaking down mid-season for the first time in three years.",
  },
  {
    name: "Kavita Iyer",
    text: "Structured, honest feedback every fortnight instead of vague praise. My son actually knows what to work on now.",
  },
];

export type GalleryItem = {
  id: string;
  alt: string;
  ratio: string;
  span: number;
  category: "Training" | "Matches" | "Events";
  tone: "forest" | "ink" | "accent";
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", alt: "Batting practice in the nets", ratio: "4 / 5", span: 2, category: "Training", tone: "forest" },
  { id: "g2", alt: "Squad photo before a fixture", ratio: "4 / 3", span: 1, category: "Matches", tone: "ink" },
  { id: "g3", alt: "Trophy presentation after a tournament", ratio: "4 / 3", span: 1, category: "Events", tone: "accent" },
  { id: "g4", alt: "Coach correcting a young batter's stance", ratio: "4 / 3", span: 1, category: "Training", tone: "forest" },
  { id: "g5", alt: "Fast bowler mid-delivery", ratio: "4 / 5", span: 2, category: "Training", tone: "ink" },
  { id: "g6", alt: "Fielding drill on the outfield", ratio: "4 / 3", span: 1, category: "Training", tone: "forest" },
  { id: "g7", alt: "Match day at the home ground", ratio: "4 / 3", span: 1, category: "Matches", tone: "accent" },
  { id: "g8", alt: "Team huddle before play", ratio: "4 / 3", span: 1, category: "Matches", tone: "ink" },
  { id: "g9", alt: "Strength and conditioning session", ratio: "4 / 3", span: 1, category: "Training", tone: "forest" },
  { id: "g10", alt: "Awards evening group photo", ratio: "4 / 3", span: 1, category: "Events", tone: "accent" },
  { id: "g11", alt: "Net session with the bowling machine", ratio: "4 / 3", span: 1, category: "Training", tone: "ink" },
  { id: "g12", alt: "Young cricketers at the summer camp", ratio: "4 / 3", span: 1, category: "Events", tone: "forest" },
  { id: "g13", alt: "Presentation after the zonal final", ratio: "4 / 3", span: 1, category: "Matches", tone: "accent" },
];

export const PROGRAM_OPTIONS = PROGRAMS.map((p) => `${p.title} (${p.tag})`);

export const FOOTER_COLS = [
  {
    title: "Academy",
    links: [
      { label: "About us", href: "/#about" },
      { label: "Our philosophy", href: "/#pillars" },
      { label: "Coaches", href: "/#coaches" },
      { label: "Achievements", href: "/#achievements" },
    ],
  },
  {
    title: "Join",
    links: [
      { label: "Training programs", href: "/programs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Book a trial", href: "/#admission" },
    ],
  },
];
