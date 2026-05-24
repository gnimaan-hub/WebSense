'use client';

import { useEffect } from 'react';

/**
 * TiltCards — Effet tilt 3D subtil sur les cartes au survol souris.
 * Sélecteurs : .service-card, .project-card, .pkg-card, .blog-card
 */
export default function TiltCards() {
  useEffect(() => {
    const SEL = '.service-card, .project-card, .pkg-card, .blog-card';
    const cards = document.querySelectorAll<HTMLElement>(SEL);
    const MAX = 8; // degrés max

    const onMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * MAX}deg) rotateX(${-y * MAX}deg) translateY(-4px)`;
    };
    const onLeave = (e: MouseEvent) => {
      (e.currentTarget as HTMLElement).style.transform = '';
    };

    cards.forEach(c => {
      c.addEventListener('mousemove', onMove);
      c.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cards.forEach(c => {
        c.removeEventListener('mousemove', onMove);
        c.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}