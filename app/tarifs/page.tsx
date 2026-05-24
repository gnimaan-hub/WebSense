import Pricing from '@/components/sections/Pricing';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Nos tarifs | Cabinet WebSense',
  description: 'Formules transparentes pour votre projet web : Essentiel, Croissance, Sur Mesure. Devis personnalisé après cadrage gratuit.',
};

export default function TarifsPage() {
  return (
    <>
      <Pricing />
      <CTABand />
    </>
  );
}