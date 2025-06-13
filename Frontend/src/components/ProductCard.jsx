// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mt-1">Price: ₹{price}</p>
      <p className="text-gray-600">In Stock: {stock}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Edit Product
      </button>
    </div>
  );
};

export default ProductCard;
