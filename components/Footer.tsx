import Link from 'next/link';
import { BRAND, NAV, REGIONS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">{BRAND.name}</p>
          <p className="footer__text">
            Cabinet d’expertise d’art et maison d’antiquaires. Estimation gratuite, partage de succession et rachat
            direct, partout en Belgique.
          </p>
          <p className="footer__text">{BRAND.district}</p>
        </div>
        <nav aria-label="Pages du site">
          <p className="footer__title">Le cabinet</p>
          <ul>
            {NAV.slice(0, 3).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="ulink">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/la-maison/" className="ulink">
                La Maison
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="ulink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Régions couvertes">
          <p className="footer__title">Toute la Belgique</p>
          <ul>
            {REGIONS.map((r) => (
              <li key={r.slug}>
                <Link href={`/${r.slug}/`} className="ulink">
                  Antiquaire en {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap footer__legal">
        <p>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</p>
        <p>
          <Link href="/mentions-legales/" className="ulink">
            Mentions légales
          </Link>
          {' · '}
          Photographies : Art Institute of Chicago (domaine public, CC0).
        </p>
      </div>
    </footer>
  );
}
