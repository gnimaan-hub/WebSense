'use client';

import React from 'react';
import Link from 'next/link';
import type { Article } from '@/app/blog/lib';

// ─── Sub-components ──────────────────────────────────────────────────────────

function Stat({ value, label, sub, color = 'var(--green)' }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: '28px', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginTop: '6px' }}>{label}</div>
      {sub && <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)', marginTop: '3px' }}>{sub}</div>}
    </div>
  );
}

function Callout({ icon, title, children, color = 'var(--green)' }: { icon: string; title: string; children: React.ReactNode; color?: string }) {
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
        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

function PriceRow({ type, desc, range, color }: { type: string; desc: string; range: string; color: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>{type}</div>
        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.55 }}>{desc}</div>
      </div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color,
        background: `color-mix(in srgb, ${color} 10%, transparent)`,
        padding: '5px 12px', borderRadius: '8px', whiteSpace: 'nowrap', flexShrink: 0,
      }}>
        {range}
      </div>
    </div>
  );
}

function FactorCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '24px 26px', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--green)', flexShrink: 0, marginTop: '3px' }}>
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

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{ borderLeft: '3px solid var(--green)', paddingLeft: '22px', margin: '32px 0' }}>
      <p style={{ fontSize: '17px', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.7, margin: 0 }}>
        {children}
      </p>
    </blockquote>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'intro',       label: 'Pourquoi c\'est compliqué ?' },
  { id: 'categories',  label: 'Les grandes catégories' },
  { id: 'fourchettes', label: 'Fourchettes de prix (FDJ)' },
  { id: 'recurrents',  label: 'Coûts récurrents' },
  { id: 'facteurs',    label: '6 facteurs de variation' },
  { id: 'devis',       label: 'Comment lire un devis' },
  { id: 'pieges',      label: 'Les pièges à éviter' },
  { id: 'local',       label: 'Local vs. offshore' },
  { id: 'conclusion',  label: 'En résumé' },
];

// ─── Main Article ─────────────────────────────────────────────────────────────

export default function ArticlePrix({ article }: { article: Article }) {
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
            <span style={{ color: 'var(--ink-3)' }}>Développement</span>
          </nav>

          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                background: 'rgba(29,158,117,0.12)', color: 'var(--green)',
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
                background: 'linear-gradient(135deg, var(--green), var(--or))',
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
                <Stat value="150k" label="Site vitrine entrée de gamme" sub="fourchette basse en FDJ" />
                <div style={{ width: '1px', background: 'var(--border)', alignSelf: 'stretch', margin: '16px 0' }} />
                <Stat value="7M+" label="Application métier sur mesure" sub="fourchette haute en FDJ" color="var(--or)" />
                <div style={{ display: 'none' }} />
                <Stat value="6" label="Facteurs qui font varier le prix" sub="analysés dans cet article" color="rgba(79,212,165,1)" />
              </div>

              {/* INTRO */}
              <div id="intro">
                <p style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.85, marginBottom: '20px', fontWeight: 500 }}>
                  «&nbsp;Combien ça coûte&nbsp;?&nbsp;» C'est la question la plus posée — et la plus mal répondue — dans le secteur du web à Djibouti.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '20px' }}>
                  Certains prestataires annoncent 50&nbsp;000&nbsp;FDJ. D'autres, 5&nbsp;000&nbsp;000&nbsp;FDJ pour un projet comparable. Cette dispersion ne reflète pas une anarchie du marché : elle illustre que le prix d'un site dépend de variables que la plupart des clients n'ont pas encore identifiées au moment de formuler leur demande.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '28px' }}>
                  Dans cet article, nous posons les chiffres sans détour : fourchettes réalistes par type de projet, facteurs de variation, et méthode pour comparer des devis sans se faire piéger.
                </p>

                <Callout icon="📌" title="Ces prix reflètent le marché djiboutien en 2026">
                  Les fourchettes ci-dessous sont exprimées en francs djiboutiens (FDJ) et tiennent compte des réalités locales : compétences disponibles, coût des licences SaaS, niveau de complexité des projets traités à Djibouti. Elles ne correspondent ni aux tarifs d'une agence parisienne ni à ceux d'un freelance offshore low-cost.
                </Callout>
              </div>

              {/* LES GRANDES CATÉGORIES */}
              <div id="categories" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Les grandes catégories de sites web
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Avant de parler chiffres, il faut nommer les objets. Chaque catégorie répond à des besoins différents, implique des technologies différentes, et donc des investissements différents.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  {[
                    { icon: '🏠', type: 'Site vitrine', desc: 'Présente votre activité, vos services et vos coordonnées. Objectif principal : crédibilité et premier contact commercial.' },
                    { icon: '🛒', type: 'Site e-commerce', desc: 'Vente en ligne avec catalogue produits, panier, paiement sécurisé et gestion des commandes.' },
                    { icon: '⚙️', type: 'Application sur mesure', desc: 'Outil métier spécifique : gestion interne, automatisation, portail client ou collaborateur.' },
                    { icon: '🔗', type: 'Portail / Plateforme', desc: 'Gestion multi-utilisateurs, espaces dédiés et workflows complexes — entre e-commerce et appli métier.' },
                  ].map(({ icon, type, desc }) => (
                    <div key={type} style={{ padding: '20px', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '22px', marginBottom: '10px' }}>{icon}</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '7px' }}>{type}</div>
                      <div style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FOURCHETTES */}
              <div id="fourchettes" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Fourchettes de prix à Djibouti — 2026
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Ces tarifs correspondent à des projets livrés de manière professionnelle : brief, conception, maquettes, développement, tests, formation à la prise en main et mise en ligne. Hébergement et maintenance récurrente sont détaillés dans la section suivante.
                </p>

                <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '12px 20px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.07em' }}>TYPE DE PROJET</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.07em' }}>FOURCHETTE (FDJ)</div>
                  </div>
                  <PriceRow
                    type="Site vitrine — entrée de gamme"
                    desc="Template personnalisé, 4–8 pages, responsive, CMS basique"
                    range="150 000 – 450 000"
                    color="var(--ink-3)"
                  />
                  <PriceRow
                    type="Site vitrine professionnel"
                    desc="Design sur mesure, 8–20 pages, SEO on-page, CMS avancé, animations"
                    range="500 000 – 1 500 000"
                    color="var(--or)"
                  />
                  <PriceRow
                    type="Site e-commerce"
                    desc="Catalogue produits, panier, paiement en ligne, tableau de bord commandes"
                    range="900 000 – 3 500 000"
                    color="var(--green)"
                  />
                  <PriceRow
                    type="Portail / Plateforme multi-utilisateurs"
                    desc="Espaces connectés, workflows, rôles utilisateurs, intégrations API"
                    range="2 000 000 – 5 000 000"
                    color="rgba(79,212,165,1)"
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>Application métier sur mesure</div>
                      <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.55 }}>Logique métier complexe, base de données relationnelle, intégrations ERP / CRM</div>
                    </div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'var(--or)',
                      background: 'rgba(232,160,32,0.10)', padding: '5px 12px', borderRadius: '8px', whiteSpace: 'nowrap',
                    }}>
                      5 000 000 – 7 000 000+
                    </div>
                  </div>
                </div>

                <Callout icon="💡" title="Ces fourchettes supposent un brief complet de votre part">
                  Un brief précis (objectifs, cibles, fonctionnalités, contraintes) réduit le temps de cadrage et donc le coût global. Plus vous arrivez préparé, plus le devis sera juste dès le premier échange.
                </Callout>
              </div>

              {/* COÛTS RÉCURRENTS */}
              <div id="recurrents" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Coûts récurrents : ce qui s'ajoute après la livraison
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Le prix d'un site ne s'arrête pas à la mise en ligne. Voici les postes récurrents à intégrer dans votre budget annuel.
                </p>

                <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '28px' }}>
                  <div style={{ padding: '12px 20px', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '0.07em' }}>POSTES RÉCURRENTS (PAR MOIS)</div>
                  </div>
                  <PriceRow
                    type="Nom de domaine"
                    desc="Renouvellement annuel — généralement facturé à l'année"
                    range="≈ 2 000 – 5 000 / an"
                    color="var(--ink-3)"
                  />
                  <PriceRow
                    type="Hébergement web"
                    desc="Serveur mutualisé ou VPS selon le trafic et les exigences de performance"
                    range="5 000 – 25 000 / mois"
                    color="var(--ink-3)"
                  />
                  <PriceRow
                    type="Maintenance et mises à jour"
                    desc="Sécurité, sauvegardes automatiques, mises à jour CMS, support réactif"
                    range="15 000 – 60 000 / mois"
                    color="var(--or)"
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center', padding: '16px 20px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>Évolutions et production de contenu</div>
                      <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.55 }}>Nouvelles pages, rédaction, refonte de sections, intégrations supplémentaires</div>
                    </div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 700, color: 'rgba(79,212,165,1)',
                      background: 'rgba(79,212,165,0.08)', padding: '5px 12px', borderRadius: '8px', whiteSpace: 'nowrap',
                    }}>
                      Sur devis
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '22px 24px', borderRadius: '14px',
                  background: 'var(--bg-white)', border: '1px solid var(--border)',
                  display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0',
                }}>
                  {[
                    { label: 'Site vitrine professionnel', tco: '≈ 850k – 2,5M FDJ', sub: 'sur 3 ans (création + hosting + maintenance)' },
                    { label: 'Site e-commerce standard', tco: '≈ 2M – 6M FDJ', sub: 'sur 3 ans tout compris' },
                    { label: 'Application sur mesure', tco: '≈ 7M – 15M FDJ', sub: 'sur 3 ans avec évolutions' },
                  ].map(({ label, tco, sub }, i) => (
                    <div key={label} style={{
                      padding: '16px 18px', textAlign: 'center',
                      borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '11.5px', color: 'var(--ink-3)', letterSpacing: '0.06em', marginBottom: '8px' }}>TCO 3 ANS</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: 800, color: 'var(--green)', marginBottom: '4px' }}>{tco}</div>
                      <div style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: 1.55 }}>{label}<br /><em>{sub}</em></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 FACTEURS */}
              <div id="facteurs" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Les 6 facteurs qui font varier le prix
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Deux projets "site vitrine" peuvent aboutir à des devis allant du simple au décuple. Voici pourquoi.
                </p>

                <FactorCard num="01 /" title="Design sur mesure vs. template">
                  <p style={{ marginBottom: '10px' }}>
                    Un site construit sur un template (thème WordPress, Wix, Squarespace) coûte toujours moins cher à la création. Mais il vous impose des contraintes visuelles et structurelles, et il ressemblera à des milliers d'autres sites du même secteur.
                  </p>
                  <p>
                    Un design sur mesure — conçu pour votre marque, vos utilisateurs et vos objectifs — représente un investissement plus élevé, mais offre une différenciation réelle, de meilleures performances techniques et une évolutivité sans dette cachée.
                  </p>
                </FactorCard>

                <FactorCard num="02 /" title="Le volume et la complexité des pages">
                  <p>
                    Chaque page implique une conception, une rédaction, un développement et une optimisation SEO. Un site de 5 pages ne se compare pas à un site de 50. Et une page "contact" n'a pas le même coût qu'une page avec un configurateur de produit, un moteur de recherche filtré ou une carte interactive.
                  </p>
                </FactorCard>

                <FactorCard num="03 /" title="Les fonctionnalités intégrées">
                  <p style={{ marginBottom: '10px' }}>
                    Chaque fonctionnalité est un développement à part entière : système de réservation, espace membre, paiement mobile money, multilingue, exports PDF, synchronisation CRM, chat support…
                  </p>
                  <p>
                    La règle est simple : plus une fonctionnalité est spécifique à votre activité, plus elle coûte cher — elle ne peut pas être achetée "prête à l'emploi" et doit être développée ou configurée pour votre contexte.
                  </p>
                </FactorCard>

                <FactorCard num="04 /" title="Le niveau d'optimisation SEO">
                  <p>
                    Un site peut être mis en ligne en deux semaines sans aucune optimisation pour les moteurs de recherche. Il peut aussi faire l'objet d'une stratégie de contenu structurée, d'une recherche de mots-clés ciblés, d'un balisage sémantique avancé et d'une architecture pensée pour le référencement naturel sur 3 à 5 ans. Ce travail se facture — et c'est lui qui génère du trafic organique durable.
                  </p>
                </FactorCard>

                <FactorCard num="05 /" title="Le contenu : textes et visuels">
                  <p>
                    Les textes, photos, vidéos et infographies représentent souvent 30 à 50 % du travail total. Si vous fournissez votre contenu, le coût baisse significativement. Si vous avez besoin que votre prestataire le produise — rédaction, photographie, illustration — ce poste s'ajoute au devis de développement.
                  </p>
                </FactorCard>

                <FactorCard num="06 /" title="Les délais et le niveau d'urgence">
                  <p>
                    Un projet livré en trois semaines coûtera plus cher que le même projet livré en deux mois. L'urgence mobilise des ressources en dehors du planning habituel et génère une charge organisationnelle supplémentaire. Si vous n'avez pas de contrainte calendaire absolue, donner du temps à votre prestataire est l'un des rares leviers pour maîtriser votre budget sans sacrifier la qualité.
                  </p>
                </FactorCard>
              </div>

              {/* COMMENT LIRE UN DEVIS */}
              <div id="devis" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Comment lire un devis web
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Un devis est un contrat implicite : il engage autant sur ce qu'il inclut que sur ce qu'il ne mentionne pas. Voici les quatre points à vérifier avant de signer.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                  {[
                    { label: 'Livrables détaillés', desc: 'Chaque page, fonctionnalité et prestation doit être nommée. Un devis "site web complet" sans détail est une source quasi certaine de désaccord à la livraison.' },
                    { label: 'Propriété des fichiers', desc: 'Vérifiez que vous serez propriétaire du code source, des maquettes, du nom de domaine et du contenu dès la livraison — sans conditions de reconduction ou de fidélisation.' },
                    { label: 'Jalons et délais', desc: 'Un bon devis précise les étapes du projet (brief, maquettes, développement, recette, mise en ligne) avec une date ou une durée associée à chaque jalon.' },
                    { label: 'Conditions de révision', desc: 'Combien de cycles de retours sont inclus ? À quel stade les modifications supplémentaires sont-elles facturées, et à quel tarif ?' },
                  ].map(({ label, desc }) => (
                    <div key={label} style={{
                      padding: '18px 20px',
                      background: 'rgba(29,158,117,0.05)',
                      border: '1px solid rgba(29,158,117,0.18)',
                      borderRadius: '12px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'var(--mono)', fontWeight: 800, color: 'var(--green)', fontSize: '13px' }}>✓</span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>{label}</span>
                      </div>
                      <div style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{desc}</div>
                    </div>
                  ))}
                </div>

                <Quote>
                  «&nbsp;Le coût réel d'un site web, ce n'est pas le montant que vous payez à la signature. C'est ce que vous payez sur trois ans — hébergement, maintenance, retouches, et tout ce que le prestataire n'a pas mis dans le devis initial.&nbsp;»
                </Quote>
              </div>

              {/* LES PIÈGES */}
              <div id="pieges" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Les 4 pièges les plus fréquents
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  Ces situations reviennent régulièrement dans les projets que nous reprenons après un premier prestataire.
                </p>

                {[
                  {
                    num: '01',
                    title: 'Le devis forfaitaire sans détail de livrables',
                    body: 'Ce que vous imaginiez inclus ne l\'était peut-être pas. Un devis vague "site clé en main" est la source la plus fréquente de dépassements budgétaires et de conflits à la réception.',
                    accent: '#f87171',
                  },
                  {
                    num: '02',
                    title: 'Le prix très bas d\'un prestataire non identifié',
                    body: 'Des devis à 30 000 FDJ existent. Ils correspondent généralement à des templates achetés pour quelques dollars, "personnalisés" en surface, sans brief, sans SEO, sans formation à la prise en main, sans support post-livraison. Le site sera là — mais il ne travaillera pas pour vous.',
                    accent: '#f87171',
                  },
                  {
                    num: '03',
                    title: 'L\'absence de clause de propriété des accès',
                    body: 'Certains prestataires gardent la main sur l\'hébergement, le nom de domaine ou le code source. En cas de désaccord, vous vous retrouvez sans accès à votre propre site. Exigez systématiquement le transfert complet de tous les accès à la livraison.',
                    accent: '#f87171',
                  },
                  {
                    num: '04',
                    title: 'Sous-estimer le budget consacré au contenu',
                    body: 'Un site techniquement impeccable avec des textes mal rédigés et des photos de stock génériques ne convertira pas. La qualité éditoriale et visuelle est aussi déterminante que le développement. Prévoyez un budget dédié — ou livrez un contenu soigné à votre prestataire.',
                    accent: 'var(--or)',
                  },
                ].map(({ num, title, body, accent }) => (
                  <div key={num} style={{
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
                ))}
              </div>

              {/* LOCAL VS OFFSHORE */}
              <div id="local" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Prestataire local vs. agence offshore
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '24px' }}>
                  La digitalisation permet de faire appel à des agences de n'importe où dans le monde. Voici comment trancher cette question de manière objective.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  {[
                    {
                      label: 'Prestataire local (Djibouti)',
                      color: 'var(--green)',
                      items: [
                        { ok: true,  text: 'Connaissance du marché et des contraintes locales' },
                        { ok: true,  text: 'Réunions en présentiel et réactivité dans le même fuseau horaire' },
                        { ok: true,  text: 'Compréhension des solutions de paiement locales (SATIM, mobile money)' },
                        { ok: true,  text: 'Relation de long terme et support continu facilité' },
                        { ok: false, text: 'Pool de prestataires plus restreint qu\'en Europe ou en Asie' },
                      ],
                    },
                    {
                      label: 'Agence offshore',
                      color: 'var(--or)',
                      items: [
                        { ok: true,  text: 'Parfois moins cher sur des projets très standardisés' },
                        { ok: true,  text: 'Large portfolio et volumétrie de références' },
                        { ok: false, text: 'Décalage horaire et barrière culturelle / linguistique' },
                        { ok: false, text: 'Ne connaît pas le contexte djiboutien ni les contraintes locales' },
                        { ok: false, text: 'Suivi post-livraison souvent difficile à obtenir' },
                      ],
                    },
                  ].map(({ label, color, items }) => (
                    <div key={label} style={{
                      padding: '22px',
                      background: `color-mix(in srgb, ${color} 5%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${color} 22%, transparent)`,
                      borderRadius: '12px',
                    }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 700, color, marginBottom: '14px', letterSpacing: '0.05em' }}>{label.toUpperCase()}</div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {items.map(({ ok, text }) => (
                          <li key={text} style={{ display: 'flex', gap: '9px', fontSize: '14.5px', color: 'var(--ink)', lineHeight: 1.55 }}>
                            <span style={{ color: ok ? 'var(--green)' : '#f87171', flexShrink: 0, fontWeight: 700 }}>{ok ? '✓' : '✗'}</span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85 }}>
                  Notre recommandation : pour tout projet impliquant une présence locale forte, du contenu en français ou somali, des intégrations avec des services djiboutiens, ou une relation de suivi dans la durée, le prestataire local reste le choix le plus cohérent. Pour un projet très standardisé avec un budget serré, un freelance offshore qualifié peut être une option — à condition de sécuriser contractuellement les livrables et la propriété des accès.
                </p>
              </div>

              {/* CONCLUSION */}
              <div id="conclusion" style={{ marginTop: '52px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  En résumé
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '16px' }}>
                  Il n'existe pas de "bon prix" universel pour un site web. Il existe un budget adapté à vos objectifs, à votre secteur et à vos ambitions. Un site à 150&nbsp;000&nbsp;FDJ peut être parfaitement adapté pour une auto-entreprise qui démarre. Un site à 2&nbsp;000&nbsp;000&nbsp;FDJ se justifie pour une structure dont l'essentiel des leads vient du digital.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.85, marginBottom: '32px' }}>
                  Ce qui ne varie pas : la nécessité d'un brief précis, de livrables contractualisés, et d'un suivi sérieux après la mise en ligne. Ces trois variables déterminent la valeur réelle d'un investissement web — bien plus que le montant initial du devis.
                </p>

                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0',
                  background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '14px', overflow: 'hidden', marginBottom: '40px',
                }}>
                  {[
                    { v: '150k', l: 'FDJ — entrée de gamme', color: 'var(--ink-2)' },
                    { v: '7M+',  l: 'FDJ — appli sur mesure', color: 'var(--or)' },
                    { v: '6',    l: 'facteurs de variation à connaître', color: 'var(--green)' },
                    { v: '3 ans', l: 'horizon pour calculer le vrai coût', color: 'rgba(79,212,165,1)' },
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
                background: 'linear-gradient(135deg, rgba(29,158,117,0.10), rgba(232,160,32,0.08))',
                border: '1px solid var(--border)', marginTop: '48px',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  // PROCHAINE ÉTAPE
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  Obtenez un devis précis pour votre projet
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '20px' }}>
                  En 30 minutes d'échange, nous cadrons votre projet, identifions les bonnes options techniques et vous remettons une estimation détaillée — sans engagement et sans langue de bois.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary">
                    <span>Demander un devis</span><span>→</span>
                  </Link>
                  <Link href="/tarifs" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '100px',
                    border: '1px solid var(--border)', background: 'var(--bg-white)',
                    fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
                    color: 'var(--ink-2)', textDecoration: 'none',
                  }}>
                    Voir nos forfaits
                  </Link>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                {['Tarifs', 'Développement web', 'Budget', 'Djibouti', 'Devis', 'Site vitrine', 'E-commerce'].map(tag => (
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
                    background: 'var(--green)', color: '#fff',
                    fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    Devis →
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
