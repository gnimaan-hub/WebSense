'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const steps = [
  { num: '01', title: 'Écoute & Diagnostic',    desc: "On comprend votre contexte et vos objectifs avant de proposer quoi que ce soit.",               eta: '30 min · gratuit' },
  { num: '02', title: 'Stratégie & Devis',       desc: "Stack technique, planning détaillé, budget chiffré. Sans engagement ni surprise.",              eta: 'sous 48h'          },
  { num: '03', title: 'Conception & Dev',         desc: "On construit avec rigueur, par jalons de validation. Vous gardez la main à chaque étape.",      eta: '2-8 semaines'      },
  { num: '04', title: 'Livraison & Formation',   desc: "On livre le code, on forme votre équipe, on documente. Autonomes dès le jour 1.",                eta: '1 semaine'         },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 rev">
          <div className="section-badge" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            // processus · 4 étapes
          </div>
          <h2 className="section-h2">De votre idée à la <em>mise en ligne</em></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Un parcours simple, lisible, jalonné — sans jargon ni mauvaise surprise.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.num} direction="up" delay={idx * 100}>
              <div className="process-step">
                <div className="ps-num">{step.num}</div>
                <h3 className="ps-title">{step.title}</h3>
                <p className="ps-text">{step.desc}</p>
                <span className="ps-eta">⌛ {step.eta}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}