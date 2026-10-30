import React, { useState } from 'react';
import type { GalleryItem } from '../types';
import { galleryItems } from '../data/galleryData';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pastry' | 'coffee' | 'craft' | 'space'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all' as const, label: 'All Moments' },
    { id: 'pastry' as const, label: 'Viennoiserie' },
    { id: 'coffee' as const, label: 'Specialty Coffee' },
    { id: 'craft' as const, label: 'Artisan Craft' },
    { id: 'space' as const, label: 'The Café' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 text-[11px] uppercase tracking-luxury font-medium transition-colors ${
              selectedCategory === cat.id
                ? 'bg-espresso text-porcelain'
                : 'bg-buttercream/40 text-espresso/70 hover:text-espresso border border-espresso/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, index) => {
          const isLarge = index === 0 || index === 3;

          return (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged photo: ${item.title}`}
              className={`group relative overflow-hidden bg-buttercream/30 border border-espresso/10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta ${
                isLarge ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-porcelain" />

                {/* Hover details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] tracking-ultra-wide uppercase text-terracotta font-bold">
                        {item.category}
                      </p>
                      <h4 className="font-serif text-lg text-porcelain font-normal">
                        {item.title}
                      </h4>
                      <p className="text-xs text-porcelain/80 mt-1 line-clamp-2 max-w-sm">
                        {item.caption}
                      </p>
                    </div>
                    <div className="p-2 bg-porcelain/20 backdrop-blur-sm text-porcelain rounded-full">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub-caption below card */}
              <div className="p-3 bg-porcelain border-t border-espresso/5 flex items-center justify-between text-xs text-cocoa">
                <span className="font-medium text-espresso">{item.title}</span>
                <span className="text-[10px] uppercase tracking-wider text-cocoa/60">{item.category}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <div className="relative max-w-4xl w-full bg-porcelain overflow-hidden shadow-2xl border border-buttercream/20">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-espresso/80 hover:bg-espresso text-porcelain transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden bg-espresso/10">
              <img
                src={activeImage.image}
                alt={activeImage.alt}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-porcelain border-t border-espresso/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] tracking-ultra-wide uppercase text-terracotta font-semibold">
                    {activeImage.category}
                  </span>
                  <h3 className="font-serif text-2xl text-espresso">
                    {activeImage.title}
                  </h3>
                </div>
                <p className="text-xs tracking-luxury text-cocoa font-medium uppercase">
                  Musafir Morning Journal
                </p>
              </div>
              <p className="mt-2 text-sm text-cocoa leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
