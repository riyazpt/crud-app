import express from 'express';
import {
  saveProducts,
  getProducts,
  getProductsById,
  updateProductsById,
  productDelete,
} from '../controllers/product.controller.js';

const productRoute = express.Router();
productRoute.post('/products', saveProducts);
productRoute.get('/products', getProducts);
productRoute.get('/products/:id', getProductsById);
productRoute.put('/products/:id', updateProductsById);
productRoute.delete('/products/:id', productDelete);
export default productRoute;
