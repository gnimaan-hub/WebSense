'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const SCOPE = [
  "Type de site ou d'application",
  'Nombre de pages et fonctionnalités',
  'Design, multilingue, intégrations',
  'Maintenance et hébergement',
  'Délai de livraison',
];

const MOCK_LINES = [
  { label: 'Site vitrine · 5 pages', amount: '180 000' },
  { label: 'Design sur mesure', amount: '80 000' },
  { label: 'Blog / actualités', amount: '60 000' },
  { label: 'SEO · Core Web Vitals', amount: '40 000' },
];

export default function Pricing() {
  return (
    <section className="section" id="packages">
      <div className="container-custom">

        <div className="text-center max-w-2xl mx-auto mb-12 rev">
          <div className="section-badge" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            // tarifs · simulateur
          </div>
          <h2 className="section-h2">
            Des <em>formules transparentes</em>, adaptées à votre projet
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Estimez le budget de votre projet en quelques clics, avant tout contact.
            Notre simulateur détaille chaque poste — vous savez exactement à quoi
            vous attendre avant même de nous écrire.
          </p>
        </div>

        <RevealOnScroll direction="up" delay={100}>
          <div className="pricing-sim-grid">

            {/* ── GAUCHE : pitch + checklist + CTA ── */}
            <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--or)',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
              }}>
                // simulateur de tarifs
              </div>
              <h3 style={{
                fontSize: '24px', fontWeight: 800, color: 'var(--ink)',
                lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: 14,
              }}>
                Calculez votre budget<br />avant de nous contacter
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: 28 }}>
                Configurez votre projet étape par étape. Chaque option est expliquée,
                chaque prix est justifié. Aucune surprise dans le devis final.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {SCOPE.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '14px', color: 'var(--ink-2)' }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'color-mix(in srgb, var(--green-mid) 12%, transparent)',
                      border: '1px solid color-mix(in srgb, var(--green-mid) 22%, transparent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="var(--green-mid)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 36 }}>
                <Link href="/tarifs" className="btn-primary btn-hero-cta">
                  <span>Simuler mon projet</span> <span>→</span>
                </Link>
                <p style={{ marginTop: 12, fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--ink-4)' }}>
                  Sans formulaire · Sans engagement
                </p>
              </div>
            </div>

            {/* ── DROITE : mockup visuel de l'estimation ── */}
            <div style={{
              background: 'color-mix(in srgb, var(--or) 4%, var(--bg))',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 14,
            }}>
              <div style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(27,38,34,0.09)',
              }}>
                {/* En-tête carte */}
                <div style={{
                  padding: '14px 20px',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'color-mix(in srgb, var(--bg) 50%, var(--bg-white))',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green-mid)', boxShadow: '0 0 0 2px color-mix(in srgb, var(--green-mid) 22%, transparent)' }} />
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
                      estimation · websense
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '9.5px', fontWeight: 700,
                    background: 'color-mix(in srgb, var(--green-mid) 12%, transparent)',
                    color: 'var(--green-mid)',
                    padding: '3px 8px', borderRadius: 4,
                    border: '1px solid color-mix(in srgb, var(--green-mid) 22%, transparent)',
                  }}>
                    LIVE
                  </span>
                </div>

                {/* Lignes de coût */}
                <div style={{ padding: '4px 20px' }}>
                  {MOCK_LINES.map((line, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '11px 0',
                      borderBottom: i < MOCK_LINES.length - 1 ? '1px solid var(--border)' : 'none',
                    }}>
                      <span style={{ fontSize: '13px', color: 'var(--ink-2)' }}>{line.label}</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink)', fontWeight: 600 }}>
                        {line.amount} FDJ
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div style={{
                  padding: '16px 20px',
                  background: 'color-mix(in srgb, var(--or) 7%, var(--bg-white))',
                  borderTop: '1.5px solid color-mix(in srgb, var(--or) 22%, transparent)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--ink)' }}>
                    Total estimé
                  </span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '20px', fontWeight: 800,
                      color: 'var(--or-dark)', letterSpacing: '-0.02em',
                    }}>
                      360 000 FDJ
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>
                      indicatif · avant cadrage
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '11.5px', color: 'var(--ink-4)', textAlign: 'center', fontFamily: 'var(--mono)' }}>
                Exemple d'estimation générée par le simulateur
              </p>
            </div>

          </div>
        </RevealOnScroll>

        <p className="text-center mt-6"
          style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--ink-3)' }}>
          Tous nos tarifs sont indicatifs · Le devis final est calculé après cadrage gratuit · Paiement échelonné par jalons
        </p>
      </div>
    </section>
  );
}
