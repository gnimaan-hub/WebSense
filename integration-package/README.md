# Intégration WebSense — Visuels Formation

Package prêt à intégrer dans votre projet Next.js.

## Contenu de ce dossier

```
integration-package/
├── public/
│   └── images/
│       └── formation/
│           ├── ia-automatisation.jpg     ← 232 Ko, 1400 px
│           ├── strategique.jpg           ← 122 Ko, 1400 px
│           ├── web-numerique.jpg         ← 184 Ko, 1400 px
│           └── ia-responsable.jpg        ← 461 Ko, 1100 px
├── components/
│   └── sections/
│       ├── FormationVisual.tsx           ← Composant React
│       └── FormationVisual.module.css    ← Styles isolés
├── PATCH-page.tsx.md                     ← Modifs à faire dans page.tsx
└── README.md                             ← Ce fichier
```

---

## Étape 1 · Copier les fichiers dans votre projet

À la racine de votre projet Next.js, fusionnez les deux dossiers :

```bash
# Photos
mkdir -p public/images/formation
cp -r integration-package/public/images/formation/* public/images/formation/

# Composant
mkdir -p components/sections
cp integration-package/components/sections/FormationVisual.* components/sections/
```

(Ou faites-le à la main via votre éditeur — c'est juste 6 fichiers à
glisser dans les bons dossiers.)

---

## Étape 2 · Mettre à jour `app/services/formation/page.tsx`

Voir le fichier **`PATCH-page.tsx.md`** ci-joint pour le détail.

En résumé :

1. **Ajouter en haut du fichier** :
   ```tsx
   import FormationVisual from '@/components/sections/FormationVisual';
   ```

2. **Dans le tableau `FORMATION_TYPES`**, pour chaque entrée :
   - **Supprimer** le champ `svg: ( <svg ...>...</svg> )` (le gros bloc JSX)
   - **Ajouter** à la place :
     ```tsx
     image: '/images/formation/ia-automatisation.jpg',  // adapter par carte
     imageAlt: "Équipe en formation IA face à un écran d'agent",
     visualTag: 'FORMATION · IA & AUTOMATISATION',
     visualTitle: "Vos équipes apprennent à piloter l'IA",
     visualSubtitle: 'hands-on · cas réels · 1 à 3 jours',
     ```

3. **Dans le rendu**, remplacer le bloc qui affichait `{type.svg}` par :
   ```tsx
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
   ```

---

## Étape 3 · Texte des 4 cartes (copier-coller)

Voici les 4 jeux de textes calés sur vos photos :

### Carte 01 — IA & Automatisation
```
image:          /images/formation/ia-automatisation.jpg
imageAlt:       Équipe en formation IA face à un écran d'agent conversationnel
visualTag:      FORMATION · IA & AUTOMATISATION
visualTitle:    Vos équipes apprennent à piloter l'IA
visualSubtitle: hands-on · cas réels · 1 à 3 jours
```

### Carte 02 — Stratégique & culture digitale
```
image:          /images/formation/strategique.jpg
imageAlt:       Direction en comité de pilotage devant des tableaux de bord
visualTag:      COMITÉ · CULTURE DIGITALE
visualTitle:    Décider en connaissance de cause
visualSubtitle: ateliers stratégiques · 1 à 2 jours
```

### Carte 03 — Prise en main du Web
```
image:          /images/formation/web-numerique.jpg
imageAlt:       Atelier numérique de prise en main avec ordinateurs
visualTag:      ATELIER · NUMÉRIQUE RESPONSABLE
visualTitle:    Reprendre la main sur le numérique
visualSubtitle: débutants bienvenus · ½ à 2 jours
```

### Carte 04 — IA responsable
```
image:          /images/formation/ia-responsable.jpg
imageAlt:       Analyse vigilante d'un contenu généré par une IA
visualTag:      VIGILANCE · IA RESPONSABLE
visualTitle:    Comprendre l'IA pour ne pas la subir
visualSubtitle: démystification · ½ à 1 jour
```

---

## Notes techniques

- **Variables CSS** : le composant utilise `var(--mono)`, `var(--font)`,
  `var(--or)`, `var(--shadow-lg)`. Elles existent déjà dans votre
  `assets/v8.css` — rien à ajouter.
- **`prefers-reduced-motion`** : si l'utilisateur a activé la réduction
  d'animations dans son OS, toutes les animations sont automatiquement
  désactivées (déjà géré dans le CSS).
- **Lazy loading** : Next.js le gère seul via `<Image fill />`.
  Pour faire charger la première image en priorité (au-dessus du fold),
  passez `priority={idx === 0}` au composant.
- **Crédits photos** : photos Unsplash, gratuites pour usage commercial
  sans attribution obligatoire. Si vous souhaitez créditer les auteurs,
  vous trouverez les liens originaux ci-dessous.

### Sources Unsplash
- ia-automatisation.jpg → https://unsplash.com/photos/black-flat-screen-computer-monitor-OF77GijW07Q
- strategique.jpg        → https://unsplash.com/photos/3-women-sitting-on-chair-in-front-of-table-with-laptop-computers-bIhpiQA009k
- web-numerique.jpg      → https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-with-laptop-computers-rDLBArZUl1c
- ia-responsable.jpg     → https://unsplash.com/photos/a-woman-holding-a-cell-phone-up-to-her-face-NXt5PrOb_7U

---

## Si quelque chose ne va pas

- **Les photos n'apparaissent pas** → vérifiez que `next.config.js` autorise
  les images locales (par défaut oui, sauf si vous avez restreint
  `images.domains`).
- **Le style ne s'applique pas** → vérifiez que vos variables CSS globales
  (`--mono`, `--or`, etc.) sont bien définies sur `:root` dans votre CSS
  global.
- **Le titre est coupé sur mobile** → c'est attendu en ratio 4/3 ; vous
  pouvez passer le ratio à `aspect-ratio: 16/10` dans le `.module.css`
  pour donner plus de hauteur si besoin.
