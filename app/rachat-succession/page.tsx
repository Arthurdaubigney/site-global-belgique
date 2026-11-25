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
  title: 'Rachat d’antiquités et estimation lors d’une succession',
  description:
    'Rachat d’antiquités, de mobilier ancien et de tableaux, estimation lors d’une succession. Nous nous déplaçons à domicile dans toute la Belgique.',
  path: PATH,
});

const FAQ: FaqItem[] = [
  {
    q: 'Faut-il vider la maison avant votre visite ?',
    a: 'Non. Nous regardons les objets en place, pièce par pièce, et nous nous occupons de l’enlèvement des objets rachetés.',
  },
  {
    q: 'Vous occupez-vous du partage entre héritiers ?',
    a: 'Non. Le partage de la succession relève du notaire. Nous estimons les objets d’art et pouvons vous proposer de racheter tout ou partie de ce qui vous intéresse.',
  },
  {
    q: 'Comment êtes-vous payé lors d’un rachat ?',
    a: 'Le paiement se fait par virement bancaire uniquement. Nous ne payons jamais en espèces.',
  },
  {
    q: 'Dois-je accepter votre offre ?',
    a: 'Non. L’estimation est gratuite et sans engagement, et vous restez libre de refuser notre offre.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title={<>Rachat d’antiquités et <em>estimation lors d’une succession</em></>}
        lede="Une maison à vider, un héritage à estimer, une collection à céder : nous nous déplaçons à domicile dans toute la Belgique, nous estimons, puis nous pouvons racheter."
        crumbs={[{ name: 'Rachat et succession', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="succession-title">
        <div className="wrap split">
          <Photo img={IMG.candelabres} />
          <div className="split__text">
            <h2 id="succession-title">Succession : estimation et rachat des objets d’art</h2>
            <div className="prose">
              <p>
                Lors d’une succession, nous venons voir les objets sur place : mobilier, tableaux, argenterie,
                horlogerie, porcelaines. Nous vous indiquons ce qu’ils valent, gratuitement et sans engagement.
              </p>
              <p>
                Si vous le souhaitez, nous vous faisons une offre de rachat pour tout ou partie des objets. Le
                partage de la succession entre héritiers relève du notaire.
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
            <h2 id="rachat-title">Rachat d’objets d’art et d’antiquités</h2>
            <ul className="checks">
              <li><b>Rachat de tableaux anciens</b>, de mobilier ancien, d’argenterie, d’horlogerie et de porcelaines.</li>
              <li><b>Estimation gratuite</b> à domicile, sans engagement de votre part.</li>
              <li><b>Paiement par virement bancaire</b> uniquement, jamais en espèces.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="faq-title">Succession et rachat : vos questions</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <CtaBand title="Parlez-nous de vos objets ou de votre succession" />
      <JsonLd
        data={[
          serviceSchema(
            'Rachat d’antiquités et estimation lors d’une succession',
            'Rachat d’objets d’art, de mobilier ancien et de tableaux, estimation lors d’une succession, à domicile dans toute la Belgique.',
            PATH,
          ),
          faqSchema(FAQ),
        ]}
      />
    </>
  );
}
