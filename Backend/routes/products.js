const express = require('express');
const router = express.Router();
const importProductsFromCSV = require('../utils/importCSV');
const authMiddleware = require('../middleware/authMiddleware');

const {
  getProducts,
  addProduct,
  deleteProduct,
  syncProducts
} = require('../controllers/productController');

// Get all products for user
router.get('/', authMiddleware, getProducts);

// Add new product manually
router.post('/', authMiddleware, addProduct);

// Delete a product
router.delete('/:id', authMiddleware, deleteProduct);

//Sync from CSV file
router.post('/import-csv', authMiddleware, importProductsFromCSV);

// Sync from GlowRoad
router.post('/sync', authMiddleware, syncProducts);

module.exports = router;
