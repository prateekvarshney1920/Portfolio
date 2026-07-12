import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Journey } from '@/components/sections/Journey';
import { Skills } from '@/components/sections/Skills';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { PageLoader } from '@/components/ui/PageLoader';

/**
 * Home — the single-page portfolio landing page.
 * Assembles all sections in order with Navbar and Footer framing the page.
 * PageLoader provides a cinematic boot sequence on initial load.
 */
export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
