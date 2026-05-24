// app/page.tsx — Page d'accueil
// Contient : Hero, Stats, TrustStrip, Approach, Process, TechStack
// + Pricing et FAQ (exceptions autorisées sur les deux pages)
// PAS : Services, Projets, Blog (pages dédiées uniquement)

import Hero from '@/components/sections/Hero';
import Ticker from '@/components/ui/Ticker';
import Stats from '@/components/sections/Stats';
import TrustStrip from '@/components/sections/TrustStrip';
import Approach from '@/components/sections/Approach';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <TrustStrip />
      <Approach />
      <Process />
      <TechStack full={false} />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABand />
    </>
  );
}