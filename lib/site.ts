import type { Metadata } from 'next';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maison-antiquaire-belgique.be'
).replace(/\/$/, '');

export const BRAND = {
  name: 'Maison Antiquaire de Belgique',
  short: 'Maison Antiquaire',
  tagline: 'Expertise, estimation et rachat d’antiquités sur tout le territoire belge',
  email: 'cabinet@maison-antiquaire-belgique.example',
  district: 'Le Sablon, Bruxelles',
};

export const CTA = {
  primary: 'Demander une expertise gratuite',
  secondary: 'Contacter notre cabinet',
  href: '/contact/',
};

export const NAV = [
  { href: '/expertise-estimation/', label: 'Expertise' },
  { href: '/rachat-succession/', label: 'Rachat & succession' },
  { href: '/collections/', label: 'Collections' },
  { href: '/bruxelles/', label: 'Bruxelles' },
  { href: '/wallonie/', label: 'Wallonie' },
  { href: '/flandre/', label: 'Flandre' },
  { href: '/la-maison/', label: 'La Maison' },
];

export type Region = {
  slug: 'bruxelles' | 'wallonie' | 'flandre';
  name: string;
  nameLong: string;
  cities: string[];
};

export const REGIONS: Region[] = [
  {
    slug: 'bruxelles',
    name: 'Bruxelles-Capitale',
    nameLong: 'Bruxelles-Capitale',
    cities: ['Le Sablon', 'Uccle', 'Ixelles', 'Woluwe-Saint-Pierre', 'Woluwe-Saint-Lambert', 'Etterbeek', 'Saint-Gilles'],
  },
  {
    slug: 'wallonie',
    name: 'Wallonie',
    nameLong: 'Wallonie',
    cities: ['Waterloo', 'Wavre', 'Namur', 'Liège', 'Charleroi', 'Mons', 'Tournai', 'Arlon'],
  },
  {
    slug: 'flandre',
    name: 'Flandre',
    nameLong: 'Flandre',
    cities: ['Anvers', 'Gand', 'Bruges', 'Courtrai', 'Louvain', 'Malines', 'Knokke-Le Zoute'],
  },
];

/** Photographies : fichiers locaux optimisés (public/img), voir scripts/prepare-images.mjs */
export type Img = { file: string; alt: string; title: string; w: number; h: number; pos?: string };

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: BRAND.name,
      locale: 'fr_BE',
      type: 'website',
      images: [{ url: `${SITE_URL}${opts.image || '/img/hero-1200.jpg'}` }],
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description },
  };
}
