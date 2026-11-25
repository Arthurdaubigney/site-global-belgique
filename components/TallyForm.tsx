'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Identifiant Tally (ex. "wMxAbC"). Par défaut : NEXT_PUBLIC_TALLY_FORM_ID. */
  formId?: string;
  /** Ou un lien complet de partage / d’intégration Tally. */
  url?: string;
  title?: string;
  minHeight?: number;
};

const FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || '';

/**
 * Conteneur responsive du formulaire Tally.
 * - Sans identifiant : affiche un emplacement sobre, prêt à recevoir le formulaire.
 * - Avec identifiant : iframe chargée à l’approche de l’écran, hauteur dynamique.
 */
export default function TallyForm({
  formId = FORM_ID,
  url,
  title = 'Demande d’expertise gratuite',
  minHeight = 640,
}: Props) {
  const box = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const src =
    url ||
    (formId
      ? `https://tally.so/embed/${encodeURIComponent(
          formId,
        )}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
      : '');

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
    <div className="tally" id="demande" ref={box} style={{ minHeight }}>
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
          <p className="tally__kicker">Formulaire Tally</p>
          <p className="tally__title">{title}</p>
          <p className="tally__text">
            {src
              ? 'Chargement du formulaire…'
              : 'Le formulaire de demande s’affiche ici : décrivez votre objet et joignez vos photographies.'}
          </p>
        </div>
      )}
    </div>
  );
}
