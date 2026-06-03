// app/services/formation/page.tsx
// Server Component — interactions déléguées à ServicePageParts

import Link from 'next/link';
import CTABand from '@/components/sections/CTABand';
import { BreadcrumbLink, HoverCard } from '@/components/ui/ServicePageParts';
import FormationVisual from '@/components/sections/FormationVisual';

export const metadata = {
  title: 'Autonomie & Formation | Cabinet WebSense · Djibouti',
  description:
    "Formations IA & automatisation, culture digitale, prise en main web et IA responsable. WebSense forme vos équipes pour qu'elles n'aient plus besoin de nous.",
};

/* ─────────────────────────────────────────────────────────
   DONNÉES — 4 grandes offres de formation
───────────────────────────────────────────────────────── */
const FORMATION_TYPES = [
  {
    id: 'ia-automatisation',
    num: '01',
    label: 'Formations IA & Automatisation',
    tagline: 'Exploiter les capacités intelligentes de votre site — sans coder.',
    desc: "Les sites modernes embarquent des capacités d'IA puissantes : chatbots agentifs, moteurs de recommandation, génération de contenu assistée. Encore faut-il savoir les piloter. Ces formations opérationnelles s'adressent aux équipes marketing, éditoriales et support qui travaillent quotidiennement avec ces outils.",
    pourQui: ['Équipes marketing et communication', 'Responsables e-commerce', 'Équipes support et service client', 'Community managers et éditeurs de contenu'],
    inclus: [
      'Module "Piloter les agents IA" : configuration, entraînement, scénarios de réponse automatique',
      'Module "Automatisation marketing" : workflows emailing, push, scoring comportemental',
      'Module "Moteur de recommandation" : personnalisation contenu/produits, règles et suivi',
      'Module "Génération de contenu assistée" : rédaction, résumés, traductions, FAQ',
      'Bonnes pratiques de relecture et validation humaine des contenus générés',
      'Support post-formation 30 jours : questions et ajustements inclus',
    ],
    duration: '1 à 3 jours',
    badge: null,
    image: '/images/formation/ia-automatisation.jpg',
    imageAlt: "Équipe en formation IA face à un écran d'agent conversationnel",
    visualTag: 'FORMATION · IA & AUTOMATISATION',
    visualTitle: "Vos équipes apprennent à piloter l'IA",
    visualSubtitle: 'hands-on · cas réels · 1 à 3 jours',
  },

  {
    id: 'culture-digitale',
    num: '02',
    label: 'Formations stratégiques & culture digitale',
    tagline: 'Donner aux décideurs et chefs de projet les clés pour piloter la transformation numérique.',
    desc: "La transformation numérique échoue rarement pour des raisons techniques. Elle échoue parce que les décideurs ne comprennent pas les enjeux, ne savent pas lire les bons indicateurs, ou n'ont pas les outils conceptuels pour choisir. Ces formations s'adressent aux directions et chefs de projet qui doivent piloter — pas exécuter.",
    pourQui: ['Directions générales et DAF', 'Chefs de projet et responsables innovation', 'DSI et équipes IT en montée en compétence', 'Élus et cadres d\'institutions publiques'],
    inclus: [
      'Module "SEO & GEO" : moteurs de recherche, cocon sémantique, autorité thématique, tableaux de bord',
      'Module "Sobriété numérique" : empreinte carbone d\'un site, éco-conception, labels RSE',
      'Module "Gouvernance des données" : first-party, consentement, RGPD, AI Act',
      'Module "Gouvernance éditoriale" : charte IA, processus de validation, documentation',
      'Ateliers de mise en situation : cas concrets adaptés à votre secteur',
      'Livret de bord remis à chaque participant : fiches méthodes, glossaire, ressources',
    ],
    duration: '1 à 2 jours',
    badge: null,
    image: '/images/formation/strategique.jpg',
    imageAlt: 'Direction en comité de pilotage devant des tableaux de bord',
    visualTag: 'COMITÉ · CULTURE DIGITALE',
    visualTitle: 'Décider en connaissance de cause',
    visualSubtitle: 'ateliers stratégiques · 1 à 2 jours',
  },

  {
    id: 'prise-en-main',
    num: '03',
    label: 'Prise en main du Web & numérique responsable',
    tagline: 'Naviguer, communiquer et se protéger en ligne — une compétence fondamentale.',
    desc: "Beaucoup d'organisations déploient des outils numériques sans que leurs équipes sachent naviguer de manière sécurisée, identifier les arnaques, ou utiliser les services en ligne efficacement. Ces formations de base ont un impact immédiat sur la productivité et la sécurité — particulièrement dans les institutions publiques et les organisations qui débutent leur transition digitale.",
    pourQui: ['Institutions publiques en digitalisation', 'Administrations et collectivités', 'ONG avec équipes peu formées au numérique', 'PME familiales en première génération digitale'],
    inclus: [
      'Navigation web : moteurs de recherche, évaluation des sources, gestion des onglets et favoris',
      'Sécurité internet : mots de passe forts, authentification 2FA, reconnaître phishing et arnaques',
      'Email professionnel : organisation, pièces jointes, étiquette numérique, anti-spam',
      'Outils collaboratifs : Google Workspace, partage de documents, visioconférences',
      'Protection des données personnelles : ce qu\'il faut partager, ce qu\'il faut garder privé',
      'Signalement et bons réflexes : que faire en cas d\'incident ou de doute',
    ],
    duration: '½ à 2 jours',
    badge: 'Accessible à tous',
    image: '/images/formation/web-numerique.jpg',
    imageAlt: 'Atelier numérique de prise en main avec ordinateurs',
    visualTag: 'ATELIER · NUMÉRIQUE RESPONSABLE',
    visualTitle: 'Reprendre la main sur le numérique',
    visualSubtitle: 'débutants bienvenus · ½ à 2 jours',
  },

  {
    id: 'ia-responsable',
    num: '04',
    label: 'IA responsable & dangers du numérique',
    tagline: 'Comprendre l\'IA pour ne pas la subir — ni s\'en méfier sans raison.',
    desc: "L'IA est partout : dans les outils que vous utilisez, dans les décisions qui vous concernent, dans les contenus que vous consommez. Mais très peu de gens comprennent vraiment comment elle fonctionne, ce qu'elle peut faire, ce qu'elle ne peut pas faire — et surtout, quels risques elle introduit si on l'utilise sans discernement. Cette formation démystifie l'IA et donne des repères pratiques pour toutes les équipes.",
    pourQui: ['Toutes les équipes sans exception', 'Managers et cadres en charge de l\'adoption IA', 'Institutions publiques et organisations sensibles', 'Parents et enseignants (format adapté disponible)'],
    inclus: [
      'Comment fonctionne l\'IA : grands modèles de langage, données d\'entraînement, biais algorithmiques',
      'Ce que l\'IA ne sait pas faire : hallucinations, limites factuelles, manque de jugement éthique',
      'Deepfakes et désinformation : détecter les contenus manipulés, vérifier les sources',
      'Vie privée et IA : quelles données sont collectées, comment les minimiser, vos droits',
      'IA au travail : ce qui peut être automatisé, ce qui ne doit pas l\'être, impact sur l\'emploi',
      'Cadre légal : AI Act européen, responsabilité des utilisateurs, signalement des dérives',
    ],
    duration: '½ à 1 jour',
    badge: 'Recommandé pour tous',
    image: '/images/formation/ia-responsable.jpg',
    imageAlt: 'Analyse vigilante de contenus générés par une IA',
    visualTag: 'VIGILANCE · IA RESPONSABLE',
    visualTitle: "Comprendre l'IA pour ne pas la subir",
    visualSubtitle: 'démystification · ½ à 1 jour',
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
export default function FormationPage() {
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
            <span style={{ color: 'var(--or-dark)', fontWeight: 600 }}>Autonomie & Formation</span>
          </nav>

          <div style={{ maxWidth: '780px' }}>
            <div className="section-badge rev">// WS·04 · Advisory · Autonomie & Formation</div>
            <h1 className="section-h2 rev d1" style={{ fontSize: 'clamp(36px,5.5vw,64px)', marginBottom: '20px' }}>
              Nous construisons pour que<br/>vous <em>n'ayez plus besoin de nous</em>
            </h1>
            <p className="section-sub rev d2" style={{ fontSize: '18px', fontWeight: 400, marginBottom: '32px', maxWidth: '620px' }}>
              Notre objectif n'est pas de créer une dépendance — c'est de vous rendre autonome. Chaque formation est conçue pour que vos équipes maîtrisent leurs outils, comprennent les enjeux et prennent de bonnes décisions, seules.
            </p>

            <div className="rev d3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: '◎', label: 'Formations sur mesure' },
                { icon: '⬡', label: 'Sessions en présentiel ou à distance' },
                { icon: '◈', label: 'Support 30 jours post-formation' },
              ].map(p => (
                <div key={p.label} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '100px',
                  background: 'rgba(0, 0, 0, 0.7)', border: '1px solid var(--border)',
                  backdropFilter: 'blur(8px)', fontSize: '14px', fontWeight: 500, color: 'var(--ink-2)',
                }}>
                  <span style={{ color: 'var(--or)', fontWeight: 700 }}>{p.icon}</span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FORMATIONS ── */}
      <section style={{ paddingBottom: '100px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '88px' }}>
            {FORMATION_TYPES.map((type, idx) => (
              <HoverCard key={type.id} delay={0} plain>
                <div className="svc-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.1fr' : '1.1fr 1fr',
                  gap: '64px', alignItems: 'center',
                }}>
                  <div className="svc-text-col" style={{ order: idx % 2 === 0 ? 0 : 1 }}>
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
                      <SectionLabel>Ce qui est couvert</SectionLabel>
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
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)' }}>Durée :</span>
                        <span style={{ fontFamily: 'var(--mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{type.duration}</span>
                      </div>
                      <div style={{ width: '1px', height: '20px', background: 'var(--border)', flexShrink: 0 }} />
                      <Link href="/tarifs" style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink-3)', textDecoration: 'underline', textDecorationColor: 'rgba(44,44,42,0.2)' }}>
                        Voir les tarifs →
                      </Link>
                      <Link href={`/contact?service=formation&type=${type.id}`} className="btn-primary" style={{ marginLeft: 'auto' }}>
                        <span>Demander un programme</span><span>→</span>
                      </Link>
                    </div>
                  </div>
                  <div className="svc-visual-col" style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                    <FormationVisual
                      src={type.image}
                      alt={type.imageAlt}
                      tag={type.visualTag}
                      title={type.visualTitle}
                      subtitle={type.visualSubtitle}
                      reverse={idx % 2 === 1}
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
            Vous voulez combiner formation et accompagnement projet ?{' '}
            <Link href="/contact" style={{ color: 'var(--or-dark)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(166,107,0,0.3)' }}>
              Décrivez votre contexte
            </Link>
            {' '}— on construit un programme sur mesure.
          </p>
        </div>
      </div>

      <CTABand />
    </>
  );
}