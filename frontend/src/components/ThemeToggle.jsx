import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    // Dark theme is the recommended signature look for Retail Deal
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
      title="Store Visual Mode (Signature Dark)"
    >
      {dark ? <Moon className="w-4 h-4 text-brand-cyan" /> : <Sun className="w-4 h-4 text-amber-400" />}
    </button>
  );
}
