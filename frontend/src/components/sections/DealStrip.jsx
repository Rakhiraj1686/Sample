import React from 'react';

export default function DealStrip() {
  const items = [
    "🔥 TODAY'S DEALS",
    "🔥 NEW ARRIVALS",
    "🔥 MOBILE ACCESSORIES",
    "🔥 SMART GADGETS",
    "🔥 VISIT OUR STORE",
    "🔥 BICHOLI MARDANA INDORE",
  ];

  return (
    <div className="bg-ink-950 py-4 overflow-hidden border-y border-black select-none">
      <div className="marquee-container">
        <div className="marquee-content flex items-center gap-10">
          {items.concat(items).map((item, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-black tracking-widest uppercase text-white whitespace-nowrap flex items-center gap-4"
            >
              <span className="text-deal-orange">{item.split(' ')[0]}</span>
              <span>{item.split(' ').slice(1).join(' ')}</span>
              <span className="text-zinc-600">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
