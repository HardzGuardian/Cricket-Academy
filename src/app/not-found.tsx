import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MotionLink } from "@/components/MotionLink";
import { SPRING } from "@/lib/motion";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: `Page not found — ${SITE.name}`,
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="bg-ink text-cream min-h-[60vh] flex items-center">
          <div className="max-w-[1360px] mx-auto px-[clamp(18px,4vw,56px)] py-[clamp(70px,11vw,140px)] w-full">
            <div aria-hidden="true" className="text-[10.5px] tracking-[0.24em] uppercase text-accent font-bold">
              404
            </div>
            <h1 className="mt-4.5 font-display font-extrabold text-[clamp(40px,8vw,88px)] leading-[0.96] tracking-tight max-w-[16ch]">
              This ground&rsquo;s not on our map.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[clamp(15px,1.3vw,19px)] leading-relaxed text-cream/72">
              The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
              Head back to the home ground to find programs, coaches and the
              gallery.
            </p>
            <MotionLink
              href="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING}
              className="mt-8 inline-flex bg-accent text-cream py-4.5 px-6.5 rounded-full text-xs font-bold tracking-[0.16em] uppercase hover:bg-cream hover:text-ink transition-colors"
            >
              Back to home <span aria-hidden="true">→</span>
            </MotionLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
