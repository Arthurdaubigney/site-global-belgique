import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import Faq, { type FaqItem } from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import { IMG } from '@/lib/images';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { CTA, pageMetadata } from '@/lib/site';

const PATH = '/rachat-succession/';

export const metadata = pageMetadata({
  title: 'Rachat d’antiquités et estimation de succession en Belgique',
  description:
    'Rachat direct d’antiquités, de mobilier ancien et de tableaux, estimation de succession et partage. Estimation gratuite, discrétion, partout en Belgique.',
  path: PATH,
  image: '/img/candelabres-1200.jpg',
});

const FAQ: FaqItem[] = [
  {
    q: 'Faut-il vider la maison avant votre visite ?',
    a: 'Non. Nous inventorions le contenu en place, pièce par pièce, et nous nous occupons de l’enlèvement des objets rachetés avec le soin qui convient à des pièces anciennes.',
  },
  {
    q: 'Le rapport d’estimation est-il accepté par le notaire ?',
    a: 'Il est rédigé pour cet usage : liste des objets, description, valeur motivée, date et signature de l’expert. Il sert de base à la déclaration de succession et au partage.',
  },
  {
    q: 'Comment éviter les désaccords entre héritiers ?',
    a: 'Une estimation indépendante et chiffrée pose une base commune. Nous pouvons ensuite racheter les lots que personne ne souhaite garder, ou proposer une répartition par lots d’une valeur comparable.',
  },
  {
    q: 'Quand êtes-vous payé ?',
    a: 'Nous ne facturons pas l’estimation. Si vous acceptez notre offre de rachat, le paiement se fait par virement bancaire, au moment de l’enlèvement.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Rachat et succession"
        title={<>Rachat d’antiquités et <em>estimation de succession</em> en Belgique</>}
        lede="Une maison à vider, un héritage à répartir, une collection à céder : un expert se déplace, inventorie, estime par écrit, puis rachète ou partage."
        crumbs={[{ name: 'Rachat et succession', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="succession-title">
        <div className="wrap split">
          <Photo img={IMG.candelabres} />
          <div className="split__text">
            <h2 id="succession-title">Un inventaire chiffré, utile au notaire et aux héritiers</h2>
            <div className="prose">
              <p>
                À Bruxelles comme à Namur ou à Gand, une succession demande de la méthode. Nous parcourons la
                maison, identifions chaque objet de valeur et remettons un rapport d’estimation écrit.
              </p>
              <p>
                Les héritiers savent alors ce que valent le mobilier, les tableaux, l’argenterie et les objets
                d’art : ils décident ensemble de conserver, de vendre ou de nous céder les pièces.
              </p>
            </div>
            <div className="actions">
              <Button href={CTA.href}>{CTA.primary}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="rachat-title">
        <div className="wrap split split--rev">
          <Photo img={IMG.tasse} />
          <div className="split__text">
            <h2 id="rachat-title">Une offre ferme pour vos objets d’art et antiquités</h2>
            <ul className="checks">
              <li><b>Rachat de tableaux anciens</b>, de mobilier ancien, d’argenterie, d’horlogerie et de porcelaines.</li>
              <li><b>Offre écrite</b> et ferme, sans commission ni frais cachés.</li>
              <li><b>Enlèvement soigné</b> à domicile, partout en Belgique, et paiement par virement.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="faq-title">Succession et rachat : ce que l’on nous demande</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <CtaBand title="Parlez-nous de votre succession ou de vos objets" />
      <JsonLd
        data={[
          serviceSchema(
            'Rachat d’antiquités et estimation de succession',
            'Rachat direct d’objets d’art, de mobilier ancien et de tableaux, estimation et partage de succession partout en Belgique.',
            PATH,
          ),
          faqSchema(FAQ),
        ]}
      />
    </>
  );
}
