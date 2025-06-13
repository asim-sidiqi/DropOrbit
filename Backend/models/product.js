const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  glowroadProductId: {
    type: String,
    required: true
  },
  title: String,
  description: String,
  image: String,
  price: Number,
  stock: Number,
  syncedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
