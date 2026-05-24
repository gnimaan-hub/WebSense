'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const techCategories = [
  {
    title: 'Front-end',         count: '// 04',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    dotColor: 'var(--or)',
  },
  {
    title: 'Back-end & Data',   count: '// 04',
    items: ['Node.js', 'PostgreSQL', 'PHP', 'REST / GraphQL'],
    dotColor: 'var(--green-mid)',
  },
  {
    title: 'Design & Recherche', count: '// 03',
    items: ['Figma', 'Wireframing', 'User Testing'],
    dotColor: 'var(--or)',
  },
  {
    title: 'Ops & Déploiement', count: '// 04',
    items: ['Vercel', 'GitHub Actions', 'Monitoring', 'CI/CD'],
    dotColor: 'var(--ink-3)',
  },
];

const pins = [
  { top: '18%', left: '60%', color: 'var(--or)',       glow: 'rgba(232,160,32,0.2)',    label: 'React'      },
  { top: '24%', left: '38%', color: 'var(--or)',       glow: 'rgba(232,160,32,0.2)',    label: 'Next.js'    },
  { top: '55%', left: '18%', color: 'var(--green-mid)',glow: 'rgba(29,158,117,0.2)',    label: 'Node.js'    },
  { top: '42%', left: '28%', color: 'var(--green-mid)',glow: 'rgba(29,158,117,0.2)',    label: 'PostgreSQL' },
  { top: '62%', left: '62%', color: 'var(--ink)',      glow: 'rgba(27,38,34,0.15)',     label: 'Vercel'     },
  { top: '72%', left: '74%', color: 'var(--ink)',      glow: 'rgba(27,38,34,0.15)',     label: 'GitHub'     },
  { top: '30%', left: '74%', color: 'var(--or)',       glow: 'rgba(232,160,32,0.2)',    label: 'TypeScript' },
  { top: '78%', left: '42%', color: 'var(--ink-3)',    glow: 'rgba(107,115,110,0.2)',   label: 'Figma'      },
  { top: '48%', left: '8%',  color: 'var(--green-mid)',glow: 'rgba(29,158,117,0.2)',    label: 'PHP'        },
];

function RadarSVG() {
  return (
    <>
      <svg viewBox="0 0 440 440" fill="none" className="w-full h-full">
        <circle cx="220" cy="220" r="200" stroke="rgba(27,38,34,0.10)" strokeWidth="1" strokeDasharray="3 4"/>
        <circle cx="220" cy="220" r="150" stroke="rgba(27,38,34,0.12)" strokeWidth="1"/>
        <circle cx="220" cy="220" r="100" stroke="rgba(27,38,34,0.15)" strokeWidth="1"/>
        <circle cx="220" cy="220" r="50"  stroke="rgba(27,38,34,0.18)" strokeWidth="1"/>
        <line x1="20"  y1="220" x2="420" y2="220" stroke="rgba(27,38,34,0.08)" strokeDasharray="2 4"/>
        <line x1="220" y1="20"  x2="220" y2="420" stroke="rgba(27,38,34,0.08)" strokeDasharray="2 4"/>
        <text x="220" y="14"  textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="#3F4944" letterSpacing="0.1em">FRONT</text>
        <text x="220" y="434" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="#3F4944" letterSpacing="0.1em">DESIGN</text>
        <text x="14"  y="224" textAnchor="start"  fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="#3F4944" letterSpacing="0.1em">BACK</text>
        <text x="426" y="224" textAnchor="end"    fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="#3F4944" letterSpacing="0.1em">OPS</text>
        {/* Ring labels */}
        <text x="226" y="48"  fontFamily="JetBrains Mono" fontSize="8" fill="#6B736E">adopt</text>
        <text x="226" y="98"  fontFamily="JetBrains Mono" fontSize="8" fill="#6B736E">trial</text>
        <text x="226" y="148" fontFamily="JetBrains Mono" fontSize="8" fill="#6B736E">assess</text>
        <text x="226" y="198" fontFamily="JetBrains Mono" fontSize="8" fill="#6B736E">hold</text>
        {/* Core */}
        <circle cx="220" cy="220" r="12" fill="#1B2622"/>
        <text x="220" y="224" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#fff">WS</text>
      </svg>
      {/* Pins positionnés en absolu */}
      {pins.map((pin) => (
        <div
          key={pin.label}
          className="tech-radar-pin"
          style={{ top: pin.top, left: pin.left }}
        >
          <div
            className="d"
            style={{
              background: pin.color,
              boxShadow: `0 0 0 4px ${pin.glow}`,
            }}
          />
          <span className="lbl">{pin.label}</span>
        </div>
      ))}
    </>
  );
}

interface TechStackProps { full?: boolean; }

export default function TechStack({ full = false }: TechStackProps) {
  return (
    <section className="section section-tinted" id="stack">
      <div className="container-custom">
        {!full && (
          <div className="text-center max-w-2xl mx-auto mb-12 rev">
            <div className="section-badge" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              // stack technique
            </div>
            <h2 className="section-h2">
              Des technologies <em>choisies</em>, pas accumulées
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Chaque outil est sélectionné pour sa robustesse, sa maintenabilité et sa pertinence — pas pour faire joli sur une page d'accueil.
            </p>
          </div>
        )}

        <div className="tech-block">

          {/* Radar */}
          <RevealOnScroll direction="left">
            <div className="tech-radar">
              <RadarSVG />
            </div>
          </RevealOnScroll>

          {/* Catégories */}
          <RevealOnScroll direction="right">
            <div className="tech-categories">
              {techCategories.map((cat) => (
                <div key={cat.title} className="tech-cat">
                  <div className="tech-cat-head">
                    <div className="tech-cat-title">{cat.title}</div>
                    <div className="tech-cat-count">{cat.count}</div>
                  </div>
                  <div className="tech-items">
                    {cat.items.map((tech) => (
                      <span key={tech} className="tech-item-badge">
                        <span
                          style={{
                            display: 'inline-block',
                            width: '6px', height: '6px',
                            borderRadius: '50%',
                            background: cat.dotColor,
                            marginRight: '6px',
                            verticalAlign: 'middle',
                          }}
                        />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}