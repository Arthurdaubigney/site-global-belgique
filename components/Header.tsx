'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CONTACT, CTA, NAV_MAIN, REGIONS } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const path = usePathname();
  const subRef = useRef<HTMLLIElement>(null);
  const regionActive = REGIONS.some((r) => path === `/${r.slug}/`);

  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [path]);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSub(false);
        setOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (subRef.current && !subRef.current.contains(e.target as Node)) setSub(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Link href="/" className="logo" aria-label="Maison Antiquaire — accueil">
          <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" className="logo__mark">
            <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M8 24 16 7l8 17M11 18h10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="logo__text">
            <span className="logo__name">Maison Antiquaire</span>
            <span className="logo__sub">Estimation à domicile</span>
          </span>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Navigation principale" id="menu">
          <ul>
            {NAV_MAIN.slice(0, 3).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="ulink" aria-current={path === n.href ? 'page' : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className={`has-sub ${sub ? 'is-open' : ''}`} ref={subRef}>
              <button
                type="button"
                className={`ulink sub-btn ${regionActive ? 'is-current' : ''}`}
                aria-expanded={sub}
                aria-controls="menu-regions"
                onClick={() => setSub((v) => !v)}
              >
                Régions
                <svg viewBox="0 0 10 6" width="10" height="6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <ul className="sub" id="menu-regions">
                {REGIONS.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${r.slug}/`}
                      className="ulink"
                      aria-current={path === `/${r.slug}/` ? 'page' : undefined}
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href={NAV_MAIN[3].href}
                className="ulink"
                aria-current={path === NAV_MAIN[3].href ? 'page' : undefined}
              >
                {NAV_MAIN[3].label}
              </Link>
            </li>
          </ul>
          {CONTACT.phone && (
            <a href={CONTACT.phoneHref} className="nav__phone" aria-label={`Appeler le ${CONTACT.phone}`}>
              {CONTACT.phone}
            </a>
          )}
          <Link href={CTA.href} className="btn btn--solid btn--sm nav__cta">
            <span>Expertise gratuite</span>
          </Link>
        </nav>

        {CONTACT.phone && (
          <a href={CONTACT.phoneHref} className="callbtn" aria-label={`Appeler le ${CONTACT.phone}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <span className="sr">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}
