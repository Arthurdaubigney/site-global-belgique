import Breadcrumb from '@/components/Breadcrumb';
import { BRAND, CONTACT, PUBLISHER, pageMetadata } from '@/lib/site';

const PATH = '/politique-de-confidentialite/';

export const metadata = pageMetadata({
  title: 'Politique de confidentialité',
  description: 'Comment sont utilisées les données de votre demande d’estimation : finalité, durée de conservation, vos droits.',
  path: PATH,
});

export default function Page() {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="wrap">
        <div className="legal">
          <Breadcrumb items={[{ name: 'Politique de confidentialité', path: PATH }]} />
          <h1 id="page-title" style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)' }}>
            Politique de confidentialité
          </h1>

          <h2>Responsable du traitement</h2>
          <p>
            {PUBLISHER.name}, {PUBLISHER.status} (nom commercial : {BRAND.name}), SIREN {PUBLISHER.siren},{' '}
            {PUBLISHER.address}. Contact : {CONTACT.emailLegal} · {CONTACT.phoneLegal}.
          </p>

          <h2>Données collectées</h2>
          <p>
            Par le formulaire de contact : votre nom, vos coordonnées (téléphone, e-mail, localité), la description de
            vos objets, les photographies que vous joignez et le message que vous écrivez. Aucune autre donnée n’est
            exigée.
          </p>

          <h2>Finalité et base légale</h2>
          <p>
            Ces données servent uniquement à répondre à votre demande d’estimation et, le cas échéant, à vous faire une
            offre de rachat. Base légale : l’exécution de mesures précontractuelles prises à votre demande (article
            6.1.b du RGPD).
          </p>

          <h2>Destinataires</h2>
          <p>
            Les données sont recueillies via le service Tally (formulaires en ligne), qui agit comme sous-traitant, et
            ne sont ni vendues ni cédées à des tiers à des fins commerciales. Le site est hébergé par Vercel Inc.
            (États-Unis), dont le transfert de données est encadré par les garanties prévues par le RGPD.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées le temps nécessaire au traitement de votre demande, puis au plus trois ans
            après notre dernier échange, sauf obligation légale de les conserver plus longtemps.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de
            portabilité de vos données. Pour les exercer, écrivez à {CONTACT.emailLegal}. Vous pouvez aussi introduire
            une réclamation auprès de la CNIL (www.cnil.fr).
          </p>

          <h2>Cookies et mesure publicitaire</h2>
          <p>
            Le site utilise la balise Google Ads pour mesurer l’efficacité de nos annonces. Cette balise peut déposer
            des cookies dans votre navigateur. Vous pouvez les refuser ou les supprimer à tout moment dans les
            paramètres de votre navigateur, ou gérer vos préférences publicitaires sur adssettings.google.com.
          </p>
        </div>
      </div>
    </section>
  );
}
