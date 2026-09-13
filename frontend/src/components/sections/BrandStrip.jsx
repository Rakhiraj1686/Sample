import React from 'react';

export default function BrandStrip() {
  const brands = [
    'Apple iPhone',
    'Samsung',
    'Vivo',
    'OnePlus',
    'Oppo',
    'Realme',
    'Xiaomi Redmi',
    'Motorola',
    'Nothing',
    'Poco',
    'boAt Audio',
    'Noise'
  ];

  return (
    <div className="bg-white border-y border-border-warm py-4 overflow-hidden select-none">
      <div className="max-w-[1220px] mx-auto px-4 flex items-center gap-6">
        
        {/* Label Tag on Left */}
        <div className="hidden sm:flex items-center gap-2 pr-6 border-r border-border-warm shrink-0">
          <span className="w-2 h-2 rounded-full bg-deal-orange" />
          <span className="text-xs font-bold uppercase tracking-wider text-ink-900">
            Top Brands
          </span>
        </div>

        {/* Scrolling Ribbon */}
        <div className="overflow-hidden flex-1 relative">
          {/* Gradient Edge Masks for Smooth Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee items-center gap-8 text-sm font-semibold text-ink-700">
            {/* Repeat twice for continuous loop */}
            {[...brands, ...brands].map((brand, idx) => (
              <span key={idx} className="flex items-center gap-6 shrink-0 whitespace-nowrap">
                <span className="hover:text-deal-orange transition-colors cursor-default">
                  {brand}
                </span>
                <span className="text-border-warm font-bold text-xs select-none">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
