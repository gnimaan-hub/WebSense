// components/sections/ServiceVisual.tsx
// ─────────────────────────────────────────────────────────────
// Visuel photographique générique pour une carte de service.
// Photo + voile de marque + Ken Burns + tag haut-gauche + titre bas-gauche.
// Identique à FormationVisual — renommé pour un usage multi-services.
// (Si vous préférez, vous pouvez réutiliser directement FormationVisual.)
// ─────────────────────────────────────────────────────────────

import Image from 'next/image';
import styles from './ServiceVisual.module.css';

type Props = {
  /** Chemin de l'image (ex: '/images/developpement/vitrine.jpg') */
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
  /** Charger en priorité (1ère image au-dessus du fold) */
  priority?: boolean;
};

export default function ServiceVisual({
  src, alt, tag, title, subtitle, reverse = false, priority = false,
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
        priority={priority}
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
