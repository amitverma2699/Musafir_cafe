import React from 'react';
import type { SignatureProduct } from '../types';
import { scrollToSection } from '../lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: SignatureProduct;
  onSelectProduct?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const handleEnquire = () => {
    if (onSelectProduct) {
      onSelectProduct(product.name);
    }
    scrollToSection('#enquire');
  };

  return (
    <article className="group bg-white border border-espresso/10 hover:border-terracotta/40 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-subtle hover:shadow-soft-lift">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-buttercream/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-espresso/5 pointer-events-none" />
        
        {/* Tag & Price Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-porcelain/95 backdrop-blur-sm text-espresso text-[11px] font-medium tracking-luxury uppercase px-2.5 py-1 border border-espresso/10 shadow-sm">
            {product.tag}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="inline-block bg-espresso/90 text-buttercream font-serif text-sm px-3 py-1 tracking-wider shadow-sm">
            {product.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-porcelain">
        <div>
          {product.frenchName && (
            <p className="font-serif italic text-cocoa/80 text-xs sm:text-sm mb-1 tracking-wide">
              {product.frenchName}
            </p>
          )}
          <h3 className="font-serif text-xl sm:text-2xl text-espresso group-hover:text-terracotta transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-xs uppercase tracking-luxury text-cocoa font-medium mt-1 mb-3">
            {product.subtitle}
          </p>
          <p className="text-cocoa/90 text-sm leading-relaxed mb-5">
            {product.description}
          </p>

          {/* Flavor notes pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.flavorNotes.map((note) => (
              <span
                key={note}
                className="text-[10px] tracking-wider uppercase bg-buttercream/50 text-espresso/80 px-2 py-0.5 border border-espresso/10"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-espresso/10 flex items-center justify-between">
          <span className="text-[11px] tracking-luxury uppercase text-cocoa">
            Daily Bake Allocation
          </span>
          <button
            onClick={handleEnquire}
            className="inline-flex items-center gap-1 text-xs tracking-loose-luxury uppercase font-semibold text-terracotta hover:text-espresso transition-colors group/btn"
            aria-label={`Enquire about ${product.name}`}
          >
            <span>Pre-order / Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
