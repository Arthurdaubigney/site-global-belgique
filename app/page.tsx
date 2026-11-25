import Link from 'next/link';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import Faq, { type FaqItem } from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Photo, { SIZES } from '@/components/Photo';
import TallyForm from '@/components/TallyForm';
import WordHighlight from '@/components/WordHighlight';
import { IMG } from '@/lib/images';
import { faqSchema } from '@/lib/schema';
import { CTA, REGIONS, pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Estimation et rachat d’antiquités à domicile en Belgique',
  description:
    'Estimation gratuite et rachat d’antiquités, tableaux, mobilier ancien, argenterie et horlogerie. Nous nous déplaçons à domicile dans toute la Belgique.',
  path: '/',
});

const DOMAINS = [
  { img: IMG.tableaux, ratio: '1.3333', title: 'Tableaux anciens et modernes', text: 'Écoles flamande, hollandaise et belge, huiles, aquarelles, dessins.', href: '/collections/#tableaux' },
  { img: IMG.mobilier, ratio: '1.3333', title: 'Mobilier ancien', text: 'Commodes, cabinets, bureaux et sièges du XVIIe au XIXe siècle.', href: '/collections/#mobilier' },
  { img: IMG.argenterie, ratio: '1.3333', title: 'Argenterie et orfèvrerie', text: 'Services, couverts et pièces poinçonnées.', href: '/collections/#argenterie' },
  { img: IMG.horlogerie, ratio: '0.8', title: 'Horlogerie ancienne', text: 'Pendules, cartels, horloges de parquet, montres de gousset.', href: '/collections/#horlogerie' },
  { img: IMG.porcelaine, ratio: '0.8', title: 'Porcelaine et objets d’art', text: 'Sèvres, Meissen, faïences, bronzes, cristaux et verreries.', href: '/collections/#objets-d-art' },
  { img: IMG.cabinet, ratio: '0.8', title: 'Pièces de collection', text: 'Cabinets de curiosités, tapisseries, livres rares.', href: '/collections/#collection' },
];

const STEPS = [
  { t: 'Votre demande', p: 'Quelques lignes et quelques photographies suffisent pour ouvrir un dossier.' },
  { t: 'L’examen', p: 'Nous étudions l’objet : provenance, signature, état, marché actuel.' },
  { t: 'Une estimation', p: 'Vous recevez une estimation de valeur, gratuite et sans engagement.' },
  { t: 'Le rachat, si vous le souhaitez', p: 'Nous formulons une offre. Vous restez libre de l’accepter ou non.' },
];

const FAQ: FaqItem[] = [
  {
    q: 'L’estimation d’un objet est-elle gratuite ?',
    a: 'Oui. L’estimation est gratuite et sans engagement. Vous restez libre de vendre, de passer par une salle des ventes ou de conserver l’objet.',
  },
  {
    q: 'Où vous déplacez-vous ?',
    a: 'Nous nous déplaçons à domicile dans toute la Belgique : en Région de Bruxelles-Capitale, en Wallonie et en Flandre. Nous n’avons pas de boutique ni de bureau en Belgique : nous venons chez vous.',
  },
  {
    q: 'Comment se passe une succession ?',
    a: 'Nous estimons les objets d’art, le mobilier et les tableaux, puis nous pouvons vous faire une offre de rachat pour tout ou partie. Le partage de la succession entre héritiers relève du notaire.',
  },
  {
    q: 'Comment êtes-vous payé en cas de rachat ?',
    a: 'Le paiement se fait par virement bancaire uniquement. Nous ne payons jamais en espèces.',
  },
  {
    q: 'Quels objets estimez-vous ?',
    a: 'Tableaux anciens et modernes, mobilier ancien, argenterie, horlogerie, porcelaines, bronzes, livres rares et pièces de collection. Envoyez-nous une photographie : nous vous disons si la pièce nous intéresse.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__text" data-enter>
          <p className="kicker">Estimation et rachat à domicile · Belgique</p>
          <h1 id="hero-title">
            Estimation et rachat d’antiquités <em>à domicile</em> dans toute la Belgique
          </h1>
          <p className="lede">
            Tableaux, mobilier ancien, argenterie, horlogerie, pièces de collection. Estimation gratuite et sans
            engagement : nous venons chez vous.
          </p>
          <div className="actions">
            <Button href="#demande">{CTA.primary}</Button>
            <Button href="/collections/" variant="line">
              Ce que nous estimons
            </Button>
          </div>
          <p className="hero__fact">
            <b>3 régions</b>
            <span>Bruxelles-Capitale, Wallonie et Flandre : nous nous déplaçons à domicile.</span>
          </p>
        </div>
        <div className="hero__media">
          <Photo img={IMG.hero} priority bare sizes={SIZES.hero} />
        </div>
      </section>

      <section className="intro-form" aria-labelledby="demande-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="demande-title">Demander une estimation gratuite</h2>
            <p className="lede">Décrivez votre objet et joignez quelques photographies.</p>
          </div>
          <TallyForm title="Demande d’estimation gratuite" minHeight={520} />
        </div>
      </section>

      <section className="section statement-sec" aria-label="Notre démarche">
        <div className="wrap">
          <WordHighlight text="Nous nous déplaçons à domicile dans toute la Belgique, de Knokke-Le Zoute à Arlon, de Bruxelles à Liège, pour estimer et racheter vos objets d’art." />
        </div>
      </section>

      <section className="section band--soft" aria-labelledby="domaines-title">
        <div className="wrap">
          <div className="sec-head">
            <h2 id="domaines-title">Ce que nous estimons et rachetons</h2>
            <p className="lede">Six familles d’objets, avec une estimation qui s’appuie sur les ventes publiques et le marché de l’art.</p>
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
            <h2 id="methode-title">De la photographie à l’offre, en quatre étapes</h2>
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
            <h2 id="succession-title">Succession : estimation et rachat à domicile</h2>
            <p className="lede">
              Mobilier, tableaux, argenterie : nous estimons les objets sur place et pouvons vous proposer le rachat de
              tout ou partie. Le partage entre héritiers relève du notaire.
            </p>
            <ul className="checks">
              <li>Estimation gratuite et sans engagement</li>
              <li>Offre de rachat pour tout ou partie des objets</li>
              <li>Paiement par virement bancaire uniquement</li>
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
            <h2 id="regions-title">Nous nous déplaçons à domicile dans toute la Belgique</h2>
          </div>
          <div className="regions">
            {REGIONS.map((r) => (
              <Link key={r.slug} href={`/${r.slug}/`} className="region">
                <h3>{r.name}</h3>
                <p>{r.cities.slice(0, 5).join(' · ')}</p>
                <span className="card__more">Nous nous déplaçons en {r.name === 'Bruxelles-Capitale' ? 'Région bruxelloise' : r.name}</span>
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
