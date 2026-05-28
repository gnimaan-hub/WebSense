'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ─── structure des entrées nav ─── */
interface SubItem {
  href:    string;
  label:   string;
  desc:    string;
  badge?:  string;
  badgeColor?: 'green' | 'or' | 'teal';
  soon?:   boolean;   // pas encore de page dédiée
}
interface NavEntry {
  href:      string;
  label:     string;
  sub?:      SubItem[];
}

const NAV: NavEntry[] = [
  { href: '/', label: 'Accueil' },

  {
    href: '/services',
    label: 'Services',
    sub: [
      {
        href: '/services/developpement-web',
        label: 'Développement web',
        desc: 'Sites vitrine, e-commerce, applications.',
        badge: 'Code', badgeColor: 'green',
      },
      {
        href: '/services/ux-design',
        label: 'UX Design & Ergonomie',
        desc: 'Audit, wireframes, expériences 3D, identité.',
        badge: 'Code', badgeColor: 'green',
      },
      {
        href: '/services/conseil-strategie',
        label: 'Conseil en Stratégie Web',
        desc: 'IA & GEO, transformation numérique, RSE, data.',
        badge: 'Consulting', badgeColor: 'or',
      },
      {
        href: '/services/formation',
        label: 'Autonomie & Formation',
        desc: 'IA, culture digitale, web responsable, sécurité.',
        badge: 'Consulting', badgeColor: 'or',
      },
      {
        href: '/services/maintenance',
        label: 'Maintenance Web & Évolution',
        desc: 'Supervision 24/7, SLA, optimisation continue.',
        badge: 'Support', badgeColor: 'teal',
      },
      {
        href: '/services/marketing-digital',
        label: 'Marketing Digital & Croissance',
        desc: 'Influence, vidéo premium, community management.',
        badge: 'Marketing', badgeColor: 'or',
      },
    ],
  },

  { href: '/projets',  label: 'Projets'  },
  { href: '/tarifs',   label: 'Tarifs'   },
  { href: '/blog',     label: 'Insights' },
  { href: '/faq',      label: 'FAQ'      },
];

/* ─── couleurs badges dropdown ─── */
const BADGE_COLORS = {
  green: { bg: 'rgba(10,92,73,0.08)',   color: 'var(--green)' },
  or:    { bg: 'var(--or-pale)',        color: 'var(--or-dark)' },
  teal:  { bg: 'rgba(29,158,117,0.10)', color: 'var(--green-mid)' },
};

/* ─── composant lien desktop avec soulignage animé ─── */
function NavLink({
  entry,
  isActive,
}: {
  entry: NavEntry;
  isActive: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const hasDrop = !!entry.sub?.length;
  const ref = useRef<HTMLDivElement>(null);

  /* Fermer le dropdown si clic en dehors */
  useEffect(() => {
    if (!dropOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropOpen]);

  const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '3px', left: '12px', right: '12px',
    height: '2px',
    background: isActive ? 'var(--or)' : 'var(--green-mid)',
    borderRadius: '2px',
    /* animation clipPath gauche→droite */
    clipPath: hovered || isActive
      ? 'inset(0 0% 0 0)'
      : 'inset(0 100% 0 0)',
    transition: 'clip-path .3s cubic-bezier(0.16,1,0.3,1)',
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => { setHovered(true);  if (hasDrop) setDropOpen(true);  }}
      onMouseLeave={() => { setHovered(false); if (hasDrop) setDropOpen(false); }}
    >
      {/* Lien principal */}
      <Link
        href={entry.href}
        style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          padding: '8px 12px', borderRadius: '8px',
          fontSize: '14px', fontWeight: isActive ? 700 : 500,
          color: isActive ? 'var(--green)' : 'var(--ink)',
          fontFamily: 'var(--font)',
          position: 'relative',
          transition: 'color .2s, background .2s',
          background: hovered && !isActive ? 'rgba(27,38,34,0.04)' : 'transparent',
          textDecoration: 'none',
        }}
      >
        {entry.label}
        {/* Chevron si dropdown */}
        {hasDrop && (
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
              transform: dropOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform .25s cubic-bezier(0.16,1,0.3,1)',
              opacity: 0.6,
            }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        )}
        {/* Soulignage animé */}
        <span style={underlineStyle} />
      </Link>

      {/* ── DROPDOWN ── */}
      {hasDrop && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '50%',
            width: '380px',
            background: '#fff',
            border: '1.5px solid var(--border)',
            borderRadius: '16px',
            boxShadow: '0 16px 48px rgba(27,38,34,0.12), 0 4px 12px rgba(27,38,34,0.06)',
            padding: '8px',
            zIndex: 200,
            opacity: dropOpen ? 1 : 0,
            pointerEvents: dropOpen ? 'auto' : 'none',
            transform: dropOpen
              ? 'translateX(-50%) translateY(0)'
              : 'translateX(-50%) translateY(-8px)',
            transition: 'opacity .22s cubic-bezier(0.16,1,0.3,1), transform .22s cubic-bezier(0.16,1,0.3,1)',
          } as React.CSSProperties}
        >
          {/* Flèche pointant vers le haut */}
          <div style={{
            position: 'absolute',
            top: '-7px', left: '50%', transform: 'translateX(-50%)',
            width: '14px', height: '7px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '10px', height: '10px',
              background: '#fff',
              border: '1.5px solid var(--border)',
              transform: 'rotate(45deg)',
              margin: '3px auto 0',
            }} />
          </div>

          {/* En-tête dropdown */}
          <div style={{
            padding: '10px 12px 8px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '4px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.08em', fontWeight: 600 }}>
              // NOS SERVICES
            </span>
            <Link
              href="/services"
              style={{
                fontFamily: 'var(--mono)', fontSize: '11px',
                color: 'var(--or-dark)', fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Voir tout →
            </Link>
          </div>

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {entry.sub!.map((item, i) => (
              <DropItem key={i} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Item de dropdown ─── */
function DropItem({ item }: { item: SubItem }) {
  const [hovered, setHovered] = useState(false);
  const bc = item.badgeColor ? BADGE_COLORS[item.badgeColor] : BADGE_COLORS.green;

  return (
    <Link
      href={item.href}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '12px',
        padding: '10px 12px', borderRadius: '10px',
        background: hovered ? 'var(--or-pale2)' : 'transparent',
        transition: 'background .18s',
        textDecoration: 'none',
        position: 'relative',
        opacity: item.soon ? 0.6 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icône colorée */}
      <div style={{
        width: '36px', height: '36px', borderRadius: '9px',
        background: hovered ? 'var(--or-pale)' : 'rgba(27,38,34,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'background .18s',
      }}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
          stroke={hovered ? 'var(--or-dark)' : 'var(--ink-3)'}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'stroke .18s' }}
        >
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
          <span style={{
            fontSize: '14px', fontWeight: 600,
            color: hovered ? 'var(--ink)' : 'var(--ink)',
            fontFamily: 'var(--font)',
            letterSpacing: '-0.01em',
          }}>
            {item.label}
          </span>
          {item.badge && (
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700,
              padding: '1px 7px', borderRadius: '100px',
              background: bc.bg, color: bc.color,
              letterSpacing: '0.04em',
              flexShrink: 0,
            }}>
              {item.badge}
            </span>
          )}
          {item.soon && (
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700,
              padding: '1px 6px', borderRadius: '100px',
              background: 'rgba(27,38,34,0.06)', color: 'var(--ink-4)',
              letterSpacing: '0.04em',
              flexShrink: 0,
            }}>
              bientôt
            </span>
          )}
        </div>
        <span style={{
          fontSize: '12.5px', color: 'var(--ink-3)',
          fontFamily: 'var(--font)', lineHeight: 1.4,
          display: 'block',
        }}>
          {item.desc}
        </span>
      </div>

      {/* Flèche hover */}
      <svg
        viewBox="0 0 24 24" width="14" height="14" fill="none"
        stroke="var(--or)" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-4px)',
          transition: 'opacity .18s, transform .18s',
          flexShrink: 0, marginTop: '11px',
        }}
      >
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </Link>
  );
}

/* ─── Navbar principale ─── */
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMobileExpanded(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ══════════════════ NAV ══════════════════ */}
      <nav
        id="nav"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: scrolled ? 'rgba(232,247,242,0.96)' : 'rgba(255,255,255,0.95)',
          borderBottom: `1px solid ${scrolled ? 'rgba(29,158,117,0.18)' : 'rgba(27,38,34,0.08)'}`,
          backdropFilter: 'blur(20px) saturate(160%)',
          boxShadow: scrolled ? '0 2px 16px rgba(27,38,34,0.07)' : 'none',
          transition: 'all .3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          className="container-custom"
          style={{ display: 'flex', alignItems: 'center', height: '68px', gap: '4px' }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none', marginRight: '8px' }}
          >
            <LogoMark />
            <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.03em', color: 'var(--ink)', fontFamily: 'var(--font)' }}>
              Web<span style={{ color: 'var(--green-mid)' }}>Sense</span>
            </span>
          </Link>

          {/* ── Liens desktop (cachés sur mobile) ── */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: '0', marginLeft: 'auto', flex: 1, justifyContent: 'center' }}
          >
            {NAV.map(entry => (
              <NavLink key={entry.href} entry={entry} isActive={isActive(entry.href)} />
            ))}
          </div>

          {/* ── Droite desktop ── */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            {/* Pastille disponible */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '5px 10px', borderRadius: '100px',
              background: 'rgba(29,158,117,0.08)',
              border: '1px solid rgba(29,158,117,0.2)',
              fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
              color: 'var(--green)', whiteSpace: 'nowrap',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--green-mid)',
                boxShadow: '0 0 0 2px rgba(29,158,117,0.2)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              Disponible
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: '9px 18px', fontSize: '13.5px' }}
            >
              <span>Démarrer</span><span>→</span>
            </Link>
          </div>

          {/* ── Burger mobile (visible seulement sur mobile) ── */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="lg:hidden"
            style={{
              marginLeft: 'auto',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px',
            }}
          >
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--ink)', borderRadius: '2px',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform .3s, opacity .3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--ink)', borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity .3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '2px',
              background: 'var(--ink)', borderRadius: '2px',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform .3s, opacity .3s',
            }} />
          </button>
        </div>
      </nav>

      {/* ══════════════════ MENU MOBILE ══════════════════ */}
      <div
        style={{
          position: 'fixed',
          top: '68px', left: 0, right: 0, bottom: 0,
          background: '#fff',
          zIndex: 99,
          overflowY: 'auto',
          padding: '16px clamp(20px,4vw,40px) 40px',
          /* Glissement vertical */
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform .35s cubic-bezier(0.16,1,0.3,1), opacity .25s',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >
        {NAV.map(entry => (
          <div key={entry.href}>
            {/* Entrée principale */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link
                href={entry.href}
                style={{
                  flex: 1,
                  display: 'block', padding: '14px 4px',
                  fontSize: '18px', fontWeight: isActive(entry.href) ? 700 : 500,
                  color: isActive(entry.href) ? 'var(--green)' : 'var(--ink)',
                  fontFamily: 'var(--font)',
                  textDecoration: 'none',
                }}
              >
                {entry.label}
              </Link>
              {/* Bouton expand si sous-entrées */}
              {entry.sub && (
                <button
                  onClick={() => setMobileExpanded(e => e === entry.href ? null : entry.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '8px', color: 'var(--ink-3)',
                    display: 'flex', alignItems: 'center',
                  }}
                  aria-expanded={mobileExpanded === entry.href}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      transform: mobileExpanded === entry.href ? 'rotate(180deg)' : 'none',
                      transition: 'transform .25s',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              )}
            </div>

            {/* Sous-items dépliés */}
            {entry.sub && mobileExpanded === entry.href && (
              <div style={{
                paddingLeft: '16px',
                paddingBottom: '8px',
                borderLeft: '2px solid var(--border)',
                marginLeft: '4px',
                display: 'flex', flexDirection: 'column', gap: '2px',
              }}>
                {entry.sub.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '10px 12px', borderRadius: '8px',
                      fontSize: '15px', fontWeight: 500,
                      color: item.soon ? 'var(--ink-3)' : 'var(--ink)',
                      fontFamily: 'var(--font)',
                      textDecoration: 'none',
                    }}
                  >
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.soon && (
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700,
                        padding: '2px 7px', borderRadius: '100px',
                        background: 'rgba(27,38,34,0.06)', color: 'var(--ink-4)',
                      }}>
                        bientôt
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}

            {/* Séparateur */}
            <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 4px' }} />
          </div>
        ))}

        {/* CTA mobile */}
        <Link
          href="/contact"
          className="btn-primary"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}
        >
          <span>Démarrer un projet</span><span>→</span>
        </Link>
      </div>
    </>
  );
}

/* ─── Logo mark ─── */
function LogoMark() {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        width: '36px', height: '36px', borderRadius: '9px',
        background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        transform: hov ? 'rotate(-8deg) scale(1.08)' : 'none',
        transition: 'transform .3s cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    </div>
  );
}