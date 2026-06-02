// components/sections/FormationVisual.tsx
import Image from 'next/image';
import styles from './FormationVisual.module.css';

type Props = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  subtitle?: string;
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
