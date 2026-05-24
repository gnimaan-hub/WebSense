'use client';

import { useEffect, useRef } from 'react';

/**
 * ParticlesBackground v8 — version complète
 *   • Mix or + vert (anthracite)
 *   • Répulsion à la souris (le réseau s'écarte du curseur)
 *   • Lignes orange tirées vers le curseur (effet "magnétique")
 *   • DPR géré (rendu net écran retina)
 *   • Vitesse minimum (les particules ne s'arrêtent jamais)
 */
export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let animId = 0;

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; a: number;
      hue: 'or' | 'gr';
    };
    let pts: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const buildPts = () => {
      pts = [];
      const n = Math.min(85, Math.floor((W * H) / 12000));
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: Math.random() * 1.6 + 0.6,
          a: Math.random() * 0.5 + 0.3,
          hue: Math.random() < 0.3 ? 'or' : 'gr',
        });
      }
    };

    resize();
    buildPts();

    const onResize = () => { resize(); buildPts(); };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    const CONN = 140;
    const MIN_SPEED = 0.18;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ─ Particules ─
      for (const p of pts) {
        // Répulsion légère depuis la souris
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            const f = ((13000 - d2) / 13000) * 0.0001;
            p.vx += dx * f * 2.5;
            p.vy += dy * f * 2.5;
          }
        }

        // Amortissement
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Vitesse minimum (jamais immobile)
        const sp = Math.hypot(p.vx, p.vy);
        if (sp < MIN_SPEED) {
          p.vx += (Math.random() - 0.5) * 0.06;
          p.vy += (Math.random() - 0.5) * 0.06;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap-around
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.hue === 'or'
            ? `rgba(232,160,32,${p.a * 0.55})`
            : `rgba(10,92,73,${p.a * 0.55})`;
        ctx.fill();
      }

      // ─ Connexions inter-particules ─
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONN) {
            const op = (1 - d / CONN) * 0.13;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(29,158,117,${op})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // ─ Lignes vers le curseur ─
        if (mouse.active) {
          const dx = pts[i].x - mouse.x;
          const dy = pts[i].y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(232,160,32,${(1 - d / 160) * 0.5})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
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
