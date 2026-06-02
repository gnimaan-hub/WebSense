# PATCH — app/services/maintenance/page.tsx

## 1 · Import (en haut du fichier)
```tsx
import ServiceVisual from '@/components/sections/ServiceVisual';
```

## 2 · Dans `MAINTENANCE_TYPES` — supprimer le champ `svg: (…)` de chaque carte et ajouter à la place les champs ci-dessous
> Conservez le champ `badge` existant (utilisé par `BlockNum`), il est indépendant du visuel.

### 01 — Maintenance technique & support
```tsx
image:          '/images/maintenance/technique.jpg',
imageAlt:       "Supervision technique d'infrastructure en temps réel",
visualTag:      'MAINTENANCE · SUPPORT 24/7',
visualTitle:    'Votre site fonctionne. Toujours.',
visualSubtitle: 'supervision · SLA · contrat mensuel',
```

### 02 — Optimisation continue des performances
```tsx
image:          '/images/maintenance/performance.jpg',
imageAlt:       'Audit de performance web et Core Web Vitals sur écran',
visualTag:      'PERFORMANCE · AUDIT CONTINU',
visualTitle:    'Un site qui gagne en valeur',
visualSubtitle: 'Core Web Vitals · SEO · trimestriel',
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
