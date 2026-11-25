import type { Img } from '@/lib/site';

/** Tailles d’affichage réelles (CSS) — le navigateur choisit la variante la plus proche. */
export const SIZES = {
  hero: '(max-width: 960px) 100vw, 600px',
  card: '(max-width: 640px) 100vw, (max-width: 960px) 50vw, min(411px, 29vw)',
  split: '(max-width: 960px) 100vw, min(592px, 46vw)',
} as const;

/** Ratio du cadre : natif et borné ; un objet détouré n’est jamais plus haut que large (hauteur maîtrisée). */
export function fit(img: Img, min = img.cut ? 1 : 0.75, max = 1.6): string {
  return Math.min(max, Math.max(min, img.w / img.h)).toFixed(4);
}

type Props = {
  img: Img;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Ratio du cadre (ex. "1.3333"). Par défaut : ratio natif borné. */
  ratio?: string;
  /** Objet détouré, sans cadre : posé directement sur le fond de la page. */
  bare?: boolean;
};

/**
 * Photographie responsive. Les objets sont détourés (WebP transparent) et posés sur un fond de
 * studio clair avec ombre portée ; les tableaux restent des photographies rectangulaires.
 */
export default function Photo({ img, sizes = SIZES.split, priority, className = '', ratio, bare }: Props) {
  const ext = img.cut ? 'webp' : 'jpg';
  const biggest = img.ws[img.ws.length - 1];
  const cls = ['photo', img.cut ? 'photo--cut' : '', bare ? 'photo--bare' : '', className].filter(Boolean).join(' ');
  return (
    <figure className={cls} style={bare ? undefined : { aspectRatio: ratio ?? fit(img) }}>
      <img
        src={`/img/${img.file}-${biggest}.${ext}`}
        srcSet={img.ws.map((w) => `/img/${img.file}-${w}.${ext} ${w}w`).join(', ')}
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
