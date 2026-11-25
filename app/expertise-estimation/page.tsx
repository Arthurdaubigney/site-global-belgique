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
  title: 'Estimation gratuite d’objets d’art à domicile en Belgique',
  description:
    'Estimation gratuite de tableaux anciens, mobilier, argenterie et horlogerie. Nous nous déplaçons à domicile dans toute la Belgique, sans engagement.',
  path: PATH,
});

const FAQ: FaqItem[] = [
  {
    q: 'Que faut-il envoyer pour une première estimation ?',
    a: 'Quelques photographies nettes (vue d’ensemble, signature ou poinçon, détails, éventuels défauts), les dimensions approximatives et, si vous les avez, les factures ou souvenirs de provenance.',
  },
  {
    q: 'L’estimation se fait-elle chez moi ?',
    a: 'Oui. Nous nous déplaçons à domicile dans toute la Belgique pour examiner les objets sur place. Nous n’avons pas de boutique ni de bureau en Belgique.',
  },
  {
    q: 'L’estimation m’engage-t-elle à vendre ?',
    a: 'Non. L’estimation est gratuite et sans engagement. Vous décidez ensuite librement de vendre, de conserver l’objet ou de passer par une salle des ventes.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title={<>Estimation gratuite d’<em>objets d’art</em> à domicile en Belgique</>}
        lede="Nous examinons votre objet, le situons dans l’histoire de l’art et dans le marché, puis vous indiquons sa valeur. Gratuit, sans engagement, chez vous."
        crumbs={[{ name: 'Estimation', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="demarche-title">
        <div className="wrap split">
          <div className="split__text">
            <h2 id="demarche-title">Une estimation fondée sur l’objet</h2>
            <div className="prose">
              <p>
                Chaque estimation repose sur l’identification de l’objet : auteur ou atelier, époque, matériaux,
                signature, poinçon, état de conservation et restaurations. Elle est confrontée aux résultats récents
                des ventes publiques.
              </p>
              <p>
                Nous nous déplaçons à domicile dans toute la Belgique. Si l’objet nous intéresse, nous pouvons aussi
                vous faire une offre de rachat, que vous êtes libre de refuser.
              </p>
            </div>
          </div>
          <Photo img={IMG.horloge} />
        </div>
      </section>

      <section className="section" aria-labelledby="objets-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="objets-title">Tableaux, mobilier, argenterie, horlogerie, collections</h2>
          </div>
          <div className="grid grid--2">
            <ul className="checks">
              <li><b>Tableaux anciens et modernes</b> : huiles, aquarelles, dessins, gravures.</li>
              <li><b>Mobilier ancien</b> : commodes, bureaux, cabinets, sièges.</li>
              <li><b>Argenterie et orfèvrerie</b> : services, couverts, pièces poinçonnées.</li>
            </ul>
            <ul className="checks">
              <li><b>Horlogerie</b> : pendules, cartels, horloges de parquet, montres de gousset.</li>
              <li><b>Objets d’art</b> : porcelaines, bronzes, cristaux, verreries.</li>
              <li><b>Pièces de collection</b> : tapisseries, livres rares, curiosités.</li>
            </ul>
          </div>
          <div className="actions">
            <Button href={CTA.href}>{CTA.primary}</Button>
            <Button href="/collections/" variant="line">
              Voir les domaines
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

      <CtaBand title="Faites estimer votre objet" />
      <JsonLd
        data={[
          serviceSchema(
            'Estimation gratuite d’objets d’art à domicile',
            'Estimation gratuite d’antiquités, de tableaux, de mobilier, d’argenterie et d’horlogerie, à domicile dans toute la Belgique.',
            PATH,
          ),
          faqSchema(FAQ),
        ]}
      />
    </>
  );
}
