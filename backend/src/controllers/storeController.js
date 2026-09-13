import { storeInfo } from '../data/initialData.js';
import { sendSuccess } from '../utils/responseHelper.js';

export const getStoreInfo = async (req, res, next) => {
  try {
    return sendSuccess(res, 'Store information fetched.', storeInfo);
  } catch (error) {
    next(error);
  }
};
