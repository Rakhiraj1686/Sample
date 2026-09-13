import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageSquare, 
  Smartphone, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { storeMeta } from '../../data/products';
import Sidebar from './Sidebar';

export default function Overview() {
  const [activeView, setActiveView] = useState('overview');
  const { enquiries, refreshEnquiries, loading } = useStore();

  useEffect(() => {
    refreshEnquiries();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-paper-100 flex flex-col lg:flex-row text-ink-900">
      
      {/* Dashboard Sidebar */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-border-warm">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-deal-orange mb-1">
              <span>Retail Deal Mobile Electronics</span>
              <span>•</span>
              <span>Bicholi Mardana, Indore</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-ink-900 tracking-tight">
              {activeView === 'overview' && 'Store Inquiries & Leads Dashboard'}
              {activeView === 'enquiries' && 'All Customer Inquiries'}
              {activeView === 'store-settings' && 'Business Verification Settings'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={refreshEnquiries}
              disabled={loading}
              className="h-10 px-4 rounded-lg text-xs font-semibold text-ink-900 bg-white border border-border-warm hover:border-ink-900 transition-colors flex items-center gap-2 shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-deal-orange' : ''}`} />
              <span>Refresh Leads</span>
            </button>
          </div>
        </div>

        {/* View 1: Lead Overview & Quick Stats */}
        {activeView === 'overview' && (
          <div className="space-y-8">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="clean-card bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-ink-500">Total Leads</span>
                  <div className="w-8 h-8 rounded-lg bg-paper-200 text-ink-900 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-ink-900">{enquiries?.length || 0}</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">
                  Captured via Website Form
                </div>
              </div>

              <div className="clean-card bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-ink-500">Store Region</span>
                  <div className="w-8 h-8 rounded-lg bg-paper-200 text-ink-900 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-lg font-bold text-ink-900">Bicholi Mardana</div>
                <div className="text-xs text-ink-500 mt-1">Indore, MP</div>
              </div>

              <div className="clean-card bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-ink-500">Core Inventory</span>
                  <div className="w-8 h-8 rounded-lg bg-paper-200 text-ink-900 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-lg font-bold text-ink-900">Phones & Tech</div>
                <div className="text-xs text-ink-500 mt-1">High conversion focus</div>
              </div>

              <div className="clean-card bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-ink-500">Demo Verification</span>
                  <div className="w-8 h-8 rounded-lg bg-paper-200 text-deal-orange flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-lg font-bold text-deal-orange">Ready for Pitch</div>
                <div className="text-xs text-ink-500 mt-1">Zero fake claims</div>
              </div>
            </div>

            {/* Recent Enquiries Table */}
            <div className="clean-card bg-white p-0 overflow-hidden">
              <div className="p-5 border-b border-border-warm flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-ink-900">Recent Customer Inquiries</h3>
                  <p className="text-xs text-ink-500">Leads captured from website enquiry forms and product modals</p>
                </div>
              </div>

              {enquiries.length === 0 ? (
                <div className="p-12 text-center">
                  <MessageSquare className="w-10 h-10 text-ink-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-ink-700">No enquiries submitted yet.</p>
                  <p className="text-xs text-ink-400 mt-1">Try submitting a requirement from the contact form or product card!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-paper-100 text-[11px] uppercase tracking-wider text-ink-500 border-b border-border-warm">
                        <th className="py-3 px-5 font-semibold">Lead ID</th>
                        <th className="py-3 px-5 font-semibold">Customer Name</th>
                        <th className="py-3 px-5 font-semibold">Phone Number</th>
                        <th className="py-3 px-5 font-semibold">Requirement</th>
                        <th className="py-3 px-5 font-semibold">Time</th>
                        <th className="py-3 px-5 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-warm text-xs">
                      {enquiries.map((item, idx) => (
                        <tr key={idx} className="hover:bg-paper-100/60 transition-colors">
                          <td className="py-3.5 px-5 font-mono text-deal-orange font-bold">
                            {item.id || `ENQ-${idx + 1}`}
                          </td>
                          <td className="py-3.5 px-5 font-medium text-ink-900">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-5 text-ink-700 font-mono">
                            {item.phone}
                          </td>
                          <td className="py-3.5 px-5 text-ink-700">
                            <span className="px-2.5 py-1 rounded bg-paper-200 text-ink-900 border border-border-warm text-[11px] font-medium">
                              {item.product}
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-ink-500 text-[11px]">
                            {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Just now'}
                          </td>
                          <td className="py-3.5 px-5">
                            <a
                              href={`https://wa.me/?text=${encodeURIComponent(`Hi ${item.name}, thank you for enquiring about ${item.product} at Retail Deal Mobile Electronics, Bicholi Mardana.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors text-xs font-semibold"
                            >
                              <span>Follow up</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        )}

        {/* View 2: Enquiries List */}
        {activeView === 'enquiries' && (
          <div className="clean-card bg-white p-6">
            <h3 className="text-lg font-bold text-ink-900 mb-4">Complete Lead Log</h3>
            <div className="space-y-3">
              {enquiries.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-paper-100 border border-border-warm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-ink-900">{item.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white text-ink-700 border border-border-warm font-mono font-semibold">
                        {item.phone}
                      </span>
                    </div>
                    <div className="text-xs text-ink-700 font-medium">
                      Requirement: <span className="text-deal-orange font-semibold">{item.product}</span>
                    </div>
                    {item.message && (
                      <p className="text-xs text-ink-500 mt-1 italic">
                        "{item.message}"
                      </p>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Hi ${item.name}, thank you for contacting Retail Deal Mobile Electronics.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Lead</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 3: Store Settings Verification */}
        {activeView === 'store-settings' && (
          <div className="max-w-2xl clean-card bg-white p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-ink-900 mb-1">Owner Verification Settings</h3>
              <p className="text-xs text-ink-500">
                Enter verified details from the business owner of Retail Deal to replace demo placeholders across the website.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">Store Legal Name</label>
                <input
                  type="text"
                  disabled
                  value={storeMeta.fullName}
                  className="w-full h-11 px-4 rounded-lg bg-paper-200 border border-border-warm text-xs text-ink-700 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">Verified Store Phone</label>
                <input
                  type="text"
                  placeholder="e.g. +91 98260XXXXX"
                  defaultValue=""
                  className="w-full h-11 px-4 rounded-lg bg-paper-100 border border-border-warm text-xs text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white"
                />
                <span className="text-[11px] text-amber-600 mt-1 block">
                  Currently showing placeholder: "{storeMeta.phonePlaceholder}"
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">Verified WhatsApp Number</label>
                <input
                  type="text"
                  placeholder="e.g. +91 98260XXXXX"
                  defaultValue=""
                  className="w-full h-11 px-4 rounded-lg bg-paper-100 border border-border-warm text-xs text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white"
                />
                <span className="text-[11px] text-amber-600 mt-1 block">
                  Currently showing placeholder: "{storeMeta.whatsappPlaceholder}"
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-ink-700 mb-1">Exact Street / Shop Landmark</label>
                <input
                  type="text"
                  placeholder="e.g. Near Bicholi Mardana Square / Main Road"
                  defaultValue=""
                  className="w-full h-11 px-4 rounded-lg bg-paper-100 border border-border-warm text-xs text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:bg-white"
                />
                <span className="text-[11px] text-ink-500 mt-1 block">
                  Currently showing verified area: "Bicholi Mardana, Indore, Madhya Pradesh"
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => alert("Verification settings will be saved to your production environment configuration.")}
                  className="h-11 px-6 rounded-lg text-xs font-bold text-white bg-deal-orange hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Save Store Configurations
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
