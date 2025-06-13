// src/components/OrderCard.jsx
import React from 'react';

const OrderCard = ({ customer, amount, status }) => {
  const statusColor = {
    Delivered: 'text-green-600',
    Pending: 'text-yellow-500',
    Shipped: 'text-blue-500',
    Cancelled: 'text-red-500'
  }[status] || 'text-gray-700';

  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h2 className="text-lg font-semibold">{customer}</h2>
        <p className="text-gray-600">Amount: ₹{amount}</p>
      </div>
      <span className={`font-semibold ${statusColor}`}>{status}</span>
    </div>
  );
};

export default OrderCard;
