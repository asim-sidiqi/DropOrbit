const express = require('express');
const router = express.Router();
const {
  getOrders,
  placeOrder,
  updateOrderStatus
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all orders
router.get('/', authMiddleware, getOrders);

// Place new order
router.post('/', authMiddleware, placeOrder);

// Update status (e.g., fulfilled)
router.patch('/:id', authMiddleware, updateOrderStatus);

module.exports = router;
