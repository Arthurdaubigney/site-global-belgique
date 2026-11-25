import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Estimation et rachat d’antiquités à domicile en Flandre',
  description:
    'Estimation gratuite et rachat d’antiquités et de tableaux. Nous nous déplaçons à domicile à Anvers, Gand, Bruges, Louvain, Knokke-Le Zoute et en Flandre.',
  path: '/flandre/',
  image: '/img/tableaux-1200.jpg',
});

export default function Page() {
  return (
    <RegionPage
      slug="flandre"
      where="en Flandre"
      title={<>Estimation et rachat d’antiquités <em>à domicile en Flandre</em></>}
      lede="Anvers, Gand, Bruges, Courtrai, Louvain, Knokke-Le Zoute : nous nous déplaçons chez vous pour estimer et racheter vos objets d’art et vos tableaux."
      intro={[
        'La Flandre est le berceau de la peinture flamande : tableaux, tapisseries, argenterie, mobilier de style et objets d’art s’y transmettent de génération en génération.',
        'Nous nous déplaçons dans les cinq provinces flamandes, des villas de la côte aux maisons de ville, pour vous donner une estimation gratuite et, si l’objet nous intéresse, vous proposer un rachat.',
      ]}
      zones={[
        { name: 'Anvers et Malines', text: 'Nous nous déplaçons dans les maisons de ville et hôtels particuliers.' },
        { name: 'Gand, Bruges et Courtrai', text: 'Nous nous déplaçons dans les demeures patriciennes et maisons de campagne.' },
        { name: 'Knokke-Le Zoute et la côte', text: 'Nous nous déplaçons dans les villas et résidences du littoral.' },
      ]}
      img={IMG.tableaux}
      faq={[
        { q: 'Avez-vous un bureau en Flandre ?', a: 'Non. Nous n’avons ni boutique ni bureau en Belgique : nous nous déplaçons à votre domicile.' },
        { q: 'Estimez-vous les tableaux de l’école flamande ?', a: 'Oui. Nous examinons les peintures flamandes et hollandaises anciennes comme les œuvres belges du XIXe et du XXe siècle : signature, support, provenance.' },
        { q: 'Dans quelles villes vous déplacez-vous ?', a: 'Dans toute la Flandre, notamment à Anvers, Gand, Bruges, Courtrai, Louvain, Malines et Knokke-Le Zoute.' },
      ]}
    />
  );
}
