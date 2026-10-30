import React from 'react';
import { Button } from '../components/Button';
import { scrollToSection } from '../lib/utils';
import { Wheat, Flame, Droplets, HeartHandshake } from 'lucide-react';

export const ArtOfBaking: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-buttercream/40 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Hearth Bread & Flour Art */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden border border-espresso/15 shadow-elevated bg-porcelain">
              <img
                src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan sourdough loaf being dusted with flour before hearth baking"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-espresso/10" />
            </div>

            {/* Inset Quote Box */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 max-w-xs bg-espresso text-porcelain p-6 border border-white/10 shadow-elevated">
              <p className="font-serif italic text-sm text-buttercream leading-relaxed">
                "We don't take shortcuts with time. A slow dough tells the truth about its baker."
              </p>
              <span className="block text-[10px] uppercase tracking-ultra-wide text-terracotta mt-2 font-semibold">
                Head Baker &amp; Co-Founder
              </span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-terracotta" />
                <span className="text-xs font-semibold tracking-loose-luxury uppercase text-cocoa">
                  Our Philosophy &amp; Craft
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-espresso font-normal leading-[1.15]">
                Respecting Grain, Heat, <br />
                <span className="italic text-terracotta">and the Solitary Night Shift.</span>
              </h2>
            </div>

            <p className="text-cocoa text-base sm:text-lg leading-relaxed font-normal">
              Musafir was conceived around a single conviction: extraordinary pastry is an exercise in restraint. While the rest of the world hurries, our kitchen awakens at 3:00 AM to tend wild levain starters that have fermented across seasons.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-white border border-espresso/10 shadow-subtle space-y-2">
                <div className="flex items-center gap-2.5 text-espresso">
                  <Wheat className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg font-medium">Stoneground Flours</h4>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  Unbleached, nutrient-dense flours milled intentionally to retain natural wheat germ and nutty aromatics.
                </p>
              </div>

              <div className="p-5 bg-white border border-espresso/10 shadow-subtle space-y-2">
                <div className="flex items-center gap-2.5 text-espresso">
                  <Flame className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg font-medium">Volcanic Stone Deck</h4>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  Breads baked with high-pressure steam on dense volcanic stone hearths for crisp ears and open crumb.
                </p>
              </div>

              <div className="p-5 bg-white border border-espresso/10 shadow-subtle space-y-2">
                <div className="flex items-center gap-2.5 text-espresso">
                  <Droplets className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg font-medium">Cultured Normandy Butter</h4>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  High-fat 84% churned lactic butter creating micro-layers that expand with dramatic, honeycomb crispness.
                </p>
              </div>

              <div className="p-5 bg-white border border-espresso/10 shadow-subtle space-y-2">
                <div className="flex items-center gap-2.5 text-espresso">
                  <HeartHandshake className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg font-medium">Seasonal Terroirs</h4>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  Direct trade coffee beans sourced seasonally and roasted light to elevate vibrant floral and stone-fruit terroir.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('#visit')}
              >
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
