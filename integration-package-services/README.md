# Intégration WebSense — Visuels des pages Services

Même principe que le package Formation : on remplace les `svg:` inline
(~60–70 lignes par carte) par un composant `<ServiceVisual>` qui prend
**une photo + un tag + un titre + un sous-titre**.

Couvre les **5 pages** restantes (19 visuels au total) :

| Page | Cartes |
|---|---|
| `developpement-web` | 6 |
| `ux-design` | 4 |
| `conseil-strategie` | 4 |
| `marketing-digital` | 3 |
| `maintenance` | 2 |

---

## Contenu du dossier
```
integration-package-services/
├── components/sections/
│   ├── ServiceVisual.tsx          ← composant générique (= FormationVisual renommé)
│   └── ServiceVisual.module.css   ← styles isolés (ratio 16/10)
├── PATCH-developpement-web.md
├── PATCH-ux-design.md
├── PATCH-conseil-strategie.md
├── PATCH-marketing-digital.md
├── PATCH-maintenance.md
├── IMAGES.md                      ← les 19 photos : noms, recherches, prompts IA
└── README.md
```

---

## Étape 1 · Copier le composant
```
components/sections/ServiceVisual.tsx
components/sections/ServiceVisual.module.css
```
> Déjà intégré la formation ? `ServiceVisual` est **identique** à `FormationVisual`.
> Vous pouvez soit ajouter ce composant générique, soit réutiliser directement
> `FormationVisual` dans les imports des patches — au choix.

## Étape 2 · Déposer les photos
Voir **`IMAGES.md`**. Les 4 photos que vous m'avez envoyées y sont déjà
attribuées à leurs cartes ; les 15 autres ont un terme de recherche + un
prompt IA calé sur votre charte.

## Étape 3 · Appliquer un patch par page
Un fichier `PATCH-*.md` par page. Pour chacune :
1. ajouter l'import `ServiceVisual` ;
2. dans le tableau de données, **supprimer le champ `svg: (…)`** et ajouter
   `image / imageAlt / visualTag / visualTitle / visualSubtitle` (textes fournis) ;
3. dans le rendu, remplacer le wrapper qui affichait `{type.svg}` par `<ServiceVisual … />`.

> On ne touche **pas** aux champs `badge`, `pourQui`, `inclus`, `duration` :
> seul le visuel change.

---

## Effets inclus (identiques à la formation, automatiques)
- **Ken Burns** lent, qui alterne de sens d'une carte à l'autre (`reverse`).
- **Voile de marque** : dégradé sombre + halos or et vert WebSense → lisibilité du texte.
- **Balayage lumineux** discret.
- **Tag** haut-gauche avec point pulsant doré ; **titre** bas-gauche en fondu montant.
- **`prefers-reduced-motion`** : tout devient statique si l'utilisateur l'a activé.
- **Lazy loading** Next.js via `<Image fill />` ; `priority={idx === 0}` charge la 1ʳᵉ image en priorité.

## Notes techniques
- Variables CSS utilisées : `--mono`, `--font`, `--or`, `--shadow-lg` — déjà
  présentes dans votre projet, rien à ajouter.
- **Ratio 16/10** par défaut (reprend vos anciens SVG 480×300). Passez à `4/3`
  dans le `.module.css` pour des visuels plus hauts.
