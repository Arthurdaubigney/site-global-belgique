import RegionPage from '@/components/RegionPage';
import { IMG } from '@/lib/images';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Estimation et rachat d’antiquités à domicile à Bruxelles',
  description:
    'Estimation gratuite et rachat d’antiquités, de tableaux et de mobilier. Nous nous déplaçons à Uccle, Ixelles, Woluwe et dans toute la Région bruxelloise.',
  path: '/bruxelles/',
});

export default function Page() {
  return (
    <RegionPage
      slug="bruxelles"
      where="à Bruxelles"
      title={<>Estimation et rachat d’antiquités <em>à domicile à Bruxelles</em></>}
      lede="Nous nous déplaçons à Uccle, Ixelles, Woluwe, Etterbeek, Saint-Gilles et dans toute la Région de Bruxelles-Capitale pour estimer et racheter vos objets d’art."
      intro={[
        'Maisons de maître, appartements d’avenue, villas : les habitations bruxelloises abritent souvent des pièces de qualité, transmises de génération en génération.',
        'Nous nous déplaçons pour les examiner et vous donner une estimation gratuite. Si l’objet nous intéresse, nous pouvons aussi vous faire une offre de rachat : tableaux, mobilier, argenterie, horlogerie, porcelaines.',
      ]}
      zones={[
        { name: 'Bruxelles et le centre', text: 'Nous nous déplaçons à Bruxelles-Ville, au Sablon et dans les quartiers voisins.' },
        { name: 'Uccle, Ixelles, Saint-Gilles', text: 'Nous nous déplaçons dans les maisons de maître et demeures bourgeoises.' },
        { name: 'Woluwe et Etterbeek', text: 'Nous nous déplaçons dans les appartements et villas de l’est de la capitale.' },
      ]}
      img={IMG.mobilier}
      faq={[
        { q: 'Avez-vous une boutique ou un bureau à Bruxelles ?', a: 'Non. Nous n’avons ni boutique ni bureau en Belgique : nous nous déplaçons à votre domicile pour estimer vos objets.' },
        { q: 'Dans quelles communes bruxelloises vous déplacez-vous ?', a: 'Dans l’ensemble de la Région de Bruxelles-Capitale, dont Bruxelles-Ville, Uccle, Ixelles, Woluwe-Saint-Pierre, Woluwe-Saint-Lambert, Etterbeek et Saint-Gilles.' },
        { q: 'L’estimation est-elle payante ?', a: 'Non. L’estimation est gratuite et sans engagement.' },
      ]}
    />
  );
}
