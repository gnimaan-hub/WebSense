// app/services/conseil-strategie/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import ServiceVisual from '@/components/sections/ServiceVisual';

export const metadata = {
  title: 'Conseil en Stratégie Web | Cabinet WebSense · Djibouti',
  description:
    "Stratégie IA et GEO, transformation numérique, marketing responsable, données first-party. WebSense pense avec vous avant de construire pour vous.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes missions de conseil
───────────────────────────────────────────────────────── */
const CONSEIL_TYPES = [
  {
    id: 'geo',
    num: '01',
    label: 'Stratégie IA générative & GEO',
    tagline: 'Être visible là où vos clients cherchent maintenant : dans les réponses des IA.',
    desc: "Le référencement classique ne suffit plus. ChatGPT, Perplexity et Google SGE répondent directement aux questions de vos clients — sans qu'ils visitent votre site. Le GEO (Generative Engine Optimization) consiste à faire en sorte que ces IA vous citent, vous recommandent et vous représentent fidèlement. C'est le SEO du prochain cycle.",
    pourQui: ['Marques qui veulent rester visibles', 'Médias et éditeurs de contenu', 'Cabinets et professions d\'expertise', 'E-commerce à forte concurrence'],
    inclus: [
      'Audit de découvrabilité IA : votre présence dans ChatGPT, Perplexity, SGE',
      'Stratégie de contenu GEO : briefs pour être sourcé par les IA (Q&A, entités, citations)',
      'Balisage sémantique avancé : Schema.org, Speakable, ClaimReview',
      'Gestion de la réputation algorithmique : éviter les hallucinations négatives',
      'Optimisation E-E-A-T : profils auteurs, citations tierces, signaux machine',
      'Rapport de suivi mensuel avec indicateurs de présence IA',
    ],
    duration: '2 à 4 semaines',
    badge: 'Nouveau & différenciant',
    image: '/images/conseil/geo.jpg',
    imageAlt: "Réponse d'une IA générative consultée sur écran",
    visualTag: 'STRATÉGIE · IA & GEO',
    visualTitle: 'Être cité par les IA, pas seulement référencé',
    visualSubtitle: 'audit GEO · contenu · 2 à 4 sem.',
  },

  {
    id: 'transformation',
    num: '02',
    label: 'Conseil en transformation numérique',
    tagline: 'Intégrer l\'IA dans votre organisation, sans se laisser emporter par l\'effet de mode.',
    desc: "Acheter des outils IA ne suffit pas. La transformation réelle passe par une stratégie claire, des équipes formées et des processus repensés. Nous aidons les organisations à définir où l'IA crée vraiment de la valeur pour elles — et à construire un plan d'action réaliste pour y parvenir.",
    pourQui: ['PME en croissance', 'Institutions et organisations publiques', 'ONG avec des ressources limitées', 'Directions générales qui veulent piloter le changement'],
    inclus: [
      'Feuille de route IA sur mesure (plan 12-24 mois, cas d\'usage priorisés)',
      'Diagnostic de maturité numérique : stack, compétences, culture data',
      'Design de flux de travail humain-IA : où automatiser, où garder l\'humain',
      'Accompagnement conduite du changement : ateliers, formations, éthique',
      'Architecture de plateforme composable : headless, MACH, API-first',
      'Sélection et recommandation des bons partenaires technologiques',
    ],
    duration: '3 à 6 semaines',
    badge: null,
    image: '/images/conseil/transformation.jpg',
    imageAlt: 'Atelier de stratégie de transformation numérique',
    visualTag: 'CONSEIL · TRANSFORMATION',
    visualTitle: "Intégrer l'IA sans suivre la mode",
    visualSubtitle: 'feuille de route · 3 à 6 sem.',
  },

  {
    id: 'rse',
    num: '03',
    label: 'Marketing responsable & RSE numérique',
    tagline: 'La durabilité comme avantage concurrentiel, pas comme contrainte.',
    desc: "Les consommateurs, partenaires et régulateurs attendent désormais que les marques prouvent leur engagement — pas qu'elles l'affichent. Nous aidons les organisations à mesurer leur impact numérique réel, à le réduire de manière concrète, et à le communiquer de façon crédible, sans greenwashing.",
    pourQui: ['Entreprises souhaitant une certification RSE', 'Collectivités et institutions publiques', 'ONG et organisations à impact', 'Marques exposées aux attentes ESG'],
    inclus: [
      'Audit de maturité RSE numérique : accessibilité, inclusion, empreinte carbone',
      'Stratégie de sobriété numérique : éco-conception, allongement de durée de vie des outils',
      'Accompagnement certifications : B Corp, Lucie, Numérique Responsable',
      'Rédaction de chartes éthiques IA conformes RGPD et AI Act',
      'Rapports RSE interactifs et campagnes d\'engagement crédibles',
      'Communication responsable sans greenwashing : labels, preuves, transparence',
    ],
    duration: '3 à 5 semaines',
    badge: null,
    image: '/images/conseil/rse.jpg',
    imageAlt: 'Démarche de numérique responsable et sobriété énergétique',
    visualTag: 'RSE · NUMÉRIQUE RESPONSABLE',
    visualTitle: 'La durabilité comme avantage',
    visualSubtitle: 'sobriété · certifications · 3 à 5 sem.',
  },

  {
    id: 'data',
    num: '04',
    label: 'Stratégie de données first-party',
    tagline: 'Reprendre le contrôle de la relation client, sans dépendre des cookies tiers.',
    desc: "La fin des cookies tiers et le durcissement des réglementations RGPD ont radicalement changé la donne. Les organisations qui s'y préparent en construisant une relation directe avec leurs utilisateurs — des données déclarées volontairement, de qualité — obtiennent un avantage compétitif durable. Nous vous aidons à construire cette infrastructure.",
    pourQui: ['E-commerce et retail', 'Médias et éditeurs', 'Banques et assurances', 'Marques B2C à large base client'],
    inclus: [
      'Audit de collecte et consentement : CMP, analytics, CRM, CDP',
      'Stratégie « valeur contre données » : quiz, configurateurs, contenus premium',
      'Implémentation de CDP : unification des données clients multi-canal',
      'Modélisation de profils 360° : transactionnel, comportemental, déclaratif',
      'Stratégie d\'identité sans cookies : email haché, universal IDs, contextuel',
      'Conformité RGPD et Privacy Sandbox : mise en œuvre et documentation',
    ],
    duration: '4 à 8 semaines',
    badge: null,
    image: '/images/conseil/data.jpg',
    imageAlt: 'Visualisation de données clients unifiées sur écran',
    visualTag: 'DATA · FIRST-PARTY',
    visualTitle: 'Reprendre le contrôle de vos données',
    visualSubtitle: 'CDP · RGPD · 4 à 8 sem.',
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
      <span style={{
        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700,
        color: 'var(--ink-3)', letterSpacing: '0.06em',
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
export default function ConseilStrategiePage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Conseil en stratégie web</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·03 · Consulting · Stratégie</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              On pense avec vous<br/>avant de <em>construire</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Les erreurs les plus coûteuses en numérique ne sont pas techniques — elles sont stratégiques. Mauvais choix de plateforme, absence de vision data, ignorance des nouvelles règles IA. Nous intervenons en amont pour éviter ces erreurs, chiffres et alternatives à l'appui.
            </p>

            {/* 3 principes */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Recommandations chiffrées' },
                { icon: '⬡', label: 'Sans conflit d\'intérêt technologique' },
                { icon: '◈', label: 'Livrables concrets et actionnables' },
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

      {/* ── MISSIONS ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {CONSEIL_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div className="svc-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px', alignItems: 'center',
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
                      fontSize: '17px', fontWeight: 600, color: 'var(--or-dark)',
                      marginBottom: '16px', letterSpacing: '-0.01em', lineHeight: 1.45,
                    }}>
                      {type.tagline}
                    </p>

                    <p style={{
                      fontSize: '16px', fontWeight: 400, color: 'var(--ink-2)',
                      lineHeight: 1.8, marginBottom: '28px',
                    }}>
                      {type.desc}
                    </p>

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

                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      flexWrap: 'wrap', paddingTop: '20px',
                      borderTop: '1px dashed var(--border)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Durée :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)', textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=conseil&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un audit</span><span>→</span>
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

      {/* ── NOTE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500,
            color: 'var(--ink-3)', lineHeight: 1.8,
            maxWidth: '560px', margin: '0 auto',
          }}>
            Un audit seul, un atelier de vision, ou une mission globale ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Décrivez votre situation
            </Link>
            {' '}— on adapte le format à votre réalité.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}