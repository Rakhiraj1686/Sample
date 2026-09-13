import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Smartphone, 
  Settings, 
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export default function Sidebar({ activeView, setActiveView }) {
  const { setActiveTab, enquiries } = useStore();

  const menuItems = [
    { id: 'overview', label: 'Lead Overview', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Customer Inquiries', icon: MessageSquare, badge: enquiries?.length || 0 },
    { id: 'store-settings', label: 'Store Verification', icon: Settings }
  ];

  return (
    <aside className="w-full lg:w-64 bg-white border-r border-border-warm p-5 flex flex-col justify-between shrink-0">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 pb-5 mb-5 border-b border-border-warm">
          <div className="w-9 h-9 rounded-xl bg-ink-900 flex items-center justify-center text-white">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-ink-900 uppercase tracking-wider">Store Admin</h3>
            <span className="text-[11px] text-ink-500">Retail Deal Indore</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive 
                    ? 'bg-ink-900 text-white shadow-sm' 
                    : 'text-ink-500 hover:text-ink-900 hover:bg-paper-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-deal-orange text-white' : 'bg-paper-200 text-ink-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Return to Public Website */}
      <div className="pt-6 border-t border-border-warm space-y-3">
        <div className="p-3 rounded-xl bg-paper-100 border border-border-warm text-[11px] text-ink-500">
          <div className="flex items-center gap-1.5 font-bold text-ink-900 mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-deal-orange" />
            <span>Pitch Demo Mode</span>
          </div>
          Live enquiry collection via MERN stack backend.
        </div>

        <button
          type="button"
          onClick={() => setActiveTab('home')}
          className="w-full h-10 px-3 rounded-lg text-xs font-semibold text-ink-900 hover:text-black bg-paper-200 hover:bg-paper-300 border border-border-warm transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Store View</span>
        </button>
      </div>
    </aside>
  );
}
