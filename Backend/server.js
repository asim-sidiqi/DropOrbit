require('dotenv').config();

const express = require('express');
const cors = require('cors');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

const importProductsFromCSV = require('./utils/importCSV');

const connectDB = require('./config/db'); // centralized MongoDB connection
connectDB(); // ✅ this connects to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('DropOrbit backend is running ✅');
});

importProductsFromCSV()
  .then(() => {
    console.log('🟢 CSV import complete, server ready to run');
  })
  .catch((err) => {
    console.error('⚠️ CSV import failed, continuing anyway...');
  });

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
