import { enquiryService } from '../service/enquiryService.js';
import { sendSuccess, sendError } from '../utils/responseHelper.js';

export const createEnquiry = async (req, res, next) => {
  try {
    const { name, phone, product, message } = req.body;
    const enquiry = await enquiryService.createEnquiry({ name, phone, product, message });
    return sendSuccess(res, 'Enquiry submitted successfully. Store team will contact you shortly.', enquiry, 201);
  } catch (error) {
    next(error);
  }
};

export const getAllEnquiries = async (req, res, next) => {
  try {
    const enquiries = await enquiryService.getAllEnquiries();
    return sendSuccess(res, 'Enquiries retrieved successfully.', {
      count: enquiries.length,
      enquiries
    });
  } catch (error) {
    next(error);
  }
};
