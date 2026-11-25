'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BRAND, CTA, NAV } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Link href="/" className="logo" aria-label={`${BRAND.name} — accueil`}>
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" className="logo__mark">
            <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M8 24 16 7l8 17M11 18h10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="logo__text">
            <span className="logo__name">Maison Antiquaire</span>
            <span className="logo__sub">de Belgique</span>
          </span>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale" id="menu">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="ulink" aria-current={path === n.href ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={CTA.href} className="btn btn--solid btn--sm nav__cta">
            <span>Expertise gratuite</span>
          </Link>
        </nav>

        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
