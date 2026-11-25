import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export default function Breadcrumb({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: 'Accueil', path: '/' }, ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Fil d’Ariane">
        <ol>
          {all.map((it, i) => (
            <li key={it.path}>
              {i < all.length - 1 ? <Link href={it.path} className="ulink">{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
