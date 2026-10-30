import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Gallery } from '../components/Gallery';

export const CafeExperience: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-buttercream/30 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Atelier &amp; Ambiance"
          title="The Café Experience"
          italicWord="&amp; Moments"
          description="A sunlit sanctuary where warm brioche aromas meet the hiss of steam wands. Designed with natural oak, hand-thrown ceramics, and linen textures."
        />

        <Gallery />
      </div>
    </section>
  );
};
