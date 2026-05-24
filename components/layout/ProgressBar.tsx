'use client';

import { useEffect } from 'react';

/**
 * ProgressBar
 * Barre de progression scroll en haut de page.
 * Injecte directement sur #pbar (DOM natif) pour éviter les re-renders.
 */
export default function ProgressBar() {
  useEffect(() => {
    // Créer l'élément s'il n'existe pas encore
    let pbar = document.getElementById('pbar');
    if (!pbar) {
      pbar = document.createElement('div');
      pbar.id = 'pbar';
      pbar.setAttribute('aria-hidden', 'true');
      document.body.prepend(pbar);
    }

    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (pbar) pbar.style.width = pct + '%';
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return null;
}