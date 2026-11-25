import Breadcrumb from '@/components/Breadcrumb';
import { BRAND, CONTACT, PUBLISHER, pageMetadata } from '@/lib/site';

const PATH = '/mentions-legales/';

export const metadata = pageMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site : éditeur, hébergeur, directeur de la publication et crédits photographiques.',
  path: PATH,
});

export default function Page() {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="wrap">
        <div className="legal">
          <Breadcrumb items={[{ name: 'Mentions légales', path: PATH }]} />
          <h1 id="page-title" style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)' }}>
            Mentions légales
          </h1>

          <h2>Éditeur du site</h2>
          <ul>
            <li>{PUBLISHER.name}, {PUBLISHER.status} (nom commercial : {BRAND.name})</li>
            <li>SIREN : {PUBLISHER.siren}</li>
            <li>Adresse : {PUBLISHER.address}</li>
            <li>Téléphone : {CONTACT.phoneLegal}</li>
            <li>E-mail : {CONTACT.emailLegal}</li>
          </ul>

          <h2>Directeur de la publication</h2>
          <p>François Secula.</p>

          <h2>Hébergeur</h2>
          <p>{PUBLISHER.host}.</p>

          <h2>Données personnelles</h2>
          <p>
            Le traitement des données transmises par le formulaire de contact est décrit dans notre{' '}
            <a className="ulink" href="/politique-de-confidentialite/">politique de confidentialité</a>.
          </p>

          <h2>Crédits photographiques</h2>
          <p>
            Les photographies d’objets d’art proviennent de la collection en accès libre de l’Art Institute of Chicago
            (domaine public, licence CC0). Elles illustrent des pièces comparables à celles que nous estimons et ne
            sont pas des objets proposés à la vente.
          </p>
        </div>
      </div>
    </section>
  );
}
