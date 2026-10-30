import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EnquiryForm } from '../components/EnquiryForm';
import type { EnquiryType } from '../types';
import { MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface EnquirySectionProps {
  initialType?: EnquiryType;
  initialMessage?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialType = 'general',
  initialMessage = '',
}) => {
  return (
    <section id="enquire" className="py-20 sm:py-28 bg-porcelain border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Atelier Inquiries"
          title="Plan Your Event, Custom Cake"
          italicWord="or Special Order"
          description="Whether you are dreaming of a tiered wedding cake, reserving morning pastries for a gathering, or planning a private café evening, share your vision below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form component */}
          <div className="lg:col-span-7">
            <EnquiryForm
              initialType={initialType}
              initialMessage={initialMessage}
            />
          </div>

          {/* Right Column: Information, Response Times, Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-buttercream/40 p-8 border border-espresso/10 space-y-6">
              <h3 className="font-serif text-2xl text-espresso">
                Order &amp; Booking Guidelines
              </h3>

              <div className="space-y-5 text-sm text-cocoa">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Notice Requirements</strong>
                    <span>
                      Standard morning batch pre-orders require 24 hours. Bespoke celebration cakes require at least 72 hours.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Response Window</strong>
                    <span>
                      Our concierge reviews inquiries Tuesday through Sunday. You will hear back within 24 to 48 hours.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso block">Dietary &amp; Allergies</strong>
                    <span>
                      We take dietary considerations seriously. Vegetarian and gluten-friendly options are prepared with dedicated protocols.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-espresso/10">
                <p className="text-xs text-cocoa/80 leading-relaxed mb-3">
                  Prefer direct correspondence or have an urgent query regarding today’s batch availability?
                </p>
                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-espresso">
                    Direct Email:{' '}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-terracotta underline hover:text-espresso"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="font-semibold text-espresso">
                    Café Counter:{' '}
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-terracotta underline hover:text-espresso"
                    >
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick quote callout */}
            <div className="p-6 border border-espresso/10 bg-white shadow-subtle">
              <p className="font-serif italic text-espresso text-base leading-snug">
                "We cherish being part of your anniversaries, weddings, and quiet morning milestones."
              </p>
              <span className="block text-[11px] uppercase tracking-luxury text-cocoa mt-2 font-medium">
                The Musafir Hospitality Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
