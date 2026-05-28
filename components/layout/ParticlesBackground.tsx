'use client';

import { useEffect, useRef } from 'react';

/**
 * ParticlesBackground v3 – Dark mode ready
 * Couleurs adaptées dynamiquement selon le thème :
 * - Light : vert foncé (#0A5C49) avec opacité modérée
 * - Dark  : vert menthe/cyan (#4ECDC4) plus lumineux
 * Connexions adaptées également.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef<'light' | 'dark'>('light');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, animId: number;
    const mouse = { x: 0, y: 0 };

    type Pt = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let pts: Pt[] = [];

    // Fonction pour obtenir les couleurs selon le thème
    const getColors = () => {
      if (themeRef.current === 'dark') {
        return {
          particle: (alpha: number) => `rgba(78, 205, 196, ${alpha * 0.9})`, // #4ECDC4
          line: (alpha: number) => `rgba(78, 205, 196, ${alpha * 0.6})`,
        };
      } else {
        return {
          particle: (alpha: number) => `rgba(10, 92, 73, ${alpha})`, // #0A5C49
          line: (alpha: number) => `rgba(29, 158, 117, ${alpha * 0.8})`,
        };
      }
    };

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildPts();
    };

    const buildPts = () => {
      pts = [];
      const n = Math.min(65, Math.floor((W * H) / 13000));
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.8 + 0.6,
          a: Math.random() * 0.45 + 0.15,
        });
      }
    };

    // Détection du thème actuel
    const updateTheme = () => {
      themeRef.current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };
    updateTheme();

    // Observer les changements de classe .dark sur <html>
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    document.addEventListener('mousemove', onMove, { passive: true });

    const CONN = 120;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const colors = getColors();

      for (const p of pts) {
        p.x += p.vx + (mouse.x - W / 2) * 0.00003;
        p.y += p.vy + (mouse.y - H / 2) * 0.00003;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = colors.particle(p.a);
        ctx.fill();
      }

      // Connexions
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const alpha = (1 - d / CONN) * 0.25;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = colors.line(alpha);
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}