'use client';

import { useEffect, useRef } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

interface Stat {
  id: string;
  trend: string;
  value: number;
  suffix: string;
  /** Nombre de décimales pour l'animation (0 par défaut) */
  decimals?: number;
  label: string;
  bars: number[];
}

const stats: Stat[] = [
  { id: '// ws-stat-01', trend: 'stable',   value: 4,   suffix: '',      label: 'Expertises core·advisory',     bars: [40, 55, 48, 70, 62, 80, 75, 90] },
  { id: '// ws-stat-02', trend: '+12pts',   value: 100, suffix: '%',     label: 'Sur mesure, sans compromis',   bars: [30, 45, 60, 55, 75, 70, 90, 100] },
  { id: '// ws-stat-03', trend: 'objectif', value: 24,  suffix: 'h',     label: 'Délai de réponse maximum',     bars: [85, 70, 78, 60, 50, 55, 42, 35] },
  { id: '// ws-stat-04', trend: '+3pts',    value: 96,  suffix: '/100',  label: 'Score Lighthouse moyen',       bars: [60, 65, 75, 80, 85, 88, 94, 96] },
];

/**
 * AnimatedNumber : compteur qui démarre quand l'élément entre en viewport.
 * Reproduit exactement le comportement v8 (durée 1600ms, step 16ms).
 */
function AnimatedNumber({
  target, suffix, decimals = 0,
}: { target: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e.isIntersecting) return;
        const duration = 1600;
        const step = 16;
        let v = 0;
        const inc = target / (duration / step);
        const timer = window.setInterval(() => {
          v += inc;
          if (v >= target) {
            v = target;
            window.clearInterval(timer);
          }
          const display = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
          el.innerHTML = `${display}<span class="suf" style="color:var(--or)">${suffix}</span>`;
        }, step);
        obs.unobserve(el);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, decimals]);

  return (
    <div
      ref={ref}
      className="stat-number"
      // valeur initiale "0" avec suffixe orange pour éviter le saut visuel
      dangerouslySetInnerHTML={{
        __html: `0<span class="suf" style="color:var(--or)">${suffix}</span>`,
      }}
    />
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container-custom">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={stat.id} direction="up" delay={idx * 80}>
              <div className="stat-card">
                <div className="stat-card-head">
                  <span className="stat-card-id">{stat.id}</span>
                  <span className="stat-card-trend">{stat.trend}</span>
                </div>
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
                <div className="stat-label">{stat.label}</div>
                <div className="stat-spark">
                  {stat.bars.map((h, i) => (
                    <div key={i} className="bar" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
