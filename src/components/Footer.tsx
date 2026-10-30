import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { scrollToSection } from '../lib/utils';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-porcelain pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Editorial mission */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-tight text-porcelain">
                Musafir
              </span>
              <span className="block text-[11px] tracking-ultra-wide uppercase text-buttercream/80 font-medium mt-1">
                Café &amp; Bakery · Atelier Contemporain
              </span>
            </div>
            <p className="text-buttercream/80 text-sm leading-relaxed max-w-md">
              A contemporary artisan bakery rooted in slow fermentation, Normandy butter viennoiserie, bespoke celebration cakes, and meticulously extracted specialty roasts.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-luxury text-terracotta border-b border-terracotta pb-0.5 font-semibold">
                Baking daily with soul &amp; patience
              </span>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-ultra-wide text-buttercream font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs tracking-luxury">
              <li>
                <button
                  onClick={() => scrollToSection('#menu')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Bakery Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#signatures')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Signatures
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#story')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#cakes')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Celebration Cakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Café Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#enquire')}
                  className="text-porcelain/80 hover:text-terracotta transition-colors uppercase"
                >
                  Enquire &amp; Order
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-ultra-wide text-buttercream font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              Hours
            </h4>
            <div className="space-y-2 text-xs text-porcelain/80 leading-relaxed">
              <div>
                <p className="font-semibold text-buttercream">Tuesday – Friday</p>
                <p>7:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-buttercream">Saturday – Sunday</p>
                <p>8:00 AM – 7:00 PM</p>
              </div>
              <p className="text-[11px] text-terracotta italic pt-1">
                Monday: Dough resting &amp; kitchen research
              </p>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-ultra-wide text-buttercream font-semibold">
              Visit The Atelier
            </h4>
            <div className="space-y-3 text-xs text-porcelain/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <a
                  href={siteConfig.contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.suite}<br />
                  {siteConfig.contact.address.cityStateZip}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-loose-luxury text-buttercream/60 mb-2">
                Follow Journal
              </p>
              <div className="flex flex-wrap gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-buttercream/90 hover:text-terracotta transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-terracotta/70" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-buttercream/60 gap-4">
          <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-luxury uppercase">
            <button
              onClick={() => scrollToSection('#story')}
              className="hover:text-buttercream transition-colors"
            >
              Ethics &amp; Ingredients
            </button>
            <button
              onClick={() => scrollToSection('#enquire')}
              className="hover:text-buttercream transition-colors"
            >
              Privacy &amp; Enquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
