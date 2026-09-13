import React from 'react';
import { X, Phone, MapPin, AlertCircle, MessageCircle } from 'lucide-react';
import { storeMeta, generateWhatsAppLink } from '../../data/products';

export default function CallPromptModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-border-warm rounded-2xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-paper-200 hover:bg-paper-300 text-ink-700 hover:text-ink-900 transition-colors flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl bg-paper-200 text-deal-orange flex items-center justify-center shrink-0 border border-border-warm">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="section-label text-[11px] mb-0.5">STORE CONTACT</span>
            <h3 className="text-lg font-bold text-ink-900 leading-tight">Retail Deal Store Phone</h3>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-paper-100 border border-border-warm mb-4 space-y-2.5">
          <div>
            <div className="text-[11px] font-semibold text-ink-500 uppercase tracking-wider">Verified Contact Placeholder</div>
            <div className="text-base font-bold text-ink-900 mt-0.5">
              {storeMeta.phonePlaceholder}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-ink-700 pt-2 border-t border-border-warm">
            <MapPin className="w-3.5 h-3.5 text-deal-orange shrink-0" />
            <span>Bicholi Mardana, Indore, Madhya Pradesh</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5 mb-6">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            <strong>Client Pitch Demo:</strong> This placeholder will be replaced with the actual verified phone number upon store owner confirmation.
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full h-11 rounded-lg text-xs font-semibold tracking-wide text-white bg-deal-orange hover:bg-orange-600 flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp Instead</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full h-11 rounded-lg text-xs font-semibold tracking-wide text-ink-700 hover:text-ink-900 bg-paper-100 hover:bg-paper-200 border border-border-warm transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
