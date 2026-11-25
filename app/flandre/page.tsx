import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Antiquaire en Flandre : Anvers, Gand, Bruges, Knokke',
  description:
    'Antiquaire en Flandre : estimation de tableaux flamands et de mobilier ancien, rachat et succession à Anvers, Gand, Bruges et Knokke. Expert à domicile.',
  path: '/flandre/',
  image: '/img/tableaux-1200.jpg',
});

export default function Page() {
  return (
    <RegionPage
      slug="flandre"
      kicker="Flandre"
      title={<>Antiquaire en Flandre&nbsp;: <em>tableaux flamands, mobilier et rachat</em></>}
      lede="Anvers, Gand, Bruges, Courtrai, Louvain, Knokke-Le Zoute : nous estimons et rachetons vos objets d’art, avec une vraie connaissance de l’école flamande."
      intro={[
        'La Flandre est le berceau de la peinture flamande et d’un artisanat d’art exceptionnel : tableaux, tapisseries, argenterie anversoise, mobilier de style, objets d’église.',
        'Nous travaillons avec des experts qui connaissent ce marché et nous déplaçons dans les cinq provinces flamandes, pour les villas de la côte comme pour les maisons de ville.',
      ]}
      zonesTitle="Anvers, Gand, Bruges, Knokke : un expert dans chaque grande ville"
      zones={[
        { name: 'Anvers et Malines', text: 'Maisons de ville, hôtels particuliers : tableaux flamands, argenterie, mobilier, collections.' },
        { name: 'Gand, Bruges et Courtrai', text: 'Demeures patriciennes et maisons de campagne : estimation, succession et rachat.' },
        { name: 'Knokke-Le Zoute et la côte', text: 'Villas et résidences : mobilier, tableaux modernes, horlogerie, objets d’art.' },
      ]}
      img={IMG.tableaux}
      faq={[
        { q: 'Estimez-vous les tableaux de l’école flamande ?', a: 'Oui. Nous examinons les peintures flamandes et hollandaises anciennes comme les œuvres belges du XIXe et du XXe siècle, et nous vérifions signatures, cachets et provenance.' },
        { q: 'Intervenez-vous à Anvers, Gand et Bruges ?', a: 'Oui, dans les cinq provinces flamandes : Anvers, Flandre-Orientale, Flandre-Occidentale, Limbourg et Brabant flamand.' },
        { q: 'Pouvez-vous échanger en néerlandais ?', a: 'Nous répondons en français et en anglais. Pour un entretien en néerlandais, précisez-le dans votre demande : nous organisons la visite avec un interlocuteur néerlandophone.' },
      ]}
      ctaTitle="Faites estimer vos objets en Flandre"
    />
  );
}
