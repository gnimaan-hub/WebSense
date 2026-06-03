import type React from 'react';
import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { ARTICLES } from './lib';

export const metadata = {
  title: 'Blog & Insights | Cabinet WebSense · Djibouti',
  description: 'Articles sur le développement web, l\'UX, le SEO et la stratégie digitale — rédigés par l\'équipe WebSense à Djibouti.',
};

export default function BlogPage() {
  const main  = ARTICLES.slice(0, 3);
  const small = ARTICLES.slice(3);

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '80px', paddingBottom: '64px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '600px' }}>
              <div className="section-badge rev" style={{ marginBottom: '14px' }}>// insights · journal</div>
              <h1 className="section-h2 rev" style={{ fontSize: 'clamp(36px,5vw,58px)', marginBottom: '14px' }}>
                Le digital expliqué,<br /><em>concrètement</em>
              </h1>
              <p className="section-sub rev" style={{ fontSize: '16px', maxWidth: '480px', marginBottom: 0 }}>
                Tendances, retours d'expérience et bonnes pratiques rédigés par l'équipe WebSense — pour décideurs et équipes en transition numérique.
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)',
              display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'right',
            }}>
              <span>{ARTICLES.length} articles publiés</span>
              <span style={{ color: 'var(--or)' }}>Djibouti · Région · International</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOUSTROPHÉDON — 3 premiers articles ── */}
      <section style={{ paddingBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {main.map((article, idx) => {
              const isOdd = idx % 2 === 1;
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <article
                    className="blog-boustro-card"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      background: 'var(--bg-white)',
                      border: '1px solid var(--border)',
                      ['--boustro-accent' as string]: article.catColor,
                    } as React.CSSProperties}
                  >
                    {/* Infos article */}
                    <div style={{
                      order: isOdd ? 1 : 0,
                      padding: '40px 44px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px',
                      borderRight: isOdd ? 'none' : '1px solid var(--border)',
                      borderLeft: isOdd ? '1px solid var(--border)' : 'none',
                    }}>
                      {/* Meta */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '10.5px', fontWeight: 700,
                          color: article.catColor, letterSpacing: '0.06em',
                          background: `color-mix(in srgb, ${article.catColor} 12%, transparent)`,
                          padding: '3px 10px', borderRadius: '100px',
                        }}>
                          {article.cat}
                        </span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-4)' }}>
                          {article.date}
                        </span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-4)' }}>
                          · {article.readMin} min
                        </span>
                      </div>

                      {/* Numéro + titre */}
                      <div>
                        <div style={{
                          fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                          color: 'var(--ink-4)', letterSpacing: '0.06em', marginBottom: '10px',
                        }}>
                          {String(idx + 1).padStart(2, '0')} /
                        </div>
                        <h2 style={{
                          fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 800,
                          color: 'var(--ink)', lineHeight: 1.25, letterSpacing: '-0.02em',
                        }}>
                          {article.title}
                        </h2>
                      </div>

                      {/* CTA */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700,
                        color: article.catColor,
                      }}>
                        Lire l'article <span>→</span>
                      </div>
                    </div>

                    {/* Résumé — côté opposé */}
                    <div style={{
                      order: isOdd ? 0 : 1,
                      padding: '40px 44px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center',
                      background: `color-mix(in srgb, ${article.catColor} 5%, var(--bg-white))`,
                    }}>
                      <p style={{
                        fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85,
                        margin: 0,
                      }}>
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AUTRES ARTICLES (petites cartes) ── */}
      {small.length > 0 && (
        <section style={{ paddingBottom: '80px', position: 'relative', zIndex: 2 }}>
          <div className="container-custom">
            <h2 style={{
              fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
              color: 'var(--ink-3)', letterSpacing: '0.1em',
              marginBottom: '24px',
            }}>
              // AUTRES ARTICLES
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
              {small.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <article
                    className="blog-sec-card"
                    style={{
                      background: 'var(--bg-white)',
                      border: '1px solid var(--border)',
                      borderRadius: '14px', overflow: 'hidden',
                      height: '100%', display: 'flex', flexDirection: 'column',
                      transition: 'all 0.2s',
                      ['--card-color' as string]: article.catColor,
                    } as React.CSSProperties}
                  >
                    <div style={{ height: '5px', background: `linear-gradient(90deg, ${article.catColor}, transparent)` }} />
                    <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, color: article.catColor }}>{article.cat}</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>· {article.date}</span>
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '8px' }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.7, flex: 1, marginBottom: '16px' }}>
                        {article.excerpt}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px dashed var(--border)' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-4)' }}>{article.readMin} min</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', fontWeight: 700, color: article.catColor }}>Lire →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}

              {/* Prochain article */}
              <div style={{
                background: 'var(--bg-white)',
                border: '1px dashed var(--border)',
                borderRadius: '14px', padding: '22px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                minHeight: '180px', textAlign: 'center', gap: '10px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '20px', color: 'var(--border)' }}>✦</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)', lineHeight: 1.7 }}>
                  Prochain article<br />en cours de rédaction
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {small.length === 0 && (
        <div style={{ paddingBottom: '60px' }} />
      )}

      <CTABand />
    </>
  );
}
