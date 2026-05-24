'use client';

import { useState, useEffect } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const testimonials = [
  { name: 'Ali Mohamed',   role: 'Directeur · Commerce · Djibouti',          text: "Très bonne expérience avec WebSense. Équipe professionnelle, à l'écoute et réactive. Le travail a été réalisé avec sérieux, dans les délais, avec des explications claires à chaque étape.", avatar: 'AM' },
  { name: 'Fatouma Ahmed', role: 'DG · ONG · Djibouti',                       text: "WebSense, c'est une équipe sérieuse et accessible, avec une vraie expertise technique. Des solutions claires, bien pensées, et un accompagnement humain tout au long du projet.", avatar: 'FA' },
  { name: 'Ibrahim Bouh',  role: 'Gérant · Hôtel & Restauration · Djibouti', text: "Un grand merci pour le professionnalisme lors de la création de notre site vitrine. Nous sommes pleinement satisfaits du résultat et recommandons vivement leurs services.", avatar: 'IB' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section className="section section-dark" aria-labelledby="temo-title">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="section-badge section-badge-dark rev" style={{ display: 'inline-flex' }}>
            // témoignages clients
          </div>
          <h2 className="section-h2 section-h2-dark rev d1" id="temo-title">
            L&apos;avis de nos clients <em>sur leur projet</em>
          </h2>
        </div>

        <RevealOnScroll direction="up">
          <div className="testimonials-wrap">
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div className="testimonial-inner">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star" style={{ animationDelay: `${i * 0.05}s` }}>★</span>
                      ))}
                    </div>
                    <p className="t-text">&ldquo;{t.text}&rdquo;</p>
                    <div className="t-author">
                      <div className="t-avatar">{t.avatar}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonials-nav">
              <button className="tn-btn" onClick={prev} aria-label="Précédent">←</button>
              <button className="tn-btn" onClick={next} aria-label="Suivant">→</button>
            </div>

            <div className="tn-dots">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`tn-dot${current === i ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  role="button"
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}