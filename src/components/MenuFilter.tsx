import React from 'react';
import type { MenuCategoryId } from '../types';
import { menuCategories } from '../data/menuData';

interface MenuFilterProps {
  activeCategory: MenuCategoryId | 'all';
  onSelectCategory: (category: MenuCategoryId | 'all') => void;
  categoryCounts: Record<string, number>;
}

export const MenuFilter: React.FC<MenuFilterProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const tabs = [
    { id: 'all' as const, label: 'Full Selection' },
    ...menuCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-buttercream/40 border border-espresso/10 max-w-4xl mx-auto mb-10 sm:mb-14"
    >
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.id;
        const count = tab.id === 'all' 
          ? Object.values(categoryCounts).reduce((a, b) => a + b, 0)
          : categoryCounts[tab.id] || 0;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(tab.id)}
            className={`px-4 py-2 text-xs uppercase tracking-luxury font-medium transition-all duration-200 flex items-center gap-2 relative ${
              isActive
                ? 'bg-espresso text-porcelain shadow-sm'
                : 'text-espresso/70 hover:text-espresso hover:bg-espresso/5'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans ${
                isActive ? 'bg-terracotta text-white' : 'bg-espresso/10 text-espresso/60'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
