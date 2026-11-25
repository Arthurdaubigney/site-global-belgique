import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';
import { organisationSchema, websiteSchema } from '@/lib/schema';
import { BRAND, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Maison Antiquaire : estimation et rachat à domicile', template: '%s' },
  applicationName: BRAND.name,
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: '#f5f1ea',
  width: 'device-width',
  initialScale: 1,
};

/** Balise Google Ads. Consent Mode v2 : tout est refusé tant que le visiteur n’a pas accepté. */
const GTAG = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  var c = 'denied';
  try { if (localStorage.getItem('ma-consent') === 'granted') c = 'granted'; } catch (e) {}
  gtag('consent', 'default', { ad_storage: c, ad_user_data: c, ad_personalization: c, analytics_storage: c, wait_for_update: 500 });
  gtag('js', new Date());
  gtag('config', 'AW-18503417665');
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18503417665" />
        <script dangerouslySetInnerHTML={{ __html: GTAG }} />
      </head>
      <body>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <CookieConsent />
        <JsonLd data={[organisationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
