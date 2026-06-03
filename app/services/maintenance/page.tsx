// app/services/maintenance/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import ServiceVisual from '@/components/sections/ServiceVisual';

export const metadata = {
  title: 'Maintenance Web & Évolution | Cabinet WebSense · Djibouti',
  description:
    "Supervision 24/7, support multicanal, mises à jour de sécurité, SLA garanti et optimisation continue. WebSense maintient votre site en pleine santé dans la durée.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 2 grandes offres de maintenance
───────────────────────────────────────────────────────── */
const MAINTENANCE_TYPES = [
  {
    id: 'technique',
    num: '01',
    label: 'Maintenance technique & support',
    tagline: 'Votre site fonctionne. Toujours. Vous n\'avez pas à y penser.',
    desc: "Un site livré n'est pas un site terminé. Sans suivi actif, les vulnérabilités s'accumulent, les dépendances vieillissent et les pannes surviennent au pire moment. Nous prenons en charge la santé technique de votre application dans la durée — de la supervision temps réel au support utilisateur — pour que vous puissiez vous concentrer sur votre activité.",
    pourQui: ['Sites e-commerce à fort trafic', 'Applications métier critiques', 'Sites institutionnels à haute disponibilité', 'Équipes sans développeur interne'],
    inclus: [
      'Supervision proactive 24/7 : uptime, temps de réponse, erreurs serveur, alertes immédiates',
      'Support utilisateur multicanal : chat, email, ticket — avec SLA défini contractuellement',
      'Mises à jour continues : patchs de sécurité, CMS, frameworks, bibliothèques — testés en préproduction',
      'Corrections de bugs sous SLA : bloquant 4h, majeur 24h, mineur 72h',
      'Maintenance évolutive (TMA) : petites améliorations et ajustements livrés en continu',
      'Agent IA dédié : diagnostic et résolution automatique d\'incidents courants (cache, redémarrage)',
    ],
    duration: 'Contrat mensuel',
    badge: 'Essentiel',
    image: '/images/maintenance/technique.jpg',
    imageAlt: "Supervision technique d'infrastructure en temps réel",
    visualTag: 'MAINTENANCE · SUPPORT 24/7',
    visualTitle: 'Votre site fonctionne. Toujours.',
    visualSubtitle: 'supervision · SLA · contrat mensuel',
  },

  {
    id: 'performance',
    num: '02',
    label: 'Optimisation continue des performances',
    tagline: 'Votre site gagne en valeur au fil du temps, pas l\'inverse.',
    desc: "Un site laissé sans optimisation régresse. Les performances se dégradent, les nouvelles normes SEO évoluent, les moteurs IA modifient leurs critères de citation. Nous mettons en place un cycle trimestriel d'audits et d'améliorations pour que votre site reste performant, bien référencé et conforme — longtemps après la livraison.",
    pourQui: ['Sites à fort enjeu SEO', 'Plateformes e-commerce avec catalogue évolutif', 'Organisations soumises à des obligations de conformité', 'Marques qui investissent dans le contenu GEO'],
    inclus: [
      'Audit de performance trimestriel : Core Web Vitals, mobile, desktop, goulots d\'étranglement',
      'Audit SEO technique : indexation, maillage, 404, canonicalisation, balisage, GEO',
      'Audit de sécurité & pentesting : scans automatisés + tests d\'intrusion manuels planifiés',
      'Audit d\'accessibilité WCAG 2.2/3.0 et conformité RGPD avec plan de mise à niveau',
      'Feuille de route trimestrielle priorisée : gains chiffrés, impact SEO, empreinte carbone',
      'Suivi GEO : taux de citation dans les IA génératives, ajustements balisage et contenu',
    ],
    duration: 'Contrat trimestriel',
    badge: null,
    image: '/images/maintenance/performance.jpg',
    imageAlt: 'Audit de performance web et Core Web Vitals sur écran',
    visualTag: 'PERFORMANCE · AUDIT CONTINU',
    visualTitle: 'Un site qui gagne en valeur',
    visualSubtitle: 'Core Web Vitals · SEO · trimestriel',
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
      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>
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
export default function MaintenancePage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Maintenance web & Évolution</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·05 · Support · Maintenance web & Évolution</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              Votre site reste <em>performant</em><br/>longtemps après la livraison
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '600px' }}>
              Livrer un site, c'est une chose. Le maintenir en santé, le faire progresser et anticiper les problèmes avant qu'ils n'impactent vos utilisateurs — c'en est une autre. Nous nous en chargeons.
            </p>

            {/* 3 garanties */}
            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'SLA garanti contractuellement' },
                { icon: '⬡', label: 'Supervision 24h/7j' },
                { icon: '◈', label: 'Rapport mensuel inclus' },
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
            {MAINTENANCE_TYPES.map((type, idx) => (
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
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>
                          Engagement :
                        </span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>
                          {type.duration}
                        </span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{
                        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600,
                        color: 'var(--ink-3)', textDecoration: 'underline',
                        textDecorationColor: 'rgba(44,44,42,0.2)',
                      }}>
                        Voir les tarifs →
                      </Link>
                      <Link
                        href={`/contact?service=maintenance&type=${type.id}`}
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

      {/* ── NOTE ── */}
      <div style={{ padding: '40px 0 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <p style={{
            fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 500,
            color: 'var(--ink-3)', lineHeight: 1.8,
            maxWidth: '540px', margin: '0 auto',
          }}>
            Vous voulez combiner maintenance et développement de nouvelles fonctionnalités ?{' '}
            <Link href="/contact" style={{
              color: 'var(--or-dark)', fontWeight: 700,
              textDecoration: 'underline',
              textDecorationColor: 'rgba(166,107,0,0.3)',
            }}>
              Parlons de votre situation
            </Link>
            {' '}— on construit un contrat sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}