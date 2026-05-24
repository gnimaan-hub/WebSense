'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, href, variant = 'primary', className, onClick, type = 'button' }: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200';
  const variants = {
    primary: 'bg-ink text-white hover:-translate-y-0.5 hover:shadow-or relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-or before:to-orDark before:opacity-0 before:transition-opacity hover:before:opacity-100 before:z-0',
    outline: 'bg-white/60 border border-border text-ink backdrop-blur-sm hover:border-or hover:text-orDark hover:bg-white hover:-translate-y-0.5',
    ghost: 'bg-transparent text-ink hover:bg-or-pale',
  };
  const classes = clsx(baseClasses, variants[variant], className);

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}