import { EnquiryModel } from '../models/enquiryModel.js';

export const enquiryService = {
  createEnquiry: async ({ name, phone, product, message }) => {
    const record = EnquiryModel.create({
      name: name.trim(),
      phone: phone.trim(),
      product: product ? product.trim() : 'General Enquiry',
      message: message ? message.trim() : 'No extra message'
    });
    return record;
  },

  getAllEnquiries: async () => {
    return EnquiryModel.findAll();
  },

  getEnquiryById: async (id) => {
    return EnquiryModel.findById(id);
  }
};
