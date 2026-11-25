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
  title: 'La Maison Antiquaire de Belgique : cabinet d’expertise d’art',
  description:
    'Découvrez la Maison Antiquaire de Belgique : un cabinet d’expertise d’art et d’antiquaires au service des familles, notaires et collectionneurs belges.',
  path: PATH,
  image: '/img/tasse-1200.jpg',
});

const PRINCIPES = [
  { t: 'Indépendance', p: 'Une valeur écrite et motivée, qui ne dépend ni d’un intérêt de vente ni d’une commission.' },
  { t: 'Discrétion', p: 'Successions, collections privées, objets de famille : vos informations restent entre nos mains.' },
  { t: 'Précision', p: 'Chaque objet est identifié, daté et comparé aux ventes publiques avant toute estimation.' },
  { t: 'Clarté', p: 'Une offre écrite, un prix ferme, un paiement par virement. Rien de caché.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="La Maison"
        title={<>Un cabinet d’<em>expertise d’art</em> et d’antiquaires au service de toute la Belgique</>}
        lede="Nous accompagnons les familles, les notaires et les collectionneurs qui veulent connaître la valeur réelle d’un objet ancien, et le céder dans de bonnes conditions."
        crumbs={[{ name: 'La Maison', path: PATH }]}
      />

      <section className="section band--soft" aria-labelledby="role-title">
        <div className="wrap split">
          <Photo img={IMG.tasse} ratio="4/3" sizes="(max-width: 960px) 100vw, 50vw" />
          <div className="split__text">
            <h2 id="role-title">Estimer avec justesse, racheter avec loyauté</h2>
            <div className="prose">
              <p>
                La Maison réunit l’expertise d’objets d’art et l’activité d’antiquaire : elle estime ce que vous lui
                confiez et, si vous le souhaitez, le rachète directement.
              </p>
              <p>
                Cette double compétence nous oblige : une estimation juste est la condition d’un rachat honnête. Elle
                s’appuie sur l’histoire de l’art, sur les poinçons, signatures et marques, et sur le marché belge et
                européen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principes-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="principes-title">Quatre engagements envers nos clients</h2>
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
            <h2 id="couverture-title">Bruxelles, Wallonie, Flandre</h2>
            <p className="lede">
              Un seul cabinet pour tout le pays. Un expert se déplace chez vous, quelle que soit la région.
            </p>
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
          <Photo img={IMG.vase} ratio="4/5" sizes="(max-width: 960px) 100vw, 50vw" />
        </div>
      </section>

      <CtaBand />
      <JsonLd
        data={serviceSchema(
          'Cabinet d’expertise d’art et antiquaire en Belgique',
          'Expertise, estimation, rachat et partage de succession d’objets d’art et d’antiquités, partout en Belgique.',
          PATH,
        )}
      />
    </>
  );
}
