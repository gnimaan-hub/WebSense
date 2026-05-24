'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const faqs = [
  { q: "Comment est calculé le coût d'un projet web ?",         a: "Chaque projet est différent. Nous commençons par un échange de cadrage gratuit (30 min), puis nous vous remettons un devis détaillé sous 48h, sans engagement. Le devis ventile temps, scope et livrables, jalon par jalon." },
  { q: "Combien de temps faut-il pour créer un site internet ?", a: "Un site vitrine se réalise en 2 à 4 semaines. Une application ou projet e-commerce demande davantage (4 à 8 semaines en moyenne). Le délai exact est fixé après le cadrage et engagé contractuellement." },
  { q: "Suis-je propriétaire de mon site après livraison ?",    a: "Oui, intégralement. Vous récupérez le code source complet, les fichiers graphiques (Figma) et tous les accès. Vous pouvez évoluer avec l'équipe technique de votre choix, sans dépendance à WebSense." },
  { q: "Vos sites sont-ils optimisés pour le mobile ?",         a: "Tous nos sites sont conçus mobile-first et testés sur les principaux appareils. Nous visons systématiquement un score Lighthouse supérieur à 95 sur mobile, y compris sur les connexions limitées à Djibouti." },
  { q: "Comment travaillez-vous avec vos clients ?",            a: "Un interlocuteur unique du début à la fin, des jalons de validation courts (toutes les 1-2 semaines). Pas de ticket anonyme : vous parlez toujours à la personne qui travaille sur votre projet." },
  { q: "Proposez-vous de la maintenance après la livraison ?",  a: "Oui, en option. Sauvegardes, mises à jour de sécurité, monitoring, évolutions fonctionnelles. Forfait mensuel ou intervention à la demande, avec SLA 24h." },
  { q: "Travaillez-vous avec des clients hors Djibouti ?",      a: "Oui. Notre cabinet est basé à Djibouti, mais nous accompagnons aussi des clients dans la sous-région et à l'international, à distance." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container-custom">
        <div className="faq-layout">

          {/* Colonne gauche — sticky */}
          <RevealOnScroll direction="left" className="faq-left">
            <div className="section-badge">// faq</div>
            <h2 className="section-h2">Vos questions avant de <em>lancer</em></h2>
            <p className="section-sub" style={{ marginBottom: '24px' }}>
              Budget, délais, propriété du code : nos réponses directes basées sur les projets que nous avons livrés à Djibouti.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Réserver 30 minutes</span><span>→</span>
            </Link>
            <div style={{
              marginTop: '24px', padding: '16px',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px dashed var(--border)',
              borderRadius: '12px',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                // Réponse moyenne
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 700, color: 'var(--ink)' }}>
                &lt; 24h
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ink-3)', marginTop: '4px' }}>
                Toute demande reçoit une première réponse sous 24h ouvrées.
              </div>
            </div>
          </RevealOnScroll>

          {/* Accordéon */}
          <RevealOnScroll direction="right">
            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item${open === idx ? ' open' : ''}`}>
                  <button
                    className="faq-q"
                    aria-expanded={open === idx}
                    onClick={() => setOpen(open === idx ? null : idx)}
                  >
                    <span className="faq-q-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle">+</span>
                  </button>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}