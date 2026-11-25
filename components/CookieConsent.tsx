'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const KEY = 'ma-consent';

function apply(granted: boolean) {
  const v = granted ? 'granted' : 'denied';
  window.gtag?.('consent', 'update', {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

/** Bandeau de consentement (Google Consent Mode v2) : refus par défaut, choix conservé dans le navigateur. */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {}
    if (!stored) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('open-consent', reopen);
    return () => window.removeEventListener('open-consent', reopen);
  }, []);

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(KEY, granted ? 'granted' : 'denied');
    } catch {}
    apply(granted);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="consent" role="dialog" aria-label="Choix relatif aux cookies" aria-live="polite">
      <p>
        Nous utilisons un cookie de mesure publicitaire (Google Ads) uniquement avec votre accord. Vous pouvez
        refuser sans conséquence pour votre navigation.{' '}
        <Link href="/politique-de-confidentialite/" className="ulink">
          En savoir plus
        </Link>
      </p>
      <div className="consent__actions">
        <button type="button" className="btn btn--line btn--sm" onClick={() => choose(false)}>
          Refuser
        </button>
        <button type="button" className="btn btn--solid btn--sm" onClick={() => choose(true)}>
          Accepter
        </button>
      </div>
    </div>
  );
}
