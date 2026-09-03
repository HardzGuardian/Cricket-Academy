export const SITE = {
  name: "Sunil Cricket Academy",
  shortName: "SCA",
  tagline: "Best Cricket Academy in Mumbai",
  founded: 2016,
  founderName: "Mr. Sunil Soni",
  area: "Churchgate, Mumbai",
  address:
    "Plot No. 9, Cross Maidan, M.G. Road, behind F.S. Market, Churchgate, Mumbai, Maharashtra 400020",
  phone: "+91 97684 85976",
  phoneHref: "tel:+919768485976",
  email: "sunilcricketacademy.94@gmail.com",
  mapsHref:
    "https://maps.google.com/maps?q=Plot%20No%20-%209%20%2C%20Corss%20maidan%2C%20M.G.%20Road%2CBehind%20F.S%20Market%2C%20Churchgate%2C%20Mumbai%2C%20Maharashtra%20400020",
  logo: "/images/logo.png",
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
  { abbr: "Fb", label: "Facebook", href: "https://www.facebook.com/SUNILCRICKETACADEMY/" },
  { abbr: "Ig", label: "Instagram", href: "https://www.instagram.com/p/B4C2Ii9p0vw/" },
  { abbr: "Yt", label: "YouTube", href: "https://www.youtube.com/channel/UCvL4AO4toejRf4mP5RH-org" },
];

export const HERO_FACTS = [
  { v: String(SITE.founded), k: `Founded by ${SITE.founderName}` },
  { v: "Churchgate", k: "Cross Maidan, Mumbai" },
  { v: "6–18", k: "Age groups coached" },
  { v: "4", k: "Pillars of the SCA method" },
];

export const TICKER = [
  "Admissions open · 2026 season",
  "Time Shield",
  "Orthodox training module",
  "U-12 Bhaskar Thakur Memorial",
  "Oriental Shield",
  "Fitness & mental health camps",
  "Interactive sessions",
];

export const PROGRAMS = [
  {
    num: "01",
    tag: "Ages 6–12",
    title: "Junior Foundation",
    body: "Grip, stance and basic technique taught through the orthodox module, with drills sized for young players and plenty of net time.",
    meta: ["Weekday batches", "Small groups"],
  },
  {
    num: "02",
    tag: "Ages 13–18",
    title: "Sub-Junior & Junior Squad",
    body: "Match-focused training for school and club cricketers preparing for age-group selection, with individual correction from the head coach.",
    meta: ["Nets + match play", "Selection prep"],
  },
  {
    num: "03",
    tag: "All levels",
    title: "Personal Coaching",
    body: "One-to-one sessions on a specific problem — a bowling action, a trigger movement, a shot that keeps getting you out.",
    meta: ["1-to-1", "By appointment"],
  },
  {
    num: "04",
    tag: "Season breaks",
    title: "Summer & Vacation Camp",
    body: "Intensive camps combining skills, fitness and interactive sessions with cricketers and sports experts.",
    meta: ["Camp format", "Ages 6–18"],
  },
];

export const PILLARS = [
  {
    num: "01",
    title: "High level training module",
    body: "SCA has been indulged in making students aware of the old-style what nowadays seen to be vanishing — SCA uses the Orthodox Training Module to train young cricketers.",
    img: "/images/pillar-1.jpg",
  },
  {
    num: "02",
    title: "Tournaments",
    body: "With associate clubs and companies we conduct tournaments like Time Shield, the U-12 Bhaskar Thakur Memorial Selection Tournament, and the Oriental Shield — each giving cricketers a scope to improve their skills and confidence.",
    img: "/images/pillar-2.jpg",
  },
  {
    num: "03",
    title: "Fitness and mental health programs",
    body: "SCA looks after the overall progress and growth of cricketers, conducting fitness and mental health camps for the stability of mind and body, including sessions by sports experts.",
    img: "/images/pillar-3.jpg",
  },
  {
    num: "04",
    title: "Interactive sessions",
    body: "We want our young cricketers to understand the game through the eyes of cricketers and other sports experts, and provide a platform to interact with them and stay inspired.",
    img: "/images/pillar-4.jpg",
  },
];

export const COACHES = [
  { role: "Head Coach & Director", name: "Mr. Sunil Soni", img: "/images/coaches/sunil-soni.jpg" },
  { role: "Mentor", name: "Sir Vidya Paradkar", img: "/images/coaches/vidya-paradkar.jpg" },
  { role: "Fitness Head Trainer", name: "Mr. Aakash Luthra", img: "/images/coaches/aakash-luthra.jpg" },
  { role: "Joint Secretary", name: "Mr. Jitendra Ingle", img: "/images/coaches/jitendra-ingle.jpg" },
  { role: "Assistant Coach", name: "Mr. Ranjeet Soni", img: "/images/coaches/ranjeet-soni.jpg" },
];

export const FACILITIES = [
  {
    num: "01",
    title: "Cross Maidan ground",
    body: "Practice and matches on one of Mumbai's historic maidans, minutes from Churchgate station.",
  },
  {
    num: "02",
    title: "Turf and matting nets",
    body: "Dedicated net sessions so every player in a batch gets meaningful time with bat and ball.",
  },
  {
    num: "03",
    title: "Fitness and conditioning",
    body: "Sessions led by a dedicated fitness head trainer alongside skills coaching.",
  },
  {
    num: "04",
    title: "Mental health camps",
    body: "Sports-psychology sessions conducted by experts for stability of mind and body.",
  },
  {
    num: "05",
    title: "Tournament hosting",
    body: "In-house tournaments organised with associate clubs and companies through the season.",
  },
];

export const STATS = [
  { to: SITE.founded, label: "Academy founded", plain: true, suffix: "" },
  { to: 4, label: "Pillars of the SCA method", suffix: "" },
  { to: 3, label: "Tournaments conducted each season", suffix: "" },
  { to: 5, label: "Coaches, mentors and trainers", suffix: "" },
];

export const TOURNAMENTS = [
  { kind: "Annual", name: "Time Shield", note: "Conducted with associate clubs for SCA's cricketers." },
  {
    kind: "Selection",
    name: "U-12 Bhaskar Thakur Memorial Tournament",
    note: "A selection route for the academy's youngest age group.",
  },
  {
    kind: "Invitational",
    name: "Oriental Shield",
    note: "Organised with Oriental Insurance Company and Recreational Club.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sankalp Nikam",
    text: "One of the best academies to start a journey with and to carry forward. Works on the basics and skills so beautifully.",
  },
  {
    name: "Lyla Mehata",
    text: "Wonderful place for cricket training. My 8 year old son loves this place. Highly recommend it.",
  },
  {
    name: "Kaushik Nadar",
    text: "This academy focuses on every aspect of cricket be it fitness, technique, skills or mental strength.",
  },
  {
    name: "Jamsheed Maheta",
    text: "My son started at SCA last season and enjoyed himself. The staff and coaching is very good and professional.",
  },
  {
    name: "Shivraj Maske",
    text: "You will get enough time in nets. More time is given on improvement of technique. You will see improved results in a few weeks.",
  },
  {
    name: "Sahil Babaria",
    text: "Very good cricket academy. They not only teach us cricket but fitness is also on the next level.",
  },
  {
    name: "Manish Pandey",
    text: "It was a great experience working with such an academy. I have improved my bowling action a lot.",
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  ratio: string;
  span: number;
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", src: "/images/gallery-1.jpg", alt: "Batsman in the nets at Cross Maidan", ratio: "4 / 5", span: 2 },
  { id: "g2", src: "/images/gallery-2.jpg", alt: "SCA squad before a match", ratio: "4 / 3", span: 1 },
  { id: "g3", src: "/images/gallery-3.jpg", alt: "Player with trophy and certificate", ratio: "4 / 3", span: 1 },
  { id: "g4", src: "/images/gallery-4.jpg", alt: "Coach correcting a young batsman", ratio: "4 / 3", span: 1 },
  { id: "g5", src: "/images/gallery-5.jpg", alt: "Training session", ratio: "4 / 5", span: 2 },
  { id: "g6", src: "/images/gallery-6.jpg", alt: "Bowling practice", ratio: "4 / 3", span: 1 },
  { id: "g7", src: "/images/gallery-7.jpg", alt: "Fielding drill", ratio: "4 / 3", span: 1 },
  { id: "g8", src: "/images/gallery-8.jpg", alt: "Match day at the maidan", ratio: "4 / 3", span: 1 },
  { id: "g9", src: "/images/gallery-9.jpg", alt: "Batting drill", ratio: "4 / 3", span: 1 },
  { id: "g10", src: "/images/gallery-10.jpg", alt: "Team huddle", ratio: "4 / 3", span: 1 },
  { id: "g11", src: "/images/gallery-11.jpg", alt: "Net session", ratio: "4 / 3", span: 1 },
  { id: "g12", src: "/images/gallery-12.jpg", alt: "Young cricketers at SCA", ratio: "4 / 3", span: 1 },
  { id: "g13", src: "/images/gallery-13.jpg", alt: "Presentation after a tournament", ratio: "4 / 3", span: 1 },
];

export const PROGRAM_OPTIONS = PROGRAMS.map((p) => `${p.title} (${p.tag})`);

export const FOOTER_COLS = [
  {
    title: "Academy",
    links: [
      { label: "About SCA", href: "/#about" },
      { label: "The 4 pillars", href: "/#pillars" },
      { label: "Our team", href: "/#coaches" },
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
