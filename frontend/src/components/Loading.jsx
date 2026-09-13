import React from 'react';
import { Smartphone } from 'lucide-react';

export default function Loading({ message = "Loading Retail Deal..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[250px] p-8 text-center">
      <div className="relative w-14 h-14 mb-4">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-electric to-brand-cyan animate-spin opacity-70 blur-sm" />
        <div className="relative w-full h-full rounded-2xl bg-dark-900 border border-brand-electric/50 flex items-center justify-center text-brand-cyan shadow-glow-blue">
          <Smartphone className="w-6 h-6 animate-pulse" />
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-300">{message}</p>
      <span className="text-[11px] text-slate-500 mt-1">Bicholi Mardana, Indore</span>
    </div>
  );
}
