import React from 'react';
import { MapPin, ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="relative bg-paper-100 py-12 sm:py-16 lg:py-20 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content (55% width / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Executive Eyebrow (inspired by vijaibhavalawfirm.com) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-warm text-xs font-bold uppercase tracking-[0.2em] text-deal-orange mb-4 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-deal-orange" />
              <span>Bicholi Mardana · Indore</span>
            </div>

            {/* Disciplined H1: 52-60px desktop (34-40px mobile), line-height 1.1 */}
            <h1 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold text-ink-900 tracking-tight leading-[1.12] mb-3">
              Smartphones, Electronics & Everyday Tech.
            </h1>

            {/* Accent Divider Bar (inspired by vijaibhavalawfirm.com) */}
            <div className="accent-divider mb-5" />

            {/* Supporting Text: 16-18px, line-height 1.6 */}
            <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-xl mb-7">
              Your trusted local destination in Bicholi Mardana for brand-new smartphones, authentic accessories, fast chargers, and smart gadgets with transparent advice and direct WhatsApp support.
            </p>

            {/* Disciplined Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a href="#categories" className="btn-primary">
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>

              {onOpenEnquiry && (
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="text-xs font-semibold text-ink-500 hover:text-ink-900 underline underline-offset-4 ml-1 transition-colors"
                >
                  Quick Lead Form
                </button>
              )}
            </div>

            {/* Stat Counters & Trust Badges (inspired by rvmobileandelectronics.com) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border-warm w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink-900 leading-none">
                  15+
                </div>
                <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider mt-1">
                  Brands Stocked
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink-900 leading-none">
                  100%
                </div>
                <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider mt-1">
                  Genuine Handsets
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink-900 leading-none text-emerald-600">
                  Instant
                </div>
                <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider mt-1">
                  WhatsApp Reply
                </div>
              </div>
            </div>

          </div>

          {/* Right Product Composition (45% width / 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[460px] aspect-[4/3.6] relative rounded-2xl bg-white border border-border-warm p-3.5 shadow-sm flex items-center justify-center overflow-hidden">
              
              {/* Product Grid Composition (Smartphone + Earbuds + Smartwatch) */}
              <div className="grid grid-cols-2 gap-3 w-full h-full">
                
                {/* Smartphone (Tall Left Tile) */}
                <div className="relative rounded-xl overflow-hidden bg-paper-200 border border-border-warm group">
                  <img
                    src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop"
                    alt="Smartphone selection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded bg-white/95 backdrop-blur-sm text-[11px] font-bold text-ink-900 border border-border-warm shadow-sm">
                    Mobiles
                  </div>
                </div>

                {/* Right Column: Earbuds top + Smartwatch bottom */}
                <div className="grid grid-rows-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden bg-paper-200 border border-border-warm group">
                    <img
                      src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
                      alt="Wireless Earbuds"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-white/95 backdrop-blur-sm text-[11px] font-bold text-ink-900 border border-border-warm shadow-sm">
                      Audio
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-paper-200 border border-border-warm group">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop"
                      alt="Smart Watch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-white/95 backdrop-blur-sm text-[11px] font-bold text-ink-900 border border-border-warm shadow-sm">
                      Wearables
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
