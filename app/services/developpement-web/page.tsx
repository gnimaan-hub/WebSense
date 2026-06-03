// app/services/developpement-web/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import ServiceVisual from '@/components/sections/ServiceVisual';

export const metadata = {
  title: 'Développement Web Sur Mesure | Cabinet WebSense · Djibouti',
  description:
    'Sites vitrine, e-commerce, applications web sur mesure à Djibouti. Découvrez tous les types de sites que nous développons.',
};

/* ─────────────────────────────────────────────────────────
   DONNÉES
───────────────────────────────────────────────────────── */
const SITE_TYPES = [
  {
    id: 'vitrine',
    num: '01',
    label: 'Site vitrine',
    tagline: 'Vous existez en ligne. Professionnellement.',
    desc: "L'essentiel pour toute entreprise qui veut être trouvée et convaincre dès le premier regard. Sobre, rapide, pensé pour vos clients.",
    pourQui: ['PME', 'Artisans', 'Professions libérales', 'Associations'],
    inclus: ['5 à 10 pages sur mesure', 'Design responsive mobile-first', 'Formulaire de contact', 'Optimisation SEO de base', 'Mise en ligne incluse'],
    duration: '2 à 3 semaines',
    badge: 'Le plus demandé',
    image: '/images/developpement/vitrine.jpg',
    imageAlt: "Site vitrine épuré affiché sur un écran d'ordinateur",
    visualTag: 'SITE VITRINE · PRÉSENCE WEB',
    visualTitle: 'Exister en ligne, professionnellement',
    visualSubtitle: '5 à 10 pages · 2 à 3 semaines',
  },
  {
    id: 'ecommerce',
    num: '02',
    label: 'Boutique en ligne',
    tagline: 'Vendez 24h/24, sans effort supplémentaire.',
    desc: 'Une boutique complète pour vendre vos produits ou services en ligne. Catalogue, panier, paiement sécurisé et gestion des commandes.',
    pourQui: ['Commerces', 'Revendeurs', 'Créateurs', 'Importateurs'],
    inclus: ['Catalogue produits', 'Panier & paiement sécurisé', 'Espace client', 'Gestion des commandes', 'Tableau de bord admin'],
    duration: '4 à 6 semaines',
    badge: null,
    image: '/images/developpement/ecommerce.jpg',
    imageAlt: 'Boutique en ligne consultée sur smartphone, paiement en cours',
    visualTag: 'BOUTIQUE · E-COMMERCE',
    visualTitle: 'Vendre 24h/24, sans effort',
    visualSubtitle: 'catalogue · paiement sécurisé · 4 à 6 sem.',
  },
  {
    id: 'webapp',
    num: '03',
    label: 'Application métier',
    tagline: 'Un outil sur mesure pour vos processus internes.',
    desc: "Dashboard, intranet, plateforme de gestion ou outil SaaS. Si vous avez un processus répétitif, on peut probablement le digitaliser.",
    pourQui: ['PME en croissance', 'Institutions', 'ONG', 'Entreprises logistiques'],
    inclus: ["Interface d'administration", 'Gestion des utilisateurs et rôles', 'Base de données sécurisée', 'API & intégrations', 'Tableaux de bord & exports'],
    duration: '6 à 10 semaines',
    badge: null,
    image: '/images/developpement/webapp.jpg',
    imageAlt: "Tableau de bord d'application métier sur grand écran",
    visualTag: 'APPLICATION · OUTIL MÉTIER',
    visualTitle: 'Digitaliser vos processus internes',
    visualSubtitle: 'dashboard · rôles · 6 à 10 sem.',
  },
  {
    id: 'reservation',
    num: '04',
    label: 'Site avec réservation',
    tagline: 'Vos clients réservent sans vous appeler.',
    desc: 'Parfait pour les hôtels, restaurants, cliniques ou prestataires de services. Vos clients choisissent leur créneau en ligne, vous gérez depuis un tableau de bord.',
    pourQui: ['Hôtels & hébergements', 'Restaurants', 'Cliniques & cabinets', 'Prestataires de services'],
    inclus: ['Calendrier de disponibilités', 'Formulaire de réservation en ligne', 'Confirmations automatiques', 'Tableau de bord de gestion', 'Notifications email'],
    duration: '3 à 5 semaines',
    badge: null,
    image: '/images/developpement/reservation.jpg',
    imageAlt: 'Calendrier de réservation en ligne sur tablette',
    visualTag: 'RÉSERVATION · PRISE DE RDV',
    visualTitle: 'Vos clients réservent en ligne',
    visualSubtitle: 'calendrier · confirmations auto · 3 à 5 sem.',
  },
  {
    id: 'multilingue',
    num: '05',
    label: 'Site multilingue',
    tagline: 'Votre audience parle plusieurs langues. Votre site aussi.',
    desc: "Pour les organisations qui s'adressent à des publics francophones, anglophones et arabophones. Contenu géré depuis une interface unique.",
    pourQui: ['Institutions publiques', 'ONG internationales', 'Hôtels & tourisme', 'Entreprises régionales'],
    inclus: ['2 à 3 langues (FR / EN / AR)', 'Interface admin unifiée', 'URLs localisées', 'SEO multilingue', 'Sélecteur de langue discret'],
    duration: '+ 1 semaine / langue',
    badge: null,
    image: '/images/developpement/multilingue.jpg',
    imageAlt: 'Équipe internationale travaillant sur un site multilingue',
    visualTag: 'MULTILINGUE · FR / EN / AR',
    visualTitle: 'Une audience, plusieurs langues',
    visualSubtitle: 'admin unifiée · SEO localisé',
  },
  {
    id: 'catalogue',
    num: '06',
    label: 'Catalogue & portfolio',
    tagline: 'Montrez votre travail. Obtenez des demandes.',
    desc: "Pour les entreprises qui veulent présenter leurs réalisations ou produits de manière visuelle et professionnelle, sans vendre en ligne.",
    pourQui: ['Agences', 'Architectes & designers', 'Photographes', 'Artisans & constructeurs'],
    inclus: ['Galerie filtrée par catégorie', 'Fiches détaillées par projet', 'Formulaire de demande de devis', 'Gestion des photos via admin', 'Optimisation images & performance'],
    duration: '2 à 3 semaines',
    badge: null,
    image: '/images/developpement/catalogue.jpg',
    imageAlt: 'Galerie de projets présentée en grille visuelle',
    visualTag: 'PORTFOLIO · CATALOGUE',
    visualTitle: 'Montrer votre travail, susciter la demande',
    visualSubtitle: 'galerie filtrée · devis · 2 à 3 sem.',
  },
];

/* ─────────────────────────────────────────────────────────
   COMPOSANTS DE MISE EN PAGE INTERNES
───────────────────────────────────────────────────────── */

/* Label section (Pour qui / Ce qui est inclus) */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: '13px',        /* ≥ 12px, jamais en dessous */
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      marginBottom: '10px',
    }}>
      {children}
    </div>
  );
}

/* Numéro du bloc */
function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',       /* ≥ 12px */
        fontWeight: 700,
        color: 'var(--ink-3)',
        letterSpacing: '0.06em',
      }}>
        {num}
      </span>
      {badge && (
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '12px',     /* ≥ 12px */
          fontWeight: 700,
          background: 'var(--or)',
          color: '#fff',
          padding: '3px 10px',
          borderRadius: '100px',
          letterSpacing: '0.05em',
        }}>
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function DeveloppementWebPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          {/* Fil d'Ariane */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)',
            fontSize: '13px',   /* ≥ 12px */
            fontWeight: 500,
            color: 'var(--ink-3)',
            marginBottom: '40px',
            letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Développement web</span>
          </nav>

          {/* Titre */}
          <div style={{ maxWidth: '760px' }}>
            <div className="section-badge rev">// WS·01 · Core · Développement web</div>
            <h1
              className="section-h2 rev d1"
              style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}
            >
              Quel site web<br/>vous faut-il ?
            </h1>
            <p
              className="section-sub rev d2"
              style={{ fontSize: '18px', fontWeight: 400, marginBottom: '0' }}
            >
              Chaque projet est différent. Parcourez les types de sites que nous développons — reconnaissez votre situation, et on part de là.
            </p>
          </div>
        </div>
      </div>

      {/* ── LISTE DES TYPES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

            {SITE_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div className="svc-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                }}>

                  {/* ── Colonne texte ── */}
                  <div className="svc-text-col" style={{ order: idx % 2 === 0 ? 0 : 1 }}>

                    <BlockNum num={type.num} badge={type.badge} />

                    {/* Titre du type */}
                    <h2 style={{
                      fontSize: 'clamp(26px,3vw,38px)',
                      fontWeight: 800,
                      color: 'var(--ink)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      marginBottom: '10px',
                    }}>
                      {type.label}
                    </h2>

                    {/* Tagline */}
                    <p style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--or-dark)',
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                    }}>
                      {type.tagline}
                    </p>

                    {/* Description */}
                    <p style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'var(--ink-2)',
                      lineHeight: 1.75,
                      marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

                    {/* Pour qui */}
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '13px',  /* ≥ 12px */
                            fontWeight: 600,
                            padding: '5px 12px',
                            borderRadius: '100px',
                            background: 'rgba(10,92,73,0.07)',
                            border: '1px solid rgba(10,92,73,0.15)',
                            color: 'var(--green)',
                          }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ce qui est inclus */}
                    <div style={{ marginBottom: '28px' }}>
                      <SectionLabel>Ce qui est inclus</SectionLabel>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {type.inclus.map(item => (
                          <li key={item} style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            fontSize: '15px',   /* ≥ 12px, lisible */
                            fontWeight: 500,
                            color: 'var(--ink-2)',
                            lineHeight: 1.5,
                          }}>
                            <span style={{
                              color: 'var(--or)',
                              fontWeight: 800,
                              fontFamily: 'var(--mono)',
                              fontSize: '14px',  /* ≥ 12px, plus le 11px */
                              flexShrink: 0,
                            }}>
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Durée + CTA — SANS les prix */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap',
                      paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      {/* Durée */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '13px',   /* ≥ 12px */
                          fontWeight: 600,
                          color: 'var(--ink-3)',
                        }}>
                          Durée :
                        </span>
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '14px',   /* ≥ 12px */
                          fontWeight: 700,
                          color: 'var(--ink)',
                        }}>
                          {type.duration}
                        </span>
                      </div>

                      {/* Séparateur */}
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />

                      {/* Lien tarifs */}
                      <Link
                        href="/tarifs"
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--ink-3)',
                          textDecoration: 'underline',
                          textDecorationColor: 'rgba(44,44,42,0.2)',
                          transition: 'color .2s',
                        }}
                      >
                        Voir les tarifs →
                      </Link>

                      {/* CTA */}
                      <Link
                        href={`/contact?projet=${type.id}`}
                        className="btn-primary"
                        style={{ marginLeft: 'auto' }}
                      >
                        <span>Demander un devis</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="svc-visual-col" style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                    <ServiceVisual
                      src={type.image}
                      alt={type.imageAlt}
                      tag={type.visualTag}
                      title={type.visualTitle}
                      subtitle={type.visualSubtitle}
                      reverse={idx % 2 === 1}
                      priority={idx === 0}
                    />
                  </div>

                </div>
              </HoverCard>
            ))}

          </div>
        </div>
      </section>

      {/* ── NOTE FINALE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '14px',     /* ≥ 12px, plus le 13px flou */
            fontWeight: 500,
            color: 'var(--ink-3)',
            lineHeight: 1.8,
            maxWidth: '520px',
            margin: '0 auto',
          }}>
            Vous ne vous reconnaissez dans aucun de ces profils ?{' '}
            <Link
              href="/contact"
              style={{
                color: 'var(--or-dark)',
                fontWeight: 700,
                textDecoration: 'underline',
                textDecorationColor: 'rgba(166,107,0,0.3)',
              }}
            >
              Décrivez-nous votre besoin
            </Link>
            {' '}— on trouve la bonne approche ensemble.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}