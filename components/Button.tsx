import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Button({
  href,
  children,
  variant = 'solid',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'line' | 'light';
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`}>
      <span>{children}</span>
      <svg viewBox="0 0 20 12" width="20" height="12" aria-hidden="true">
        <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </Link>
  );
}
