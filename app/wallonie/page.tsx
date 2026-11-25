import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Estimation et rachat d’antiquités à domicile en Wallonie',
  description:
    'Estimation gratuite et rachat d’antiquités. Nous nous déplaçons à domicile à Liège, Namur, Charleroi, Waterloo, Mons et dans toute la Wallonie.',
  path: '/wallonie/',
});

export default function Page() {
  return (
    <RegionPage
      slug="wallonie"
      where="en Wallonie"
      title={<>Estimation et rachat d’antiquités <em>à domicile en Wallonie</em></>}
      lede="Brabant wallon, Liège, Namur, Hainaut, Luxembourg belge : nous nous déplaçons à votre domicile pour estimer et racheter vos objets d’art."
      intro={[
        'Châteaux, fermes en carré, hôtels de maître et maisons de famille : la Wallonie conserve un patrimoine mobilier considérable, souvent resté dans les mêmes murs depuis des générations.',
        'Nous venons sur place pour examiner vos objets et vous donner une estimation gratuite. Si l’un d’eux nous intéresse, nous pouvons vous proposer de le racheter.',
      ]}
      zones={[
        { name: 'Brabant wallon', text: 'Nous nous déplaçons à Waterloo, Wavre, Lasne et Rixensart.' },
        { name: 'Liège et Namur', text: 'Nous nous déplaçons dans les hôtels de maître et demeures de Liège, de Namur et de leurs environs.' },
        { name: 'Hainaut et Luxembourg', text: 'Nous nous déplaçons à Charleroi, Mons, Tournai et Arlon.' },
      ]}
      img={IMG.cabinet}
      faq={[
        { q: 'Avez-vous un bureau en Wallonie ?', a: 'Non. Nous n’avons ni boutique ni bureau en Belgique : nous nous déplaçons à domicile.' },
        { q: 'Vous déplacez-vous dans toute la Wallonie ?', a: 'Oui, dans les cinq provinces wallonnes : Brabant wallon, Hainaut, Liège, Luxembourg et Namur.' },
        { q: 'Rachetez-vous des tableaux et du mobilier ?', a: 'Oui : tableaux anciens et modernes, mobilier ancien, argenterie, horlogerie et objets d’art. Le paiement se fait par virement bancaire uniquement.' },
      ]}
    />
  );
}
