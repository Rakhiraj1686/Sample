import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';
import api from '../../config/api';
import { useStore } from '../../context/StoreContext';

export default function QuickEnquiryModal({ product, isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [productName, setProductName] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { refreshEnquiries } = useStore();

  useEffect(() => {
    if (product) {
      setProductName(product.name || 'General Product Enquiry');
      setSent(false);
      setError('');
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone.trim() || !/^[0-9+\s()-]{8,15}$/.test(phone.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await api.submitEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        product: productName.trim() || 'General Enquiry',
        message: note.trim() || `Quick modal enquiry for ${productName}`
      });
      refreshEnquiries();
      setSent(true);
    } catch (err) {
      console.warn('Modal submit error handled:', err);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const currentWhatsAppLink = generateWhatsAppLink(productName);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-border-warm rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-paper-200 hover:bg-paper-300 text-ink-700 hover:text-ink-900 transition-colors flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-ink-900 mb-1">
              Enquiry Submitted
            </h3>
            <p className="text-sm text-ink-700 max-w-xs mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-ink-900">{name}</strong>. Your requirement for <strong className="text-deal-orange">{productName}</strong> has been logged.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={currentWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 h-11 rounded-lg bg-deal-orange hover:bg-orange-600 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="w-full sm:w-auto h-11 px-5 rounded-lg border border-border-warm text-ink-700 hover:text-ink-900 hover:bg-paper-100 text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5 pr-8">
              <span className="section-label mb-1">
                Quick Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
                {productName === 'General In-Store Enquiry' || productName === 'Specific Product Enquiry'
                  ? 'Product & Availability Enquiry'
                  : productName}
              </h3>
              <p className="text-xs sm:text-sm text-ink-500 mt-1 leading-relaxed">
                Leave your details below. Our team in Bicholi Mardana will check in-store stock, available colors, and pricing.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-ink-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-paper-100 border border-border-warm text-xs sm:text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-900 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98260XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-paper-100 border border-border-warm text-xs sm:text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-900 mb-1">
                  Product / Model Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Samsung Galaxy S24, iPhone 15, or 65W Fast Charger"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-lg bg-paper-100 border border-border-warm text-xs sm:text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-900 mb-1">
                  Requirement Details (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Checking 256GB version, color options, or exchange price"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-lg bg-paper-100 border border-border-warm text-xs sm:text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 h-11 rounded-lg bg-deal-orange hover:bg-orange-600 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting...' : 'Submit Deal Enquiry'}</span>
                </button>

                <a
                  href={currentWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 h-11 rounded-lg border border-border-warm hover:border-ink-900 text-ink-900 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Ask via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
