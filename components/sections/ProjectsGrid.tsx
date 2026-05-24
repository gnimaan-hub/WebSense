'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const projects = [
  {
    cat: 'E-COMMERCE · Vitrine',
    title: 'Plateforme commerce — distributeur djiboutien',
    desc: 'Refonte complète : catalogue produits, espace pro, paiement local, interface admin. Mobile-first.',
    metrics: [{ v: '98', l: 'Lighthouse', s: '/100' }, { v: '×2.4', l: 'Conversions' }, { v: '5sem', l: 'Délai' }],
    thumb: (
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <rect width="600" height="340" fill="#1B2622"/>
        <g opacity="0.08" stroke="#FFFFFF" strokeWidth="0.5">
          <line x1="0" y1="85" x2="600" y2="85"/><line x1="0" y1="170" x2="600" y2="170"/><line x1="0" y1="255" x2="600" y2="255"/>
          <line x1="150" y1="0" x2="150" y2="340"/><line x1="300" y1="0" x2="300" y2="340"/><line x1="450" y1="0" x2="450" y2="340"/>
        </g>
        <rect x="60" y="50" width="480" height="240" rx="14" fill="#0E1716" stroke="rgba(255,255,255,0.08)"/>
        <rect x="80" y="70" width="100" height="14" rx="3" fill="rgba(255,255,255,0.3)"/>
        <rect x="80" y="92" width="60" height="8" rx="3" fill="rgba(232,160,32,0.6)"/>
        <rect x="80" y="120" width="440" height="70" rx="8" fill="rgba(29,158,117,0.1)" stroke="rgba(29,158,117,0.3)"/>
        <path d="M100 175 L150 155 L200 160 L250 140 L300 148 L350 128 L400 135 L450 120 L500 128" stroke="#4FD4A5" strokeWidth="2" fill="none"/>
        <rect x="80" y="210" width="100" height="60" rx="6" fill="rgba(232,160,32,0.15)"/>
        <text x="130" y="245" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#E8A020">+42%</text>
        <rect x="190" y="210" width="100" height="60" rx="6" fill="rgba(29,158,117,0.15)"/>
        <text x="240" y="245" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#4FD4A5">×2.4</text>
        <rect x="300" y="210" width="100" height="60" rx="6" fill="rgba(255,255,255,0.05)"/>
        <text x="350" y="245" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#fff">98</text>
        <rect x="80" y="220" width="440" height="0" rx="0" fill="none"/>
      </svg>
    ),
  },
  {
    cat: 'SAAS MÉTIER · Application',
    title: 'Tableau de bord opérationnel — ONG locale',
    desc: "Outil de suivi terrain : collecte mobile, indicateurs en temps réel, export rapports. Hébergement souverain.",
    metrics: [{ v: '14', l: 'Utilisateurs' }, { v: '−60%', l: 'Temps saisie' }, { v: '8sem', l: 'Délai' }],
    thumb: (
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <rect width="600" height="340" fill="#15201D"/>
        <g opacity="0.1" stroke="#FFFFFF" strokeWidth="0.5">
          <line x1="0" y1="80" x2="600" y2="80"/><line x1="0" y1="160" x2="600" y2="160"/><line x1="0" y1="240" x2="600" y2="240"/>
          <line x1="150" y1="0" x2="150" y2="340"/><line x1="300" y1="0" x2="300" y2="340"/><line x1="450" y1="0" x2="450" y2="340"/>
        </g>
        <rect x="60" y="50" width="240" height="240" rx="12" fill="#0E1716" stroke="rgba(255,255,255,0.08)"/>
        <rect x="80" y="70" width="120" height="14" rx="3" fill="rgba(255,255,255,0.4)"/>
        <rect x="80" y="92" width="60" height="8" rx="3" fill="rgba(232,160,32,0.6)"/>
        <rect x="80" y="120" width="200" height="60" rx="6" fill="rgba(29,158,117,0.15)" stroke="rgba(29,158,117,0.4)"/>
        <path d="M90 165 L120 150 L150 155 L180 135 L210 140 L240 125 L270 130" stroke="#4FD4A5" strokeWidth="2" fill="none"/>
        <rect x="80" y="200" width="60" height="60" rx="6" fill="rgba(232,160,32,0.15)"/>
        <text x="110" y="232" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#E8A020">+42%</text>
        <rect x="150" y="200" width="60" height="60" rx="6" fill="rgba(29,158,117,0.15)"/>
        <text x="180" y="232" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#4FD4A5">24h</text>
        <rect x="320" y="50" width="220" height="240" rx="12" fill="#0E1716" stroke="rgba(255,255,255,0.08)"/>
        <rect x="340" y="70" width="180" height="10" rx="3" fill="rgba(255,255,255,0.3)"/>
        <g><rect x="340" y="115" width="180" height="36" rx="6" fill="rgba(255,255,255,0.04)"/><circle cx="358" cy="133" r="8" fill="#E8A020" opacity="0.4"/><rect x="376" y="125" width="100" height="6" rx="3" fill="rgba(255,255,255,0.6)"/></g>
        <g><rect x="340" y="160" width="180" height="36" rx="6" fill="rgba(255,255,255,0.04)"/><circle cx="358" cy="178" r="8" fill="#1D9E75" opacity="0.4"/><rect x="376" y="170" width="100" height="6" rx="3" fill="rgba(255,255,255,0.6)"/></g>
      </svg>
    ),
  },
  {
    cat: 'VITRINE + RÉSA · Hôtellerie',
    title: 'Site hôtel & restaurant — front de mer',
    desc: 'Site multilingue, galerie photo, formulaire de réservation, fiches chambres. Optimisé mobile et SEO local.',
    metrics: [{ v: '3', l: 'Langues' }, { v: '×3.1', l: 'Demandes' }, { v: '3sem', l: 'Délai' }],
    thumb: (
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1E2A26"/>
            <stop offset="100%" stopColor="#0A5C49"/>
          </linearGradient>
        </defs>
        <rect width="600" height="340" fill="url(#hg)"/>
        <rect x="220" y="40" width="160" height="280" rx="22" fill="#0E1716" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
        <rect x="230" y="58" width="140" height="180" rx="10" fill="#1A3028"/>
        <rect x="240" y="72" width="80" height="10" rx="3" fill="#fff" opacity="0.9"/>
        <rect x="240" y="86" width="50" height="6" rx="2" fill="#fff" opacity="0.6"/>
        <rect x="240" y="200" width="60" height="24" rx="6" fill="#E8A020"/>
        <rect x="240" y="252" width="120" height="58" rx="6" fill="rgba(255,255,255,0.06)"/>
        <rect x="252" y="264" width="60" height="6" rx="3" fill="rgba(255,255,255,0.6)"/>
        <rect x="252" y="276" width="80" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
        <circle cx="300" cy="378" r="6" fill="rgba(255,255,255,0.2)"/>
        <rect x="40"  y="80" width="160" height="180" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)"/>
        <rect x="52"  y="116" width="60" height="8" rx="3" fill="#E8A020"/>
        <rect x="52"  y="132" width="100" height="5" rx="2" fill="rgba(255,255,255,0.4)"/>
        <rect x="52"  y="144" width="80" height="5" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="400" y="80" width="160" height="180" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)"/>
        <rect x="412" y="96" width="80" height="8" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x="412" y="222" width="100" height="20" rx="4" fill="#E8A020"/>
      </svg>
    ),
  },
  {
    cat: 'UX / UI · Refonte',
    title: "Refonte d'identité — PME services",
    desc: "Audit UX, design system, refonte complète du site et de l'identité visuelle. Documentation pour internalisation.",
    metrics: [{ v: '14', l: 'Pages' }, { v: '100%', l: 'Doc UX' }, { v: '4sem', l: 'Délai' }],
    thumb: (
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <rect width="600" height="340" fill="#15201D"/>
        <g opacity="0.1" stroke="#FFFFFF" strokeWidth="0.5">
          <line x1="120" y1="0" x2="120" y2="340"/><line x1="240" y1="0" x2="240" y2="340"/>
          <line x1="360" y1="0" x2="360" y2="340"/><line x1="480" y1="0" x2="480" y2="340"/>
        </g>
        <rect x="80" y="60" width="180" height="220" rx="10" fill="#fff"/>
        <rect x="100" y="80" width="100" height="14" rx="3" fill="#1B2622"/>
        <rect x="100" y="100" width="60" height="6" rx="2" fill="#6B736E"/>
        <rect x="100" y="120" width="32" height="32" rx="6" fill="#E8A020"/>
        <rect x="138" y="120" width="32" height="32" rx="6" fill="#0A5C49"/>
        <rect x="176" y="120" width="32" height="32" rx="6" fill="#1B2622"/>
        <text x="100" y="180" fontFamily="JetBrains Mono" fontSize="10" fill="#1B2622" fontWeight="700">Aa Bb Cc</text>
        <text x="100" y="200" fontFamily="Plus Jakarta Sans" fontSize="22" fontWeight="800" fill="#1B2622">Brand</text>
        <rect x="100" y="222" width="140" height="6" rx="3" fill="#E8A020"/>
        <rect x="290" y="60" width="240" height="220" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)"/>
        <rect x="306" y="100" width="80" height="80" rx="6" fill="rgba(232,160,32,0.15)"/>
        <rect x="394" y="100" width="120" height="22" rx="4" fill="rgba(255,255,255,0.15)"/>
        <rect x="394" y="168" width="60" height="14" rx="4" fill="rgba(232,160,32,0.6)"/>
      </svg>
    ),
  },
];

interface ProjectsGridProps { full?: boolean; }

export default function ProjectsGrid({ full = false }: ProjectsGridProps) {
  const displayed = full ? projects : projects.slice(0, 2);

  return (
    <section className="section section-white" id="projets">
      <div className="container-custom">
        {!full && (
          <div className="section-header flex flex-wrap justify-between items-end gap-6 mb-10">
            <div className="rev-left">
              <div className="section-badge">// projets récents</div>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>
                Nos dernières <em>réalisations</em>
              </h2>
            </div>
            <p className="section-sub rev-right" style={{ maxWidth: '340px' }}>
              Une sélection de projets livrés à Djibouti, du site vitrine au tableau de bord métier.
            </p>
          </div>
        )}

        <div className="projects-grid">
          {displayed.map((p, idx) => (
            <RevealOnScroll key={p.title} direction="up" delay={idx * 100}>
              <article className="project-card">
                <div className="project-thumb">
                  {p.thumb}
                  <span className="project-thumb-tag">2026 · livré</span>
                  <span className="project-thumb-status">en ligne</span>
                </div>
                <div className="project-body">
                  <div className="project-cat">{p.cat}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-metrics">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="pm">
                        <div className="v">{m.v}{m.s && <small style={{ fontSize: '11px', color: 'var(--ink-3)' }}>{m.s}</small>}</div>
                        <div className="l">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {!full && (
          <div className="text-center mt-12">
            <Link href="/projets" className="btn-outline">
              <span>Voir tous nos projets</span><span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}