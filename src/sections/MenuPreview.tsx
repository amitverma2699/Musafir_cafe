import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '../data/menuData';
import type { MenuCategoryId, MenuItem } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { MenuFilter } from '../components/MenuFilter';
import { Button } from '../components/Button';
import { scrollToSection } from '../lib/utils';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface MenuPreviewProps {
  onSelectItemForEnquiry?: (itemName: string) => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({ onSelectItemForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | 'all'>('all');

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    menuItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleItemEnquiry = (item: MenuItem) => {
    if (onSelectItemForEnquiry) {
      onSelectItemForEnquiry(item.name);
    }
    scrollToSection('#enquire');
  };

  const activeCategoryMeta = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-porcelain border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Carte du Jour"
          title="Daily Bakery &amp; Coffee"
          italicWord="Selections"
          description="Every morning our trays are filled with freshly turned viennoiserie, hearth loaves, delicate entremets, and slow-drip roasts. Batch availability resets daily."
        />

        {/* Filter Navigation */}
        <MenuFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* Category Description Banner */}
        {activeCategoryMeta && (
          <div className="max-w-3xl mx-auto mb-10 text-center px-4">
            <p className="font-serif italic text-lg sm:text-xl text-espresso/90">
              "{activeCategoryMeta.tagline}"
            </p>
          </div>
        )}

        {/* Menu Items Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group border-b border-espresso/10 pb-6 flex flex-col justify-between hover:border-terracotta/40 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-espresso group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    {item.isSignature && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-luxury bg-terracotta/10 text-terracotta px-2 py-0.5 font-bold">
                        <Sparkles className="w-2.5 h-2.5" />
                        Signature
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-lg text-espresso shrink-0 font-medium tracking-wide">
                    {item.price}
                  </span>
                </div>

                {item.frenchName && (
                  <p className="font-serif italic text-xs text-cocoa/75 mt-0.5">
                    {item.frenchName}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-cocoa mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[11px]">
                <div className="flex flex-wrap gap-1.5">
                  {item.dietary?.map((diet) => (
                    <span
                      key={diet}
                      className="text-[10px] text-cocoa/70 bg-buttercream/40 px-2 py-0.5 border border-espresso/5"
                    >
                      {diet}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleItemEnquiry(item)}
                  className="text-terracotta hover:text-espresso font-semibold uppercase tracking-luxury inline-flex items-center gap-1 transition-colors group/link"
                  aria-label={`Enquire or reserve ${item.name}`}
                >
                  <span>Pre-order</span>
                  <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on dietary / large batches */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 bg-buttercream/30 border border-espresso/10 space-y-3">
          <p className="text-xs text-cocoa leading-relaxed">
            All our viennoiserie is rolled on marble benches in an artisan kitchen that handles tree nuts, dairy, and sesame. Please notify us in advance regarding severe allergies.
          </p>
          <div className="flex items-center justify-center gap-4 pt-1">
            <Button
              variant="dark"
              size="sm"
              onClick={() => scrollToSection('#enquire')}
            >
              Catering &amp; Group Orders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
