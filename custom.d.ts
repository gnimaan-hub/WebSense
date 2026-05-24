// Déclarations de types pour les imports sans types natifs

// Fichiers CSS — évite l'erreur TS2882 sur import './globals.css'
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Fichiers SVG importés comme composants React
declare module '*.svg' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Fichiers image
declare module '*.png' { const src: string; export default src; }
declare module '*.jpg' { const src: string; export default src; }
declare module '*.jpeg' { const src: string; export default src; }
declare module '*.webp' { const src: string; export default src; }