import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const PAGES = [
  ['/', 1],
  ['/expertise-estimation/', 0.9],
  ['/rachat-succession/', 0.9],
  ['/collections/', 0.8],
  ['/bruxelles/', 0.8],
  ['/wallonie/', 0.8],
  ['/flandre/', 0.8],
  ['/la-maison/', 0.6],
  ['/contact/', 0.9],
  ['/mentions-legales/', 0.2],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
