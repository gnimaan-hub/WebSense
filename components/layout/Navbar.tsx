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
  soon?:   boolean;
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
        <span style={underlineStyle} />
      </Link>

      {hasDrop && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '50%',
            width: '380px',
            background: 'var(--bg-white)',
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
          <div style={{
            position: 'absolute',
            top: '-7px', left: '50%', transform: 'translateX(-50%)',
            width: '14px', height: '7px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: '10px', height: '10px',
              background: 'var(--bg-white)',
              border: '1.5px solid var(--border)',
              transform: 'rotate(45deg)',
              margin: '3px auto 0',
            }} />
          </div>

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

/* ─── Navbar principale avec switch thème ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  // Initialisation du thème depuis localStorage / préférence système
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (stored === null && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Sauvegarde du thème et application de la classe .dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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

  // Couleurs de fond de la navbar adaptées au thème et au scroll
  const getNavBackground = () => {
    if (theme === 'dark') {
      return scrolled ? 'rgba(15,20,18,0.96)' : 'rgba(15,20,18,0.95)';
    } else {
      return scrolled ? 'rgba(232,247,242,0.96)' : 'rgba(255,255,255,0.95)';
    }
  };

  return (
    <>
      <nav
        id="nav"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: getNavBackground(),
          borderBottom: `1px solid var(--border)`,
          backdropFilter: 'blur(20px) saturate(160%)',
          boxShadow: scrolled ? '0 2px 16px rgba(27,38,34,0.07)' : 'none',
          transition: 'all .3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          className="container-custom"
          style={{ display: 'flex', alignItems: 'center', height: '68px', gap: '4px' }}
        >
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none', marginRight: '8px' }}
          >
            <LogoMark />
            <span style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-0.03em', color: 'var(--ink)', fontFamily: 'var(--font)' }}>
              Web<span style={{ color: 'var(--green-mid)' }}>Sense</span>
            </span>
          </Link>

          {/* Liens desktop */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: '0', marginLeft: 'auto', flex: 1, justifyContent: 'center' }}
          >
            {NAV.map(entry => (
              <NavLink key={entry.href} entry={entry} isActive={isActive(entry.href)} />
            ))}
          </div>

          {/* Droite desktop */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            {/* Switch thème */}
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              style={{
                background: 'rgba(29,158,117,0.08)',
                border: '1px solid rgba(29,158,117,0.2)',
                borderRadius: '40px',
                padding: '6px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--green)',
                transition: 'all 0.2s',
              }}
            >
              {theme === 'light' ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <span>Clair</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  <span>Sombre</span>
                </>
              )}
            </button>

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

            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: '9px 18px', fontSize: '13.5px' }}
            >
              <span>Démarrer</span><span>→</span>
            </Link>
          </div>

          {/* Burger mobile */}
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

      {/* Menu mobile */}
      <div
        style={{
          position: 'fixed',
          top: '68px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg-white)',
          zIndex: 99,
          overflowY: 'auto',
          padding: '16px clamp(20px,4vw,40px) 40px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform .35s cubic-bezier(0.16,1,0.3,1), opacity .25s',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
      >
        {NAV.map(entry => (
          <div key={entry.href}>
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

            <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 4px' }} />
          </div>
        ))}

        {/* Switch thème dans le menu mobile */}
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'rgba(29,158,117,0.08)',
            border: '1px solid rgba(29,158,117,0.2)',
            borderRadius: '40px',
            padding: '10px 16px',
            width: '100%', justifyContent: 'center',
            marginTop: '16px',
            fontFamily: 'var(--mono)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--green)',
            cursor: 'pointer',
          }}
        >
          {theme === 'light' ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              Thème clair
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              Thème sombre
            </>
          )}
        </button>

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