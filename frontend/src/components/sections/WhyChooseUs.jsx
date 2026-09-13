import React from 'react';
import { Check, MessageSquare, MapPin, Users, ShieldCheck } from 'lucide-react';
import { whyChoosePoints } from '../../data/products';

const iconMap = {
  Check,
  MessageSquare,
  MapPin,
  Users
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-paper-100 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <span className="section-label">
              Why Retail Deal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5 leading-tight">
              Everything you need, from one local store.
            </h2>
            <div className="accent-divider my-3.5" />
            <p className="text-base text-ink-500 mt-4 leading-relaxed">
              Retail Deal Mobile Electronics brings genuine smartphones, reliable accessories, and smart gadgets with direct WhatsApp assistance right to Bicholi Mardana, Indore.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-paper-200 border border-border-warm flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-border-warm flex items-center justify-center text-deal-orange shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-ink-900">
                  Local Store Advantage
                </h4>
                <p className="text-xs text-ink-500 mt-1 leading-normal">
                  In-person inspection, quick stock verification, and straightforward local support without long waiting times.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Rows with Dividers */}
          <div className="lg:col-span-7 divide-y divide-border-warm bg-white rounded-2xl border border-border-warm p-6 sm:p-8 shadow-sm">
            {whyChoosePoints.map((point, idx) => {
              const Icon = iconMap[point.icon] || Check;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-4 ${idx === 0 ? 'pb-6' : 'py-6'} ${idx === whyChoosePoints.length - 1 ? 'pb-0' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-paper-200 border border-border-warm flex items-center justify-center text-ink-900 shrink-0">
                    <Icon className="w-5 h-5 text-deal-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-ink-900">
                      {point.title}
                    </h3>
                    <p className="text-sm text-ink-500 mt-1 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
