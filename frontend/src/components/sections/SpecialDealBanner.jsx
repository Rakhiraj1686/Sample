import React from 'react';
import { ArrowRight, MessageCircle, FileText, PhoneCall } from 'lucide-react';
import { storeMeta, generateWhatsAppLink } from '../../data/products';
import { useStore } from '../../context/StoreContext';

export default function SpecialDealBanner({ onOpenEnquiry }) {
  const { openCallModal } = useStore();
  const whatsappUrl = generateWhatsAppLink("a specific product / accessory");

  return (
    <section className="py-12 sm:py-16 bg-paper-100 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined High-Contrast Light Card with Orange Accent */}
        <div className="clean-card bg-white border-2 border-border-warm hover:border-deal-orange/40 rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-sm transition-all duration-300">
          
          {/* Accent Indicator Bar on Left */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-deal-orange" />

          {/* Left Content */}
          <div className="max-w-2xl pl-2 sm:pl-3">
            <span className="section-label mb-2">
              Personalized Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight mt-1 mb-2">
              Looking for a specific product or model?
            </h2>
            <div className="accent-divider mb-3" />
            <p className="text-base text-ink-700 leading-relaxed max-w-xl">
              Send us your requirement and enquire directly with our store team in Bicholi Mardana. We'll check in-store stock, available color options, and current pricing for you.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 pl-2 sm:pl-3 lg:pl-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {onOpenEnquiry && (
              <button
                type="button"
                onClick={() => onOpenEnquiry("Specific Product Enquiry")}
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 text-deal-orange" />
                <span>Online Form</span>
              </button>
            )}

            <button
              type="button"
              onClick={openCallModal}
              className="h-[46px] px-4 rounded-[9px] bg-paper-200 hover:bg-paper-300 text-ink-900 text-sm font-semibold border border-border-warm transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-ink-700" />
              <span>Call Store</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
