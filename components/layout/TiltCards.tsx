'use client';

import { useEffect } from 'react';

/**
 * TiltCards — effet 3D au survol sur cartes (services, projets, packages).
 * Reproduit le tilt du HTML v8.
 *
 * À monter dans le layout, comme RevealObserver.
 * Se rebranche automatiquement sur les nouveaux nœuds (navigation client).
 */
export default function TiltCards() {
  useEffect(() => {
    if (window.matchMedia('(max-width: 860px)').matches) return;

    const SELECTOR = '.service-card, .project-card, .pkg-card';
    const handlers = new WeakMap<Element, { move: (e: Event) => void; leave: () => void }>();

    const attach = (card: HTMLElement) => {
      if (handlers.has(card)) return;
      const move = (e: Event) => {
        const ev = e as MouseEvent;
        const r = card.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width - 0.5;
        const y = (ev.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-4px) perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      };
      const leave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      handlers.set(card, { move, leave });
    };

    const detach = (card: Element) => {
      const h = handlers.get(card);
      if (!h) return;
      card.removeEventListener('mousemove', h.move);
      card.removeEventListener('mouseleave', h.leave);
      handlers.delete(card);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(attach);
    };

    scan();

    // Re-scan quand le DOM change (navigation Next.js)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(detach);
    };
  }, []);

  return null;
}
