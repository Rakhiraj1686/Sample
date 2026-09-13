import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUpRight, ShieldCheck, LayoutDashboard } from 'lucide-react';
import { storeMeta, generateWhatsAppLink } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function Footer() {
  const { setActiveTab } = useStore();

  return (
    <footer className="bg-white border-t border-border-warm pt-14 pb-24 md:pb-12 text-ink-900">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border-warm">
          
          {/* Brand & Store Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                RD
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-ink-900 leading-tight">
                  Retail Deal
                </span>
                <span className="text-[11px] font-semibold text-deal-orange uppercase tracking-wider">
                  Mobile Electronics
                </span>
              </div>
            </div>

            <p className="text-sm text-ink-500 max-w-sm leading-relaxed">
              Your trusted local destination for smartphones, authentic accessories, fast chargers, and smart gadgets in Bicholi Mardana, Indore.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-ink-700 pt-1">
              <MapPin className="w-4 h-4 text-deal-orange shrink-0 mt-0.5" />
              <span>Bicholi Mardana, Indore, Madhya Pradesh</span>
            </div>

            <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-paper-200 border border-border-warm text-xs text-ink-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Local Retail Demo Website Concept</span>
            </div>
          </div>

          {/* Quick Categories (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-ink-500">
              <li>
                <a href="#categories" className="hover:text-deal-orange transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-deal-orange transition-colors">
                  Accessories & Covers
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-deal-orange transition-colors">
                  Audio & TWS Earbuds
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-deal-orange transition-colors">
                  Fast Chargers & Cables
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-deal-orange transition-colors">
                  Smart Watches & Wearables
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support & Enquiry (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-4">
              Store Enquiry
            </h4>
            <p className="text-sm text-ink-500 leading-relaxed">
              Directly verify product availability, variants, and current store offers:
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-lg bg-paper-200 hover:bg-paper-300 border border-border-warm text-ink-900 text-xs font-semibold tracking-wide flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Enquiries</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-ink-900" />
              </a>

              <a
                href={storeMeta.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-lg bg-paper-200 hover:bg-paper-300 border border-border-warm text-ink-900 text-xs font-semibold tracking-wide flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-deal-orange" />
                  <span>Get Directions on Google Maps</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-400 group-hover:text-ink-900" />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveTab('dashboard')}
                className="text-xs font-semibold text-deal-orange hover:text-orange-600 inline-flex items-center gap-1.5 transition-colors"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>View Pitch Enquiries Dashboard</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <p>
            © 2026 Retail Deal Mobile Electronics. All rights reserved.
          </p>
          <p className="text-ink-400">
            Demo presentation website • Bicholi Mardana, Indore
          </p>
        </div>

      </div>
    </footer>
  );
}
