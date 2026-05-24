'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/services',  label: 'Services' },
  { href: '/approche',  label: 'Approche' },
  { href: '/projets',   label: 'Projets' },
  { href: '/stack',     label: 'Stack' },
  { href: '/tarifs',    label: 'Tarifs' },
  { href: '/faq',       label: 'FAQ' },
  { href: '/blog',      label: 'Insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <>
      <nav
        id="nav"
        className={`sticky top-0 z-[100] border-b transition-all duration-300 ${
          scrolled ? 'scrolled' : ''
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.78)',
          borderColor: scrolled ? 'rgba(232,160,32,0.2)' : 'var(--border)',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        }}
      >
        <div
          className="container-custom flex items-center gap-6"
          style={{ height: 68 }}
        >
          {/* Logo */}
          <Link href="/" className="nav-logo flex items-center gap-[10px]">
            <div
              className="nav-logo-mark w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)' }}
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </div>
            <span
              className="nav-logo-text font-extrabold text-[17px] tracking-[-0.03em]"
              style={{ color: 'var(--ink)' }}
            >
              Web<span style={{ color: 'var(--green-mid)' }}>Sense</span>
            </span>
            <span
              className="nav-logo-id hidden sm:inline"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: 'var(--ink-4)',
                letterSpacing: '0.05em',
                padding: '2px 6px',
                border: '1px solid var(--border)',
                borderRadius: 4,
              }}
            >
              v8.0
            </span>
          </Link>

          {/* Liens desktop */}
          <ul className="nav-links hidden lg:flex gap-0.5 list-none ml-auto">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-link block px-3 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 relative"
                  style={{
                    color: pathname === href ? 'var(--ink)' : 'var(--ink-2)',
                  }}
                >
                  {label}
                  {pathname === href && (
                    <span
                      className="absolute bottom-1 left-3 right-3 h-0.5 rounded-sm"
                      style={{ background: 'var(--or)' }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Status pill — disponibilité */}
          <div
            className="nav-status hidden md:flex"
            aria-label="Disponibilité"
            title="2 créneaux disponibles ce trimestre"
          >
            <span className="nav-status-dot" />
            <span>2 créneaux · Q3·26</span>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="nav-cta hidden lg:inline-flex items-center gap-1.5 relative overflow-hidden"
            style={{
              padding: '9px 18px',
              borderRadius: 8,
              background: 'var(--ink)',
              color: '#fff',
              fontSize: '13.5px',
              fontWeight: 700,
              transition: 'transform .2s var(--ease), box-shadow .2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'linear-gradient(135deg, var(--or), var(--or-dark))';
              el.style.transform = 'translateY(-1px)';
              el.style.boxShadow = 'var(--shadow-or)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = 'var(--ink)';
              el.style.transform = '';
              el.style.boxShadow = '';
            }}
          >
            <span>Démarrer</span>
            <span>→</span>
          </Link>

          {/* Burger */}
          <button
            className={`nav-burger flex lg:hidden flex-col justify-center gap-1 w-9 h-9 ml-auto ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span className="block w-[22px] h-0.5 rounded-sm transition-transform duration-300" style={{ background: 'var(--ink)', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : '' }} />
            <span className="block w-[22px] h-0.5 rounded-sm transition-opacity duration-300" style={{ background: 'var(--ink)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-[22px] h-0.5 rounded-sm transition-transform duration-300" style={{ background: 'var(--ink)', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <nav
        className={`nav-mobile fixed top-[68px] left-0 right-0 bottom-0 bg-white z-[99] overflow-y-auto flex-col gap-1 p-6 ${
          menuOpen ? 'flex' : 'hidden'
        }`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block px-4 py-3.5 rounded-xl text-base font-medium border-b transition-all duration-200"
            style={{
              color: pathname === href ? 'var(--ink)' : 'var(--ink-2)',
              background: pathname === href ? 'var(--or-pale)' : 'transparent',
              borderColor: 'var(--border)',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="block px-4 py-3.5 rounded-xl text-base font-bold border-b transition-all duration-200"
          style={{ color: 'var(--or-dark)', borderColor: 'var(--border)' }}
        >
          Démarrer un projet →
        </Link>
      </nav>
    </>
  );
}
