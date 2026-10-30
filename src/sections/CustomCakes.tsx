import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { scrollToSection } from '../lib/utils';
import { Sparkles, Calendar, Users, Palette, ArrowRight } from 'lucide-react';

interface CustomCakesProps {
  onEnquireCake: (type: 'custom_cake') => void;
}

export const CustomCakes: React.FC<CustomCakesProps> = ({ onEnquireCake }) => {
  const handleCakeCTA = () => {
    onEnquireCake('custom_cake');
    scrollToSection('#enquire');
  };

  return (
    <section id="cakes" className="py-20 sm:py-28 bg-espresso text-porcelain relative overflow-hidden">
      {/* Background delicate textures */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EDE2D0_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Expressive Copy & Process */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Bespoke Confections"
              title="Celebration Cakes &amp; Tiered"
              italicWord="Compositions"
              description="Each celebration cake is an original architectural centerpiece. Sculpted with silky Swiss meringue buttercreams, botanical garnishes, and complex seasonal layers."
              dark
              align="left"
              className="mb-8"
            />

            {/* Cake details breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-buttercream">
                  <Calendar className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg">72-Hour Lead Time</h4>
                </div>
                <p className="text-xs text-porcelain/75 leading-relaxed">
                  We bake cakes from scratch to order. We recommend enquiring 5 to 7 days ahead for tiered designs.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-buttercream">
                  <Users className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg">Servings &amp; Tiers</h4>
                </div>
                <p className="text-xs text-porcelain/75 leading-relaxed">
                  From intimate 6-inch dinner gatherings (6–8 guests) to sculptural 3-tiered wedding statements (60–100 guests).
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-buttercream">
                  <Palette className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg">Signature Flavor Palettes</h4>
                </div>
                <p className="text-xs text-porcelain/75 leading-relaxed">
                  Pistachio Raspberry Rose, Tahitian Vanilla &amp; Salted Praline, Passionfruit Earl Grey, or Basque Saffron.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 space-y-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-buttercream">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif text-lg">Organic Florals &amp; Glazes</h4>
                </div>
                <p className="text-xs text-porcelain/75 leading-relaxed">
                  Finished with pesticide-free garden florals, gold leaf flakes, or raw seasonal stone fruits.
                </p>
              </div>
            </div>

            {/* What to provide advisory */}
            <div className="p-5 bg-buttercream/10 border-l-2 border-terracotta text-xs text-buttercream/90 space-y-1">
              <span className="font-bold uppercase tracking-luxury text-terracotta block">
                What to include in your enquiry:
              </span>
              <p>
                1. Your event date &amp; delivery vs pickup preference. &nbsp;2. Number of guests. &nbsp;3. Desired flavor notes or aesthetic theme.
              </p>
            </div>

            <div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleCakeCTA}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Enquire About a Custom Cake
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Cake Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/15 shadow-2xl bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
                  alt="Sculptural custom celebration cake decorated with botanical elements"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-espresso/90 backdrop-blur-md border border-white/15">
                  <span className="text-[10px] tracking-ultra-wide uppercase text-terracotta font-bold">
                    Signature Entremet
                  </span>
                  <h4 className="font-serif text-xl text-porcelain mt-0.5">
                    Wild Rose &amp; Pistachio Ganache
                  </h4>
                  <p className="text-xs text-buttercream/70 mt-1">
                    Custom 2-tiered wedding creation created for an intimate courtyard celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
