import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Smartphone, MapPin } from 'lucide-react';
import { storeMeta, generateWhatsAppLink } from '../../data/products';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Mobiles', href: '#mobiles' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Electronics', href: '#categories' },
    { name: 'Deals', href: '#deals' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleCallClick = () => {
    alert(`[Demo Mode Notice]\nStore Phone: ${storeMeta.phonePlaceholder}\nLocation: ${storeMeta.location}\n\nTo configure, replace with the business owner's verified number.`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
          : 'bg-dark-950/50 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-electric to-brand-cyan flex items-center justify-center p-0.5 shadow-glow-blue transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-brand-electric group-hover:text-brand-cyan transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-wider text-base sm:text-lg text-white font-mono uppercase">
                  RETAIL DEAL
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-electric/20 text-brand-cyan font-semibold border border-brand-electric/30 hidden sm:inline-block">
                  DEMO
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-400 uppercase">
                MOBILE ELECTRONICS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-cyan transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-electric hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCallClick}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 transition-all flex items-center gap-2"
              title="Call Store"
            >
              <Phone className="w-3.5 h-3.5 text-brand-electric" />
              <span>Call Now</span>
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-electric to-brand-cyan hover:from-blue-600 hover:to-cyan-500 shadow-glow-blue transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-electric/15 text-brand-cyan border border-brand-electric/30 md:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-4 pb-6 transition-all shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Bicholi Mardana, Indore</span>
            </div>
            <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
              Store Demo
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/90 border border-transparent hover:border-slate-800 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCallClick();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-electric" />
              <span>Call Now (Add Verified Number)</span>
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-electric to-brand-cyan shadow-glow-blue flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
