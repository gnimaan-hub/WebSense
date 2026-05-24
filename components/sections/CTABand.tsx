'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function CTABand() {
  return (
    <section className="section" id="contact">
      <div className="container-custom">
        <RevealOnScroll direction="up">
          <div className="cta-band">
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Tag sans référence aux créneaux */}
              <div className="cta-band-tag">
                Disponible · Réponse sous 24h
              </div>
              <h2 className="cta-band-title">
                Vous avez un projet web <em>en tête ?</em>
              </h2>
              <p className="cta-band-sub">
                Site internet, application métier ou refonte stratégique : échange de cadrage gratuit, estimation sous 48h, sans engagement.
              </p>
              <div className="cta-band-contacts">
                <a href="mailto:websense.contacts@gmail.com" className="cta-contact-link">
                  websense.contacts@gmail.com
                </a>
                <a href="https://wa.me/25377280063" className="cta-contact-link" rel="noopener noreferrer">
                  WhatsApp · +253 77 28 00 63
                </a>
                <Link href="/contact" className="cta-contact-link">
                  Formulaire de contact →
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', flexShrink: 0 }}>
              <Link href="/contact" className="btn-or-white">
                <span>Parlons de votre projet</span><span>→</span>
              </Link>
              <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.45)', marginTop: '12px', fontFamily: 'var(--mono)' }}>
                Réponse garantie sous 24h
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}