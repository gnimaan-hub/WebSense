# PATCH — app/services/developpement-web/page.tsx

## 1 · Import (en haut du fichier)
```tsx
import ServiceVisual from '@/components/sections/ServiceVisual';
```

## 2 · Dans `SITE_TYPES` — supprimer le champ `svg: (…)` de chaque carte et ajouter à la place les champs ci-dessous

### 01 — Site vitrine
```tsx
image:          '/images/developpement/vitrine.jpg',
imageAlt:       "Site vitrine épuré affiché sur un écran d'ordinateur",
visualTag:      'SITE VITRINE · PRÉSENCE WEB',
visualTitle:    'Exister en ligne, professionnellement',
visualSubtitle: '5 à 10 pages · 2 à 3 semaines',
```

### 02 — Boutique en ligne
```tsx
image:          '/images/developpement/ecommerce.jpg',
imageAlt:       'Boutique en ligne consultée sur smartphone, paiement en cours',
visualTag:      'BOUTIQUE · E-COMMERCE',
visualTitle:    'Vendre 24h/24, sans effort',
visualSubtitle: 'catalogue · paiement sécurisé · 4 à 6 sem.',
```

### 03 — Application métier
```tsx
image:          '/images/developpement/webapp.jpg',
imageAlt:       "Tableau de bord d'application métier sur grand écran",
visualTag:      'APPLICATION · OUTIL MÉTIER',
visualTitle:    'Digitaliser vos processus internes',
visualSubtitle: 'dashboard · rôles · 6 à 10 sem.',
```

### 04 — Site avec réservation
```tsx
image:          '/images/developpement/reservation.jpg',
imageAlt:       'Calendrier de réservation en ligne sur tablette',
visualTag:      'RÉSERVATION · PRISE DE RDV',
visualTitle:    'Vos clients réservent en ligne',
visualSubtitle: 'calendrier · confirmations auto · 3 à 5 sem.',
```

### 05 — Site multilingue
```tsx
image:          '/images/developpement/multilingue.jpg',
imageAlt:       'Équipe internationale travaillant sur un site multilingue',
visualTag:      'MULTILINGUE · FR / EN / AR',
visualTitle:    'Une audience, plusieurs langues',
visualSubtitle: 'admin unifiée · SEO localisé',
```

### 06 — Catalogue & portfolio
```tsx
image:          '/images/developpement/catalogue.jpg',
imageAlt:       'Galerie de projets présentée en grille visuelle',
visualTag:      'PORTFOLIO · CATALOGUE',
visualTitle:    'Montrer votre travail, susciter la demande',
visualSubtitle: 'galerie filtrée · devis · 2 à 3 sem.',
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
