import { BRAND, CONTACT, REGIONS, SITE_URL } from './site';

const ORG_ID = `${SITE_URL}/#organisation`;

export function organisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: BRAND.name,
    description:
      'Estimation gratuite et rachat d’antiquités, tableaux, mobilier ancien, argenterie et horlogerie, à domicile dans toute la Belgique. Estimation et rachat lors d’une succession.',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/og.jpg`,
    ...(CONTACT.phone ? { telephone: CONTACT.phone } : {}),
    serviceType: 'Estimation et rachat d’antiquités à domicile',
    areaServed: [
      { '@type': 'Country', name: 'Belgique', identifier: 'BE' },
      ...REGIONS.map((r) => ({ '@type': 'AdministrativeArea', name: r.nameLong })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Estimation et rachat d’antiquités',
      itemListElement: [
        'Estimation gratuite d’objets d’art à domicile',
        'Estimation et rachat lors d’une succession',
        'Rachat de tableaux anciens et modernes',
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
