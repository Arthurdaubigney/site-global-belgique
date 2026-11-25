import Breadcrumb from '@/components/Breadcrumb';
import { BRAND, pageMetadata } from '@/lib/site';

const PATH = '/mentions-legales/';

export const metadata = {
  ...pageMetadata({
    title: 'Mentions légales et crédits photographiques',
    description:
      'Mentions légales, confidentialité et crédits photographiques de la Maison Antiquaire de Belgique, cabinet d’expertise d’art en Belgique.',
    path: PATH,
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="wrap">
        <div className="legal">
          <Breadcrumb items={[{ name: 'Mentions légales', path: PATH }]} />
          <h1 id="page-title" style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)' }}>
            Mentions légales
          </h1>
          <p>
            Ce site est édité par {BRAND.name}, {BRAND.district}. Les informations d’identification de l’entreprise
            (dénomination sociale, numéro d’entreprise BCE, TVA, coordonnées) sont à compléter avant la mise en ligne.
          </p>
          <h2>Données personnelles</h2>
          <p>
            Les demandes envoyées par le formulaire de contact (Tally) sont utilisées uniquement pour répondre à votre
            demande d’expertise. Vous pouvez demander leur suppression à tout moment.
          </p>
          <h2>Crédits photographiques</h2>
          <p>
            Les photographies d’objets d’art proviennent de la collection en accès libre de l’Art Institute of Chicago
            (domaine public, licence CC0) et illustrent des pièces comparables à celles que nous expertisons. Elles
            ne constituent pas des objets en vente.
          </p>
        </div>
      </div>
    </section>
  );
}
