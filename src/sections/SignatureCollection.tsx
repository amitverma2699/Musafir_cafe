import React from 'react';
import { signatureProducts } from '../data/signatureProducts';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { scrollToSection } from '../lib/utils';
import { ArrowRight } from 'lucide-react';

interface SignatureCollectionProps {
  onSelectProduct?: (productName: string) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="signatures" className="py-20 sm:py-28 bg-porcelain border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Daily Showcase"
          title="Signatures of the Atelier"
          italicWord="&amp; Oven"
          description="Crafted with single-estate flours, Normandy AOP butter, and unhurried patience. Each piece reflects our unyielding commitment to texture and nuance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {signatureProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => scrollToSection('#menu')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Daily Menu
          </Button>
        </div>
      </div>
    </section>
  );
};
