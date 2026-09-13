import { productsCatalog } from '../data/initialData.js';

export const ProductModel = {
  findAll: () => {
    return productsCatalog;
  },

  findById: (id) => {
    return productsCatalog.find(p => p.id === id) || null;
  },

  findByCategory: (category) => {
    return productsCatalog.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
};
