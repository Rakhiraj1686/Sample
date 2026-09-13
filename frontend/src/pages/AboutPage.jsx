import React from 'react';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesSection from '../components/sections/ServicesSection';
import LocationSection from '../components/sections/LocationSection';
import { ShieldCheck, MapPin } from 'lucide-react';
import { storeMeta } from '../data/products';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-paper-100 text-ink-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-border-warm relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-paper-200 border border-border-warm text-deal-orange text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bicholi Mardana, Indore</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mb-4">
              About {storeMeta.fullName}
            </h1>

            <p className="text-base sm:text-lg text-ink-500 leading-relaxed mb-6">
              Located right in Bicholi Mardana, Indore, Retail Deal Mobile Electronics is dedicated to providing local customers with verified smartphone options, genuine power essentials, and reliable accessories with personalized service and direct WhatsApp enquiry support.
            </p>

            <div className="p-4 rounded-xl bg-paper-100 border border-border-warm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
              <div className="text-xs text-ink-700">
                <span className="font-bold text-ink-900">Pitch Demo Guarantee: </span>
                This website contains no fabricated reviews, exaggerated discounts, or artificial sales metrics. All information is organized to represent an authentic local retail experience.
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ServicesSection />
      <LocationSection />
    </div>
  );
}
