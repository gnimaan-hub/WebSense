import PricingCalculator from '@/components/sections/PricingCalculator';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Tarifs & Estimateur de projet | Cabinet WebSense · Djibouti',
  description:
    'Calculez une estimation tarifaire en quelques clics. Sélectionnez vos services : développement web, UX design, conseil, formation, marketing, maintenance.',
};

export default function TarifsPage() {
  return (
    <>
      <PricingCalculator />
      <CTABand />
    </>
  );
}
