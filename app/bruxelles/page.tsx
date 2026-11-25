import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Antiquaire à Bruxelles : expertise et rachat d’antiquités',
  description:
    'Antiquaire à Bruxelles : estimation gratuite, rachat d’antiquités et de tableaux, succession. Le Sablon, Uccle, Ixelles, Woluwe. Expert à domicile.',
  path: '/bruxelles/',
  image: '/img/mobilier-1200.jpg',
});

export default function Page() {
  return (
    <RegionPage
      slug="bruxelles"
      kicker="Bruxelles-Capitale"
      title={<>Antiquaire à Bruxelles&nbsp;: <em>expertise, estimation et rachat</em></>}
      lede="Du Sablon à Woluwe, nous estimons et rachetons mobilier ancien, tableaux, argenterie et objets d’art dans les dix-neuf communes."
      intro={[
        'Les maisons de maître d’Ixelles, d’Uccle ou de Saint-Gilles, les appartements d’avenue et les demeures de Woluwe abritent souvent des pièces de qualité, transmises de génération en génération.',
        'Nous nous déplaçons pour les examiner, remettons une estimation écrite et, si vous le souhaitez, rachetons directement : tableaux, mobilier, argenterie, horlogerie, porcelaines.',
      ]}
      zonesTitle="Le Sablon, Uccle, Ixelles, Woluwe : nous intervenons partout à Bruxelles"
      zones={[
        { name: 'Le Sablon et le centre', text: 'Quartier historique des antiquaires : estimations de mobilier, tableaux et objets d’art, rachat de collections.' },
        { name: 'Uccle et Ixelles', text: 'Maisons de maître et demeures bourgeoises : inventaires, successions, rachat de mobilier et d’argenterie.' },
        { name: 'Woluwe et Etterbeek', text: 'Appartements et villas : estimation d’objets d’art, d’horlogerie et de tableaux modernes.' },
      ]}
      img={IMG.mobilier}
      faq={[
        { q: 'Avez-vous une adresse à Bruxelles pour faire estimer un objet ?', a: 'La Maison est installée au Sablon, à Bruxelles. L’estimation se fait d’abord sur photographies ; nous nous déplaçons ensuite à domicile dans toute la région, ou nous vous recevons sur rendez-vous.' },
        { q: 'Quelles communes bruxelloises desservez-vous ?', a: 'Les dix-neuf communes de la Région de Bruxelles-Capitale, dont Bruxelles-Ville, Uccle, Ixelles, Woluwe-Saint-Pierre, Woluwe-Saint-Lambert, Etterbeek et Saint-Gilles.' },
        { q: 'Rachetez-vous le contenu complet d’une maison bruxelloise ?', a: 'Oui, pour les objets relevant de nos domaines : nous établissons l’inventaire, une offre globale ou lot par lot, puis nous organisons l’enlèvement.' },
      ]}
      ctaTitle="Faites estimer vos objets à Bruxelles"
    />
  );
}
