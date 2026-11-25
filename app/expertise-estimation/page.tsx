import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import Faq, { type FaqItem } from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import { IMG } from '@/lib/images';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { CTA, pageMetadata } from '@/lib/site';

const PATH = '/expertise-estimation/';

export const metadata = pageMetadata({
  title: 'Expertise et estimation gratuite d’objets d’art en Belgique',
  description:
    'Expertise d’objets d’art et estimation gratuite en Belgique : tableaux anciens, mobilier, argenterie, horlogerie. Expert à domicile dans toute la Belgique.',
  path: PATH,
  image: '/img/horloge-1200.jpg',
});

const FAQ: FaqItem[] = [
  {
    q: 'Que faut-il envoyer pour une première estimation ?',
    a: 'Trois à six photographies nettes (vue d’ensemble, signature ou poinçon, détails, éventuels défauts), les dimensions approximatives et, si vous les avez, les factures, certificats ou souvenirs de provenance.',
  },
  {
    q: 'En combien de temps recevez-vous une réponse ?',
    a: 'Une première orientation de valeur est donnée dès l’examen des photographies. Pour une expertise détaillée sur place, nous proposons un rendez-vous au plus près de chez vous, à Bruxelles, en Wallonie ou en Flandre.',
  },
  {
    q: 'L’estimation est-elle utilisable pour une assurance ou un notaire ?',
    a: 'Oui. Nous rédigeons un rapport d’estimation daté et motivé, adapté à une déclaration de succession, à un partage, à une assurance ou à un projet de vente.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Expertise et estimation"
        title={<>Expertise et estimation gratuite d’<em>objets d’art</em> en Belgique</>}
        lede="Un expert examine votre objet, le situe dans l’histoire de l’art et dans le marché, puis vous remet une valeur écrite et motivée. Sans frais, sans engagement."
        crumbs={[{ name: 'Expertise et estimation', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="demarche-title">
        <div className="wrap split">
          <div className="split__text">
            <h2 id="demarche-title">Une expertise fondée sur l’objet, pas sur l’impression</h2>
            <div className="prose">
              <p>
                Chaque estimation repose sur l’identification de l’objet : auteur ou atelier, époque, matériaux,
                signature, poinçon, état de conservation et restaurations. Elle est confrontée aux résultats récents
                des ventes publiques et au marché belge de l’art et des antiquités.
              </p>
              <p>
                Vous recevez une valeur de vente et, sur demande, une valeur d’assurance ou de remplacement. Le
                rapport est écrit, daté et signé par l’expert qui a examiné la pièce.
              </p>
            </div>
          </div>
          <Photo img={IMG.horloge} ratio="4/5" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section" aria-labelledby="objets-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="objets-title">Tableaux, mobilier, argenterie, horlogerie, collections</h2>
          </div>
          <div className="grid grid--2">
            <ul className="checks">
              <li><b>Tableaux anciens et modernes</b> : huiles, aquarelles, dessins, gravures, œuvres de l’école belge.</li>
              <li><b>Mobilier ancien</b> : commodes, bureaux, cabinets, sièges, boiseries.</li>
              <li><b>Argenterie et orfèvrerie</b> : services, couverts, pièces poinçonnées.</li>
            </ul>
            <ul className="checks">
              <li><b>Horlogerie</b> : pendules, cartels, horloges de parquet, montres de gousset.</li>
              <li><b>Objets d’art</b> : porcelaines, bronzes, cristaux, verreries, ivoires anciens.</li>
              <li><b>Pièces de collection</b> : tapisseries, livres rares, curiosités, souvenirs historiques.</li>
            </ul>
          </div>
          <div className="actions">
            <Button href={CTA.href}>{CTA.primary}</Button>
            <Button href="/collections/" variant="line">
              Voir les collections
            </Button>
          </div>
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="faq-title">Avant de demander une estimation</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <CtaBand title="Obtenez l’estimation de votre objet" />
      <JsonLd
        data={[
          serviceSchema(
            'Expertise et estimation gratuite d’objets d’art',
            'Expertise d’antiquités, de tableaux, de mobilier, d’argenterie et d’horlogerie avec estimation écrite gratuite partout en Belgique.',
            PATH,
          ),
          faqSchema(FAQ),
        ]}
      />
    </>
  );
}
