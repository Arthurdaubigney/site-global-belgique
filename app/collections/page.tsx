import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Photo from '@/components/Photo';
import { IMG } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { CTA, pageMetadata } from '@/lib/site';

const PATH = '/collections/';

export const metadata = pageMetadata({
  title: 'Tableaux, mobilier, argenterie, horlogerie : nos domaines',
  description:
    'Nous expertisons et rachetons tableaux anciens, mobilier ancien, argenterie, horlogerie, porcelaines et pièces de collection dans toute la Belgique.',
  path: PATH,
  image: '/img/tableaux-1200.jpg',
});

const SECTIONS = [
  {
    id: 'tableaux',
    kicker: 'Tableaux',
    title: 'Tableaux anciens, flamands et modernes',
    img: IMG.tableaux,
    ratio: '4/3',
    text: [
      'Natures mortes, paysages, portraits, scènes de genre : l’école flamande et hollandaise du XVIIe siècle, mais aussi la peinture belge du XIXe et les œuvres modernes.',
      'Nous examinons le support, la touche, les signatures, les cachets de collection et l’historique des ventes pour situer chaque tableau.',
    ],
    points: ['Huiles, aquarelles, dessins, gravures', 'Écoles flamande, hollandaise et belge', 'Cadres anciens et dorures'],
  },
  {
    id: 'mobilier',
    kicker: 'Mobilier',
    title: 'Mobilier ancien et meubles estampillés',
    img: IMG.mobilier,
    ratio: '4/3',
    text: [
      'Commodes, secrétaires, bureaux, cabinets, sièges et tables, du XVIIe siècle à l’Art nouveau, y compris le mobilier mosan et flamand.',
      'L’estampille, le placage, la marqueterie, les bronzes et les restaurations déterminent la valeur : nous les relevons un à un.',
    ],
    points: ['Estampilles et signatures d’ébénistes', 'Marqueterie, bronzes dorés, marbres', 'Boiseries et éléments d’architecture'],
  },
  {
    id: 'argenterie',
    kicker: 'Argenterie',
    title: 'Argenterie, orfèvrerie et poinçons',
    img: IMG.argenterie,
    ratio: '4/3',
    text: [
      'Services à thé et à café, ménagères, plats, chandeliers et pièces de forme, belges ou européens, en argent massif ou en métal argenté.',
      'Les poinçons de maître et de contrôle, le titre et le poids établissent l’origine et la valeur.',
    ],
    points: ['Poinçons belges, français, anglais, néerlandais', 'Ménagères complètes et pièces isolées', 'Vermeil, étain, métal argenté'],
  },
  {
    id: 'horlogerie',
    kicker: 'Horlogerie',
    title: 'Horlogerie ancienne : pendules, cartels, montres',
    img: IMG.horlogerie,
    ratio: '4/5',
    text: [
      'Pendules de cheminée, cartels, horloges de parquet, régulateurs et montres de gousset, signés ou non, en état de marche ou à restaurer.',
      'Le mouvement, le cadran, le boîtier et les signatures d’horlogers sont expertisés par un spécialiste.',
    ],
    points: ['Mouvements signés et numérotés', 'Bronzes dorés, marbres, écailles', 'Montres de gousset et de col'],
  },
  {
    id: 'objets-d-art',
    kicker: 'Objets d’art',
    title: 'Porcelaines, bronzes et objets d’art',
    img: IMG.porcelaine,
    ratio: '4/5',
    text: [
      'Sèvres, Meissen, Delft, faïences, cristaux, verreries, bronzes d’édition, ivoires anciens et arts d’Asie.',
      'Nous recherchons la marque, la manufacture, la date et l’état, et signalons les réparations qui pèsent sur la valeur.',
    ],
    points: ['Porcelaines et faïences marquées', 'Bronzes d’édition et sculptures', 'Verreries, cristaux, émaux'],
  },
  {
    id: 'collection',
    kicker: 'Collection',
    title: 'Pièces de collection et cabinets de curiosités',
    img: IMG.cabinet,
    ratio: '4/3',
    text: [
      'Cabinets de collectionneur, tapisseries, livres rares et reliures, médailles, armes anciennes, curiosités scientifiques.',
      'Pour les ensembles importants, nous établissons un catalogue et orientons, si besoin, vers la salle des ventes la plus adaptée.',
    ],
    points: ['Tapisseries et textiles anciens', 'Livres rares, manuscrits, cartes', 'Collections complètes d’amateur'],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Collections et spécialités"
        title={<>Tableaux anciens, mobilier, argenterie, horlogerie&nbsp;: <em>nos domaines</em></>}
        lede="Six spécialités, un même niveau d’exigence. Chaque pièce est examinée par l’expert du domaine, puis estimée par écrit."
        crumbs={[{ name: 'Collections', path: PATH }]}
      />
      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section ${i % 2 === 0 ? 'band--soft' : ''}`}
          aria-labelledby={`${s.id}-title`}
        >
          <div className={`wrap split ${i % 2 ? 'split--rev' : ''}`}>
            <Photo img={s.img} ratio={s.ratio} sizes="(max-width: 960px) 100vw, 50vw" />
            <div className="split__text">
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <div className="prose">
                {s.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <ul className="checks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="actions">
                <Button href={CTA.href} variant="line">
                  Faire estimer une pièce
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
      <JsonLd
        data={serviceSchema(
          'Expertise de tableaux, mobilier, argenterie et horlogerie anciens',
          'Six domaines d’expertise : tableaux, mobilier, argenterie, horlogerie, porcelaines et pièces de collection.',
          PATH,
        )}
      />
    </>
  );
}
