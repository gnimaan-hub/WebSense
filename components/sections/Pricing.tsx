'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const plans = [
  {
    id: '// PKG · 01', name: 'Essentiel',
    tagline: 'Pour lancer votre présence en ligne, simple et solide.',
    from: 'À partir de', amount: '320k', unit: 'FDJ',
    features: [
      'Site vitrine 5-7 pages sur mesure',
      'Design responsive mobile-first',
      'Formulaire de contact connecté',
      'SEO de base · Core Web Vitals',
      'Mise en ligne & formation 1h',
      'Délai indicatif : 2-3 semaines',
    ],
    featured: false,
  },
  {
    id: '// PKG · 02', name: 'Croissance',
    tagline: 'Pour structurer votre activité et convertir vos visiteurs.',
    from: 'À partir de', amount: '780k', unit: 'FDJ',
    ribbon: 'RECOMMANDÉ',
    features: [
      'Site 7-10 pages + blog / actualités',
      'Espace client ou réservation',
      'Multilingue (FR · EN · AR au choix)',
      'Intégrations (paiement, CRM, mailing)',
      'SEO avancé + analytics',
      'Documentation complète + formation 4h',
      'Délai indicatif : 4-6 semaines',
    ],
    featured: true,
  },
  {
    id: '// PKG · 03', name: 'Sur Mesure',
    tagline: 'Application métier, plateforme complexe, refonte stratégique.',
    from: 'Sur devis', amount: '—', unit: 'après cadrage',
    features: [
      'Application web ou plateforme dédiée',
      'Architecture & sécurité sur mesure',
      'API, intégrations, automatisations',
      'Tableau de bord, rôles & permissions',
      'Tests, monitoring, infrastructure',
      'Maintenance et évolutions incluses 3 mois',
      'Délai selon scope',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="packages">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 rev">
          <div className="section-badge" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            // tarifs · packages
          </div>
          <h2 className="section-h2">
            Des <em>formules transparentes</em>, adaptées à votre projet
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Trois points de départ pour clarifier le périmètre. Chaque devis final est personnalisé après cadrage.
          </p>
        </div>

        <div className="pkg-grid">
          {plans.map((plan, idx) => (
            <RevealOnScroll key={plan.id} direction="up" delay={idx * 100}>
              <div className={`pkg-card${plan.featured ? ' featured' : ''}`}>
                {plan.ribbon && <span className="pkg-ribbon">{plan.ribbon}</span>}
                <div className="pkg-head">
                  <div className="pkg-id">{plan.id}</div>
                  <div className="pkg-name">{plan.name}</div>
                  <div className="pkg-tagline">{plan.tagline}</div>
                </div>
                <div className="pkg-price">
                  <span className="from">{plan.from}</span>
                  <span className="amount">{plan.amount}</span>
                  <span className="unit">{plan.unit}</span>
                </div>
                <ul className="pkg-features">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="pkg-cta">
                  <span>{plan.name === 'Sur Mesure' ? 'Parlons-en' : 'Demander un devis'}</span>
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="text-center mt-6"
           style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--ink-3)' }}>
          Tous nos tarifs sont indicatifs · Le devis final est calculé après cadrage gratuit · Paiement échelonné par jalons
        </p>
      </div>
    </section>
  );
}