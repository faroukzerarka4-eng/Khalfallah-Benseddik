import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { StrategicProjects } from "@/components/sections/StrategicProjects";
import { Program } from "@/components/sections/Program";
import { Achievements } from "@/components/sections/Achievements";
import { Commitment } from "@/components/sections/Commitment";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <StrategicProjects />
        <Program />
        <Achievements />
        <Commitment />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
