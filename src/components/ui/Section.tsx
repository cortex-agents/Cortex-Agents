import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'tight' | 'standard' | 'loose';
  hasTopBorder?: boolean;
  hasBottomBorder?: boolean;
}

export function Section({
  children,
  className,
  spacing = 'standard',
  hasTopBorder = false,
  hasBottomBorder = false,
  ...props
}: SectionProps) {
  
  const spacingClasses = {
    tight: 'py-20',
    standard: 'py-20 md:py-28',
    loose: 'py-24 md:py-32 lg:py-40',
  };

  return (
    <section
      className={cn(
        "w-full px-6 md:px-12 lg:px-16 mx-auto max-w-5xl",
        spacingClasses[spacing],
        hasTopBorder && "border-t border-border",
        hasBottomBorder && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
