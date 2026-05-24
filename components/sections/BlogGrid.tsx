'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const articles = [
  {
    cat: 'Guides & Conseils', date: '12 mai 2026',
    title: "Pourquoi votre site web a besoin d'une refonte en 2026 ?",
    excerpt: "7 signaux concrets qui montrent que votre présence en ligne freine votre croissance, et comment y remédier.",
    thumb: (
      <svg viewBox="0 0 320 180" className="w-full" fill="none">
        <rect width="320" height="180" fill="#15201D"/>
        <g opacity="0.1" stroke="#FFFFFF" strokeWidth="0.5">
          <line x1="0" y1="45" x2="320" y2="45"/><line x1="0" y1="90" x2="320" y2="90"/><line x1="0" y1="135" x2="320" y2="135"/>
          <line x1="80" y1="0" x2="80" y2="180"/><line x1="160" y1="0" x2="160" y2="180"/><line x1="240" y1="0" x2="240" y2="180"/>
        </g>
        <rect x="40" y="50" width="240" height="10" rx="5" fill="rgba(232,160,32,0.6)"/>
        <rect x="40" y="68" width="180" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
        <rect x="40" y="106" width="100" height="28" rx="6" fill="rgba(232,160,32,0.3)"/>
        <circle cx="266" cy="120" r="20" fill="rgba(29,158,117,0.2)" stroke="#1D9E75"/>
        <path d="M258 120 L264 126 L274 116" stroke="#4FD4A5" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    cat: 'Développement', date: '08 avril 2026',
    title: "Combien coûte un site web professionnel à Djibouti ?",
    excerpt: "Fourchettes de prix réalistes, facteurs qui influencent le budget et comment comparer les devis sans se faire piéger.",
    thumb: (
      <svg viewBox="0 0 320 180" className="w-full" fill="none">
        <rect width="320" height="180" fill="#1E2A26"/>
        <g opacity="0.08" stroke="#FFFFFF" strokeWidth="0.5">
          <line x1="0" y1="45" x2="320" y2="45"/><line x1="0" y1="90" x2="320" y2="90"/><line x1="0" y1="135" x2="320" y2="135"/>
        </g>
        <circle cx="160" cy="90" r="50" fill="rgba(232,160,32,0.15)"/>
        <circle cx="160" cy="90" r="32" fill="rgba(232,160,32,0.20)"/>
        <text x="160" y="86" fontFamily="JetBrains Mono" fontSize="14" fontWeight="700" fill="#E8A020" textAnchor="middle">320k</text>
        <text x="160" y="100" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">FDJ</text>
        <rect x="50"  y="146" width="60" height="6" rx="3" fill="rgba(232,160,32,0.4)"/>
        <rect x="120" y="146" width="80" height="6" rx="3" fill="rgba(29,158,117,0.4)"/>
        <rect x="210" y="146" width="60" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
  },
  {
    cat: 'Stratégie · UX', date: '21 mars 2026',
    title: "UX Design : pourquoi l'expérience utilisateur génère des clients",
    excerpt: "Une interface bien conçue convertit mieux. Démonstration chiffrée et bonnes pratiques applicables à votre site.",
    thumb: (
      <svg viewBox="0 0 320 180" className="w-full" fill="none">
        <rect width="320" height="180" fill="#15201D"/>
        <rect x="50" y="35" width="220" height="110" rx="10" fill="rgba(232,160,32,0.08)" stroke="rgba(232,160,32,0.25)"/>
        <rect x="62" y="48" width="80"  height="10" rx="3" fill="rgba(255,255,255,0.6)"/>
        <rect x="62" y="64" width="120" height="6"  rx="3" fill="rgba(232,160,32,0.5)"/>
        <rect x="62" y="100" width="40" height="32" rx="4" fill="rgba(29,158,117,0.25)"/>
        <rect x="108" y="100" width="40" height="32" rx="4" fill="rgba(232,160,32,0.25)"/>
        <circle cx="240" cy="116" r="20" fill="rgba(255,255,255,0.04)" stroke="rgba(232,160,32,0.5)"/>
        <path d="M232 116 L240 124 L250 108" stroke="#E8A020" strokeWidth="2"/>
      </svg>
    ),
  },
];

interface BlogGridProps { full?: boolean; }

export default function BlogGrid({ full = false }: BlogGridProps) {
  const displayed = full ? articles : articles.slice(0, 3);

  return (
    <section className="section section-tinted" id="blog">
      <div className="container-custom">
        {!full && (
          <div className="flex flex-wrap justify-between items-end gap-5 mb-9">
            <div className="rev-left">
              <div className="section-badge">// insights · journal</div>
              <h2 className="section-h2" style={{ marginBottom: 0 }}>
                Nos articles sur le web et le <em>digital</em>
              </h2>
            </div>
            <Link href="/blog" className="btn-outline rev-right">
              <span>Voir tous les articles</span><span>→</span>
            </Link>
          </div>
        )}

        <div className="blog-grid">
          {displayed.map((article, idx) => (
            <RevealOnScroll key={article.title} direction="up" delay={idx * 80}>
              <article className="blog-card">
                <div className="blog-card-thumb">{article.thumb}</div>
                <div className="blog-card-body">
                  <div className="blog-meta-top">
                    <span className="blog-cat">{article.cat}</span>
                    <span className="blog-meta-sep" />
                    <span className="blog-date">{article.date}</span>
                  </div>
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-excerpt">{article.excerpt}</p>
                  <span className="blog-read-more">Lire l&apos;article →</span>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}