import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MobilesPage from './pages/MobilesPage';
import AccessoriesPage from './pages/AccessoriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Overview from './pages/dashboard/Overview';
import QuickEnquiryModal from './components/publicModal/QuickEnquiryModal';
import CallPromptModal from './components/publicModal/CallPromptModal';
import { StoreProvider, useStore } from './context/StoreContext';

function AppContent() {
  const { 
    activeTab, 
    selectedProduct, 
    enquiryModalOpen, 
    closeEnquiryModal, 
    callModalOpen, 
    closeCallModal 
  } = useStore();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'mobiles':
        return <MobilesPage />;
      case 'accessories':
        return <AccessoriesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        return <Overview />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-paper-100 text-ink-900 flex flex-col selection:bg-deal-orange selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Dynamic Main Page Content */}
      <div className="flex-grow">
        {renderActivePage()}
      </div>

      {/* Footer (hidden on dashboard view for clean admin feel) */}
      {activeTab !== 'dashboard' && <Footer />}

      {/* Public Modals */}
      <QuickEnquiryModal
        product={selectedProduct}
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
      />

      <CallPromptModal
        isOpen={callModalOpen}
        onClose={closeCallModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}
