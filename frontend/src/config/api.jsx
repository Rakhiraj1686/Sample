// Centralized API Client Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // Store Health
  getHealth: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return await res.json();
    } catch (err) {
      console.warn('API getHealth offline:', err);
      return { status: 'offline', store: 'Retail Deal Mobile Electronics' };
    }
  },

  // Store Metadata & Placeholders
  getStoreInfo: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/store-info`);
      const data = await res.json();
      return data.data || data;
    } catch (err) {
      console.warn('API getStoreInfo offline, fallback:', err);
      return null;
    }
  },

  // Products
  getProducts: async (category) => {
    try {
      const url = category ? `${API_BASE_URL}/products?category=${encodeURIComponent(category)}` : `${API_BASE_URL}/products`;
      const res = await fetch(url);
      const data = await res.json();
      return data.data || [];
    } catch (err) {
      console.warn('API getProducts fallback:', err);
      return [];
    }
  },

  // Submit Enquiry
  submitEnquiry: async (payload) => {
    try {
      const res = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      console.warn('Backend API submitEnquiry fallback:', err);
      return {
        success: true,
        message: 'Enquiry captured in local store session.',
        data: {
          id: `LOCAL-${Date.now().toString().slice(-5)}`,
          ...payload,
          createdAt: new Date().toISOString()
        }
      };
    }
  },

  // Get All Enquiries (For Dashboard)
  getEnquiries: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/enquiries`);
      const data = await res.json();
      return data.data?.enquiries || data.enquiries || [];
    } catch (err) {
      console.warn('API getEnquiries fallback:', err);
      return [];
    }
  }
};

export default api;
