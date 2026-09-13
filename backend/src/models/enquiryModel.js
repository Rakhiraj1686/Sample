import fs from 'fs';
import { getEnquiriesStoragePath } from '../config/db.js';

let inMemoryStore = [];

export const EnquiryModel = {
  findAll: () => {
    try {
      const filePath = getEnquiriesStoragePath();
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(data || '[]');
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return inMemoryStore;
    } catch (err) {
      console.warn('Error reading enquiries, returning in-memory:', err.message);
      return inMemoryStore;
    }
  },

  create: (enquiryData) => {
    const newRecord = {
      id: `ENQ-${Date.now().toString().slice(-6)}`,
      ...enquiryData,
      createdAt: new Date().toISOString(),
      status: 'Pending Verification'
    };

    inMemoryStore.unshift(newRecord);

    try {
      const filePath = getEnquiriesStoragePath();
      const current = EnquiryModel.findAll();
      // Avoid duplicate prepend if findAll returned inMemoryStore
      const recordsToSave = current.some(r => r.id === newRecord.id) ? current : [newRecord, ...current];
      fs.writeFileSync(filePath, JSON.stringify(recordsToSave, null, 2));
    } catch (err) {
      console.warn('Enquiry persisted in-memory (Vercel read-only fallback):', err.message);
    }

    return newRecord;
  },

  findById: (id) => {
    const list = EnquiryModel.findAll();
    return list.find(item => item.id === id) || null;
  }
};
