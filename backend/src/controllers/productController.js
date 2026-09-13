import { ProductModel } from '../models/productModel.js';
import { sendSuccess } from '../utils/responseHelper.js';

export const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query;
    let products;
    if (category) {
      products = ProductModel.findByCategory(category);
    } else {
      products = ProductModel.findAll();
    }
    return sendSuccess(res, 'Products fetched successfully.', products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }
    return sendSuccess(res, 'Product details fetched.', product);
  } catch (error) {
    next(error);
  }
};
