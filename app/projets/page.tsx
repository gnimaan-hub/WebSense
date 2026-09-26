import ProjectsGrid from '@/components/sections/ProjectsGrid';
import CTABand from '@/components/sections/CTABand';
import AmiinShowcase from '@/components/sections/AmiinShowcase';

export const metadata = {
  title: 'Nos réalisations | Cabinet WebSense',
  description: 'Découvrez une sélection de projets livrés à Djibouti : Amiin (assistant IA), e-commerce, applications métier, sites vitrine.',
};

export default function ProjetsPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-custom">
        <div className="max-w-2xl">
          <div className="section-badge">// projets récents</div>
          <h1 className="section-h2">Nos dernières <em>réalisations</em></h1>
          <p className="text-base text-ink4">Une sélection de projets livrés à Djibouti, du site vitrine au tableau de bord métier.</p>
        </div>
      </section>
      <AmiinShowcase />
      <ProjectsGrid full />
      <CTABand />
    </>
  );
}