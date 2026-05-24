import Hero from '@/components/sections/Hero';
import Ticker from '@/components/ui/Ticker';
import Stats from '@/components/sections/Stats';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Approach from '@/components/sections/Approach';
import Process from '@/components/sections/Process';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import TechStack from '@/components/sections/TechStack';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import BlogGrid from '@/components/sections/BlogGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <TrustStrip />
      <ServicesGrid />
      <Approach />
      <Process />
      <ProjectsGrid />
      <TechStack />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABand />
      <BlogGrid />
    </>
  );
}