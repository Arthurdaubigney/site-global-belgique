import Link from 'next/link';
import { BRAND, CONTACT, NAV_MAIN, REGIONS, TRAVEL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">{BRAND.name}</p>
          <p className="footer__text">
            Estimation et rachat d’antiquités, de tableaux, de mobilier ancien, d’argenterie et d’horlogerie. {TRAVEL}
          </p>
          {CONTACT.phone && (
            <p className="footer__text">
              <a href={CONTACT.phoneHref} className="ulink">
                {CONTACT.phone}
              </a>
            </p>
          )}
        </div>
        <nav aria-label="Pages du site">
          <p className="footer__title">Le site</p>
          <ul>
            {NAV_MAIN.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="ulink">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/" className="ulink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Zones de déplacement">
          <p className="footer__title">Nous nous déplaçons</p>
          <ul>
            {REGIONS.map((r) => (
              <li key={r.slug}>
                <Link href={`/${r.slug}/`} className="ulink">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap footer__legal">
        <p>© {new Date().getFullYear()} {BRAND.name}</p>
        <p>
          <Link href="/mentions-legales/" className="ulink">
            Mentions légales
          </Link>
          {' · '}
          <Link href="/politique-de-confidentialite/" className="ulink">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
