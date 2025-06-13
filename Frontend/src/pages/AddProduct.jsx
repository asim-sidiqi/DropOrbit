// src/pages/AddProduct.jsx
import React, { useState } from 'react';

const AddProduct = () => {
  const [form, setForm] = useState({ name: '', price: '', stock: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Product submitted:', form);
    // API call here
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input name="price" placeholder="Price" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <input name="stock" placeholder="Stock Quantity" onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
