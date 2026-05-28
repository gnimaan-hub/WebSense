'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    
    if (stored) {
      // Si l'utilisateur a déjà un choix sauvegardé, on l'applique
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Sinon on force le dark mode (car la classe 'dark' est déjà présente sur <html>)
      // On s'assure qu'elle est bien là et on sauvegarde la préférence
      if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
      }
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return null;
}