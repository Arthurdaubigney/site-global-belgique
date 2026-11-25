import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Antiquaire en Wallonie : estimation, rachat, succession',
  description:
    'Antiquaire en Wallonie : estimation gratuite, rachat d’antiquités et succession à Liège, Namur, Charleroi, Waterloo, Mons. Expert qui se déplace.',
  path: '/wallonie/',
  image: '/img/cabinet-1200.jpg',
});

export default function Page() {
  return (
    <RegionPage
      slug="wallonie"
      kicker="Wallonie"
      title={<>Antiquaire en Wallonie&nbsp;: <em>estimation, rachat et succession</em></>}
      lede="Brabant wallon, Liège, Namur, Hainaut, Luxembourg belge : un expert se rend à votre domicile pour estimer et racheter vos objets d’art."
      intro={[
        'Châteaux, fermes en carré, hôtels de maître et maisons de famille : la Wallonie conserve un patrimoine mobilier considérable, souvent resté dans les mêmes murs depuis des générations.',
        'Nous venons sur place pour l’inventaire, l’estimation écrite et, selon votre choix, le rachat ou le partage entre héritiers, sans que vous ayez à déplacer quoi que ce soit.',
      ]}
      zonesTitle="Liège, Namur, Charleroi, Waterloo, Mons : nous venons chez vous"
      zones={[
        { name: 'Brabant wallon', text: 'Waterloo, Wavre, Lasne, Rixensart : demeures et villas, mobilier, tableaux et argenterie.' },
        { name: 'Liège et Namur', text: 'Hôtels de maître, anciennes demeures mosanes, collections d’amateur, rachat et succession.' },
        { name: 'Hainaut et Luxembourg', text: 'Charleroi, Mons, Tournai, Arlon : châteaux, fermes et maisons de famille.' },
      ]}
      img={IMG.cabinet}
      faq={[
        { q: 'Vous déplacez-vous dans toute la Wallonie ?', a: 'Oui, dans les cinq provinces wallonnes : Brabant wallon, Hainaut, Liège, Luxembourg et Namur. Les déplacements pour l’estimation ne sont pas facturés.' },
        { q: 'Peut-on faire estimer un château ou une grande demeure ?', a: 'Oui. Pour les grands ensembles, nous organisons une ou plusieurs journées d’inventaire et remettons un catalogue chiffré, pièce par pièce.' },
        { q: 'Rachetez-vous des tableaux et du mobilier en Wallonie ?', a: 'Oui : tableaux anciens et modernes, mobilier ancien, argenterie, horlogerie et objets d’art, avec une offre écrite et un paiement par virement.' },
      ]}
      ctaTitle="Faites estimer vos objets en Wallonie"
    />
  );
}
