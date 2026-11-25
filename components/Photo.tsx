import type { Img } from '@/lib/site';

/** Tailles d’affichage réelles (CSS) — le navigateur choisit 600, 900 ou 1200 px selon l’écran. */
export const SIZES = {
  hero: '(max-width: 960px) 100vw, 47vw',
  card: '(max-width: 640px) 100vw, (max-width: 960px) 50vw, min(411px, 29vw)',
  split: '(max-width: 960px) 100vw, min(592px, 46vw)',
} as const;

/** Ratio du cadre = ratio natif de la photo, borné pour limiter la hauteur (recadrage minimal). */
export function fit(img: Img, min = 0.75, max = 1.6): string {
  return Math.min(max, Math.max(min, img.w / img.h)).toFixed(4);
}

type Props = {
  img: Img;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Ratio du cadre (ex. "1.3333" ou "4/3"). Par défaut : ratio natif borné. */
  ratio?: string;
};

/** Photographie responsive : srcset 600/900/1200, alt + title descriptifs, zoom doux au survol du cadre. */
export default function Photo({ img, sizes = SIZES.split, priority, className = '', ratio }: Props) {
  const f = img.file;
  return (
    <figure className={`photo ${className}`} style={{ aspectRatio: ratio ?? fit(img) }}>
      <img
        src={`/img/${f}-1200.jpg`}
        srcSet={`/img/${f}-600.jpg 600w, /img/${f}-900.jpg 900w, /img/${f}-1200.jpg 1200w`}
        sizes={sizes}
        width={img.w}
        height={img.h}
        alt={img.alt}
        title={img.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={img.pos ? { objectPosition: img.pos } : undefined}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
      />
    </figure>
  );
}
