import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { popularProducts, generateWhatsAppLink } from '../../data/products';
import { useStore } from '../../context/StoreContext';

export default function FeaturedDeals() {
  const { openEnquiryModal } = useStore();

  return (
    <section id="deals" className="py-16 sm:py-20 bg-paper-200 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Current Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            Popular Products & In-Store Deals
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            Explore verified handsets, audio companions, and high-performance charging essentials available at our Bicholi Mardana shop.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="clean-card group flex flex-col justify-between overflow-hidden p-0 hover:border-ink-900/25 transition-all duration-200"
            >
              {/* Product Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-paper-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Small Orange DEAL Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-deal-orange text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 text-xs font-medium text-ink-900 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-border-warm shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink-900 group-hover:text-deal-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-ink-700 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price Label & Actions */}
                <div className="mt-6 pt-4 border-t border-border-warm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-ink-600 uppercase tracking-wide">
                      Store Offer
                    </span>
                    <span className="text-sm font-bold text-deal-orange bg-paper-200 px-3 py-1 rounded-md border border-border-warm">
                      {product.priceLabel}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={generateWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-3 rounded-lg bg-ink-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => openEnquiryModal(product)}
                      className="h-11 px-3 rounded-lg border border-border-warm hover:border-ink-900 hover:bg-paper-100 text-ink-900 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-deal-orange" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
