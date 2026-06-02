# PATCH — app/services/conseil-strategie/page.tsx

## 1 · Import (en haut du fichier)
```tsx
import ServiceVisual from '@/components/sections/ServiceVisual';
```

## 2 · Dans `CONSEIL_TYPES` — supprimer le champ `svg: (…)` de chaque carte et ajouter à la place les champs ci-dessous
> Conservez le champ `badge` existant (utilisé par `BlockNum`), il est indépendant du visuel.

### 01 — Stratégie IA générative & GEO
```tsx
image:          '/images/conseil/geo.jpg',
imageAlt:       "Réponse d'une IA générative consultée sur écran",
visualTag:      'STRATÉGIE · IA & GEO',
visualTitle:    'Être cité par les IA, pas seulement référencé',
visualSubtitle: 'audit GEO · contenu · 2 à 4 sem.',
```

### 02 — Conseil en transformation numérique
```tsx
image:          '/images/conseil/transformation.jpg',
imageAlt:       'Atelier de stratégie de transformation numérique',
visualTag:      'CONSEIL · TRANSFORMATION',
visualTitle:    "Intégrer l'IA sans suivre la mode",
visualSubtitle: 'feuille de route · 3 à 6 sem.',
```

### 03 — Marketing responsable & RSE numérique
```tsx
image:          '/images/conseil/rse.jpg',
imageAlt:       'Démarche de numérique responsable et sobriété énergétique',
visualTag:      'RSE · NUMÉRIQUE RESPONSABLE',
visualTitle:    'La durabilité comme avantage',
visualSubtitle: 'sobriété · certifications · 3 à 5 sem.',
```

### 04 — Stratégie de données first-party
```tsx
image:          '/images/conseil/data.jpg',
imageAlt:       'Visualisation de données clients unifiées sur écran',
visualTag:      'DATA · FIRST-PARTY',
visualTitle:    'Reprendre le contrôle de vos données',
visualSubtitle: 'CDP · RGPD · 4 à 8 sem.',
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
