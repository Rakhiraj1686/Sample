import React from 'react';
import { Star } from 'lucide-react';
import { sampleCustomerReviews } from '../../data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-paper-100 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Customer Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            What Customers Say
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            Real feedback and shopping experiences from customers visiting our store in Bicholi Mardana.
          </p>
        </div>

        {/* 3 Compact Testimonial Cards (180-220px balanced height) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleCustomerReviews.map((item) => (
            <div
              key={item.id}
              className="clean-card flex flex-col justify-between min-h-[190px] hover:border-ink-900/25 transition-all duration-200"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating || 5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* 1-2 sentence quote */}
                <p className="text-sm text-ink-700 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-border-warm flex items-center justify-between">
                <span className="text-xs font-bold text-ink-900">
                  {item.author}
                </span>
                <span className="text-[11px] font-medium text-ink-500 bg-paper-200 px-2 py-0.5 rounded">
                  Sample Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
