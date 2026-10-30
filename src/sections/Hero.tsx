import React from 'react';
import { Button } from '../components/Button';
import { scrollToSection } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-porcelain pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-buttercream/60 border border-espresso/10">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-ping" />
              <span className="text-[11px] uppercase tracking-loose-luxury text-cocoa font-semibold">
                Contemporary Atelier &amp; Specialty Espresso Bar
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.08] text-espresso tracking-tight font-normal">
              A Little More Butter. <br className="hidden sm:inline" />
              <span className="italic text-terracotta font-serif">A Lot More Soul.</span>
            </h1>

            <p className="text-base sm:text-lg text-cocoa max-w-xl leading-relaxed font-normal">
              Hand-laminated viennoiserie, slow-fermented hearth breads, and micro-lot coffees roasted with precision. We bake in intentional small batches every morning until the trays run bare.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#menu')}
              >
                Explore The Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#cakes')}
              >
                Custom Cake Enquiry
              </Button>
            </div>

            {/* Micro value badges */}
            <div className="pt-6 border-t border-espresso/10 grid grid-cols-3 gap-4 text-xs text-cocoa">
              <div className="space-y-1">
                <span className="block font-serif text-lg sm:text-xl text-espresso font-normal">
                  72-Hour
                </span>
                <span className="text-[11px] uppercase tracking-luxury text-cocoa/80">
                  Cold Lamination
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif text-lg sm:text-xl text-espresso font-normal">
                  8-Year
                </span>
                <span className="text-[11px] uppercase tracking-luxury text-cocoa/80">
                  Sourdough Mother
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-serif text-lg sm:text-xl text-espresso font-normal">
                  Daily 7 AM
                </span>
                <span className="text-[11px] uppercase tracking-luxury text-cocoa/80">
                  Fresh Batch Drops
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image */}
              <div className="relative aspect-[4/5] overflow-hidden border border-espresso/15 shadow-elevated bg-buttercream/40">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
                  alt="Freshly baked morning pastries and viennoiserie displayed at Musafir Cafe"
                  className="w-full h-full object-cover object-center"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-porcelain/95 backdrop-blur-sm p-4 border border-espresso/10 shadow-subtle">
                  <p className="font-serif italic text-espresso text-sm">
                    "Every fold is a conversation between time, flour, and churned butter."
                  </p>
                  <span className="block text-[10px] uppercase tracking-ultra-wide text-cocoa mt-1 font-semibold">
                    The Baker’s Journal
                  </span>
                </div>
              </div>

              {/* Offset Accent Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-10 w-44 lg:w-48 aspect-square overflow-hidden border-2 border-porcelain shadow-elevated bg-buttercream">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                  alt="Single origin pour-over coffee extraction"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-1 left-2 bg-espresso/90 text-buttercream text-[9px] uppercase tracking-luxury px-1.5 py-0.5">
                  V60 Slow Bar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
