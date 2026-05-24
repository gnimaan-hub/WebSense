'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/',          label: 'Accueil'  },
  { href: '/services',  label: 'Services' },
  { href: '/projets',   label: 'Projets'  },
  { href: '/tarifs',    label: 'Tarifs'   },
  { href: '/blog',      label: 'Insights' },
  { href: '/faq',       label: 'FAQ'      },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav
        id="nav"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: scrolled ? 'rgba(232,247,242,0.96)' : 'rgb(255, 255, 255)',
          borderBottom: `1px solid ${scrolled ? 'rgba(29,158,117,0.18)' : 'rgba(27,38,34,0.08)'}`,
          backdropFilter: 'blur(20px) saturate(160%)',
          boxShadow: scrolled ? '0 2px 16px rgba(27,38,34,0.07)' : 'none',
          transition: 'all .3s var(--ease)',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '9px',
              background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'transform .3s var(--ease)',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(-8deg) scale(1.08)')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18 }} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </div>
            <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.03em', color: 'var(--ink)', fontFamily: 'var(--font)' }}>
              Web<span style={{ color: 'var(--green-mid)' }}>Sense</span>
            </span>
          </Link>

          {/* Nav desktop */}
          <ul style={{ display: 'flex', gap: '2px', listStyle: 'none', marginLeft: 'auto', alignItems: 'center' }}
              className="hidden lg:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={{
                    display: 'block', padding: '8px 14px', borderRadius: '8px',
                    fontSize: '13.5px', fontWeight: isActive(href) ? 700 : 500,
                    color: isActive(href) ? 'var(--green)' : 'var(--ink)',
                    background: isActive(href) ? 'rgba(29,158,117,0.08)' : 'transparent',
                    fontFamily: 'var(--font)', position: 'relative',
                    transition: 'all .2s',
                  }}
                >
                  {label}
                  {isActive(href) && (
                    <span style={{
                      position: 'absolute', bottom: '4px', left: '14px', right: '14px',
                      height: '2px', background: 'var(--or)', borderRadius: '2px',
                    }} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Status */}
          <div className="nav-status hidden xl:flex" style={{ marginLeft: '12px' }}>
            <span className="nav-status-dot" />
            <span>Disponible</span>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-primary hidden lg:inline-flex"
            style={{ marginLeft: '10px', padding: '9px 20px', fontSize: '13.5px' }}
          >
            <span>Démarrer</span><span>→</span>
          </Link>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer' : 'Menu'}
            aria-expanded={menuOpen}
            className="lg:hidden"
            style={{
              marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: 'var(--ink)', borderRadius: '2px',
                transform: menuOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: 'transform .3s, opacity .3s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
          background: 'var(--bg)', zIndex: 99, overflowY: 'auto',
          padding: '24px clamp(20px,4vw,56px)',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              display: 'block', padding: '14px 16px', borderRadius: '10px',
              fontSize: '17px', fontWeight: 500,
              color: isActive(href) ? 'var(--green)' : 'var(--ink)',
              background: isActive(href) ? 'rgba(29,158,117,0.08)' : 'transparent',
              borderBottom: '1px solid var(--border)',
              fontFamily: 'var(--font)',
            }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" style={{
            display: 'block', padding: '14px 16px', borderRadius: '10px',
            fontSize: '17px', fontWeight: 700, color: 'var(--or)',
            fontFamily: 'var(--font)',
          }}>
            Démarrer un projet →
          </Link>
        </nav>
      )}
    </>
  );
}