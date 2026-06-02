// components/sections/ServiceVisual.tsx
import Image from 'next/image';
import styles from './ServiceVisual.module.css';

type Props = {
  src: string;
  alt: string;
  tag: string;
  title: string;
  subtitle?: string;
  reverse?: boolean;
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
