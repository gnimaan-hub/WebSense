'use client';

import { useEffect } from 'react';

/**
 * RevealObserver
 * Observe tous les éléments .rev, .rev-left, .rev-right et leur ajoute la classe .on
 * quand ils entrent dans le viewport. Remplace le script JS inline du HTML v8.
 * Placé dans le layout pour s'exécuter sur toutes les pages.
 */
export default function RevealObserver() {
  useEffect(() => {
    const selectors = '.rev, .rev-left, .rev-right';

    const observe = () => {
      const elements = document.querySelectorAll<HTMLElement>(selectors);
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('on');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Observer initial
    let observer = observe();

    // Re-observer si le DOM change (navigation entre pages)
    const mutationObs = new MutationObserver(() => {
      observer?.disconnect();
      observer = observe();
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return null;
}