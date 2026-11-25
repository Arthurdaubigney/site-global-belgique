import Breadcrumb from '@/components/Breadcrumb';
import TallyForm from '@/components/TallyForm';
import { CONTACT, REGIONS, TRAVEL, pageMetadata } from '@/lib/site';

const PATH = '/contact/';

export const metadata = pageMetadata({
  title: 'Demander une estimation gratuite d’antiquités',
  description:
    'Demandez une estimation gratuite : décrivez votre objet ou votre succession et joignez des photos. Nous nous déplaçons à domicile dans toute la Belgique.',
  path: PATH,
});

export default function Page() {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="wrap">
        <div data-enter style={{ display: 'grid', gap: 'var(--s5)', marginBottom: 'var(--s7)', maxWidth: '52rem' }}>
          <Breadcrumb items={[{ name: 'Contact', path: PATH }]} />
          <h1 id="page-title" style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.6rem)' }}>
            Demander une <em>estimation gratuite</em> d’antiquités
          </h1>
          <p className="lede">
            Décrivez votre objet, votre collection ou votre succession et joignez quelques photographies. {TRAVEL}
          </p>
        </div>
        <div className="contact">
          <aside>
            <dl>
              {CONTACT.phone && (
                <div>
                  <dt>Téléphone</dt>
                  <dd>
                    <a className="contact__phone" href={CONTACT.phoneHref}>
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt>Où nous nous déplaçons</dt>
                <dd>{REGIONS.map((r) => r.name).join(' · ')}</dd>
              </div>
              <div>
                <dt>Ce qu’il faut joindre</dt>
                <dd>Quelques photographies nettes, les dimensions, la signature ou le poinçon, la provenance si vous la connaissez.</dd>
              </div>
            </dl>
          </aside>
          <TallyForm title="Demande d’estimation gratuite" minHeight={600} />
        </div>
      </div>
    </section>
  );
}
