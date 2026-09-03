import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Admission from "@/components/Admission";
import Coaches from "@/components/Coaches";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pillars from "@/components/Pillars";
import ProgramsSection from "@/components/ProgramsSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <ProgramsSection />
        <Pillars />
        <Coaches />
        <Facilities />
        <Achievements />
        <GallerySection />
        <Testimonials />
        <Admission />
      </main>
      <Footer />
    </>
  );
}
