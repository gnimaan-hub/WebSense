import Hero from '@/components/sections/Hero';
import Ticker from '@/components/ui/Ticker';
import Stats from '@/components/sections/Stats';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Approach from '@/components/sections/Approach';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import BlogGrid from '@/components/sections/BlogGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <TrustStrip />

      {/* Services — aperçu 3 premiers */}
      <ServicesGrid full={false} />

      <Approach />
      <Process />
      <TechStack full={false} />

      {/* Projets — aperçu 2 premiers */}
      <ProjectsGrid full={false} />

      <Pricing />
      <Testimonials />
      <FAQ />

      {/* Blog — 3 derniers articles */}
      <BlogGrid full={false} />

      <CTABand />
    </>
  );
}