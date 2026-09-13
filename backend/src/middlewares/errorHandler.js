import { sendError } from '../utils/responseHelper.js';

export const errorHandler = (err, req, res, next) => {
  console.error('[Server Error]:', err);
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return sendError(res, message, err, status);
};
