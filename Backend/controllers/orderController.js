const Order = require('../models/order');

const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.userId }).populate('product');
  res.json(orders);
};

const placeOrder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body, user: req.userId });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error placing order' });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status' });
  }
};

module.exports = {
  getOrders,
  placeOrder,
  updateOrderStatus
};
