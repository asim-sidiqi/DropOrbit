const Product = require('../models/product');

const getProducts = async (req, res) => {
  const products = await Product.find({ owner: req.userId });
  res.json(products);
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body, owner: req.userId });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error adding product' });
  }
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};

// Placeholder until we integrate GlowRoad API
const syncProducts = async (req, res) => {
  // In the future: fetch from GlowRoad and save to DB
  res.json({ message: 'Sync feature not implemented yet' });
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  syncProducts
};
