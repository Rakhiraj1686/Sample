import React from 'react';
import { MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { generateWhatsAppLink } from '../../data/products';

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-36 bg-ink-950 text-white text-center border-t border-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-deal-orange uppercase mb-8">
          <MapPin className="w-3.5 h-3.5" />
          <span>BICHOLI MARDANA · INDORE</span>
        </div>

        {/* Huge Headline */}
        <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.90] mb-12 text-white">
          LET'S FIND<br />
          YOUR NEXT<br />
          <span className="text-deal-orange">DEVICE.</span>
        </h2>

        {/* Minimal Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full bg-deal-orange hover:bg-deal-hover text-white text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-2xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>

          <a
            href="#store-location"
            className="px-10 py-5 rounded-full border border-white/30 hover:border-white text-white text-xs sm:text-sm font-black tracking-widest uppercase transition-colors"
          >
            VISIT STORE
          </a>
        </div>

      </div>
    </section>
  );
}
