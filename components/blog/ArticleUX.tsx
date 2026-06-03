'use client';

import React from 'react';
import Link from 'next/link';
import type { Article } from '@/app/blog/lib';

const TEAL = 'rgba(79,212,165,1)';
const TEAL_BG = 'rgba(79,212,165,0.08)';
const TEAL_BORDER = 'rgba(79,212,165,0.22)';

// ─── Sub-components ──────────────────────────────────────────────────────────

function Stat({ value, label, sub, color = TEAL }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '28px', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginTop: '6px' }}>{label}</div>
      {sub && <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '3px' }}>{sub}</div>}
    </div>
  );
}

function Callout({ icon, title, children, color = TEAL }: { icon: string; title: string; children: React.ReactNode; color?: string }) {
  return (
    <div style={{
      display: 'flex', gap: '16px', padding: '20px 22px',
      background: `color-mix(in srgb, ${color} 7%, transparent)`,
      border: `1px solid color-mix(in srgb, ${color} 22%, transparent)`,
      borderLeft: `3px solid ${color}`,
      borderRadius: '0 10px 10px 0',
      margin: '28px 0',
    }}>
      <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)', marginBottom: '6px' }}>{title}</div>
        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.75 }}>{children}</div>
      </div>
    </div>
  );
}

function PrincipleCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '24px 26px', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: TEAL, flexShrink: 0, marginTop: '3px' }}>
          {num}
        </span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
          <div style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.8 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function ErrorCard({ num, title, body, accent = '#f87171' }: { num: string; title: string; body: string; accent?: string }) {
  return (
    <div style={{
      padding: '22px 24px', marginBottom: '12px',
      background: 'var(--bg-white)', border: '1px solid var(--border)',
      borderLeft: `3px solid ${accent}`, borderRadius: '0 12px 12px 0',
    }}>
      <div style={{ display: 'flex', gap: '14px' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color: accent, flexShrink: 0, marginTop: '2px' }}>{num} /</span>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>{title}</div>
          <div style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.8 }}>{body}</div>
        </div>
      </div>
    </div>
  );
}

function Quote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: '22px', margin: '32px 0' }}>
      <p style={{ fontSize: '17px', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.7, marginBottom: source ? '8px' : 0 }}>
        {children}
      </p>
      {source && <cite style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', fontStyle: 'normal' }}>{source}</cite>}
    </blockquote>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'intro',      label: 'Introduction' },
  { id: 'ux-vs-ui',  label: 'UX vs UI : la distinction' },
  { id: 'chiffres',  label: 'Ce que les chiffres disent' },
  { id: 'principes', label: '5 principes qui convertissent' },
  { id: 'djibouti',  label: 'UX et contexte djiboutien' },
  { id: 'diagnostic',label: 'Évaluer votre UX actuel' },
  { id: 'erreurs',   label: 'Les erreurs les plus coûteuses' },
  { id: 'conclusion',label: 'En résumé' },
];

// ─── Main Article ─────────────────────────────────────────────────────────────

export default function ArticleUX({ article }: { article: Article }) {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ paddingTop: '72px', paddingBottom: '48px', borderBottom: '1px solid var(--border)' }}>
        <div className="container-custom">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--ink-3)', marginBottom: '28px' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Accueil</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--ink-2)' }}>Stratégie · UX</span>
          </nav>

          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                background: TEAL_BG, color: TEAL,
                padding: '3px 10px', borderRadius: '100px',
              }}>
                {article.cat}
              </span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '12.5px', color: 'var(--ink-3)' }}>
                {article.date} · {article.readMin} min de lecture
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 800,
              color: 'var(--ink)', lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: '18px',
            }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: '640px' }}>
              {article.excerpt}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${TEAL}, var(--or))`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '13px', color: '#0c1210',
              }}>WS</div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)' }}>Équipe WebSense</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)' }}>Cabinet digital · Djibouti</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <section style={{ paddingTop: '56px', paddingBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: '56px', alignItems: 'start' }}>

            {/* ── Contenu ── */}
            <div style={{ maxWidth: '680px' }}>

              {/* Stats band */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                border: '1px solid var(--border)', borderRadius: '14px',
                overflow: 'hidden', marginBottom: '40px', background: 'var(--bg-white)',
              }}>
                <Stat value="+34%" label="Taux de conversion en plus" sub="avec une UX optimisée" />
                <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch', margin: '16px 0' }} />
                <Stat value="−22%" label="Taux de rebond en moins" sub="mesuré sur sites refondu" color="var(--or)" />
                <div style={{ display: 'none' }} />
                <Stat value="×2,1" label="Durée de session multipliée" sub="navigation fluide et guidée" color="var(--green)" />
              </div>

              {/* INTRO */}
              <div id="intro">
                <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.85, marginBottom: '20px', fontWeight: 500 }}>
                  Une bonne expérience utilisateur ne se remarque pas. Elle guide, elle rassure, elle convainc — sans que le visiteur ait conscience d'avoir été conduit quelque part.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '20px' }}>
                  C'est précisément là le problème : parce que l'UX est invisible quand elle fonctionne, beaucoup de dirigeants la considèrent comme un luxe ou un détail esthétique. En réalité, c'est l'un des rares investissements digitaux dont le retour est directement mesurable — en conversions, en temps passé sur le site, en taux de rebond.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '28px' }}>
                  Cet article démonte les idées reçues, pose les chiffres, et vous donne cinq principes applicables dès aujourd'hui — avec ou sans refonte complète.
                </p>

                <Callout icon="📐" title="Ce que l'UX couvre réellement">
                  L'UX Design (User Experience) englobe tout ce qui concerne la façon dont un utilisateur vit son interaction avec votre site ou application : la lisibilité du contenu, la facilité de navigation, la rapidité de chargement, la clarté des appels à l'action, et la confiance ressentie. Ce n'est pas du tout la même chose que l'UI Design, qui ne concerne que la couche visuelle.
                </Callout>
              </div>

              {/* UX VS UI */}
              <div id="ux-vs-ui" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  UX vs UI : la distinction fondamentale
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  La confusion entre UX et UI coûte cher aux entreprises. Elle mène à des investissements bien orientés visuellement, mais inutiles commercialement.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  {[
                    {
                      label: 'UI Design',
                      sub: 'User Interface',
                      color: 'var(--or)',
                      items: [
                        'Couleurs, typographie, icônes',
                        'Mise en page et grille visuelle',
                        'Illustrations et composants graphiques',
                        'Cohérence esthétique du produit',
                      ],
                      note: 'L\'apparence de l\'interface.',
                    },
                    {
                      label: 'UX Design',
                      sub: 'User Experience',
                      color: TEAL,
                      items: [
                        'Architecture de l\'information',
                        'Parcours utilisateur et tunnels de conversion',
                        'Tests utilisateurs et analyse comportementale',
                        'Performance perçue et accessibilité',
                      ],
                      note: 'La façon dont l\'interface fonctionne.',
                    },
                  ].map(({ label, sub, color, items, note }) => (
                    <div key={label} style={{
                      padding: '22px',
                      background: `color-mix(in srgb, ${color} 5%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${color} 22%, transparent)`,
                      borderRadius: '12px',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color, marginBottom: '4px', letterSpacing: '0.05em' }}>{label.toUpperCase()}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', marginBottom: '14px' }}>{sub}</div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                        {items.map(item => (
                          <li key={item} style={{ display: 'flex', gap: '9px', fontSize: '13.5px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                            <span style={{ color, flexShrink: 0 }}>·</span>{item}
                          </li>
                        ))}
                      </ul>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', fontStyle: 'italic' }}>{note}</div>
                    </div>
                  ))}
                </div>

                <Quote source="Don Norman, co-fondateur du Nielsen Norman Group">
                  «&nbsp;L'expérience utilisateur englobe tous les aspects de l'interaction d'un utilisateur final avec l'entreprise, ses services et ses produits.&nbsp;»
                </Quote>

                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85 }}>
                  En pratique : un site peut être visuellement irréprochable (belle UI) et convertir très mal (mauvaise UX). Le cas inverse est plus rare — mais il existe. Ce qui crée des clients, c'est l'expérience, pas l'apparence seule.
                </p>
              </div>

              {/* LES CHIFFRES */}
              <div id="chiffres" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Ce que les chiffres disent
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  L'UX n'est pas une intuition — c'est une discipline mesurable. Ces données, issues d'études sectorielles récentes, quantifient l'impact direct d'une expérience utilisateur optimisée.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                  {[
                    { value: '94 %', desc: 'des premières impressions sur un site sont liées au design et à l\'ergonomie — pas au contenu.', source: 'Nielsen Norman Group, 2024' },
                    { value: '88 %', desc: 'des utilisateurs ne reviennent pas sur un site après une mauvaise expérience de navigation.', source: 'Sweor, 2024' },
                    { value: '+7 %', desc: 'de conversions supplémentaires pour chaque seconde de temps de chargement économisée.', source: 'Akamai / Google, 2023' },
                    { value: '200 %', desc: 'de ROI moyen documenté sur les projets d\'optimisation UX en B2B selon Forrester Research.', source: 'Forrester, 2023' },
                  ].map(({ value, desc, source }) => (
                    <div key={value} style={{
                      padding: '20px 22px',
                      background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '12px',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '26px', fontWeight: 800, color: TEAL, marginBottom: '10px', lineHeight: 1 }}>{value}</div>
                      <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '10px' }}>{desc}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--ink-3)' }}>{source}</div>
                    </div>
                  ))}
                </div>

                <Callout icon="📊" title="Ce que ça signifie pour votre organisation">
                  Si votre site reçoit 1 000 visiteurs par mois et convertit à 2 %, une amélioration UX qui fait passer ce taux à 3,4 % (+34 %) génère 14 contacts supplémentaires chaque mois — sans dépenser un franc de plus en acquisition. C'est le levier le plus sous-estimé du marketing digital.
                </Callout>
              </div>

              {/* 5 PRINCIPES */}
              <div id="principes" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  5 principes UX qui convertissent
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Ces principes ne sont pas des opinions. Ils sont le résultat de milliers de tests utilisateurs et d'analyses comportementales conduites sur des centaines de sites.
                </p>

                <PrincipleCard num="01 /" title="La clarté du message d'entrée">
                  <p style={{ marginBottom: '10px' }}>
                    Vous avez moins de 8 secondes pour convaincre un visiteur qu'il est au bon endroit. Ce qui doit apparaître immédiatement, au-dessus de la ligne de flottaison, sans scroller : qui vous êtes, ce que vous proposez, et pourquoi c'est pertinent pour lui.
                  </p>
                  <p>
                    Un message d'entrée efficace répond à trois questions implicites : «&nbsp;Est-ce que c'est fait pour moi ?&nbsp;», «&nbsp;Qu'est-ce que j'y gagne ?&nbsp;», «&nbsp;Que dois-je faire ensuite ?&nbsp;». Si votre page d'accueil ne répond pas clairement à ces trois questions en moins de 5 secondes, vous perdez des clients à chaque visite.
                  </p>
                </PrincipleCard>

                <PrincipleCard num="02 /" title="La hiérarchie visuelle et le regard guidé">
                  <p style={{ marginBottom: '10px' }}>
                    L'œil ne lit pas une page web — il la scanne selon des schémas prévisibles (modèles F et Z, documentés depuis les années 2000 par eye-tracking). Une bonne hiérarchie visuelle place les éléments clés exactement là où le regard passe naturellement.
                  </p>
                  <p>
                    En pratique : les titres guident, les sous-titres qualifient, les visuels ancrent, les CTA récoltent. Si vos boutons d'action se fondent dans la page ou apparaissent trop tard dans le parcours, le visiteur repart sans avoir agi — même s'il était intéressé.
                  </p>
                </PrincipleCard>

                <PrincipleCard num="03 /" title="La réduction de la friction">
                  <p style={{ marginBottom: '10px' }}>
                    Chaque étape supplémentaire entre l'intention et l'action coûte des conversions. Un formulaire de contact à 8 champs convertit trois fois moins qu'un formulaire à 3 champs. Un processus de commande en 6 étapes génère autant d'abandons qu'une caisse de supermarché à l'heure de pointe.
                  </p>
                  <p>
                    La friction n'est pas toujours visible : elle peut prendre la forme d'un temps de chargement élevé, d'un message d'erreur peu clair, d'une navigation sur mobile qui force à zoomer, ou d'un CTA dont l'intitulé ne dit pas exactement ce qui va se passer après le clic.
                  </p>
                </PrincipleCard>

                <PrincipleCard num="04 /" title="Les signaux de confiance">
                  <p style={{ marginBottom: '10px' }}>
                    La décision d'achat ou de prise de contact n'est pas rationnelle — elle est émotionnelle, puis rationalisée. Ce qui déclenche la confiance : les avis clients authentiques, les logos de partenaires ou clients reconnus, les certifications, les photos réelles de l'équipe, et les preuves de résultats concrets.
                  </p>
                  <p>
                    Ces éléments doivent apparaître au bon moment dans le parcours — pas seulement sur une page dédiée que personne ne consulte. Idéalement, ils accompagnent chaque appel à l'action, exactement au moment où l'hésitation est la plus forte.
                  </p>
                </PrincipleCard>

                <PrincipleCard num="05 /" title="La cohérence et la prévisibilité">
                  <p style={{ marginBottom: '10px' }}>
                    Les utilisateurs ne lisent pas vos interfaces — ils les reconnaissent. Un site cohérent dans ses interactions (les boutons ressemblent à des boutons, les liens sont soulignés, le logo ramène à l'accueil) réduit la charge cognitive et accélère la prise de décision.
                  </p>
                  <p>
                    La cohérence ne signifie pas l'uniformité : elle signifie que les règles sont appliquées de manière prévisible. Chaque rupture de cohérence est un moment de confusion — et une occasion de perdre le visiteur.
                  </p>
                </PrincipleCard>
              </div>

              {/* UX À DJIBOUTI */}
              <div id="djibouti" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  UX et contexte djiboutien : ce qui change
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Les principes UX sont universels. Leur application, elle, doit tenir compte du contexte local. À Djibouti, quatre réalités modifient les priorités de conception.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                  {[
                    {
                      icon: '📶',
                      title: 'Connectivité variable',
                      desc: 'La majorité des accès se font sur des réseaux mobiles dont la qualité varie fortement selon les zones. Chaque kilo-octet économisé est un visiteur retenu. Les images doivent être compressées, le JavaScript allégé, et le chargement progressif privilégié.',
                    },
                    {
                      icon: '📱',
                      title: 'Majorité mobile',
                      desc: 'Plus de 78 % du trafic web à Djibouti est mobile. La conception mobile-first n\'est pas une option — c\'est le point de départ obligatoire. Cela signifie des zones de clic larges, une navigation au pouce, et des formulaires adaptés au clavier mobile.',
                    },
                    {
                      icon: '🌐',
                      title: 'Environnement multilingue',
                      desc: 'Français, somali, arabe, afar : votre audience est souvent multilingue. Si votre site n\'est disponible qu\'en français, vous excluez une partie de votre marché potentiel. La navigation et l\'architecture doivent anticiper ce besoin.',
                    },
                    {
                      icon: '🤝',
                      title: 'Confiance et proximité',
                      desc: 'Les décisions d\'achat à Djibouti sont fortement influencées par la confiance interpersonnelle et la proximité locale. Les signaux de confiance les plus efficaces ici ne sont pas les certifications internationales, mais les témoignages de clients locaux identifiables et les preuves de présence physique.',
                    },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{ padding: '20px', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '22px', marginBottom: '10px' }}>{icon}</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>{title}</div>
                      <div style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIAGNOSTIC */}
              <div id="diagnostic" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Évaluer votre UX actuelle en 6 questions
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Avant tout investissement, ce diagnostic rapide vous donne une image honnête de la situation. Testez-le sur votre site actuel, idéalement depuis un smartphone.
                </p>

                <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '28px' }}>
                  {[
                    { num: '01', q: 'En 5 secondes, un inconnu comprend-il ce que vous faites ?', tip: 'Montrez votre page d\'accueil à quelqu\'un qui ne vous connaît pas. S\'il hésite, votre message d\'entrée est à retravailler.' },
                    { num: '02', q: 'Votre CTA principal est-il visible sans scroller sur mobile ?', tip: 'Sur un écran de 375px de large, votre bouton "Nous contacter" ou "Demander un devis" doit être accessible immédiatement.' },
                    { num: '03', q: 'Votre site charge en moins de 3 secondes sur une connexion 4G ?', tip: 'Testez sur Google PageSpeed Insights. En dessous de 60/100, vous avez un problème de performance qui impacte directement vos conversions.' },
                    { num: '04', q: 'Votre formulaire de contact a-t-il 5 champs ou moins ?', tip: 'Nom, email, objet, message — c\'est suffisant pour qualifier un lead. Chaque champ supplémentaire réduit le taux de complétion.' },
                    { num: '05', q: 'Avez-vous des avis clients ou des preuves de résultats sur votre page d\'accueil ?', tip: 'Pas sur une page cachée "Témoignages" — directement sur la page d\'accueil, là où la décision se joue.' },
                    { num: '06', q: 'Pouvez-vous naviguer sur tout votre site avec le pouce gauche uniquement ?', tip: 'Les zones de clic doivent faire au minimum 44×44px et ne pas se trouver dans les coins supérieurs difficiles à atteindre.' },
                  ].map(({ num, q, tip }, i) => (
                    <div key={num} style={{
                      padding: '18px 22px',
                      borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700,
                          color: TEAL, flexShrink: 0, marginTop: '2px',
                          background: TEAL_BG, padding: '2px 8px', borderRadius: '6px',
                        }}>{num}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>{q}</div>
                          <div style={{ fontSize: '13.5px', color: 'var(--ink-3)', lineHeight: 1.6 }}>{tip}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Callout icon="🎯" title="Résultat : comment interpréter vos réponses">
                  <strong>5–6 réponses positives :</strong> votre UX de base est saine — travaillez maintenant sur l'optimisation fine (A/B testing, heatmaps, entretiens utilisateurs).<br /><br />
                  <strong>3–4 réponses positives :</strong> des axes d'amélioration identifiables et rapides à corriger. Un audit UX ciblé suffit.<br /><br />
                  <strong>0–2 réponses positives :</strong> votre site freine activement vos conversions. Une refonte orientée UX est la décision la plus rentable.
                </Callout>
              </div>

              {/* ERREURS */}
              <div id="erreurs" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Les 5 erreurs UX les plus coûteuses
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Ces erreurs apparaissent systématiquement dans les audits UX que nous conduisons. Elles ont en commun d'être invisibles pour le propriétaire du site — mais immédiatement perçues par ses visiteurs.
                </p>

                <ErrorCard
                  num="01"
                  title="Des CTA invisibles ou aux intitulés ambigus"
                  body="«&nbsp;En savoir plus&nbsp;», «&nbsp;Cliquez ici&nbsp;», «&nbsp;Soumettre&nbsp;» : ces formulations ne disent pas ce qui va se passer après le clic. Un bon CTA annonce l'action et sa conséquence : «&nbsp;Recevoir mon devis gratuit&nbsp;», «&nbsp;Réserver un audit de 30 min&nbsp;». La clarté de l'intitulé seule peut augmenter le taux de clic de 15 à 40 %."
                />
                <ErrorCard
                  num="02"
                  title="Des formulaires qui découragent"
                  body="Un formulaire à 8 champs obligatoires envoie un message implicite : «&nbsp;votre temps ne vaut pas grand-chose pour nous&nbsp;». La règle est d'éliminer tout champ dont l'absence ne vous empêcherait pas de rappeler le prospect. Numéro de téléphone, secteur d'activité, budget estimé, taille de l'entreprise — aucun de ces champs n'est nécessaire au premier contact."
                />
                <ErrorCard
                  num="03"
                  title="L'absence de navigation cohérente sur mobile"
                  body="Un menu hamburger qui s'ouvre lentement, des sous-menus qui débordent de l'écran, des liens trop proches pour être cliqués avec précision — sur mobile, la navigation cassée est la première cause d'abandon. Et pourtant, elle est souvent la dernière chose testée lors du développement."
                  accent="var(--or)"
                />
                <ErrorCard
                  num="04"
                  title="Aucun signal de confiance au moment de la conversion"
                  body="Le visiteur est convaincu de votre offre. Il clique sur le bouton de contact. Et là, il arrive sur un formulaire nu, sans rappel de votre identité, sans avis client, sans garantie visible. C'est exactement à ce moment-là que la confiance doit être maximale — et c'est souvent là qu'elle est la plus absente."
                  accent="var(--or)"
                />
                <ErrorCard
                  num="05"
                  title="Ignorer les données comportementales"
                  body="Sans heatmaps, sans enregistrements de sessions, sans analyse des entonnoirs de conversion, vous gérez votre site à l'aveugle. Des outils comme Microsoft Clarity (gratuit) vous montrent exactement où vos visiteurs cliquent, jusqu'où ils scrollent et où ils abandonnent. Ces données sont disponibles dès le lendemain de l'installation — et changent radicalement la façon dont vous prenez des décisions UX."
                  accent="var(--or)"
                />
              </div>

              {/* CONCLUSION */}
              <div id="conclusion" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  En résumé
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '16px' }}>
                  L'UX Design n'est pas un poste budgétaire réservé aux grandes entreprises. C'est une méthode — une façon de concevoir les interfaces en partant des comportements réels des utilisateurs plutôt que des préférences du commanditaire.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '32px' }}>
                  Les cinq principes décrits dans cet article — clarté du message, hiérarchie visuelle, réduction de la friction, signaux de confiance, cohérence — ne nécessitent pas une refonte complète pour être appliqués. Certains peuvent être corrigés en quelques heures. D'autres demandent un travail plus structuré. Mais aucun n'est optionnel si vous voulez que votre site génère des clients.
                </p>

                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0',
                  background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '40px',
                }}>
                  {[
                    { v: '5', l: 'principes UX à appliquer dès aujourd\'hui', color: TEAL },
                    { v: '+34 %', l: 'de conversions avec une UX optimisée', color: 'var(--green)' },
                    { v: '94 %', l: 'des 1res impressions liées à l\'ergonomie', color: 'var(--or)' },
                    { v: '×200', l: 'ROI moyen documenté en B2B (Forrester)', color: TEAL },
                  ].map(({ v, l, color }, i) => (
                    <div key={l} style={{
                      textAlign: 'center', padding: '20px 16px',
                      borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                      borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '24px', fontWeight: 800, color }}>{v}</div>
                      <div style={{ fontSize: '13.5px', color: 'var(--ink-2)', marginTop: '6px', lineHeight: 1.4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{
                padding: '32px', borderRadius: '16px',
                background: `linear-gradient(135deg, ${TEAL_BG}, rgba(232,160,32,0.07))`,
                border: '1px solid var(--border)', marginTop: '48px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  // PROCHAINE ÉTAPE
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  Faites auditer l'UX de votre site
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '20px' }}>
                  En une session de travail, nous identifions les frictions qui coûtent des conversions à votre site — et vous remettons un plan d'action priorisé, applicable immédiatement ou dans le cadre d'une refonte.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary">
                    <span>Demander un audit UX</span><span>→</span>
                  </Link>
                  <Link href="/services/ux-design" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '100px',
                    border: '1px solid var(--border)', background: 'var(--bg-white)',
                    fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
                    color: 'var(--ink-2)', textDecoration: 'none',
                  }}>
                    Voir notre offre UX
                  </Link>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                {['UX Design', 'Conversion', 'Mobile-first', 'Djibouti', 'Interface', 'Audit UX', 'Stratégie digitale'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
                    padding: '4px 12px', borderRadius: '100px',
                    background: 'var(--bg-white)', border: '1px solid var(--border)',
                    color: 'var(--ink-2)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Sidebar TOC ── */}
            <aside style={{ position: 'sticky', top: '96px' }} className="blog-toc">
              <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.08em', marginBottom: '14px' }}>
                  // SOMMAIRE
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {TOC.map(({ id, label }) => (
                    <a key={id} href={`#${id}`} style={{
                      fontSize: '13.5px', color: 'var(--ink-2)', textDecoration: 'none',
                      padding: '5px 8px', borderRadius: '6px', lineHeight: 1.4,
                      transition: 'all 0.15s', display: 'block',
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; (e.currentTarget as HTMLElement).style.background = 'var(--bg)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginBottom: '10px' }}>
                    {article.readMin} min · {article.date}
                  </div>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center',
                    padding: '9px 14px', borderRadius: '8px',
                    background: TEAL, color: '#0c1210',
                    fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    Audit UX →
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .blog-toc { display: none !important; }
        }
      `}</style>
    </>
  );
}
