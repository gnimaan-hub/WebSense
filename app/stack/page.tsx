import TechStack from '@/components/sections/TechStack';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Notre stack technique | Cabinet WebSense',
  description: 'React, Next.js, Node.js, PostgreSQL, Vercel – des technologies choisies pour leur robustesse et leur maintenabilité.',
};

export default function StackPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-custom">
        <div className="max-w-2xl">
          <div className="section-badge">// stack technique</div>
          <h1 className="section-h2">Des technologies <em>choisies</em>, pas accumulées</h1>
          <p className="text-base text-ink2">Chaque outil est sélectionné pour sa robustesse, sa maintenabilité et sa pertinence — pas pour faire joli sur une page d'accueil.</p>
        </div>
      </section>
      <TechStack full />
      <CTABand />
    </>
  );
}