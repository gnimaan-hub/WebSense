# PATCH — app/services/marketing-digital/page.tsx

## 1 · Import (en haut du fichier)
```tsx
import ServiceVisual from '@/components/sections/ServiceVisual';
```

## 2 · Dans `MARKETING_TYPES` — supprimer le champ `svg: (…)` de chaque carte et ajouter à la place les champs ci-dessous
> Conservez le champ `badge` existant (utilisé par `BlockNum`), il est indépendant du visuel.

### 01 — Marketing d'influence & UGC
```tsx
image:          '/images/marketing/influence.jpg',
imageAlt:       'Créateur de contenu filmant un produit pour les réseaux',
visualTag:      'INFLUENCE · UGC',
visualTitle:    'Vos clients deviennent vos ambassadeurs',
visualSubtitle: 'nano · micro · macro · 1 à 3 mois',
```

### 02 — Production de contenu vidéo premium
```tsx
image:          '/images/marketing/video.jpg',
imageAlt:       'Tournage vidéo professionnel avec caméra et éclairage',
visualTag:      'VIDÉO · PRODUCTION',
visualTitle:    'La vidéo au cœur de votre communication',
visualSubtitle: 'corporate · social · shoppable',
```

### 03 — Community management & Réseaux sociaux
```tsx
image:          '/images/marketing/community.jpg',
imageAlt:       'Gestion de plusieurs réseaux sociaux sur smartphone',
visualTag:      'SOCIAL · COMMUNITY MANAGEMENT',
visualTitle:    'Votre présence sociale, gérée chaque jour',
visualSubtitle: 'calendrier éditorial · contrat mensuel',
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
