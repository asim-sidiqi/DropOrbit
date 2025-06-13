// src/pages/Orders.jsx
import React from 'react';
import OrderCard from '../components/OrderCard';

const dummyOrders = [
  { id: 1, customer: 'John Doe', amount: 899, status: 'Delivered' },
  { id: 2, customer: 'Ravi Sharma', amount: 499, status: 'Pending' },
  { id: 3, customer: 'Ali Khan', amount: 299, status: 'Shipped' },
];

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      <div className="space-y-4">
        {dummyOrders.map(order => (
          <OrderCard key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
