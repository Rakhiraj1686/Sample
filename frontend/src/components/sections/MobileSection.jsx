import React, { useState } from 'react';
import { Smartphone, ArrowRight, MessageCircle, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { smartphoneTiers, generateWhatsAppLink } from '../../data/products';

export default function MobileSection() {
  const [activeTier, setActiveTier] = useState('all');

  const filteredTiers = activeTier === 'all' 
    ? smartphoneTiers 
    : smartphoneTiers.filter(t => t.id === activeTier);

  return (
    <section id="mobiles" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-3">
              Smartphone Range
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Find Your <span className="text-gradient-electric">Next Smartphone</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md mt-3 md:mt-0">
            Explore smartphones suited to your workflow, whether everyday reliability, photography, performance, or next-gen 5G.
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTier('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeTier === 'all'
                ? 'bg-brand-electric text-white shadow-glow-blue'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories ({smartphoneTiers.length})
          </button>
          {smartphoneTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                activeTier === tier.id
                  ? 'bg-brand-electric text-white shadow-glow-blue'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tier.title}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTiers.map((tier) => (
            <div
              key={tier.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-electric/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Image Preview */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-dark-950/80 backdrop-blur-md text-brand-cyan border border-white/10">
                    {tier.highlight}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-lightBlue transition-colors mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch gap-2.5">
                  <a
                    href="#contact"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Options</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={generateWhatsAppLink(`${tier.title} at Retail Deal`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-500 shadow-glow-blue transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
