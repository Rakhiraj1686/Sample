import React from 'react';
import { ArrowRight } from 'lucide-react';
import { storeCategories } from '../../data/categories';
import { generateWhatsAppLink } from '../../data/products';

export default function CategorySection({ onOpenEnquiry }) {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-paper-100 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Store Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            Explore Our Categories
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            Everything you need for your everyday technology — organized and available locally.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeCategories.map((cat) => (
            <div
              key={cat.id}
              className="clean-card group flex flex-col justify-between min-h-[210px] hover:border-ink-900/25 transition-all duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold tracking-wider text-deal-orange uppercase">
                      {cat.label}
                    </span>
                    <h3 className="text-xl font-bold text-ink-900 mt-0.5 group-hover:text-deal-orange transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-paper-200 border border-border-warm shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-sm text-ink-700 mt-3 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border-warm flex items-center justify-between">
                <a
                  href={generateWhatsAppLink(cat.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-ink-900 group-hover:text-deal-orange inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {onOpenEnquiry && (
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(cat.title)}
                    className="text-xs font-medium text-ink-500 hover:text-ink-900 transition-colors"
                  >
                    Quick Form
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
