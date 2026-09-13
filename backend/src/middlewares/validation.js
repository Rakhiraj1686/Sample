import { sendError } from '../utils/responseHelper.js';

export const validateEnquiry = (req, res, next) => {
  const { name, phone } = req.body;

  if (!name || !name.trim()) {
    return sendError(res, 'Name is required.', null, 400);
  }

  const phoneRegex = /^[0-9+\s()-]{8,15}$/;
  if (!phone || !phoneRegex.test(phone.trim())) {
    return sendError(res, 'Please provide a valid phone number (8-15 digits).', null, 400);
  }

  next();
};
