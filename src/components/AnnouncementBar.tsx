import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { scrollToSection } from '../lib/utils';

export const AnnouncementBar: React.FC = () => {
  const { announcement } = siteConfig;

  return (
    <aside
      aria-label="Daily Announcement"
      className="bg-espresso text-buttercream text-xs tracking-luxury py-2 px-4 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
          <Sparkles className="w-3.5 h-3.5 text-terracotta shrink-0 animate-pulse" aria-hidden="true" />
          <span className="font-medium text-porcelain/90">{announcement.message}</span>
          {announcement.subtext && (
            <span className="hidden md:inline text-buttercream/70 border-l border-white/20 pl-2">
              {announcement.subtext}
            </span>
          )}
        </div>

        {announcement.actionText && (
          <button
            onClick={() => scrollToSection(announcement.actionHref || '#enquire')}
            className="hidden sm:inline-flex items-center gap-1.5 text-terracotta hover:text-white transition-colors duration-200 uppercase font-semibold text-[11px] tracking-loose-luxury underline underline-offset-4"
          >
            <span>{announcement.actionText}</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </button>
        )}
      </div>
    </aside>
  );
};
