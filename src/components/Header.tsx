import React, { useState, useEffect, useRef } from 'react';
import { Menu as MenuIcon, X, ArrowUpRight, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Button } from './Button';
import { scrollToSection } from '../lib/utils';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Our Story', href: '#story' },
    { label: 'Custom Cakes', href: '#cakes' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  // Scroll detection for sticky navigation shadow / backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href, 75);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-porcelain/95 backdrop-blur-md shadow-subtle border-b border-espresso/10 py-3.5'
          : 'bg-porcelain border-b border-espresso/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus-visible:outline-none"
            aria-label={`${siteConfig.brandName} - Return to top`}
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-espresso group-hover:text-terracotta transition-colors duration-200">
              Musafir
            </span>
            <span className="text-[10px] tracking-ultra-wide uppercase text-cocoa font-medium -mt-1">
              Café &amp; Bakery
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs tracking-loose-luxury uppercase text-espresso/80 hover:text-terracotta font-medium transition-colors duration-200 py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-xs tracking-luxury text-cocoa hover:text-espresso transition-colors font-medium py-2 px-2"
              aria-label={`Call us at ${siteConfig.contact.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span className="hidden xl:inline">{siteConfig.contact.phoneFormatted}</span>
            </a>
            
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('#enquire')}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Enquire
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              className="sm:hidden px-3 py-1.5 text-[11px]"
              onClick={() => handleNavClick('#enquire')}
            >
              Enquire
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-espresso hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta rounded"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="fixed inset-0 top-[60px] sm:top-[72px] z-40 bg-porcelain flex flex-col justify-between p-6 overflow-y-auto lg:hidden border-t border-espresso/10 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-4 pt-4">
            <p className="text-[11px] tracking-ultra-wide uppercase text-cocoa/70 font-semibold mb-2">
              Explore Musafir
            </p>
            <nav className="flex flex-col divide-y divide-espresso/5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="py-4 text-left font-serif text-2xl text-espresso hover:text-terracotta flex items-center justify-between group transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-cocoa/40 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-espresso/10 space-y-4">
            <div className="space-y-1 text-xs text-cocoa">
              <p className="font-semibold text-espresso">{siteConfig.contact.address.full}</p>
              <p>{siteConfig.hours.weekday}</p>
              <p className="text-terracotta font-medium">{siteConfig.hours.weekend}</p>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => handleNavClick('#enquire')}
            >
              Reserve or Enquire Online
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
