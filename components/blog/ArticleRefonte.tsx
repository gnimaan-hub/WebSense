'use client';

import Link from 'next/link';
import type { Article } from '@/app/blog/lib';

// ─── Sub-components ──────────────────────────────────────────────────────────

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '32px', fontWeight: 800, color: 'var(--or)', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginTop: '6px' }}>{label}</div>
      {sub && <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)', marginTop: '3px' }}>{sub}</div>}
    </div>
  );
}

function Callout({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', gap: '16px', padding: '20px 22px',
      background: 'rgba(232,160,32,0.07)', border: '1px solid rgba(232,160,32,0.2)',
      borderLeft: '3px solid var(--or)', borderRadius: '0 10px 10px 0',
      margin: '32px 0',
    }}>
      <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

function SignalCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      padding: '24px 26px',
      background: 'var(--bg-white)',
      border: '1px solid var(--border)',
      borderRadius: '14px',
      marginBottom: '24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700,
          color: 'var(--or)', flexShrink: 0, marginTop: '2px',
        }}>
          {num}
        </span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
          <div style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.75 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Quote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote style={{
      borderLeft: '3px solid var(--green)',
      paddingLeft: '22px', margin: '32px 0',
    }}>
      <p style={{ fontSize: '17px', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.7, marginBottom: source ? '8px' : 0 }}>
        {children}
      </p>
      {source && <cite style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)', fontStyle: 'normal' }}>{source}</cite>}
    </blockquote>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'intro',      label: 'Introduction' },
  { id: 'signal-1',  label: '01 · Chargement > 3 secondes' },
  { id: 'signal-2',  label: '02 · Non mobile-first' },
  { id: 'signal-3',  label: '03 · Design vieillissant' },
  { id: 'signal-4',  label: '04 · Invisible sur les IA' },
  { id: 'signal-5',  label: '05 · Taux de rebond élevé' },
  { id: 'signal-6',  label: '06 · Difficile à gérer' },
  { id: 'signal-7',  label: '07 · Sécurité et conformité' },
  { id: 'decision',  label: 'Comment décider ?' },
  { id: 'conclusion',label: 'En résumé' },
];

// ─── Main Article ────────────────────────────────────────────────────────────

export default function ArticleRefonte({ article }: { article: Article }) {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '72px', paddingBottom: '48px', borderBottom: '1px solid var(--border)', marginBottom: '0' }}>
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-4)', marginBottom: '28px' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink-3)' }}>Guides & Conseils</span>
          </nav>

          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                background: 'rgba(232,160,32,0.12)', color: 'var(--or)',
                padding: '3px 10px', borderRadius: '100px',
              }}>
                {article.cat}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)' }}>
                {article.date} · {article.readMin} min de lecture
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 800,
              color: 'var(--ink)', lineHeight: 1.15, letterSpacing: '-0.025em',
              marginBottom: '18px',
            }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: '640px' }}>
              {article.excerpt}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--green), var(--or))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px', color: '#0c1210',
              }}>
                WS
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)' }}>Équipe WebSense</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--ink-4)' }}>Cabinet digital · Djibouti</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 240px',
            gap: '56px',
            alignItems: 'start',
          }}>

            {/* ── Article Content ── */}
            <div style={{ maxWidth: '680px' }}>

              {/* Stats band */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                border: '1px solid var(--border)', borderRadius: '14px',
                overflow: 'hidden', marginBottom: '40px',
                background: 'var(--bg-white)',
              }}>
                <Stat value="53%" label="Abandons sur mobile lent" sub="Google, 2025" />
                <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch', margin: '16px 0' }} />
                <Stat value="7 ans" label="Durée de vie moyenne d'un site" sub="avant obsolescence" />
                <div style={{ display: 'none' }} />
                <Stat value="2026" label="Année où l'IA change les règles" sub="du référencement" />
              </div>

              {/* INTRO */}
              <div id="intro">
                <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.85, marginBottom: '20px', fontWeight: 500 }}>
                  En 2026, votre site web n'est plus une carte de visite. C'est votre commercial le plus actif — ou votre frein le plus coûteux.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '20px' }}>
                  Pourtant, la majorité des dirigeants attendent que leur site soit "complètement cassé" avant d'envisager une refonte. C'est une erreur stratégique qui coûte des clients réels, chaque jour.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '32px' }}>
                  Comment savoir si vous êtes dans cette situation ? Voici <strong style={{ color: 'var(--ink)' }}>7 signaux concrets</strong> que nous observons systématiquement chez les organisations dont le site freine la croissance — et ce que vous pouvez faire.
                </p>

                <Callout icon="📌" title="Refonte vs. Redesign : quelle différence ?">
                  Un <strong>redesign</strong> change l'apparence. Une <strong>refonte</strong> repense la structure, les performances, le SEO et l'architecture technique. Si votre site a plus de 4 ans, il vous faut très probablement une refonte, pas juste un coup de peinture.
                </Callout>
              </div>

              {/* SIGNAL 1 */}
              <div id="signal-1" style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  Les 7 signaux d'un site qui freine votre croissance
                </h2>

                <SignalCard num="01 /" title="Votre site met plus de 3 secondes à charger">
                  <p style={{ marginBottom: '12px' }}>
                    Google mesure en permanence les performances de votre site. Au-delà de 3 secondes de chargement, <strong style={{ color: 'var(--ink)' }}>53 % des visiteurs mobiles abandonnent</strong> avant même de voir votre contenu. Et Google le sait aussi — la lenteur pénalise directement votre référencement.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Les Core Web Vitals (LCP, INP, CLS) sont devenus des critères officiels de classement depuis 2021. En 2026, ils sont plus déterminants que jamais — et les sites construits avec des technologies de 2018 y échouent structurellement.
                  </p>
                  <div style={{
                    display: 'flex', gap: '12px', marginTop: '14px',
                    padding: '14px', background: 'var(--bg)', borderRadius: '8px',
                    fontFamily: 'var(--mono)', fontSize: '12px',
                  }}>
                    {[['< 2.5s', 'LCP · Bon', 'var(--green)'], ['2.5–4s', 'LCP · Moyen', 'var(--or)'], ['> 4s', 'LCP · Mauvais', '#f87171']].map(([v, l, c]) => (
                      <div key={l} style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, color: c, fontSize: '16px' }}>{v}</div>
                        <div style={{ color: 'var(--ink-3)', marginTop: '3px', fontSize: '10px' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </SignalCard>
              </div>

              {/* SIGNAL 2 */}
              <div id="signal-2">
                <SignalCard num="02 /" title="Votre site n'est pas vraiment mobile-first">
                  <p style={{ marginBottom: '12px' }}>
                    En 2026, <strong style={{ color: 'var(--ink)' }}>plus de 65 % du trafic web mondial est mobile</strong>. À Djibouti, ce chiffre dépasse 78 %. Si votre site a été conçu pour desktop et "adapté" au mobile après coup, vos utilisateurs le ressentent à chaque scroll frustrant, chaque bouton trop petit, chaque formulaire impossible à remplir sur smartphone.
                  </p>
                  <p>
                    Le test est simple : ouvrez votre site sur votre téléphone. Est-ce que vous y achèteriez ? Est-ce que vous y rempliriez un formulaire de contact ? Si vous hésitez, votre client aussi — et lui, il ne revient pas.
                  </p>
                </SignalCard>
              </div>

              {/* SIGNAL 3 */}
              <div id="signal-3">
                <SignalCard num="03 /" title="Votre design date d'avant 2021">
                  <p style={{ marginBottom: '12px' }}>
                    Le design web a radicalement évolué ces 4 dernières années. Les sites modernes sont caractérisés par des typographies expressives, des espaces généreux, des micro-animations subtiles et une hiérarchie visuelle claire. Un site de 2019 ou 2020 "sent" vieux — même sans que vos visiteurs puissent l'expliquer précisément.
                  </p>
                  <Quote source="Nielsen Norman Group, 2024">
                    "Les utilisateurs forment leur premier jugement sur la crédibilité d'un site en moins de 50 millisecondes — principalement basé sur le design visuel."
                  </Quote>
                  <p>
                    Cette impression initiale conditionne tout ce qui suit : la confiance, l'intention d'achat, la volonté de remplir un formulaire. Un design vieillissant signale inconsciemment : <em>"cette entreprise n'est pas à jour"</em>.
                  </p>
                </SignalCard>
              </div>

              {/* SIGNAL 4 */}
              <div id="signal-4">
                <SignalCard num="04 /" title="Vous êtes invisible dans les réponses des IA génératives">
                  <p style={{ marginBottom: '12px' }}>
                    C'est le signal le plus récent et le plus important de 2026. Vos clients posent de moins en moins leurs questions à Google. Ils les posent à ChatGPT, Perplexity, ou Claude. Et si votre site ne génère pas ces citations — si les IA ne vous mentionnent pas quand quelqu'un cherche votre expertise — vous êtes invisible pour une part croissante de vos clients potentiels.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Le <strong style={{ color: 'var(--ink)' }}>GEO (Generative Engine Optimization)</strong> est le SEO du prochain cycle. Il repose sur un balisage sémantique avancé, des contenus d'autorité structurés, et une architecture technique que la plupart des sites de 2020 n'ont pas.
                  </p>
                  <Callout icon="🤖" title="Testez vous-même">
                    Ouvrez ChatGPT et tapez : "Quelle est la meilleure agence web à Djibouti ?" ou "Qui peut m'aider à créer un site e-commerce en Afrique de l'Est ?". Apparaissez-vous dans la réponse ? Si non, votre site n'est pas optimisé pour les IA.
                  </Callout>
                </SignalCard>
              </div>

              {/* SIGNAL 5 */}
              <div id="signal-5">
                <SignalCard num="05 /" title="Votre taux de rebond dépasse 70 %">
                  <p style={{ marginBottom: '12px' }}>
                    Le taux de rebond mesure la proportion de visiteurs qui quittent votre site après n'avoir vu qu'une seule page. Au-delà de 70 %, c'est un signal d'alarme : votre site ne convainc pas, ne guide pas, ne retient pas.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Les causes les plus fréquentes que nous identifions lors d'un audit UX : un message d'entrée confus, une hiérarchie visuelle absente, des appels à l'action (CTA) introuvables ou peu convaincants, et une vitesse de chargement insuffisante (voir signal 1).
                  </p>
                  <p>
                    Si vous n'avez pas Google Analytics ou un outil équivalent installé, vous ne savez même pas que ce problème existe. C'est aussi un signal — un site sans analytics est un site géré à l'aveugle.
                  </p>
                </SignalCard>
              </div>

              {/* SIGNAL 6 */}
              <div id="signal-6">
                <SignalCard num="06 /" title="Votre équipe ne peut pas modifier le site sans faire appel à un développeur">
                  <p style={{ marginBottom: '12px' }}>
                    Un site web moderne est un outil de communication vivant. Les prix changent, les offres évoluent, des actualités paraissent. Si chaque modification nécessite de contacter votre agence, de payer une prestation et d'attendre, votre site sera toujours en retard sur votre réalité.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Les CMS (systèmes de gestion de contenu) modernes permettent à n'importe quel membre de votre équipe de mettre à jour le contenu, ajouter des articles, modifier les prix — sans toucher au code. Si ce n'est pas votre cas aujourd'hui, vous perdez en agilité et en réactivité.
                  </p>
                  <Quote>
                    "L'autonomie n'est pas une option — c'est notre engagement : chaque client WebSense reçoit son site avec une formation complète et peut tout gérer seul."
                  </Quote>
                </SignalCard>
              </div>

              {/* SIGNAL 7 */}
              <div id="signal-7">
                <SignalCard num="07 /" title="Votre site n'est pas en HTTPS, ou n'est pas conforme RGPD">
                  <p style={{ marginBottom: '12px' }}>
                    En 2026, un site sans certificat SSL (HTTPS) est signalé comme "non sécurisé" par tous les navigateurs modernes. Cette alerte fait fuir instantanément vos visiteurs — et pénalise votre référencement Google.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Mais la conformité va plus loin. Le RGPD européen s'applique à tout site qui collecte des données de résidents européens — formulaires de contact, cookies analytics, newsletters. Les sanctions peuvent être lourdes, et surtout, un site non conforme érode la confiance de vos visiteurs.
                  </p>
                  <p>
                    L'<strong style={{ color: 'var(--ink)' }}>AI Act européen</strong> ajoute une couche supplémentaire pour les sites utilisant des fonctionnalités d'IA (chatbots, recommandations). Si votre site date d'avant 2022, ces cadres n'ont probablement jamais été pris en compte.
                  </p>
                </SignalCard>
              </div>

              {/* COMMENT DÉCIDER */}
              <div id="decision" style={{ marginTop: '48px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                  Refonte ou mises à jour progressives : comment choisir ?
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '20px' }}>
                  La réponse dépend de l'accumulation des signaux ci-dessus. Voici notre règle empirique, basée sur les audits que nous avons conduits :
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
                  {[
                    { type: 'Mises à jour progressives', color: 'var(--green)', desc: 'Moins de 3 signaux actifs · Site de moins de 3 ans · Architecture technique solide', price: 'Coût : contrat maintenance' },
                    { type: 'Refonte recommandée', color: 'var(--or)', desc: '3 signaux ou plus actifs · Site de plus de 4 ans · Technologies obsolètes (Flash, jQuery seul, PHP 5…)', price: 'Coût : projet ponctuel' },
                  ].map(({ type, color, desc, price }) => (
                    <div key={type} style={{
                      padding: '20px', borderRadius: '12px',
                      border: `1px solid ${color}`,
                      background: color === 'var(--green)' ? 'rgba(29,158,117,0.06)' : 'rgba(232,160,32,0.06)',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, color, letterSpacing: '0.05em', marginBottom: '10px' }}>
                        {type}
                      </div>
                      <div style={{ fontSize: '13.5px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '12px' }}>{desc}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-4)' }}>{price}</div>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '20px' }}>
                  Si vous avez identifié 4 signaux ou plus dans cet article, une refonte est probablement la décision la plus rentable à moyen terme. Le coût d'une refonte est souvent compensé en moins de 12 mois par l'amélioration des conversions, la réduction des coûts de maintenance, et la récupération de trafic organique perdu.
                </p>

                <Callout icon="💡" title="Notre conseil">
                  Avant de décider, demandez un audit. Un audit UX + SEO sur votre site existant prend 1 à 2 semaines et vous donne une image précise de ce qui fonctionne, ce qui ne fonctionne pas, et ce que ça vous coûte de ne rien faire. C'est souvent la meilleure façon de chiffrer le retour sur investissement d'une refonte.
                </Callout>
              </div>

              {/* CONCLUSION */}
              <div id="conclusion" style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  En résumé
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '16px' }}>
                  Un site web n'est pas une infrastructure permanente. C'est un outil commercial qui se périme — techniquement, visuellement, et stratégiquement. En 2026, avec l'émergence des IA génératives comme nouveau canal de découverte, cette péremption s'accélère.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '32px' }}>
                  Les 7 signaux que nous avons décrits sont tous mesurables, tous corrigeables. La question n'est pas de savoir si votre site a besoin d'une refonte — c'est de savoir combien de clients vous perdez chaque mois en attendant.
                </p>

                {/* Stats summary */}
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px',
                  padding: '24px', background: 'var(--bg-white)',
                  border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '32px',
                }}>
                  {[
                    ['7', 'signaux à surveiller'],
                    ['4 ans', 'durée max recommandée'],
                    ['53%', 'abandons sur site lent'],
                    ['< 12 mois', 'retour sur investissement moyen'],
                  ].map(([v, l]) => (
                    <div key={l} style={{ textAlign: 'center', padding: '12px' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '22px', fontWeight: 800, color: 'var(--or)' }}>{v}</div>
                      <div style={{ fontSize: '12px', color: 'var(--ink-3)', marginTop: '4px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── CTA ── */}
              <div style={{
                padding: '32px', borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(29,158,117,0.1), rgba(232,160,32,0.1))',
                border: '1px solid var(--border)',
                marginTop: '48px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  // PROCHAINE ÉTAPE
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  Votre site a-t-il besoin d'une refonte ?
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Prenez 30 minutes avec notre équipe. Nous auditerons votre site en direct — performances, SEO, UX, conformité — et vous dirons exactement où vous en êtes, sans langue de bois.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary">
                    <span>Réserver un audit</span><span>→</span>
                  </Link>
                  <Link href="/tarifs" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '100px',
                    border: '1px solid var(--border)', background: 'var(--bg-white)',
                    fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
                    color: 'var(--ink-2)', textDecoration: 'none',
                  }}>
                    Voir les tarifs
                  </Link>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                {['Refonte web', 'SEO 2026', 'GEO', 'Performance', 'UX Design', 'Djibouti'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600,
                    padding: '4px 12px', borderRadius: '100px',
                    background: 'var(--bg-white)', border: '1px solid var(--border)',
                    color: 'var(--ink-3)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── TOC Sidebar ── */}
            <aside style={{ position: 'sticky', top: '96px' }} className="blog-toc">
              <div style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, color: 'var(--ink-4)', letterSpacing: '0.08em', marginBottom: '14px' }}>
                  // SOMMAIRE
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {TOC.map(({ id, label }) => (
                    <a key={id} href={`#${id}`} style={{
                      fontSize: '12.5px', color: 'var(--ink-3)',
                      textDecoration: 'none', padding: '5px 8px',
                      borderRadius: '6px', lineHeight: 1.4,
                      transition: 'all 0.15s',
                      display: 'block',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)', marginBottom: '10px' }}>
                    {article.readMin} min · {article.date}
                  </div>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center',
                    padding: '9px 14px', borderRadius: '8px',
                    background: 'var(--or)', color: '#0c1210',
                    fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    Audit →
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* TOC responsive hide */}
      <style>{`
        @media (max-width: 900px) {
          .blog-toc { display: none !important; }
        }
      `}</style>
    </>
  );
}
