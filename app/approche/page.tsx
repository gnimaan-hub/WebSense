// app/approche/page.tsx
import Approach from '@/components/sections/Approach';
import Process from '@/components/sections/Process';
import CTABand from '@/components/sections/CTABand';

export const metadata = {
  title: 'Notre approche | Cabinet WebSense',
  description: 'Autonomie, Perception, Rigueur, Transparence — les valeurs et le processus qui guident chaque projet web chez WebSense à Djibouti.',
};

export default function ApprochePage() {
  return (
    <>
      <section className="section section-tight container-custom">
        <div style={{ paddingTop: '32px' }}>
          <div className="section-badge rev">// approche · adn · processus</div>
          <h1 className="section-h2 rev d1">Notre approche, <em>vos avantages</em></h1>
          <p className="section-sub rev d2">
            Des valeurs concrètes qui se traduisent en résultats mesurables — chaque décision technique sert votre objectif business.
          </p>
        </div>
      </section>
      <Approach />
      <Process />
      <CTABand />
    </>
  );
}