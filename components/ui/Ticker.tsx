'use client';

/**
 * Ticker — bandeau infini de chiffres clés sous le hero.
 * Reproduit le .ticker du HTML v8.
 * (Le fichier était importé dans page.tsx mais absent du repo.)
 */
const ITEMS = [
  { l: 'Sites livrés', v: '12+' },
  { l: 'Délai moyen', v: '2 sem.' },
  { l: 'Lighthouse moyen', v: '96/100' },
  { l: 'Réponse max', v: '24h' },
  { l: 'Stack', v: 'React · Next · Node' },
  { l: 'Code source', v: 'Vous êtes propriétaire' },
  { l: 'Cadrage', v: 'Gratuit · sans engagement' },
  { l: 'Maintenance', v: 'Optionnelle' },
];

export default function Ticker() {
  // On duplique pour la boucle infinie
  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div className="ticker-item" key={i}>
            {item.l} <span className="v">{item.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
