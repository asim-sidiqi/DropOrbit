const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  orderedAt: {
    type: Date,
    default: Date.now
  },
  glowroadOrderId: {
    type: String
  }
});

module.exports = mongoose.model('Order', orderSchema);
