import React from 'react';
import { IconStarFilled } from '@tabler/icons-react';
import { HERO_SCROLL_ITEMS } from '../data/websiteData';

export const TrustTicker: React.FC = () => {
  // Multiply items 4 times for seamless infinite loop ticker
  const items = [
    ...HERO_SCROLL_ITEMS,
    ...HERO_SCROLL_ITEMS,
    ...HERO_SCROLL_ITEMS,
    ...HERO_SCROLL_ITEMS
  ];

  return (
    <section className="relative w-full py-6 border-y border-[#e5e0d6] bg-[#faf8f3] overflow-hidden select-none">
      <div className="flex w-full overflow-hidden">
        <div className="animate-ticker flex items-center gap-10 sm:gap-14 whitespace-nowrap">
          {items.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-10 sm:gap-14">
              <span className="font-golos text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#252522]">
                {stat}
              </span>
              <IconStarFilled className="w-3.5 h-3.5 text-[#d64918] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
