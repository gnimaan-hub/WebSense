// components/sections/FormationVisual.tsx
// ─────────────────────────────────────────────────────────────
// Visuel photographique pour une carte de formation.
// Photo + voile de marque + Ken Burns + tag haut-gauche + titre bas-gauche.
// ─────────────────────────────────────────────────────────────

import Image from 'next/image';
import styles from './FormationVisual.module.css';

type Props = {
  /** Chemin de l'image (ex: '/images/formation/ia-automatisation.jpg') */
  src: string;
  /** Texte alternatif accessible (description de la scène) */
  alt: string;
  /** Petit tag mono affiché en haut à gauche */
  tag: string;
  /** Gros titre affiché en bas à gauche */
  title: string;
  /** Petite ligne sous le titre (optionnelle) */
  subtitle?: string;
  /** Sens du Ken Burns (alterne d'une carte à l'autre pour varier) */
  reverse?: boolean;
};

export default function FormationVisual({
  src, alt, tag, title, subtitle, reverse = false,
}: Props) {
  return (
    <div className={`${styles.visual} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.fallback} />
      <Image
        className={styles.photo}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 920px) 100vw, 50vw"
        priority={false}
      />
      <div className={styles.tag}>{tag}</div>
      <div className={styles.caption}>
        <div className={styles.title}>
          {title}
          {subtitle && <small>{subtitle}</small>}
        </div>
      </div>
    </div>
  );
}
