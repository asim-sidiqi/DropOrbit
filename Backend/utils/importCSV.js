const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const Product = require('../models/product');

const importProductsFromCSV = async () => {
  const results = [];
  const filePath = path.join(__dirname, '../data/products.csv');

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          // Optional: clear old data first
          await Product.deleteMany({});
          await Product.insertMany(results);
          console.log('✅ CSV data imported successfully.');
          resolve();
        } catch (err) {
          console.error('❌ Failed to import CSV:', err.message);
          reject(err);
        }
      });
  });
};

module.exports = importProductsFromCSV;
