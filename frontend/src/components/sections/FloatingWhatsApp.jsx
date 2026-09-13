import React from 'react';
import { Home, Tag, MessageCircle, Phone } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';
import { useStore } from '../../context/StoreContext';

export default function FloatingWhatsApp() {
  const { openCallModal, setActiveTab } = useStore();

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="WhatsApp Store"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span>WhatsApp Store</span>
        </a>
      </div>

      {/* Dedicated Mobile Bottom Sticky Navigation (Height 56-60px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-border-warm px-3 py-1.5 shadow-lg">
        <div className="grid grid-cols-4 gap-1">
          
          {/* 1. HOME */}
          <a
            href="#"
            onClick={() => setActiveTab('home')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-ink-500 hover:text-ink-900 transition-colors"
          >
            <Home className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-medium tracking-tight">Home</span>
          </a>

          {/* 2. DEALS */}
          <a
            href="#deals"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-ink-500 hover:text-ink-900 transition-colors"
          >
            <Tag className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-medium tracking-tight">Deals</span>
          </a>

          {/* 3. WHATSAPP */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 text-white shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
          </a>

          {/* 4. CALL */}
          <button
            type="button"
            onClick={openCallModal}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-ink-500 hover:text-ink-900 transition-colors"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-medium tracking-tight">Call</span>
          </button>

        </div>
      </div>
    </>
  );
}
