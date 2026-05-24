// app/faq/page.tsx
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'FAQ | Cabinet WebSense',
  description: 'Budget, délais, propriété du code, maintenance — toutes les réponses à vos questions avant de lancer votre projet web à Djibouti.',
};

export default function FAQPage() {
  return (
    <>
      <section className="section section-tight container-custom">
        <div style={{ paddingTop: '32px' }}>
          <div className="section-badge rev">// faq · questions fréquentes</div>
          <h1 className="section-h2 rev d1">Vos questions avant de <em>lancer</em></h1>
          <p className="section-sub rev d2">
            Budget, délais, propriété du code : nos réponses directes, basées sur les projets que nous avons livrés à Djibouti.
          </p>
        </div>
      </section>
      <FAQ />
      <CTABand />
    </>
  );
}