import Button from './Button';
import { CTA } from '@/lib/site';

export default function CtaBand({
  title = 'Un objet à faire expertiser, une succession à régler ?',
  text = 'Décrivez votre demande en deux minutes. Un expert vous répond avec une première estimation, sans engagement, où que vous soyez en Belgique.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="band band--dark cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-band__inner">
        <h2 id="cta-title" className="h2">
          {title}
        </h2>
        <div>
          <p className="lede">{text}</p>
          <div className="actions">
            <Button href={CTA.href} variant="light">
              {CTA.primary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
