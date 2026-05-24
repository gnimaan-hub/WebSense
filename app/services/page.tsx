import ServicesGrid from '@/components/sections/ServicesGrid';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Nos services | Cabinet WebSense',
  description: 'Développement web sur mesure, UX design, conseil stratégique, formation, maintenance et SEO – tout pour votre présence numérique.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-custom">
        <div className="max-w-2xl">
          <div className="section-badge">// services</div>
          <h1 className="section-h2">Nous développons vos sites, vos outils et votre <em>visibilité</em></h1>
          <p className="text-base text-ink2">Chaque projet est réalisé en interne, de la conception à la livraison. Cette maîtrise complète garantit cohérence, qualité et performance — sans sous-traitance.</p>
        </div>
      </section>
      <ServicesGrid full />
      <CTABand />
    </>
  );
}