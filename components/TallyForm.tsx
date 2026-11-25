'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '@/lib/site';

type Props = {
  /** Identifiant Tally (ex. "wMxAbC"). Par défaut : NEXT_PUBLIC_TALLY_FORM_ID. */
  formId?: string;
  /** Ou le lien complet du formulaire Tally (NEXT_PUBLIC_TALLY_URL). */
  url?: string;
  title?: string;
  minHeight?: number;
  /** id d’ancre : un seul formulaire « principal » par page. */
  anchor?: string;
};

const FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || '';
const FORM_URL = process.env.NEXT_PUBLIC_TALLY_URL || '';

/** Transforme un lien de partage Tally (tally.so/r/ID) en lien d’intégration. */
function embed(url: string) {
  const m = url.match(/tally\.so\/(?:r|embed)\/([A-Za-z0-9]+)/);
  const base = m ? `https://tally.so/embed/${m[1]}` : url;
  return `${base}${base.includes('?') ? '&' : '?'}alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
}

/**
 * Formulaire Tally dans un conteneur responsive (chargé à l’approche de l’écran).
 * Sans lien configuré, propose le téléphone ou le courriel s’ils sont renseignés.
 */
export default function TallyForm({
  formId = FORM_ID,
  url = FORM_URL,
  title = 'Demande d’expertise gratuite',
  minHeight = 560,
  anchor = 'demande',
}: Props) {
  const box = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const src = url
    ? embed(url)
    : formId
      ? `https://tally.so/embed/${encodeURIComponent(formId)}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
      : '';

  useEffect(() => {
    const el = box.current;
    if (!el || !src) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <div className="tally" id={anchor} ref={box} style={{ minHeight }}>
      {src && visible ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          width="100%"
          height={minHeight}
          frameBorder={0}
          style={{ border: 0, width: '100%', minHeight }}
        />
      ) : (
        <div className="tally__placeholder">
          <p className="tally__title">{title}</p>
          <p className="tally__text">
            {src
              ? 'Chargement du formulaire…'
              : 'Pour une demande d’expertise, appelez-nous ou écrivez-nous en décrivant votre objet.'}
          </p>
          {!src && (CONTACT.phone || CONTACT.email) && (
            <p className="tally__text">
              {CONTACT.phone && (
                <a className="ulink" href={CONTACT.phoneHref}>
                  {CONTACT.phone}
                </a>
              )}
              {CONTACT.phone && CONTACT.email && ' · '}
              {CONTACT.email && (
                <a className="ulink" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
