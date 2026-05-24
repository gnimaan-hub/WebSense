// components/ui/ServicePageParts.tsx
// Sous-composants CLIENT pour la page service développement web.
// La page principale reste Server Component pour le SEO.
'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── Fil d'Ariane : lien avec hover ── */
export function BreadcrumbLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{ color: hovered ? 'var(--ink)' : 'var(--ink-3)', transition: 'color .2s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

/* ── Carte type de projet avec hover ──
   plain=false (défaut) : carte blanche avec bordure (page types de projets)
   plain=true           : pas de fond de carte, juste un wrapper animé
────────────────────────────────────── */
export function HoverCard({
  children,
  delay = 0,
  plain = false,
}: {
  children: React.ReactNode;
  delay?: number;
  plain?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  if (plain) {
    /* Mode plat : section alternée sans box blanche */
    return (
      <div className="rev" style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    );
  }

  /* Mode carte : boîte blanche avec hover */
  return (
    <div className="rev" style={{ transitionDelay: `${delay}ms` }}>
      <div
        style={{
          background: '#fff',
          border: `1.5px solid ${hovered ? 'rgba(232,160,32,0.3)' : 'var(--border)'}`,
          borderRadius: '18px', overflow: 'hidden',
          boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          transition: 'transform .25s var(--ease), box-shadow .3s, border-color .3s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Ligne de processus avec hover ── */
interface ProcessStep {
  n: string;
  t: string;
  d: string;
  eta: string;
}

export function HoverRow({ step, delay = 0 }: { step: ProcessStep; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rev"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '56px 1fr auto',
          alignItems: 'center',
          gap: '0 32px',
          padding: hovered ? '24px 0 24px 12px' : '24px 0',
          borderBottom: '1px solid var(--border)',
          background: hovered ? 'rgba(232,160,32,0.04)' : 'transparent',
          transition: 'background .2s, padding-left .25s',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: hovered ? 'var(--or)' : 'var(--bg-dark)',
          color: '#fff',
          fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background .25s',
        }}>
          {step.n}
        </span>
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px', letterSpacing: '-0.01em' }}>
            {step.t}
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--ink-2)', lineHeight: '1.65' }}>
            {step.d}
          </p>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '10px',
            color: 'var(--green)', background: 'rgba(10,92,73,0.08)',
            padding: '4px 10px', borderRadius: '100px', whiteSpace: 'nowrap',
          }}>
            ⌛ {step.eta}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Livrable avec hover ── */
interface DeliverableItem {
  code: string;
  title: string;
  desc: string;
}

export function HoverBadge({ item, delay = 0 }: { item: DeliverableItem; delay?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rev"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        style={{
          display: 'flex', gap: '16px', alignItems: 'flex-start',
          padding: '20px 22px', borderRadius: '14px',
          background: '#fff',
          border: `1.5px solid ${hovered ? 'rgba(232,160,32,0.25)' : 'var(--border)'}`,
          boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transform: hovered ? 'translateX(4px)' : 'none',
          transition: 'all .25s var(--ease)',
          position: 'relative', overflow: 'hidden',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Trait gauche */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '3px', background: 'var(--or)',
          transform: `scaleY(${hovered ? 1 : 0})`,
          transformOrigin: 'top',
          transition: 'transform .35s var(--ease)',
        }} />
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'var(--or)', color: '#fff',
          fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transform: hovered ? 'scale(1.08) rotate(-5deg)' : 'none',
          transition: 'transform .3s var(--ease)',
        }}>
          {item.code}
        </div>
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
            {item.title}
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: '1.65' }}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Catégorie stack tech avec hover ── */
export function StackItem({ cat, items }: { cat: string; items: string[] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: '#fff',
        border: `1.5px solid ${hovered ? 'rgba(232,160,32,0.3)' : 'var(--border)'}`,
        borderRadius: '14px', padding: '18px 20px',
        boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hovered ? 'translateX(4px)' : 'none',
        transition: 'all .25s var(--ease)',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{cat}</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>// {items.length} outils</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {items.map(item => (
          <TechBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{
        fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600,
        padding: '4px 10px', borderRadius: '6px',
        background: hovered ? 'var(--or-pale2)' : 'var(--bg)',
        border: `1px solid ${hovered ? 'var(--or)' : 'var(--border)'}`,
        color: hovered ? 'var(--or-dark)' : 'var(--ink-2)',
        transition: 'all .2s', cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

/* ── FAQ item — <details> natif + animation d'ouverture ── */
export function FaqItem({
  faq,
  idx,
  isLast,
}: {
  faq: { q: string; a: string };
  idx: number;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          padding: '20px 22px', cursor: 'pointer', width: '100%',
          background: hovered ? 'rgba(232,160,32,0.04)' : 'transparent',
          border: 'none', textAlign: 'left',
          fontFamily: 'var(--font)',
          transition: 'background .2s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--or-dark)', flexShrink: 0, letterSpacing: '0.06em' }}>
          {String(idx + 1).padStart(2, '0')}
        </span>
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', flex: 1, lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          border: '1.5px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? '#fff' : 'var(--ink-3)',
          fontSize: '18px', flexShrink: 0,
          background: open ? 'var(--or)' : '#fff',
          borderColor: open ? 'var(--or)' : 'var(--border)',
          transform: open ? 'rotate(45deg)' : 'none',
          boxShadow: open ? 'var(--shadow-or)' : 'none',
          transition: 'all .3s var(--ease)',
          lineHeight: 1,
        }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 22px 20px 52px', fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.8' }}>
          {faq.a}
        </div>
      )}
    </div>
  );
}