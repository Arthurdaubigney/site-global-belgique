import type { Img } from '@/lib/site';

type Props = {
  img: Img;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Cadre à ratio fixe (ex. "4/5") — la photo est recadrée, jamais déformée. */
  ratio?: string;
};

/** Photographie responsive : srcset 600/1200, alt + title descriptifs, zoom doux au survol du cadre. */
export default function Photo({ img, sizes = '(max-width: 760px) 100vw, 50vw', priority, className = '', ratio }: Props) {
  return (
    <figure className={`photo ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={`/img/${img.file}-1200.jpg`}
        srcSet={`/img/${img.file}-600.jpg 600w, /img/${img.file}-1200.jpg 1200w`}
        sizes={sizes}
        width={img.w}
        height={img.h}
        alt={img.alt}
        title={img.title}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : {})}
      />
    </figure>
  );
}
