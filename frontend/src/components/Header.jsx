import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Smartphone } from 'lucide-react';
import { storeMeta, generateWhatsAppLink } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setActiveTab, openCallModal } = useStore();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Brands', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Deals', href: '#deals' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-border-warm shadow-sm">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[74px]">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-deal-orange transition-colors">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-ink-900 leading-tight">
                RETAIL DEAL
              </span>
              <span className="text-[10px] font-bold tracking-widest text-deal-orange uppercase">
                MOBILE ELECTRONICS
              </span>
            </div>
          </a>

          {/* Desktop Navigation (High contrast text-ink-700) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-ink-700 hover:text-deal-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs: Call & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={openCallModal}
              className="h-10 px-4 rounded-lg bg-white border border-border-warm hover:border-ink-900 text-ink-900 text-xs font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-deal-orange" />
              <span>Call Store</span>
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-lg bg-deal-orange hover:bg-deal-hover text-white text-xs font-bold tracking-wide transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-lg bg-deal-orange text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-900 hover:bg-paper-200 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-warm px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-ink-900 hover:text-deal-orange py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-border-warm grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openCallModal();
              }}
              className="h-11 w-full rounded-lg border border-border-warm text-ink-900 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-deal-orange" />
              <span>Call Store</span>
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="h-11 w-full rounded-lg bg-deal-orange text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
