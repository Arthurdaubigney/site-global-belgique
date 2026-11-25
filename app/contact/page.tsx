import Breadcrumb from '@/components/Breadcrumb';
import TallyForm from '@/components/TallyForm';
import { BRAND, REGIONS, pageMetadata } from '@/lib/site';

const PATH = '/contact/';

export const metadata = pageMetadata({
  title: 'Demander une expertise gratuite d’antiquités en Belgique',
  description:
    'Demandez une expertise gratuite : décrivez votre objet ou votre succession, joignez des photos. Réponse rapide d’un expert, partout en Belgique.',
  path: PATH,
});

export default function Page() {
  return (
    <section className="section" aria-labelledby="page-title">
      <div className="wrap">
        <div data-enter style={{ display: 'grid', gap: 'var(--s5)', marginBottom: 'var(--s8)', maxWidth: '52rem' }}>
          <Breadcrumb items={[{ name: 'Contact', path: PATH }]} />
          <p className="kicker">Contact</p>
          <h1 id="page-title" style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.6rem)' }}>
            Demander une <em>expertise gratuite</em> d’antiquités en Belgique
          </h1>
          <p className="lede">
            Décrivez votre objet, votre collection ou votre succession. Joignez quelques photographies : un expert vous
            répond avec une première orientation, sans engagement.
          </p>
        </div>
        <div className="contact">
          <aside>
            <dl>
              <div>
                <dt>Cabinet</dt>
                <dd>{BRAND.name}</dd>
                <dd>{BRAND.district}</dd>
              </div>
              <div>
                <dt>Zone d’intervention</dt>
                <dd>{REGIONS.map((r) => r.name).join(' · ')}</dd>
              </div>
              <div>
                <dt>Ce qu’il faut joindre</dt>
                <dd>Trois à six photographies nettes, les dimensions, la signature ou le poinçon, la provenance si vous la connaissez.</dd>
              </div>
              <div>
                <dt>Langues</dt>
                <dd>Français, English. Néerlandais sur demande.</dd>
              </div>
            </dl>
          </aside>
          <TallyForm title="Demande d’expertise gratuite" />
        </div>
      </div>
    </section>
  );
}
