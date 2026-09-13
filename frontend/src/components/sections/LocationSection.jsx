import React from 'react';
import { Navigation, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { storeMeta } from '../../data/products';
import { useStore } from '../../context/StoreContext';

export default function LocationSection() {
  const { openCallModal } = useStore();

  return (
    <section id="store-location" className="py-16 sm:py-20 bg-paper-200 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Google Map Preview */}
          <div className="lg:col-span-6">
            <div className="clean-card p-2 overflow-hidden bg-white shadow-sm group">
              <div className="relative h-[320px] sm:h-[380px] w-full rounded-xl overflow-hidden bg-paper-300">
                <iframe
                  title="Retail Deal Store Location Map"
                  src="https://maps.google.com/maps?q=Bicholi%20Mardana,%20Indore,%20Madhya%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter saturate-90 contrast-95 group-hover:contrast-100 transition-all duration-300"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating map chip */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-border-warm px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 text-xs font-semibold text-ink-900">
                  <MapPin className="w-4 h-4 text-deal-orange" />
                  <span>Bicholi Mardana, Indore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Store Details & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div>
              <span className="section-label">
                Store Location
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5 mb-3">
                Visit Retail Deal Mobile Electronics
              </h2>
              <div className="accent-divider mb-5" />

              <p className="text-base text-ink-500 mb-6 leading-relaxed">
                Conveniently located in Bicholi Mardana, Indore. Walk in to explore our range of smartphones, chargers, protective covers, and smart accessories in person.
              </p>

              {/* Information Cards */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-xl bg-white border border-border-warm flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                      Store Address
                    </div>
                    <div className="text-sm font-medium text-ink-700 mt-0.5">
                      Bicholi Mardana, Indore, Madhya Pradesh
                    </div>
                    <div className="text-xs text-ink-400 mt-1">
                      (Demo Notice: Add verified shop address & landmark)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-border-warm flex items-start gap-3">
                    <Clock className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                        Visiting Hours
                      </div>
                      <div className="text-sm font-medium text-ink-700 mt-0.5">
                        Mon – Sun: 10:00 AM – 9:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-border-warm flex items-start gap-3">
                    <Phone className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                        Store Contact
                      </div>
                      <div className="text-sm font-medium text-ink-700 mt-0.5">
                        {storeMeta.phonePlaceholder}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disciplined Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={storeMeta.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 sm:h-12 px-6 rounded-lg bg-ink-900 hover:bg-black text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                type="button"
                onClick={openCallModal}
                className="h-11 sm:h-12 px-6 rounded-lg border border-border-warm hover:border-ink-900 hover:bg-white text-ink-900 text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-deal-orange" />
                <span>Call Store</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
