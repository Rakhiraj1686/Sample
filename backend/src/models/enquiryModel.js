import fs from 'fs';
import { getEnquiriesStoragePath } from '../config/db.js';

export const EnquiryModel = {
  findAll: () => {
    try {
      const filePath = getEnquiriesStoragePath();
      if (!fs.existsSync(filePath)) return [];
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data || '[]');
    } catch (err) {
      console.error('Error reading enquiries:', err);
      return [];
    }
  },

  create: (enquiryData) => {
    try {
      const filePath = getEnquiriesStoragePath();
      const current = EnquiryModel.findAll();
      const newRecord = {
        id: `ENQ-${Date.now().toString().slice(-6)}`,
        ...enquiryData,
        createdAt: new Date().toISOString(),
        status: 'Pending Verification'
      };
      current.unshift(newRecord);
      fs.writeFileSync(filePath, JSON.stringify(current, null, 2));
      return newRecord;
    } catch (err) {
      console.error('Error creating enquiry:', err);
      throw err;
    }
  },

  findById: (id) => {
    const list = EnquiryModel.findAll();
    return list.find(item => item.id === id) || null;
  }
};
