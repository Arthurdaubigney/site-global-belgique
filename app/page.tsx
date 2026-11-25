import Link from 'next/link';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import Faq, { type FaqItem } from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Photo, { SIZES } from '@/components/Photo';
import WordHighlight from '@/components/WordHighlight';
import { IMG } from '@/lib/images';
import { faqSchema } from '@/lib/schema';
import { CTA, REGIONS, pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Antiquaire en Belgique : expertise, estimation et rachat',
  description:
    'Maison d’antiquaires et cabinet d’expertise : estimation gratuite, succession et rachat d’objets d’art en Belgique. Bruxelles, Wallonie, Flandre.',
  path: '/',
});

const DOMAINS = [
  { img: IMG.tableaux, ratio: '1.3333', title: 'Tableaux anciens et modernes', text: 'Écoles flamande, hollandaise et belge, huiles, aquarelles, dessins.', href: '/collections/#tableaux' },
  { img: IMG.mobilier, ratio: '1.3333', title: 'Mobilier ancien', text: 'Commodes, cabinets, bureaux et sièges estampillés du XVIIe au XIXe siècle.', href: '/collections/#mobilier' },
  { img: IMG.argenterie, ratio: '1.3333', title: 'Argenterie et orfèvrerie', text: 'Services, couverts, pièces poinçonnées belges et européennes.', href: '/collections/#argenterie' },
  { img: IMG.horlogerie, ratio: '0.8', title: 'Horlogerie ancienne', text: 'Pendules, cartels, horloges de parquet, montres de gousset.', href: '/collections/#horlogerie' },
  { img: IMG.porcelaine, ratio: '0.8', title: 'Porcelaine et objets d’art', text: 'Sèvres, Meissen, faïences, bronzes, cristaux et verreries.', href: '/collections/#objets-d-art' },
  { img: IMG.tapisserie, ratio: '0.8', title: 'Pièces de collection', text: 'Cabinets de curiosités, tapisseries, livres rares, curiosités.', href: '/collections/#collection' },
];

const STEPS = [
  { t: 'Votre demande', p: 'Quelques lignes et quelques photographies suffisent pour ouvrir un dossier.' },
  { t: 'L’examen', p: 'Un expert étudie l’objet : provenance, signature, état, marché actuel.' },
  { t: 'Une estimation écrite', p: 'Vous recevez une valeur motivée, gratuite et sans engagement.' },
  { t: 'Rachat ou partage', p: 'Rachat direct, ou répartition équitable entre héritiers.' },
];

const FAQ: FaqItem[] = [
  {
    q: 'L’estimation d’un objet d’art est-elle vraiment gratuite ?',
    a: 'Oui. L’estimation initiale à partir de photographies, puis l’examen sur place si l’objet le justifie, ne vous coûtent rien et ne vous engagent à rien. Vous restez libre de vendre à la Maison, de passer par une salle des ventes ou de conserver l’objet.',
  },
  {
    q: 'Vous déplacez-vous partout en Belgique ?',
    a: 'Oui. Nos experts se rendent à domicile à Bruxelles, en Wallonie et en Flandre : de Knokke-Le Zoute à Arlon, de Tournai à Hasselt. Les objets volumineux ou nombreux sont examinés sur place.',
  },
  {
    q: 'Comment se passe l’estimation d’une succession ?',
    a: 'Nous inventorions le mobilier, les tableaux et les objets, nous remettons un rapport d’estimation écrit et chiffré pour les héritiers et le notaire, puis nous rachetons tout ou partie du contenu, ou nous aidons à répartir les lots sans litige.',
  },
  {
    q: 'Rachetez-vous directement les objets ?',
    a: 'Oui. Si la pièce rentre dans nos domaines, nous formulons une offre de rachat ferme, valable plusieurs jours, avec paiement par virement à l’enlèvement. Aucune commission n’est prélevée sur le prix convenu.',
  },
  {
    q: 'Quels objets expertisez-vous ?',
    a: 'Tableaux anciens et modernes, mobilier ancien, argenterie, horlogerie, porcelaines, bronzes, livres rares et pièces de collection. Si vous hésitez, envoyez-nous une photographie : nous vous disons si la pièce relève de notre cabinet.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__text" data-enter>
          <p className="kicker">Cabinet d’expertise d’art · Belgique</p>
          <h1 id="hero-title">
            Antiquaire en Belgique&nbsp;: <em>expertise, estimation et rachat</em> d’objets d’art
          </h1>
          <p className="lede">
            Tableaux, mobilier ancien, argenterie, horlogerie, pièces de collection. Une estimation gratuite et motivée,
            à Bruxelles, en Wallonie et en Flandre.
          </p>
          <div className="actions">
            <Button href={CTA.href}>{CTA.primary}</Button>
            <Button href="/collections/" variant="line">
              Nos domaines d’expertise
            </Button>
          </div>
          <p className="hero__fact">
            <b>3 régions</b>
            <span>Déplacement à domicile partout en Belgique, estimation écrite sans frais.</span>
          </p>
        </div>
        <div className="hero__media">
          <Photo img={IMG.hero} priority sizes={SIZES.hero} />
        </div>
      </section>

      <section className="section statement-sec" aria-label="Notre engagement">
        <div className="wrap">
          <WordHighlight text="Un seul interlocuteur pour estimer, partager et racheter vos objets d’art, de Knokke-Le Zoute à Arlon, de Bruxelles à Liège." />
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="domaines-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="domaines-title">Ce que nous expertisons et rachetons</h2>
            <p className="lede">
              Six familles d’objets, étudiées par des spécialistes de chaque domaine, avec une estimation fondée sur les
              ventes publiques et le marché de l’art belge.
            </p>
          </div>
          <div className="grid grid--3">
            {DOMAINS.map((d) => (
              <Link key={d.title} href={d.href} className="card">
                <Photo img={d.img} ratio={d.ratio} sizes={SIZES.card} />
                <div className="card__body">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <span className="card__more">Découvrir</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="methode-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="methode-title">De la photographie à l’offre ferme, en quatre étapes</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li className="step" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="succession-title">
        <div className="wrap split">
          <Photo img={IMG.secretaire} />
          <div className="split__text">
            <h2 id="succession-title">Estimer une succession, sans conflit entre héritiers</h2>
            <p className="lede">
              Mobilier, tableaux, argenterie : nous établissons un inventaire chiffré, utilisable par le notaire, puis
              nous rachetons le contenu ou répartissons les lots. Une seule visite, un seul rapport.
            </p>
            <ul className="checks">
              <li>Inventaire et rapport d’estimation écrits</li>
              <li>Rachat direct de tout ou partie de la succession</li>
              <li>Discrétion absolue, à domicile ou en maison de repos</li>
            </ul>
            <div className="actions">
              <Button href="/rachat-succession/" variant="line">
                Rachat et succession
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section band--dark" aria-labelledby="regions-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="regions-title">Un cabinet national, un expert près de chez vous</h2>
          </div>
          <div className="regions">
            {REGIONS.map((r) => (
              <Link key={r.slug} href={`/${r.slug}/`} className="region">
                <h3>{r.name}</h3>
                <p>{r.cities.slice(0, 5).join(' · ')}</p>
                <span className="card__more">Antiquaire en {r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="faq-title">Estimation, succession, rachat : vos questions</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqSchema(FAQ)} />
    </>
  );
}
