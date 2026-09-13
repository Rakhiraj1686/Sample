import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Which smartphone brands are available at your store in Indore?",
      a: "We stock all leading brands including Samsung, Apple iPhone, Vivo, Oppo, OnePlus, Realme, Xiaomi Redmi, Poco, Motorola, and Nothing. Handsets are brand-new, factory-sealed, and backed by full official brand warranties."
    },
    {
      q: "Are the accessories, chargers, and earbuds genuine?",
      a: "Yes. Every accessory—including Type-C PD fast chargers, drop-proof cases, 9H tempered glass, and TWS wireless earbuds—is authentic and sourced from certified manufacturers with verified quality."
    },
    {
      q: "Can I exchange my old phone for a new smartphone?",
      a: "Yes! We offer convenient on-the-spot device evaluation for working smartphones. Bring your phone to our Bicholi Mardana store, and we will assess its value to offset against your new purchase."
    },
    {
      q: "Do you offer free tempered glass and cover installation in-store?",
      a: "Absolutely. When you buy tempered glass or camera protectors from our shop, our team will professionally clean your screen and apply the protector with perfect alignment and zero bubbles free of charge."
    },
    {
      q: "What payment methods and EMI options do you accept?",
      a: "We accept all standard digital payment modes including UPI (Google Pay, PhonePe, Paytm), debit and credit cards, cash, and eligible card EMI options."
    },
    {
      q: "What are your store visiting hours in Bicholi Mardana?",
      a: "We are open all seven days a week from 10:00 AM to 9:00 PM. You can also send us a message on WhatsApp during business hours to check availability before visiting."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-paper-200 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Executive Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Customer FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            Frequently Asked Questions
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            Straightforward answers to the most common questions about smartphone availability, exchange, and store visits in Bicholi Mardana.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto divide-y divide-border-warm bg-white rounded-2xl border border-border-warm shadow-sm overflow-hidden">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 hover:bg-paper-100/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-ink-900 pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-border-warm flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-deal-orange text-white border-deal-orange' : 'bg-paper-200 text-ink-700'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-ink-500 leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Help Callout */}
        <div className="max-w-xl mx-auto mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-ink-500">
          <span>Have another question not listed here?</span>
          <a
            href={generateWhatsAppLink("a question about store stock")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-deal-orange hover:text-orange-600 inline-flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask us on WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
