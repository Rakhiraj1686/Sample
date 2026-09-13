import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../config/api';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load inquiries for demo dashboard
  const refreshEnquiries = async () => {
    setLoading(true);
    try {
      const data = await api.getEnquiries();
      setEnquiries(data);
    } catch (err) {
      console.error('Failed to load enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshEnquiries();
  }, []);

  const openEnquiryModal = (product = null) => {
    setSelectedProduct(product);
    setEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setSelectedProduct(null);
    setEnquiryModalOpen(false);
  };

  const openCallModal = () => setCallModalOpen(true);
  const closeCallModal = () => setCallModalOpen(false);

  return (
    <StoreContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedProduct,
        enquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        callModalOpen,
        openCallModal,
        closeCallModal,
        enquiries,
        refreshEnquiries,
        loading
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
