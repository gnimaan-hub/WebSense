'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const values = [
  { num: '01', title: 'Autonomie',     desc: "Nous construisons pour que vous n'ayez plus besoin de nous. Code livré, équipes formées, documentation complète — vous gardez la main, toujours." },
  { num: '02', title: 'Perception',    desc: "Chaque interface doit être ressentie, pas seulement utilisée. Expériences fluides, intuitives, mémorables, pensées pour vos utilisateurs réels." },
  { num: '03', title: 'Rigueur',       desc: "Le code est un artisanat. Chaque ligne a un rôle. Nous livrons ce que nous promettons, dans les délais convenus, sans surprise ni dette technique." },
  { num: '04', title: 'Transparence',  desc: "Devis détaillé, jalons clairs, accès direct à l'équipe. Vous savez à tout moment où en est votre projet — pas de boîte noire, pas de jargon inutile." },
];

export default function Approach() {
  return (
    <section className="section section-tinted" id="approche">
      <div className="container-custom">
        <div className="split">

          {/* Visualisation orbitale */}
          <RevealOnScroll direction="left">
            <div className="approach-viz">
              <div className="approach-viz-head">
                <span className="approach-viz-title">// websense · core_loop</span>
                <span className="approach-viz-status">en exécution</span>
              </div>
              <div className="approach-orbit">
                <svg viewBox="0 0 340 340" fill="none" className="w-full h-full">
                  <circle cx="170" cy="170" r="140" stroke="rgba(232,160,32,0.25)"  strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="170" cy="170" r="100" stroke="rgba(29,158,117,0.3)"   strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="170" cy="170" r="60"  stroke="rgba(27,38,34,0.15)"   strokeWidth="1" strokeDasharray="3 3"/>
                  {/* Core node */}
                  <circle cx="170" cy="170" r="42" fill="#fff" stroke="rgba(27,38,34,0.1)" strokeWidth="1.5"/>
                  <circle cx="170" cy="170" r="32" fill="url(#og)"/>
                  <text x="170" y="166" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#fff" letterSpacing="0.05em">PROJET</text>
                  <text x="170" y="180" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700" fill="#fff" letterSpacing="0.05em">CLIENT</text>
                  {/* Inner satellites */}
                  <circle cx="170" cy="110" r="8" fill="#1D9E75"/>
                  <circle cx="222" cy="200" r="8" fill="#E8A020"/>
                  <circle cx="118" cy="200" r="8" fill="#1B2622"/>
                  {/* Outer nodes */}
                  <g><circle cx="170" cy="30"  r="14" fill="#fff" stroke="rgba(27,38,34,0.1)"/><text x="170" y="35"  textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#0A5C49">01</text></g>
                  <g><circle cx="291" cy="241" r="14" fill="#fff" stroke="rgba(27,38,34,0.1)"/><text x="291" y="246" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#E8A020">02</text></g>
                  <g><circle cx="49"  cy="241" r="14" fill="#fff" stroke="rgba(27,38,34,0.1)"/><text x="49"  y="246" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="#1B2622">03</text></g>
                  {/* Labels */}
                  <text x="170" y="14"  textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#3F4944">AUTONOMIE</text>
                  <text x="291" y="270" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#3F4944">PERCEPTION</text>
                  <text x="49"  y="270" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#3F4944">RIGUEUR</text>
                  <defs>
                    <radialGradient id="og">
                      <stop offset="0%"   stopColor="#1D9E75"/>
                      <stop offset="100%" stopColor="#0A5C49"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginTop: '18px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-3)', textAlign: 'center' }}>
                <div style={{ padding: '6px', background: 'var(--bg)', borderRadius: '6px' }}><span style={{ color: 'var(--green)' }}>●</span> Autonomie</div>
                <div style={{ padding: '6px', background: 'var(--bg)', borderRadius: '6px' }}><span style={{ color: 'var(--or)' }}>●</span> Perception</div>
                <div style={{ padding: '6px', background: 'var(--bg)', borderRadius: '6px' }}><span style={{ color: 'var(--ink)' }}>●</span> Rigueur</div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Valeurs */}
          <div>
            <div className="section-header rev-right">
              <div className="section-badge">// approche · adn</div>
              <h2 className="section-h2">Notre approche, <em>vos avantages</em></h2>
              <p className="section-sub">Des valeurs concrètes qui se traduisent en résultats mesurables pour votre projet — chaque décision technique sert votre objectif business.</p>
            </div>
            <div className="values-list">
              {values.map((v, idx) => (
                <RevealOnScroll key={v.num} direction="up" delay={idx * 80}>
                  <div className="value-item">
                    <div className="value-num">{v.num}</div>
                    <div className="value-item-body">
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}