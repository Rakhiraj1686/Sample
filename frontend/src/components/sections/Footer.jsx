import React from 'react';
import { Smartphone, MapPin, ExternalLink, Instagram, Facebook, Shield } from 'lucide-react';
import { storeMeta } from '../../data/products';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Mobiles', href: '#mobiles' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Electronics', href: '#categories' },
    { name: 'Deals', href: '#deals' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleSocialClick = (platform) => {
    alert(`[Demo Mode Notice]\n${platform} Profile: Add verified ${platform} handle for Retail Deal Mobile Electronics.`);
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-electric to-brand-cyan flex items-center justify-center p-0.5 shadow-glow-blue">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-brand-electric" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-lg text-white font-mono uppercase">
                  RETAIL DEAL
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
                  MOBILE ELECTRONICS
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium">
              “Mobiles • Electronics • Accessories • Smart Gadgets”
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Your modern destination for smartphones, audio wearables, fast chargers, and daily tech essentials in Bicholi Mardana, Indore.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>Bicholi Mardana, Indore, Madhya Pradesh</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Verified Verification (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Connect & Follow
            </h4>
            <p className="text-xs text-slate-400">
              Social accounts will be connected upon verification by the business owner.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-electric/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram (Add Handle)</span>
              </button>

              <button
                onClick={() => handleSocialClick('Facebook')}
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-electric/50 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook (Add Page)</span>
              </button>
            </div>

            {/* Demo Notice Pill */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <Shield className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <span>
                <strong>Demo Website Concept:</strong> Crafted to pitch the retail store owner. No placeholder metrics or unverified assertions.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Retail Deal Mobile Electronics. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400">
            Designed for Local Business Excellence • Bicholi Mardana, Indore
          </p>
        </div>

      </div>
    </footer>
  );
}
