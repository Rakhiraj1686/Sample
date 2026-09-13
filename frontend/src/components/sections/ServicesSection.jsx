import React from 'react';
import { Smartphone, Shield, Zap, Headphones, Repeat, Wrench, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

export default function ServicesSection() {
  const services = [
    {
      id: 'srv-1',
      title: 'Brand-New Smartphones',
      icon: Smartphone,
      desc: '100% factory-sealed handsets from Apple, Samsung, Vivo, Oppo, OnePlus, Realme, and Redmi with official warranty.',
      badge: 'Sealed & Genuine'
    },
    {
      id: 'srv-2',
      title: 'Protective Covers & 9H Glass',
      icon: Shield,
      desc: 'Edge-to-edge tempered glass, shockproof armor cases, transparent silicone sleeves, and camera lens protectors.',
      badge: 'Drop-Tested'
    },
    {
      id: 'srv-3',
      title: 'Fast Chargers & Heavy Cables',
      icon: Zap,
      desc: 'High-wattage Type-C Power Delivery adapters, multi-port plugs, and tangle-free braided fast-charging cords.',
      badge: 'Surge Protected'
    },
    {
      id: 'srv-4',
      title: 'TWS Earbuds & Smart Watches',
      icon: Headphones,
      desc: 'Low-latency true wireless earbuds, portable Bluetooth speakers, AMOLED display fitness watches, and neckbands.',
      badge: 'Top Audio & Tech'
    },
    {
      id: 'srv-5',
      title: 'Old Phone Exchange & Valuation',
      icon: Repeat,
      desc: 'Bring your current working smartphone for on-the-spot evaluation to offset the cost of your brand-new upgrade.',
      badge: 'Spot Evaluation'
    },
    {
      id: 'srv-6',
      title: 'Free In-Store Fitting & Setup',
      icon: Wrench,
      desc: 'Get your tempered glass professionally fitted with zero air bubbles, plus initial phone configuration and transfer.',
      badge: 'Bicholi Mardana Bench'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-paper-100 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Section Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Store Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            Our Products & Store Services
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            A complete local retail experience in Bicholi Mardana — from sealed smartphones and accessories to device exchange and in-store fitting.
          </p>
        </div>

        {/* 6 Clean Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="clean-card group flex flex-col justify-between hover:border-ink-900/25 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-paper-200 border border-border-warm flex items-center justify-center text-ink-900 group-hover:bg-deal-orange group-hover:text-white group-hover:border-deal-orange transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-deal-orange bg-paper-200 px-2.5 py-1 rounded-md border border-border-warm">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-deal-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-warm flex items-center justify-between">
                  <a
                    href={generateWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ink-900 group-hover:text-deal-orange inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Enquire Availability</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <span className="text-[11px] font-medium text-ink-500">
                    In-Store
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
