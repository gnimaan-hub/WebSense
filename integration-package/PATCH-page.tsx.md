// ─────────────────────────────────────────────────────────────
// PATCH À APPLIQUER DANS app/services/formation/page.tsx
// ─────────────────────────────────────────────────────────────

/* ──────────────────────────────────────────────────────────────
   1. EN HAUT DU FICHIER — remplacer/ajouter cet import
   ────────────────────────────────────────────────────────────── */

import FormationVisual from '@/components/sections/FormationVisual';

/* ──────────────────────────────────────────────────────────────
   2. DANS LE TABLEAU FORMATION_TYPES — remplacer le champ `svg`
   par 4 champs simples : image, alt, visualTag, visualTitle.
   (On supprime tout le JSX SVG, environ 70 lignes par carte.)
   ────────────────────────────────────────────────────────────── */

const FORMATION_TYPES = [
  {
    id: 'ia-automatisation',
    num: '01',
    label: 'Formations IA & Automatisation',
    tagline: 'Exploiter les capacités intelligentes de votre site — sans coder.',
    desc: "Les sites modernes embarquent…",
    pourQui: [/* … inchangé … */],
    inclus: [/* … inchangé … */],
    duration: '1 à 3 jours',
    badge: null,

    // ✨ NOUVEAU
    image: '/images/formation/ia-automatisation.jpg',
    imageAlt: "Équipe en formation IA face à un écran d'agent conversationnel",
    visualTag: 'FORMATION · IA & AUTOMATISATION',
    visualTitle: "Vos équipes apprennent à piloter l'IA",
    visualSubtitle: 'hands-on · cas réels · 1 à 3 jours',
  },
  {
    id: 'strategique',
    num: '02',
    label: 'Stratégique & culture digitale',
    // …
    image: '/images/formation/strategique.jpg',
    imageAlt: 'Direction en comité de pilotage devant des tableaux de bord',
    visualTag: 'COMITÉ · CULTURE DIGITALE',
    visualTitle: 'Décider en connaissance de cause',
    visualSubtitle: 'ateliers stratégiques · 1 à 2 jours',
  },
  {
    id: 'web-numerique',
    num: '03',
    // …
    image: '/images/formation/web-numerique.jpg',
    imageAlt: 'Atelier numérique de prise en main avec ordinateurs',
    visualTag: 'ATELIER · NUMÉRIQUE RESPONSABLE',
    visualTitle: 'Reprendre la main sur le numérique',
    visualSubtitle: 'débutants bienvenus · ½ à 2 jours',
  },
  {
    id: 'ia-responsable',
    num: '04',
    // …
    image: '/images/formation/ia-responsable.jpg',
    imageAlt: 'Analyse vigilante de contenus générés par une IA',
    visualTag: 'VIGILANCE · IA RESPONSABLE',
    visualTitle: "Comprendre l'IA pour ne pas la subir",
    visualSubtitle: 'démystification · ½ à 1 jour',
  },
];

/* ──────────────────────────────────────────────────────────────
   3. DANS LE RENDU — remplacer le bloc qui affiche {type.svg}
   par <FormationVisual ... />.
   ────────────────────────────────────────────────────────────── */

// AVANT (à supprimer) :
// <div style={{ order: idx % 2 === 0 ? 1 : 0, borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.06)', lineHeight: 0 }}>
//   {type.svg}
// </div>

// APRÈS :
<div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
  <FormationVisual
    src={type.image}
    alt={type.imageAlt}
    tag={type.visualTag}
    title={type.visualTitle}
    subtitle={type.visualSubtitle}
    reverse={idx % 2 === 1}
  />
</div>
