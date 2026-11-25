import { BRAND, REGIONS, SITE_URL } from './site';

const ORG_ID = `${SITE_URL}/#organisation`;

export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AntiqueStore', 'ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: BRAND.name,
    alternateName: 'Cabinet d’expertise d’art et antiquités',
    description:
      'Maison d’antiquaires et cabinet d’expertise d’art : estimation gratuite, partage de succession et rachat direct d’antiquités, tableaux, mobilier ancien, argenterie et horlogerie dans toute la Belgique.',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/img/hero-1200.jpg`,
    priceRange: 'Estimation gratuite',
    knowsLanguage: ['fr', 'nl', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bruxelles',
      addressRegion: 'Bruxelles-Capitale',
      addressCountry: 'BE',
    },
    areaServed: [
      { '@type': 'Country', name: 'Belgique', identifier: 'BE' },
      ...REGIONS.map((r) => ({ '@type': 'AdministrativeArea', name: r.nameLong })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d’expertise et de rachat d’antiquités',
      itemListElement: [
        'Expertise et estimation gratuite d’objets d’art',
        'Estimation et partage de succession',
        'Rachat direct de tableaux anciens et modernes',
        'Rachat de mobilier ancien',
        'Rachat d’argenterie et d’orfèvrerie',
        'Rachat d’horlogerie ancienne et de pièces de collection',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: 'BE' } })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.name,
    inLanguage: 'fr-BE',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    areaServed: { '@type': 'Country', name: 'Belgique', identifier: 'BE' },
    provider: { '@id': ORG_ID },
  };
}
