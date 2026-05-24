'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative z-[2] overflow-hidden"
      style={{ background: 'var(--bg-dark)', color: '#fff', paddingTop: 64 }}
    >
      {/* Grille de fond footer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at center, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black, transparent)',
        }}
      />

      <div className="container-custom">
        <div className="footer-top">

          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              </div>
              <div className="footer-brand-name">
                Web<span>Sense</span>
              </div>
            </div>
            <p className="footer-tagline">
              Cabinet de développement web basé à Djibouti. Nous accompagnons les entreprises et organisations
              dans leur présence numérique — de la conception à la livraison.
            </p>
            <a
              href="mailto:websense.contacts@gmail.com"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '7px 14px',
                borderRadius: 8,
                display: 'inline-block',
                transition: 'all .2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--or)';
                el.style.color = 'var(--or-2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(255,255,255,0.15)';
                el.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              websense.contacts@gmail.com
            </a>
            <pre
              className="footer-ascii"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                lineHeight: 1.2,
                color: 'rgba(255,255,255,0.2)',
                whiteSpace: 'pre',
                marginTop: 14,
              }}
            >
{`  ╭─── websense.dj ───╮
  │  v8.0 · 2026      │
  ╰───────────────────╯`}
            </pre>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Développement web</Link></li>
              <li><Link href="/services">UX Design</Link></li>
              <li><Link href="/services">Conseil stratégique</Link></li>
              <li><Link href="/services">Formation</Link></li>
              <li><Link href="/services">SEO & Performance</Link></li>
            </ul>
          </div>

          {/* Cabinet */}
          <div className="footer-col">
            <h4>Cabinet</h4>
            <ul>
              <li><Link href="/approche">Notre approche</Link></li>
              <li><Link href="/#process">Notre processus</Link></li>
              <li><Link href="/projets">Projets récents</Link></li>
              <li><Link href="/tarifs">Tarifs</Link></li>
              <li><Link href="/blog">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:websense.contacts@gmail.com">Email</a></li>
              <li><a href="https://wa.me/25377000000" rel="noopener noreferrer" target="_blank">WhatsApp</a></li>
              <li><a href="#" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" rel="noopener noreferrer">GitHub</a></li>
              <li><Link href="/contact">Réserver 30 min</Link></li>
            </ul>
          </div>

          {/* Status card */}
          <div className="footer-col">
            <h4>Système · live</h4>
            <div className="footer-status-card">
              <div className="footer-status-row">
                <span>Site</span>
                <span className="ok">opérationnel</span>
              </div>
              <div className="footer-status-row">
                <span>Réponse mail</span>
                <span className="ok">&lt; 24h</span>
              </div>
              <div className="footer-status-row">
                <span>Dernier déploiement</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
                  il y a 3j
                </span>
              </div>
              <div className="footer-status-row">
                <span>Disponibilité</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--or-2)' }}>
                  2 créneaux Q3
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 Cabinet WebSense · Djibouti · Tous droits réservés · Le sens du web</span>
          <div className="footer-bottom-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
