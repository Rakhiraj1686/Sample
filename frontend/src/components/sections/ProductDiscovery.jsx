import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { discoveryItems, generateWhatsAppLink } from '../../data/products';

export default function ProductDiscovery() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-black tracking-widest text-deal-orange uppercase">
            INSTANT DISCOVERY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-ink-900 tracking-tighter uppercase mt-2">
            WHAT ARE YOU<br />LOOKING FOR?
          </h2>
        </div>

        {/* Large Clickable Interactive Text Options */}
        <div className="divide-y divide-border-warm border-y border-ink-900">
          {discoveryItems.map((item, idx) => (
            <a
              key={item.id}
              href={generateWhatsAppLink(item.enquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-6 sm:py-8 flex items-center justify-between hover:bg-paper-200 transition-colors px-4 -mx-4 sm:px-6 sm:-mx-6"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="text-2xl sm:text-4xl">{item.icon}</span>
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-900 uppercase group-hover:text-deal-orange group-hover:translate-x-2 transition-all duration-200">
                  {item.label}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-black tracking-widest uppercase text-ink-400 group-hover:text-ink-900">
                  ENQUIRE NOW
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ink-900 group-hover:bg-deal-orange group-hover:border-deal-orange group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
