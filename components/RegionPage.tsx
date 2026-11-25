import Button from './Button';
import CtaBand from './CtaBand';
import Faq, { type FaqItem } from './Faq';
import JsonLd from './JsonLd';
import PageHero from './PageHero';
import Photo from './Photo';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { CTA, REGIONS, type Img } from '@/lib/site';

type Props = {
  slug: 'bruxelles' | 'wallonie' | 'flandre';
  title: React.ReactNode;
  /** Libellé court pour les titres : « à Bruxelles », « en Wallonie », « en Flandre ». */
  where: string;
  lede: string;
  intro: string[];
  zones: { name: string; text: string }[];
  img: Img;
  faq: FaqItem[];
};

export default function RegionPage(p: Props) {
  const path = `/${p.slug}/`;
  const region = REGIONS.find((r) => r.slug === p.slug)!;
  return (
    <>
      <PageHero title={p.title} lede={p.lede} crumbs={[{ name: `Estimation ${p.where}`, path }]} />

      <section className="section band--soft" aria-labelledby="intro-title">
        <div className="wrap split">
          <div className="split__text">
            <h2 id="intro-title">Nous nous déplaçons chez vous {p.where}</h2>
            <div className="prose">
              {p.intro.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <div className="actions">
              <Button href={CTA.href}>{CTA.primary}</Button>
            </div>
          </div>
          <Photo img={p.img} />
        </div>
      </section>

      <section className="section" aria-labelledby="zones-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="zones-title">Les communes et villes où nous nous déplaçons {p.where}</h2>
          </div>
          <div className="grid grid--3">
            {p.zones.map((z) => (
              <div className="card" key={z.name}>
                <div className="card__body">
                  <h3>{z.name}</h3>
                  <p>{z.text}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="chips" style={{ marginTop: 'var(--s7)' }} aria-label="Autres villes où nous nous déplaçons">
            {region.cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="faq-title">Estimation et rachat {p.where} : vos questions</h2>
          </div>
          <Faq items={p.faq} />
        </div>
      </section>

      <CtaBand title={`Faites estimer vos objets ${p.where}`} />
      <JsonLd data={[serviceSchema(`Estimation et rachat d’antiquités à domicile ${p.where}`, p.lede, path), faqSchema(p.faq)]} />
    </>
  );
}
