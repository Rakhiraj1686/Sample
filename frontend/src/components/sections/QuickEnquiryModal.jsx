import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, Smartphone } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

export default function QuickEnquiryModal({ product, isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          product: product.name,
          message: `Quick modal enquiry for ${product.name}`
        })
      });
    } catch (err) {
      console.log('Handled with local demo fallback:', err);
    }

    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-dark-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Enquiry Registered!</h3>
            <p className="text-xs text-slate-300 mb-5">
              We have noted your interest in <strong>{product.name}</strong>.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={generateWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-electric to-brand-cyan flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="py-2 text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-electric/20 text-brand-cyan flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-cyan tracking-wider">Quick Product Check</span>
                <h3 className="text-base font-bold text-white">{product.name}</h3>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-5">
              Leave your number to enquire about pricing and stock at Retail Deal Mobile Electronics.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-electric"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-electric"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-brand-electric hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-glow-blue"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Quick Enquiry</span>
                </button>

                <a
                  href={generateWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Or Ask via WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
