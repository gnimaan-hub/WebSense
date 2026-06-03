// app/services/ux-design/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import ServiceVisual from '@/components/sections/ServiceVisual';

export const metadata = {
  title: 'UX Design & Ergonomie | Cabinet WebSense · Djibouti',
  description:
    "Audit UX, design adaptatif, expériences immersives 3D et identité visuelle distinctive. WebSense conçoit des interfaces qui se ressentent, pas seulement qui s'utilisent.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes disciplines UX
───────────────────────────────────────────────────────── */
const UX_TYPES = [
  {
    id: 'audit',
    num: '01',
    label: 'Audit UX & Analyse de données',
    tagline: 'Comprendre avant de concevoir. Mesurer avant de modifier.',
    desc: "Un bon design commence par une lecture lucide de l'existant. Nous analysons comment vos utilisateurs naviguent réellement — pas comme vous l'imaginez. Chaque recommandation est chiffrée, chaque problème documenté avec ses preuves.",
    pourQui: ['Sites existants à optimiser', 'Boutiques e-commerce', 'Applications avec fort taux d\'abandon', 'Organisations souhaitant comprendre leurs utilisateurs'],
    inclus: [
      'Audit heuristique complet (10 critères Nielsen)',
      'Analyse des parcours utilisateurs réels',
      'Identification des points de friction et d\'abandon',
      'Heatmaps et enregistrements de sessions',
      'Rapport de recommandations priorisées',
      'Feuille de route d\'amélioration chiffrée',
    ],
    duration: '1 à 2 semaines',
    badge: 'Point de départ recommandé',
    image: '/images/ux-design/audit.jpg',
    imageAlt: 'Atelier de recherche utilisateur avec post-its et parcours',
    visualTag: 'AUDIT UX · DATA',
    visualTitle: 'Comprendre avant de concevoir',
    visualSubtitle: 'heuristique · heatmaps · 1 à 2 sem.',
  },

  {
    id: 'adaptatif',
    num: '02',
    label: 'Design adaptatif & interfaces intelligentes',
    tagline: 'Des interfaces qui apprennent de l\'utilisateur et s\'ajustent en temps réel.',
    desc: "L'interface idéale n'est pas la même pour tout le monde. Nous concevons des systèmes qui observent les comportements, détectent les préférences et adaptent le contenu, la navigation et la mise en page à chaque utilisateur — sans configuration manuelle.",
    pourQui: ['Plateformes SaaS', 'E-commerce à fort catalogue', 'Médias et éditeurs de contenu', 'Applications avec base utilisateurs diversifiée'],
    inclus: [
      'Conception de dashboards adaptatifs par profil',
      'Personnalisation dynamique du contenu affiché',
      'Moteur de recommandation UX basé sur le comportement',
      'A/B testing intégré au design system',
      'Métriques d\'engagement en temps réel',
      'Documentation du système de règles d\'adaptation',
    ],
    duration: '3 à 6 semaines',
    badge: null,
    image: '/images/ux-design/adaptatif.jpg',
    imageAlt: "Maquettes d'interface adaptées à différents profils utilisateurs",
    visualTag: 'DESIGN ADAPTATIF · IA',
    visualTitle: "Des interfaces qui s'ajustent à chacun",
    visualSubtitle: 'personnalisation · A/B testing · 3 à 6 sem.',
  },

  {
    id: 'immersif',
    num: '03',
    label: 'Expériences immersives & 3D',
    tagline: 'Des expériences 3D et spatiales directement dans le navigateur, sans application à télécharger.',
    desc: "La troisième dimension n'est plus réservée aux jeux vidéo ou aux applications natives. Avec WebGL et WebXR, nous construisons des espaces navigables, des showrooms virtuels et des narrations immersives accessibles depuis n'importe quel navigateur — sur desktop, mobile ou casque.",
    pourQui: ['Immobilier & promotion', 'Automobile & luxe', 'Retail & mode', 'Musées, galeries & culture', 'Agences de communication'],
    inclus: [
      'Showrooms virtuels 3D : visites interactives de biens, véhicules ou espaces',
      'Configurateurs de produits en 3D temps réel',
      'Narrations spatiales WebXR pour lancements de marque',
      'Environnements 360° navigables depuis le navigateur',
      'Animations scroll-driven et micro-interactions physiques',
      'Optimisation performances (60 fps sur mobile)',
    ],
    duration: '4 à 8 semaines',
    badge: 'Différenciant',
    image: '/images/ux-design/immersif.jpg',
    imageAlt: 'Casque de réalité virtuelle et environnement 3D navigable',
    visualTag: 'IMMERSIF · 3D / WEBXR',
    visualTitle: 'La 3D directement dans le navigateur',
    visualSubtitle: 'showroom · configurateur · 4 à 8 sem.',
  },

  {
    id: 'identite',
    num: '04',
    label: 'Design authentique & identité distinctive',
    tagline: 'Une identité visuelle qui vous appartient vraiment — loin des templates.',
    desc: "La majorité des sites se ressemblent parce qu'ils utilisent les mêmes composants, les mêmes polices, les mêmes patterns. Nous construisons des identités visuelles qui ont un caractère propre — une typographie choisie, une palette maîtrisée, des sons pensés, et un système cohérent de bout en bout.",
    pourQui: ['Marques haut de gamme', 'Startups qui veulent se différencier', 'Créatifs & agences', 'Institutions et organisations culturelles'],
    inclus: [
      'Direction artistique complète : palette, typographie, ambiance visuelle',
      'Sélection et intégration de typographies expressives originales',
      'Design de fontes variables réagissant au scroll ou à la souris',
      'Design system documenté et maintenable',
      'Identité sonore : feedbacks audio subtils pour les interactions clés',
      'Kit de marque complet (web, print, réseaux sociaux)',
    ],
    duration: '3 à 5 semaines',
    badge: null,
    image: '/images/ux-design/identite.jpg',
    imageAlt: 'Planche de direction artistique : couleurs et typographies',
    visualTag: 'IDENTITÉ · DIRECTION ARTISTIQUE',
    visualTitle: 'Une identité qui vous appartient',
    visualSubtitle: 'typographie · palette · design system',
  },
];

/* ─────────────────────────────────────────────────────────
   SOUS-COMPOSANTS SERVEUR RÉUTILISABLES
───────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: '13px',
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

function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '13px',
        fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em',
      }}>
        {num}
      </span>
      {badge && (
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700,
          background: 'var(--or)', color: '#fff',
          padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.05em',
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
export default function UXDesignPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          {/* Fil d'Ariane */}
          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500,
            color: 'var(--ink-3)', marginBottom: '40px', letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>UX Design & Ergonomie</span>
          </nav>

          {/* Titre hero */}
          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·02 · Code · UX Design & Ergonomie</div>
            <h1
              className="section-h2 rev d1"
              style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}
            >
              Des interfaces qui se <em>ressentent</em>,<br/>pas seulement qui s'utilisent
            </h1>
            <p
              className="section-sub rev d2"
              style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}
            >
              L'ergonomie n'est pas une couche de peinture qu'on applique à la fin. C'est une discipline qui commence par comprendre vos utilisateurs, et qui s'incarne dans chaque micro-décision de design.
            </p>

            {/* 3 principes rapides */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Basé sur des données réelles' },
                { icon: '⬡', label: 'Pensé pour vos utilisateurs' },
                { icon: '◈', label: 'Livré avec la documentation' },
              ].map(p => (
                <div key={p.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '100px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)',
                  fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)',
                }}>
                  <span style={{ color: 'var(--or)', fontWeight: 700 }}>{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── LISTE DES DISCIPLINES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>

            {UX_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div className="svc-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px',
                  alignItems: 'center',
                }}>

                  {/* ── Texte ── */}
                  <div className="svc-text-col" style={{ order: idx % 2 === 0 ? 0 : 1 }}>

                    <BlockNum num={type.num} badge={type.badge} />

                    <h2 style={{
                      fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800,
                      color: 'var(--ink)', letterSpacing: '-0.03em',
                      lineHeight: 1.15, marginBottom: '10px',
                    }}>
                      {type.label}
                    </h2>

                    <p style={{
                      fontSize: '17px', fontWeight: 600,
                      color: 'var(--or-dark)', marginBottom: '16px',
                      letterSpacing: '-0.01em', lineHeight: 1.45,
                    }}>
                      {type.tagline}
                    </p>

                    <p style={{
                      fontSize: '16px', fontWeight: 400,
                      color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

                    {/* Pour qui */}
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{
                            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                            padding: '5px 12px', borderRadius: '100px',
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
                            display: 'flex', alignItems: 'baseline', gap: '10px',
                            fontSize: '15px', fontWeight: 500,
                            color: 'var(--ink-2)', lineHeight: 1.55,
                          }}>
                            <span style={{
                              color: 'var(--or)', fontWeight: 800,
                              fontFamily: 'var(--mono)', fontSize: '14px', flexShrink: 0,
                            }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pied : durée + liens */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      flexWrap: 'wrap', paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '13px',
                          fontWeight: 600, color: 'var(--ink-3)',
                        }}>Durée :</span>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '14px',
                          fontWeight: 700, color: 'var(--ink)',
                        }}>{type.duration}</span>
                      </div>

                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />

                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)',
                        textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>

                      <Link
                        href={`/contact?service=ux-design&type=${type.id}`}
                        className="btn-primary"
                        style={{ marginLeft: 'auto' }}
                      >
                        <span>Demander un devis</span><span>→</span>
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
            fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500,
            color: 'var(--ink-3)', lineHeight: 1.8,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Vous voulez combiner audit, design et développement ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Parlez-nous de votre projet
            </Link>
            {' '}— on conçoit une approche sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}