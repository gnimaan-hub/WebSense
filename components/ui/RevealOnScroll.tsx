'use client';

import { ReactNode } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, direction = 'up', delay = 0, className = '' }: RevealOnScrollProps) {
  const ref = useRevealOnScroll<HTMLDivElement>();
  const directionClass =
    direction === 'up' ? 'reveal' : direction === 'left' ? 'reveal-left' : 'reveal-right';

  return (
    <div
      ref={ref}
      className={`${directionClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}