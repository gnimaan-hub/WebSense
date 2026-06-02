# PATCH — app/services/ux-design/page.tsx

## 1 · Import (en haut du fichier)
```tsx
import ServiceVisual from '@/components/sections/ServiceVisual';
```

## 2 · Dans `UX_TYPES` — supprimer le champ `svg: (…)` de chaque carte et ajouter à la place les champs ci-dessous
> Conservez le champ `badge` existant (utilisé par `BlockNum`), il est indépendant du visuel.

### 01 — Audit UX & Analyse de données
```tsx
image:          '/images/ux-design/audit.jpg',
imageAlt:       'Atelier de recherche utilisateur avec post-its et parcours',
visualTag:      'AUDIT UX · DATA',
visualTitle:    'Comprendre avant de concevoir',
visualSubtitle: 'heuristique · heatmaps · 1 à 2 sem.',
```

### 02 — Design adaptatif & interfaces intelligentes
```tsx
image:          '/images/ux-design/adaptatif.jpg',
imageAlt:       "Maquettes d'interface adaptées à différents profils utilisateurs",
visualTag:      'DESIGN ADAPTATIF · IA',
visualTitle:    "Des interfaces qui s'ajustent à chacun",
visualSubtitle: 'personnalisation · A/B testing · 3 à 6 sem.',
```

### 03 — Expériences immersives & 3D
```tsx
image:          '/images/ux-design/immersif.jpg',
imageAlt:       'Casque de réalité virtuelle et environnement 3D navigable',
visualTag:      'IMMERSIF · 3D / WEBXR',
visualTitle:    'La 3D directement dans le navigateur',
visualSubtitle: 'showroom · configurateur · 4 à 8 sem.',
```

### 04 — Design authentique & identité distinctive
```tsx
image:          '/images/ux-design/identite.jpg',
imageAlt:       'Planche de direction artistique : couleurs et typographies',
visualTag:      'IDENTITÉ · DIRECTION ARTISTIQUE',
visualTitle:    'Une identité qui vous appartient',
visualSubtitle: 'typographie · palette · design system',
```

## 3 · Dans le rendu — remplacer le bloc illustration

**AVANT :**
```tsx
<div style={{
  order: idx % 2 === 0 ? 1 : 0,
  borderRadius: '16px', overflow: 'hidden',
  boxShadow: 'var(--shadow-lg)',
  border: '1px solid rgba(255,255,255,0.06)', lineHeight: 0,
}}>
  {type.svg}
</div>
```

**APRÈS :**
```tsx
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
```
