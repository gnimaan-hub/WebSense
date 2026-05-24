import Pricing from '@/components/sections/Pricing';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Nos tarifs | Cabinet WebSense',
  description: 'Formules transparentes pour votre projet web : Essentiel, Croissance, Sur Mesure. Devis personnalisé après cadrage gratuit.',
};

export default function TarifsPage() {
  return (
    <>
      <section className="pt-32 pb-12 container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="section-badge justify-center">// tarifs · packages</div>
          <h1 className="section-h2">Des <em>formules transparentes</em>, adaptées à votre projet</h1>
          <p className="text-base text-ink2">Trois points de départ pour clarifier le périmètre. Chaque devis final est personnalisé après cadrage.</p>
        </div>
      </section>
      <Pricing />
      <CTABand />
    </>
  );
}