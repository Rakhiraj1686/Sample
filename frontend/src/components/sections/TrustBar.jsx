import React from 'react';
import { Smartphone, Headphones, Cpu, Watch } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    { title: 'Mobile Phones', icon: Smartphone, label: 'Sealed & Genuine' },
    { title: 'Accessories', icon: Headphones, label: 'Covers & Fast Power' },
    { title: 'Electronics', icon: Cpu, label: 'Everyday Personal Tech' },
    { title: 'Smart Gadgets', icon: Watch, label: 'Audio & Wearables' },
  ];

  return (
    <div className="bg-white border-b border-border-warm py-5 sm:py-6 shadow-sm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border-warm">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3 justify-center ${idx !== 0 ? 'pt-3 sm:pt-0' : ''}`}
              >
                <div className="w-9 h-9 rounded-xl bg-paper-200 border border-border-warm flex items-center justify-center text-ink-900 shrink-0">
                  <Icon className="w-4 h-4 text-deal-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold text-sm">✓</span>
                    <span className="text-sm font-bold text-ink-900">{item.title}</span>
                  </div>
                  <div className="text-[11px] font-medium text-ink-500 hidden lg:block">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
