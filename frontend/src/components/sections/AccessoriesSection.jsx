import React from 'react';
import { 
  Zap, 
  Cable, 
  Headphones, 
  Radio, 
  Shield, 
  Maximize, 
  BatteryCharging, 
  Watch,
  MessageCircle,
  Plus
} from 'lucide-react';
import { accessoriesList, generateWhatsAppLink } from '../../data/products';

const iconMap = {
  Zap,
  Cable,
  Headphones,
  Radio,
  Shield,
  Maximize,
  BatteryCharging,
  Watch
};

export default function AccessoriesSection() {
  return (
    <section id="accessories" className="py-20 relative bg-dark-900/30 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Plus className="w-3.5 h-3.5" />
            <span>Essential Add-Ons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Complete <span className="text-gradient-electric">Your Setup</span>
          </h2>
          <p className="text-base text-slate-300">
            Keep your device powered, protected, and connected with our comprehensive range of phone accessories and everyday gear.
          </p>
        </div>

        {/* 8 Accessories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {accessoriesList.map((item, idx) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-cyan overflow-hidden flex flex-col"
              >
                {/* Visual */}
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-cyan">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">Ask for Price</span>
                    <a
                      href={generateWhatsAppLink(`${item.name} at Retail Deal`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan transition-colors flex items-center gap-1 text-xs"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold hidden sm:inline">Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
