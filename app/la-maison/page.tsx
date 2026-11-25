import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import { IMG } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { CTA, REGIONS, pageMetadata } from '@/lib/site';
import Link from 'next/link';

const PATH = '/la-maison/';

export const metadata = pageMetadata({
  title: 'Maison Antiquaire : estimation et rachat à domicile',
  description:
    'Comment nous travaillons : estimation gratuite à domicile, offre de rachat sans obligation, paiement par virement. Nous nous déplaçons dans toute la Belgique.',
  path: PATH,
});

const PRINCIPES = [
  { t: 'Gratuité', p: 'L’estimation est gratuite et sans engagement de votre part.' },
  { t: 'Liberté', p: 'Vous êtes libre d’accepter ou de refuser notre offre de rachat.' },
  { t: 'Clarté', p: 'Une offre précise, un paiement par virement bancaire uniquement, jamais en espèces.' },
  { t: 'Discrétion', p: 'Vos informations et celles de votre famille ne servent qu’à traiter votre demande.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        title={<>Estimation et rachat d’antiquités, <em>à votre domicile</em></>}
        lede="Nous estimons les objets d’art, les tableaux et le mobilier ancien chez les particuliers, et nous pouvons les racheter. Nous nous déplaçons dans toute la Belgique."
        crumbs={[{ name: 'La Maison', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="role-title">
        <div className="wrap split">
          <Photo img={IMG.tasse} />
          <div className="split__text">
            <h2 id="role-title">Comment nous travaillons</h2>
            <div className="prose">
              <p>
                Vous nous envoyez des photographies, ou nous venons voir les objets chez vous. Nous les examinons :
                auteur, époque, matériaux, signature, état. Nous vous indiquons ensuite ce qu’ils valent.
              </p>
              <p>
                Si un objet nous intéresse, nous vous proposons un rachat. Nous n’avons ni boutique ni bureau en
                Belgique : nous nous déplaçons à domicile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principes-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="principes-title">Nos engagements</h2>
          </div>
          <ol className="steps">
            {PRINCIPES.map((s) => (
              <li className="step" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band--dark" aria-labelledby="couverture-title">
        <div className="wrap split">
          <div className="split__text">
            <h2 id="couverture-title">Nous nous déplaçons dans toute la Belgique</h2>
            <p className="lede">Bruxelles-Capitale, Wallonie et Flandre : nous venons chez vous, où que vous habitiez.</p>
            <ul className="chips">
              {REGIONS.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}/`} className="ulink">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="actions">
              <Button href={CTA.href} variant="light">
                {CTA.secondary}
              </Button>
            </div>
          </div>
          <Photo img={IMG.vase} />
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={serviceSchema(
          'Estimation et rachat d’antiquités à domicile',
          'Estimation et rachat d’objets d’art et d’antiquités chez les particuliers, dans toute la Belgique.',
          PATH,
        )}
      />
    </>
  );
}
