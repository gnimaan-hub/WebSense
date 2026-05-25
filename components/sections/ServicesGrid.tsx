'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const services = [
  {
    id: 'WS·01', badge: 'Code', badgeColor: 'core',
    slug: 'developpement-web',
    title: 'Développement Web Sur Mesure',
    desc: 'Sites vitrine, e-commerce, applications web. Code propre, testé, documenté ligne par ligne.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    duration: '2-8 sem.', extra: 'Livraison jalonnée',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    id: 'WS·02', badge: 'Code', badgeColor: 'core',
    slug: 'ux-design',
    title: 'UX Design & Ergonomie',
    desc: 'Audit UX, wireframes, prototypes interactifs, tests utilisateurs. Interfaces intuitives au premier regard.',
    tags: ['Figma', 'Wireframes', 'User Research'],
    duration: '1-3 sem.', extra: 'Livrables Figma',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
  },
  {
    id: 'WS·03', badge: 'Consulting', badgeColor: 'advisory',
    slug: null,
    title: 'Conseil en Stratégie Web',
    desc: 'Audit existant, roadmap digitale, choix technologiques, scoping. On pense avant de construire.',
    tags: ['Audit', 'Roadmap', 'Scoping'],
    duration: '1-2 sem.', extra: 'Livrable document',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  },
  {
    id: 'WS·04', badge: 'Consulting', badgeColor: 'advisory',
    slug: null,
    title: 'Autonomie & Formation',
    desc: 'Formation de vos équipes, documentation complète, accompagnement à la prise en main.',
    tags: ['Formation', 'Transfert', 'Docs'],
    duration: '1 sem.', extra: 'Sessions live',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    id: 'WS·05', badge: 'Support', badgeColor: 'support',
    slug: null,
    title: 'Maintenance & Évolution',
    desc: 'Sauvegardes, mises à jour de sécurité, monitoring, évolutions fonctionnelles.',
    tags: ['Monitoring', 'Backups', 'Sécurité'],
    duration: 'Mensuel', extra: 'SLA 24h',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  },
  {
    id: 'WS·06', badge: 'Support', badgeColor: 'support',
    slug: null,
    title: 'SEO & Performance',
    desc: 'Référencement naturel, optimisation Core Web Vitals, accessibilité. Vos pages remontent et se chargent vite.',
    tags: ['SEO', 'Core Web Vitals', 'A11y'],
    duration: '2 sem.', extra: 'Score ≥ 95',
    icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  core:     { background: 'rgba(10,92,73,0.08)',   color: 'var(--green)' },
  advisory: { background: 'var(--or-pale)',         color: 'var(--or-dark)' },
  support:  { background: 'rgba(29,158,117,0.10)', color: 'var(--green-mid)' },
};

interface ServicesGridProps { full?: boolean; }

export default function ServicesGrid({ full = false }: ServicesGridProps) {
  const displayed = full ? services : services.slice(0, 3);

  return (
    <section className="section" id="services">
      <div className="container-custom">
        {!full && (
          <div className="section-header flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="rev-left">
              <div className="section-badge">// services</div>
              <h2 className="section-h2">
                Nous développons vos sites, vos outils et votre <em>visibilité</em>
              </h2>
            </div>
            <p className="section-sub max-w-md rev-right">
              Chaque projet est réalisé en interne, de la conception à la livraison — sans sous-traitance.
            </p>
          </div>
        )}

        <div className="services-grid">
          {displayed.map((svc, idx) => {
            const CardInner = (
              <div className={`service-card group h-full${svc.slug ? ' cursor-pointer' : ''}`}>
                {/* Indicateur "page disponible" */}
                {svc.slug && (
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    color: 'var(--green-mid)', display: 'flex', alignItems: 'center', gap: '4px',
                    opacity: 0, transition: 'opacity .25s',
                  }}
                  className="group-hover:opacity-100"
                  >
                    <span>En savoir +</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}

                <div className="sc-head">
                  <div className="sc-icon">
                    <span className="block w-[22px] h-[22px]" style={{ color: 'var(--or-dark)' }}>
                      {svc.icon}
                    </span>
                  </div>
                  <span className="sc-id">{svc.id}</span>
                </div>

                <span className="sc-badge" style={badgeStyles[svc.badgeColor]}>{svc.badge}</span>
                <h3 className="sc-title">{svc.title}</h3>
                <p className="sc-desc">{svc.desc}</p>

                <div className="sc-tags">
                  {svc.tags.map(tag => <span key={tag} className="sc-tag">{tag}</span>)}
                </div>
                <div className="sc-meta">
                  <span><strong style={{ color: 'var(--ink-2)' }}>{svc.duration}</strong></span>
                  <span>·</span>
                  <span>{svc.extra}</span>
                </div>
              </div>
            );

            return (
              <RevealOnScroll key={svc.id} direction="up" delay={idx * 80}>
                {svc.slug ? (
                  <Link
                    href={`/services/${svc.slug}`}
                    style={{ display: 'block', height: '100%', textDecoration: 'none' }}
                  >
                    {CardInner}
                  </Link>
                ) : CardInner}
              </RevealOnScroll>
            );
          })}
        </div>

        {!full && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              <span>Voir tous nos services</span><span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}