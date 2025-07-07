import type { ReactNode } from 'react';

interface QuoteProps {
  children: ReactNode;
  className?: string;
}

function Quote({ children, className = '' }: QuoteProps) {
  const baseClasses =
    'rounded-lg p-4 my-2 md:my-4 bg-secondary/40 outline-accent/20 outline-1';

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}

export default Quote;
