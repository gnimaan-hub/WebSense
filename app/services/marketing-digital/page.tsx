// app/services/marketing-digital/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import ServiceVisual from '@/components/sections/ServiceVisual';

export const metadata = {
  title: 'Marketing Digital & Croissance | Cabinet WebSense · Djibouti',
  description:
    "Influence & UGC, vidéo premium, community management et réseaux sociaux. WebSense pilote votre croissance digitale avec des stratégies mesurables et authentiques.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 3 grandes offres marketing
───────────────────────────────────────────────────────── */
const MARKETING_TYPES = [
  {
    id: 'influence',
    num: '01',
    label: 'Marketing d\'influence & UGC',
    tagline: 'Transformer vos clients et créateurs en ambassadeurs authentiques de votre marque.',
    desc: "Les publicités classiques convainquent de moins en moins. Ce qui convertit aujourd'hui, c'est la preuve sociale — un vrai client qui recommande, un créateur qui partage son expérience réelle. Nous construisons des stratégies d'influence et de contenu généré par les utilisateurs qui bâtissent une confiance durable, pas une visibilité artificielle.",
    pourQui: ['Marques B2C à audience jeune', 'E-commerce en phase de croissance', 'Hôtels, restaurants et lieux de vie', 'Startups cherchant la notoriété rapidement'],
    inclus: [
      'Stratégie de partenariats : mix nano/micro/macro aligné avec vos valeurs et objectifs',
      'Sélection rigoureuse : analyse d\'audience, détection de faux followers, approche relationnelle',
      'Conception de campagnes UGC : défis, concours, programmes d\'ambassadeurs',
      'Amplification on-site : intégration UGC sur fiches produits, galeries sociales',
      'Intégration publicitaire : réutilisation des contenus UGC dans vos campagnes media',
      'Mesure et animation : suivi engagement/reach/ventes, relation long terme avec les créateurs',
    ],
    duration: '1 à 3 mois / campagne',
    badge: null,
    image: '/images/marketing/influence.jpg',
    imageAlt: 'Créateur de contenu filmant un produit pour les réseaux',
    visualTag: 'INFLUENCE · UGC',
    visualTitle: 'Vos clients deviennent vos ambassadeurs',
    visualSubtitle: 'nano · micro · macro · 1 à 3 mois',
  },

  {
    id: 'video',
    num: '02',
    label: 'Production de contenu vidéo premium',
    tagline: 'La vidéo comme pilier central de votre communication — du corporate au snack content.',
    desc: "La vidéo est le format qui engage le plus, retient le mieux l'attention et convertit le plus efficacement. Mais produire de la vidéo sans stratégie, c'est brûler du budget. Nous concevons votre ligne éditoriale, produisons les contenus adaptés à chaque format et plateforme, et mesurons les résultats.",
    pourQui: ['Marques qui veulent humaniser leur image', 'E-commerce avec catalogue visuel', 'Entreprises en plein recrutement', 'Institutions et ONG en quête de visibilité'],
    inclus: [
      'Stratégie éditoriale vidéo : ligne, piliers de contenu, calendrier de production',
      'Vidéo corporate et storytelling : mini-docs, interviews de dirigeants, culture d\'entreprise',
      'Micro-storytelling social-first : Reels, Shorts, TikTok — montages dynamiques, messages clairs',
      'Vidéo interactive et shoppable : hotspots, quiz intégrés, achat direct sans friction',
      'Distribution cross-canal : web, broadcast, in-app — adaptation de format et promotion',
      'Reporting : vues, taux d\'engagement, temps de visionnage, conversions attribuées',
    ],
    duration: '2 à 6 semaines / production',
    badge: null,
    image: '/images/marketing/video.jpg',
    imageAlt: 'Tournage vidéo professionnel avec caméra et éclairage',
    visualTag: 'VIDÉO · PRODUCTION',
    visualTitle: 'La vidéo au cœur de votre communication',
    visualSubtitle: 'corporate · social · shoppable',
  },

  {
    id: 'community',
    num: '03',
    label: 'Community management & Réseaux sociaux',
    tagline: 'Votre présence sociale, gérée avec cohérence, authenticité et stratégie — chaque jour.',
    desc: "Publier irrégulièrement, répondre aux commentaires au hasard, copier-coller les mêmes posts sur toutes les plateformes : c'est ce que font la plupart des marques. Nous gérons vos réseaux sociaux comme une vraie rédaction — avec un ton de voix défini, un calendrier éditorial tenu, et des objectifs mesurables.",
    pourQui: ['Entreprises sans équipe communication interne', 'Marques avec audience locale à Djibouti et la région', 'Restaurants, hôtels et commerces de proximité', 'Institutions et organisations en quête de visibilité'],
    inclus: [
      'Gestion complète : Instagram, Facebook, Snapchat, LinkedIn, TikTok, X/Twitter',
      'Calendrier éditorial mensuel : piliers de contenu, dates clés, fréquence adaptée',
      'Création de contenus natifs : visuels, captions, stories, reels, carrousels',
      'Modération et engagement : réponses aux commentaires/messages dans les 24h',
      'Veille concurrentielle et tendances : identification des opportunités de contenu',
      'Rapport mensuel : portée, engagement, croissance d\'abonnés, recommandations',
    ],
    duration: 'Contrat mensuel',
    badge: 'Service phare',
    image: '/images/marketing/community.jpg',
    imageAlt: 'Gestion de plusieurs réseaux sociaux sur smartphone',
    visualTag: 'SOCIAL · COMMUNITY MANAGEMENT',
    visualTitle: 'Votre présence sociale, gérée chaque jour',
    visualSubtitle: 'calendrier éditorial · contrat mensuel',
  },
];

/* ─────────────────────────────────────────────────────────
   SOUS-COMPOSANTS SERVEUR
───────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700,
      color: 'var(--ink-3)', letterSpacing: '0.08em',
      textTransform: 'uppercase' as const, marginBottom: '10px',
    }}>
      {children}
    </div>
  );
}

function BlockNum({ num, badge }: { num: string; badge: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>{num}</span>
      {badge && (
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, background: 'var(--or)', color: '#fff', padding: '3px 10px', borderRadius: '100px', letterSpacing: '0.05em' }}>
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
export default function MarketingDigitalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '32px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom" style={{ paddingBottom: '64px' }}>

          <nav style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 500,
            color: 'var(--ink-3)', marginBottom: '40px', letterSpacing: '0.03em',
          }}>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Marketing Digital & Croissance</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·06 · Marketing · Croissance</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              De la visibilité<br/>à la <em>croissance mesurable</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Influence, vidéo, réseaux sociaux — pas comme des cases à cocher, mais comme un système cohérent orienté vers un seul objectif : faire grandir votre audience et votre chiffre d'affaires.
            </p>

            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Stratégie basée sur les données' },
                { icon: '⬡', label: 'Contenus natifs par plateforme' },
                { icon: '◈', label: 'Rapport mensuel avec KPIs' },
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

      {/* ── OFFRES ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {MARKETING_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div className="svc-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px', alignItems: 'center',
                }}>
                  <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                    <BlockNum num={type.num} badge={type.badge} />
                    <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '10px' }}>
                      {type.label}
                    </h2>
                    <p style={{ fontSize: '17px', fontWeight: 600, color: 'var(--or-dark)', marginBottom: '16px', letterSpacing: '-0.01em', lineHeight: 1.45 }}>
                      {type.tagline}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 400, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '28px' }}>
                      {type.desc}
                    </p>
                    <div style={{ marginBottom: '22px' }}>
                      <SectionLabel>Pour qui</SectionLabel>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {type.pourQui.map(p => (
                          <span key={p} style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, padding: '5px 12px', borderRadius: '100px', background: 'rgba(10,92,73,0.07)', border: '1px solid rgba(10,92,73,0.15)', color: 'var(--green)' }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginBottom: '28px' }}>
                      <SectionLabel>Ce qui est inclus</SectionLabel>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {type.inclus.map(item => (
                          <li key={item} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '15px', fontWeight: 500, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                            <span style={{ color: 'var(--or)', fontWeight: 800, fontFamily: 'var(--mono)', fontSize: '14px', flexShrink: 0 }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px dashed var(--border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Engagement :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)', textDecoration: 'underline', textDecorationColor: 'rgba(44,44,42,0.2)' }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=marketing&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un devis</span><span>→</span>
                      </Link>
                    </div>
                  </div>
                  <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
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

      {/* ── NOTE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500, color: 'var(--ink-3)', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto' }}>
            Vous voulez combiner marketing digital et développement web ?{' '}
            <Link href="/contact" style={{ color: 'var(--or-dark)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(166,107,0,0.3)' }}>
              Parlons de votre stratégie
            </Link>
            {' '}— on construit un plan global cohérent.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}