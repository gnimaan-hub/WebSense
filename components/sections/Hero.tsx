'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

/**
 * Hero v8 — version COMPLÈTE
 *  - Tag DJ · Cabinet WebSense
 *  - Titre + shimmer or
 *  - Sous-titre, CTAs, trust pills
 *  - Composite visuel droite :
 *      • Terminal animé (typewriter en boucle)
 *      • Éditeur de code (Hero.jsx)
 *      • Carte métriques live
 *      • Badge réseau (stack moderne)
 */
export default function Hero() {
  return (
    <section className="hero relative z-10" style={{ padding: '64px 0 56px' }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-[1.05fr_1fr] gap-12 items-center">

          {/* ── COLONNE GAUCHE ── */}
          <div>
            <RevealOnScroll direction="up">
              <div className="hero-tag">
                <span className="hero-tag-pill">DJ · 2026</span>
                <span className="hero-tag-sep" />
                <span className="hero-tag-dot" />
                Cabinet WebSense · Le sens du web
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={100}>
              <h1
                style={{
                  fontSize: 'clamp(36px,4.6vw,58px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                  color: 'var(--ink)',
                  marginBottom: 18,
                }}
              >
                L&apos;agence web qui code{' '}
                <em
                  style={{
                    fontStyle: 'normal',
                    background:
                      'linear-gradient(110deg, var(--or) 20%, var(--or-dark) 50%, var(--or) 80%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    animation: 'shimmer 6s linear infinite',
                  }}
                >
                  sur mesure
                </em>{' '}
                pour faire grandir votre activité.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={200}>
              <p
                style={{
                  fontSize: '16.5px',
                  color: 'var(--ink-2)',
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: 28,
                }}
              >
                Nous partons de vos besoins réels pour développer chaque projet.
                Chaque solution est{' '}
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  pensée pour vos utilisateurs
                </strong>
                , livrée avec son code source, et vous en restez{' '}
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  pleinement propriétaire
                </strong>
                .
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={300}>
              <div className="flex flex-wrap gap-2.5 mb-8">
                <Link href="/contact" className="btn-primary">
                  <span>Discutons de votre projet</span> <span>→</span>
                </Link>
                <Link href="#services" className="btn-outline">
                  <span>Explorer nos services</span>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={400}>
              <div className="hero-trust">
                {[
                  'Code documenté',
                  'Réponse sous 24h',
                  'Vous êtes propriétaire',
                  'Cadrage gratuit',
                ].map((item) => (
                  <div key={item} className="hero-trust-item">
                    <span className="ht-icon">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* ── COLONNE DROITE : COMPOSITE VISUEL ── */}
          <div className="hero-visual" aria-hidden="true">

            {/* Terminal */}
            <div className="hv-card hv-terminal">
              <div className="hv-term-head">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="hv-term-title">~/websense — deploy.sh</span>
                <div className="hv-term-tabs">
                  <span className="hv-term-tab active">prod</span>
                  <span className="hv-term-tab">staging</span>
                </div>
              </div>
              <TerminalBody />
            </div>

            {/* Éditeur de code */}
            <div className="hv-card hv-editor">
              <div className="hv-editor-head">
                <span className="hv-editor-file">Hero.jsx</span>
                <span className="hv-editor-tag">live</span>
              </div>
              <div className="hv-editor-body">
                <span className="ln"><span className="c">// Composant client</span></span>
                <span className="ln"><span className="k">export default function</span> <span className="t">Hero</span>() {'{'}</span>
                <span className="ln">  <span className="k">return</span> (</span>
                <span className="ln">    &lt;<span className="t">Section</span> name=<span className="s">&quot;hero&quot;</span>&gt;</span>
                <span className="ln">      &lt;<span className="t">Headline</span> /&gt;</span>
                <span className="ln">      &lt;<span className="t">Cta</span> href=<span className="s">&quot;/contact&quot;</span>/&gt;</span>
                <span className="ln">    &lt;/<span className="t">Section</span>&gt;);</span>
                <span className="ln">{'}'}</span>
              </div>
            </div>

            {/* Carte métriques */}
            <div className="hv-card hv-metrics">
              <div className="hv-metrics-head">
                <span className="hv-metrics-title">Production · live</span>
                <span className="hv-metrics-live">live</span>
              </div>
              <div className="hv-metrics-grid">
                <div className="hv-metric">
                  <div className="v">98<small>/100</small></div>
                  <div className="l">Lighthouse</div>
                </div>
                <div className="hv-metric">
                  <div className="v">187<small>kb</small></div>
                  <div className="l">Bundle</div>
                </div>
                <div className="hv-metric">
                  <div className="v">0.4<small>s</small></div>
                  <div className="l">FCP</div>
                </div>
                <div className="hv-metric">
                  <div className="v">24<small>h</small></div>
                  <div className="l">Réponse max</div>
                </div>
              </div>
            </div>

            {/* Badge réseau */}
            <div className="hv-card hv-net">
              <svg className="hv-net-svg" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="3.5" fill="#1D9E75" />
                <circle cx="8" cy="10" r="2.5" fill="#E8A020" />
                <circle cx="32" cy="10" r="2.5" fill="#E8A020" />
                <circle cx="8" cy="30" r="2.5" fill="#E8A020" />
                <circle cx="32" cy="30" r="2.5" fill="#E8A020" />
                <path
                  d="M20 20 L8 10 M20 20 L32 10 M20 20 L8 30 M20 20 L32 30"
                  stroke="#1B2622"
                  strokeWidth="0.8"
                  opacity="0.4"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="9"
                  stroke="#1D9E75"
                  strokeWidth="0.6"
                  opacity="0.3"
                  strokeDasharray="2 2"
                />
              </svg>
              <div className="hv-net-text">
                <strong>Stack moderne</strong>
                <small>React · Node · Vercel</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
 * TerminalBody : typewriter en boucle
 * Réécrit chaque ligne en respectant les délais du HTML v8.
 * ───────────────────────────────────────────────────────────── */
const LINES: { t: number; html: string }[] = [
  { t: 300, html: '<span class="hv-prompt">~/websense</span> <span class="hv-prompt">$</span> <span class="hv-cmd">npm run deploy --site=client-djibouti</span>' },
  { t: 600, html: '<span class="hv-out"><span class="hv-com">// Préparation du build de production…</span></span>' },
  { t: 400, html: '<span class="hv-out"><span class="hv-kw">›</span> Compilation des modules <span class="hv-num">[ 248/248 ]</span></span>' },
  { t: 400, html: '<span class="hv-out"><span class="hv-kw">›</span> Optimisation des images <span class="hv-num">[ 36/36 ]</span></span>' },
  { t: 400, html: '<span class="hv-out"><span class="hv-kw">›</span> Génération des routes statiques</span>' },
  { t: 600, html: '<span class="hv-out"><span class="hv-ok">✓</span> Build terminé en <span class="hv-num">2.4s</span> · taille <span class="hv-num">187 KB</span></span>' },
  { t: 400, html: '<span class="hv-out"><span class="hv-ok">✓</span> Lighthouse <span class="hv-str">"perf"</span>: <span class="hv-num">98</span> · <span class="hv-str">"a11y"</span>: <span class="hv-num">100</span></span>' },
  { t: 400, html: '<span class="hv-out"><span class="hv-ok">✓</span> Déployé sur <span class="hv-str">production</span></span>' },
  { t: 600, html: '<span class="hv-prompt">~/websense</span> <span class="hv-prompt">$</span> <span class="hv-caret"></span>' },
];

function TerminalBody() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = ref.current;
    if (!body) return;

    let idx = 0;
    let timeoutId: number;
    let mounted = true;

    const next = () => {
      if (!mounted) return;
      if (idx >= LINES.length) {
        timeoutId = window.setTimeout(() => {
          if (!mounted) return;
          body.innerHTML = '';
          idx = 0;
          next();
        }, 6000);
        return;
      }
      const div = document.createElement('div');
      div.className = 'hv-line';
      div.style.opacity = '0';
      div.innerHTML = LINES[idx].html;
      body.appendChild(div);
      requestAnimationFrame(() => {
        div.style.transition = 'opacity .35s ease';
        div.style.opacity = '1';
      });
      // Limite à 9 lignes
      while (body.children.length > 9) {
        body.removeChild(body.firstChild!);
      }
      timeoutId = window.setTimeout(next, LINES[idx++].t);
    };

    next();

    return () => {
      mounted = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <div className="hv-term-body" ref={ref} />;
}
