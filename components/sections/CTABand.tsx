'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function CTABand() {
  return (
    <section className="section" id="contact">
      <div className="container-custom">
        <RevealOnScroll direction="up">
          <div className="cta-band">

            <div className="cta-band-inner" style={{ position: 'relative', zIndex: 1 }}>
              {/* Tag disponibilité animé (manquait) */}
              <div className="cta-band-tag">
                Disponible · Q3 2026 · 2 créneaux
              </div>

              <h2 className="cta-band-title">
                Vous avez un projet web <em>en tête ?</em>
              </h2>
              <p className="cta-band-sub">
                Site internet, application métier ou refonte stratégique : échange de cadrage gratuit,
                estimation sous 48h, sans engagement.
              </p>
              <div className="cta-band-contacts">
                <a href="mailto:websense.contacts@gmail.com" className="cta-contact-link">
                  websense.contacts@gmail.com
                </a>
                <a
                  href="https://wa.me/25377000000"
                  className="cta-contact-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
                <Link href="/contact" className="cta-contact-link">
                  Réserver 30 min →
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <Link href="/contact" className="btn-or-white">
                <span>Parlons de votre projet</span>
                <span>→</span>
              </Link>
              <p
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: 12,
                  fontFamily: 'var(--mono)',
                }}
              >
                Réponse garantie sous 24h
              </p>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
