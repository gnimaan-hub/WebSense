'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

interface Service {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  tags: string[];
  duration: string;
  extra: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'WS·01',
    badge: 'Core',
    badgeColor: 'core',
    title: 'Développement Web Sur Mesure',
    desc: 'Sites vitrine, e-commerce, applications web. Code propre, testé, documenté ligne par ligne.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    duration: '2-8 sem.',
    extra: 'Livraison jalonné',
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
  },
  {
    id: 'WS·02',
    badge: 'Core',
    badgeColor: 'core',
    title: 'UX Design & Ergonomie',
    desc: 'Audit UX, wireframes, prototypes interactifs, tests utilisateurs. Interfaces intuitives au premier regard.',
    tags: ['Figma', 'Wireframes', 'User Research'],
    duration: '1-3 sem.',
    extra: 'Livrables Figma',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
    ),
  },
  {
    id: 'WS·03',
    badge: 'Advisory',
    badgeColor: 'advisory',
    title: 'Conseil en Stratégie Web',
    desc: 'Audit existant, roadmap digitale, choix technologiques, scoping. On pense avant de construire.',
    tags: ['Audit', 'Roadmap', 'Scoping'],
    duration: '1-2 sem.',
    extra: 'Livrable document',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
    ),
  },
  {
    id: 'WS·04',
    badge: 'Advisory',
    badgeColor: 'advisory',
    title: 'Autonomie & Formation',
    desc: 'Formation de vos équipes, documentation complète, accompagnement à la prise en main. Autonomes dès le premier jour.',
    tags: ['Formation', 'Transfert', 'Docs'],
    duration: '1 sem.',
    extra: 'Sessions live',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
    ),
  },
  {
    id: 'WS·05',
    badge: 'Support',
    badgeColor: 'support',
    title: 'Maintenance & Évolution',
    desc: 'Sauvegardes, mises à jour de sécurité, monitoring, évolutions fonctionnelles. Votre site reste à jour, sans effort.',
    tags: ['Monitoring', 'Backups', 'Sécurité'],
    duration: 'Mensuel',
    extra: 'SLA 24h',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    id: 'WS·06',
    badge: 'Support',
    badgeColor: 'support',
    title: 'SEO & Performance',
    desc: 'Référencement naturel, optimisation Core Web Vitals, accessibilité. Vos pages remontent et se chargent vite.',
    tags: ['SEO', 'Core Web Vitals', 'A11y'],
    duration: '2 sem.',
    extra: 'Score ≥ 95',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    ),
  },
];

interface ServicesGridProps {
  full?: boolean;
}

export default function ServicesGrid({ full = false }: ServicesGridProps) {
  const displayedServices = full ? services : services.slice(0, 3);
  return (
    <section className="section" id="services">
      <div className="container-custom">
        {!full && (
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div>
              <div className="section-badge">// services</div>
              <h2 className="section-h2">Nous développons vos sites, vos outils et votre <em>visibilité</em></h2>
            </div>
            <p className="text-base text-ink2 max-w-md">
              Chaque projet est réalisé en interne, de la conception à la livraison. Cette maîtrise complète garantit cohérence, qualité et performance — sans sous-traitance.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedServices.map((service, idx) => (
            <RevealOnScroll key={service.id} direction="up" delay={idx * 80}>
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-or/30 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-or to-orDark scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 rounded-xl bg-or-pale flex items-center justify-center group-hover:bg-or transition-all duration-300 group-hover:scale-105">
                    <div className="w-5 h-5 stroke-orDark group-hover:stroke-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-ink4">{service.id}</span>
                </div>
                <span className={`inline-block font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-2 ${
                  service.badgeColor === 'core' ? 'bg-green/10 text-green' : service.badgeColor === 'advisory' ? 'bg-or-pale text-orDark' : 'bg-greenMid/10 text-greenMid'
                }`}>
                  {service.badge}
                </span>
                <h3 className="text-base font-bold text-ink mb-2">{service.title}</h3>
                <p className="text-[13.5px] text-ink3 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-bg border border-border text-ink3">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-dashed border-border font-mono text-[10.5px] text-ink3">
                  <span><strong className="text-ink2">{service.duration}</strong></span>
                  <span>·</span>
                  <span>{service.extra}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {!full && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              Voir tous nos services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
  
}