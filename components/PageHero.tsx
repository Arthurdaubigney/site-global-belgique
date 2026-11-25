import type { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';
import Button from './Button';
import { CTA } from '@/lib/site';

export default function PageHero({
  title,
  lede,
  crumbs,
  cta = true,
}: {
  title: ReactNode;
  lede: string;
  crumbs: { name: string; path: string }[];
  cta?: boolean;
}) {
  return (
    <section className="hero hero--page" aria-labelledby="page-title">
      <div className="hero__text" data-enter>
        <Breadcrumb items={crumbs} />
        <h1 id="page-title">{title}</h1>
        <p className="lede">{lede}</p>
        {cta && (
          <div className="actions">
            <Button href={CTA.href}>{CTA.primary}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
