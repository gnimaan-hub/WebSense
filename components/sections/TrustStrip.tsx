'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';

const sectors = ['COMMERCE', 'HÔTELLERIE', 'ONG', 'INSTITUTIONS', 'PME', 'ARTISANS'];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container-custom">
        <div className="trust-grid">
          <div className="trust-label">Secteurs accompagnés à Djibouti</div>
          {sectors.map((s, idx) => (
            <RevealOnScroll key={s} direction="up" delay={idx * 50}>
              <div className="trust-logo">{s}</div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}