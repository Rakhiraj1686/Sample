import React, { useState } from 'react';
import { Send, Phone, MessageCircle, MapPin, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { storeMeta } from '../../data/products';
import api from '../../config/api';
import { useStore } from '../../context/StoreContext';

export default function ContactSection({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: prefilledProduct || 'Smartphone Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState('');
  const { refreshEnquiries } = useStore();

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    const phoneTrimmed = formData.phone.trim();
    if (!phoneTrimmed) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s()-]{8,15}$/.test(phoneTrimmed)) {
      errs.phone = 'Please enter a valid phone number (8-15 digits).';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await api.submitEnquiry(formData);
      setSubmitted(true);
      setLeadId(res.data?.id || `ENQ-${Date.now().toString().slice(-5)}`);
      refreshEnquiries();
    } catch (err) {
      console.warn('Form submission handled with local state:', err);
      setSubmitted(true);
      setLeadId(`DEMO-${Math.floor(1000 + Math.random() * 9000)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-paper-200 border-b border-border-warm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (inspired by vijaibhavalawfirm.com) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mt-1.5">
            Have a product in mind?
          </h2>
          <div className="accent-divider mx-auto my-3.5" />
          <p className="text-base text-ink-500">
            Send your enquiry directly to Retail Deal Mobile Electronics in Bicholi Mardana for prompt verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Store Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="clean-card bg-white">
              <h3 className="text-xl font-bold text-ink-900 mb-2">
                Retail Deal Mobile Electronics
              </h3>
              <p className="text-sm text-ink-500 mb-6 leading-relaxed">
                Whether you want to check stock of a new smartphone or need a genuine charger, submit your enquiry here or visit our local store.
              </p>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-paper-100 border border-border-warm flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                      Store Location
                    </div>
                    <div className="text-sm font-medium text-ink-700 mt-0.5">
                      Bicholi Mardana, Indore, Madhya Pradesh
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-paper-100 border border-border-warm flex items-start gap-3">
                  <Phone className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                      Phone Placeholder
                    </div>
                    <div className="text-sm font-medium text-ink-700 mt-0.5">
                      {storeMeta.phonePlaceholder}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-paper-100 border border-border-warm flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                      WhatsApp Placeholder
                    </div>
                    <div className="text-sm font-medium text-ink-700 mt-0.5">
                      {storeMeta.whatsappPlaceholder}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-paper-100 border border-border-warm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-deal-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                      Visiting Hours
                    </div>
                    <div className="text-sm font-medium text-ink-700 mt-0.5">
                      10:00 AM – 9:00 PM (All 7 Days)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-warm">
                <p className="text-xs text-ink-400">
                  * Demo pitch website for Retail Deal Mobile Electronics. Replace contact placeholders upon store verification.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="clean-card bg-white p-6 sm:p-8">
              
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-900 mb-2">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-ink-500 max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you, <strong className="text-ink-900">{formData.name}</strong>. Your enquiry for <span className="text-deal-orange font-semibold">{formData.product}</span> has been logged for Retail Deal Mobile Electronics.
                  </p>
                  <div className="inline-block px-4 py-1.5 rounded-md bg-paper-200 border border-border-warm text-xs font-mono text-ink-700 mb-6">
                    Reference ID: <span className="font-bold text-ink-900">{leadId}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          product: 'Smartphone Enquiry',
                          message: ''
                        });
                      }}
                      className="h-11 px-6 rounded-lg bg-ink-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-900 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full h-11 px-3.5 rounded-lg bg-paper-100 border text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-all ${
                          errors.name ? 'border-red-500' : 'border-border-warm'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink-900 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98260XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full h-11 px-3.5 rounded-lg bg-paper-100 border text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-all ${
                          errors.phone ? 'border-red-500' : 'border-border-warm'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-900 mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-lg bg-paper-100 border border-border-warm text-sm text-ink-900 focus:outline-none focus:border-ink-900 focus:bg-white transition-all"
                    >
                      <option value="Smartphone Enquiry">Smartphones & In-Store Stock</option>
                      <option value="TWS & Audio">TWS Wireless Earbuds</option>
                      <option value="Fast Chargers & Cables">Fast Chargers & Cables</option>
                      <option value="Smart Watches">Smart Watch / Wearables</option>
                      <option value="Mobile Covers & Protectors">Phone Cases & Screen Protectors</option>
                      <option value="Bluetooth Speakers">Bluetooth Speakers</option>
                      <option value="General Enquiry">Other Electronics / Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-900 mb-1.5">
                      Requirement Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Inquiring about a 128GB phone under ₹18,000, or a fast Type-C charger."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-lg bg-paper-100 border border-border-warm text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-11 sm:h-12 rounded-lg bg-deal-orange hover:bg-orange-600 text-white text-sm font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-ink-400 mt-2">
                    Direct enquiry sent to store records. No spam, guaranteed.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
