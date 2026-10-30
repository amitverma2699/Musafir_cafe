import React from 'react';
import { cn } from '../lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicWord,
  description,
  align = 'center',
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className={cn('h-px w-6', dark ? 'bg-buttercream/40' : 'bg-terracotta')} />
          <span
            className={cn(
              'text-[11px] sm:text-xs font-semibold tracking-loose-luxury uppercase',
              dark ? 'text-buttercream/80' : 'text-cocoa'
            )}
          >
            {eyebrow}
          </span>
          {align === 'center' && (
            <span className={cn('h-px w-6', dark ? 'bg-buttercream/40' : 'bg-terracotta')} />
          )}
        </div>
      )}

      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-[1.15] tracking-tight',
          dark ? 'text-porcelain' : 'text-espresso'
        )}
      >
        {title}
        {italicWord && (
          <span className="italic font-normal block sm:inline sm:ml-2 font-serif text-terracotta">
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed max-w-2xl',
            align === 'center' ? 'mx-auto' : '',
            dark ? 'text-porcelain/75' : 'text-cocoa'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
