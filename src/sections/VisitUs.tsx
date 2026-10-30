import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Bus } from 'lucide-react';
import { Button } from '../components/Button';

export const VisitUs: React.FC = () => {
  const { contact } = siteConfig;

  return (
    <section id="visit" className="py-20 sm:py-28 bg-buttercream/40 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Location &amp; Hours"
          title="Visit The Atelier"
          italicWord="in Person"
          description="Nestled in the historic Promenade Quarter. Step in for morning viennoiserie, quiet afternoon espresso, or to discuss your celebration cake."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Information & Opening Hours */}
          <div className="lg:col-span-6 bg-porcelain p-8 sm:p-10 border border-espresso/15 shadow-soft-lift flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso mb-2">
                  Musafir Promenade Atelier
                </h3>
                <p className="text-xs uppercase tracking-luxury text-cocoa font-semibold">
                  Demo Flagship Address
                </p>
              </div>

              {/* Contact info grid */}
              <div className="space-y-4 text-sm text-cocoa">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Street Address</strong>
                    <span>{contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Telephone</strong>
                    <a
                      href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="hover:text-terracotta transition-colors underline underline-offset-2"
                    >
                      {contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Concierge &amp; General Enquiries</strong>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-terracotta transition-colors underline underline-offset-2"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="p-5 bg-buttercream/50 border border-espresso/10 space-y-3">
                <div className="flex items-center gap-2 text-espresso font-semibold uppercase tracking-luxury text-xs">
                  <Clock className="w-4 h-4 text-terracotta" />
                  <span>Baking &amp; Service Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-espresso/90">
                  <div className="flex justify-between py-1 border-b border-espresso/10">
                    <span className="font-medium">Tuesday – Friday</span>
                    <span>7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-espresso/10">
                    <span className="font-medium">Saturday – Sunday</span>
                    <span className="font-semibold text-terracotta">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-cocoa italic">
                    <span>Monday</span>
                    <span>Closed for kitchen R&amp;D</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={contact.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block"
              >
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  leftIcon={<Navigation className="w-4 h-4" />}
                >
                  Get Directions in Google Maps
                </Button>
              </a>
            </div>
          </div>

          {/* Visual Map / Location Imagery & Transit Guide */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Visual Photo Card */}
            <div className="relative aspect-[16/10] overflow-hidden border border-espresso/15 shadow-soft-lift bg-porcelain">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Musafir Cafe seating area with natural sunlight and warm wood accents"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-porcelain">
                <span className="text-[10px] tracking-ultra-wide uppercase text-buttercream font-bold">
                  Promenade Quarter Flagship
                </span>
                <p className="font-serif text-lg text-porcelain">
                  42 Heritage Boulevard, Promenade Quarter
                </p>
              </div>
            </div>

            {/* Parking & Accessibility notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-porcelain border border-espresso/10 space-y-1.5">
                <div className="flex items-center gap-2 text-espresso font-semibold text-xs tracking-luxury uppercase">
                  <Car className="w-4 h-4 text-terracotta" />
                  <span>Parking Options</span>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  Dedicated 2-hour street parking along Heritage Boulevard, plus underground validated parking at Promenade Plaza.
                </p>
              </div>

              <div className="p-5 bg-porcelain border border-espresso/10 space-y-1.5">
                <div className="flex items-center gap-2 text-espresso font-semibold text-xs tracking-luxury uppercase">
                  <Bus className="w-4 h-4 text-terracotta" />
                  <span>Public Transit</span>
                </div>
                <p className="text-xs text-cocoa leading-relaxed">
                  2 blocks from the Metropolis Central Tram Line (Station Promenade) and Metro Bus Lines 14 and 88.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
