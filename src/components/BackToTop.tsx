import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-6 z-40 p-3 bg-espresso/90 hover:bg-espresso text-porcelain border border-buttercream/20 shadow-soft-lift transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-terracotta"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
