'use client';

import { useEffect } from 'react';

/**
 * Cursor
 * Curseur custom + ring magnétique. Fidèle au CSS v8.
 * Injecte #cursor et #cursor-ring dans le DOM et les anime via rAF.
 * Les classes cursor-grow / cursor-dark sont appliquées sur <body>.
 */
export default function Cursor() {
  useEffect(() => {
    // Ne rien faire sur mobile/tablette
    if (window.matchMedia('(max-width: 860px)').matches) return;

    // Créer les éléments s'ils n'existent pas
    let dot = document.getElementById('cursor');
    let ring = document.getElementById('cursor-ring');

    if (!dot) {
      dot = document.createElement('div');
      dot.id = 'cursor';
      dot.setAttribute('aria-hidden', 'true');
      document.body.appendChild(dot);
    }
    if (!ring) {
      ring = document.createElement('div');
      ring.id = 'cursor-ring';
      ring.setAttribute('aria-hidden', 'true');
      document.body.appendChild(ring);
    }

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot!.style.left = mx + 'px';
      dot!.style.top  = my + 'px';
    };

    // Ring avec lag (lerp)
    const animRing = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring!.style.left = rx + 'px';
      ring!.style.top  = ry + 'px';
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    document.addEventListener('mousemove', onMove, { passive: true });

    // cursor-grow sur éléments interactifs
    const growSelectors = 'a, button, [role="button"], .service-card, .value-item, .tech-cat, .blog-card, .pkg-card, .project-card, .faq-q, .tn-btn';
    const growEls = document.querySelectorAll(growSelectors);
    const addGrow    = () => document.body.classList.add('cursor-grow');
    const removeGrow = () => document.body.classList.remove('cursor-grow');
    growEls.forEach(el => {
      el.addEventListener('mouseenter', addGrow);
      el.addEventListener('mouseleave', removeGrow);
    });

    // cursor-dark sur sections sombres
    const darkSelectors = '.stats-section, .section-dark, .ticker, footer';
    const darkEls = document.querySelectorAll(darkSelectors);
    const addDark    = () => document.body.classList.add('cursor-dark');
    const removeDark = () => document.body.classList.remove('cursor-dark');
    darkEls.forEach(el => {
      el.addEventListener('mouseenter', addDark);
      el.addEventListener('mouseleave', removeDark);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      growEls.forEach(el => {
        el.removeEventListener('mouseenter', addGrow);
        el.removeEventListener('mouseleave', removeGrow);
      });
      darkEls.forEach(el => {
        el.removeEventListener('mouseenter', addDark);
        el.removeEventListener('mouseleave', removeDark);
      });
      document.body.classList.remove('cursor-grow', 'cursor-dark');
    };
  }, []);

  return null;
}