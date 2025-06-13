import React from 'react';
import { Link } from 'react-router-dom';
import { FiBox, FiShoppingCart, FiPlusCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';


const Dashboard = () => {

  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      console.log(data); // You can display this on UI
    } catch (err) {
      console.error('Failed to fetch profile', err);
    }
  };

  fetchProfile();
}, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">DropOrbit Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/products" className="bg-[#0D7385] text-white p-6 rounded-xl shadow hover:bg-blue-700 transition">
          <FiBox className="text-3xl mb-3" />

          <h2 className="text-xl font-semibold">View Products</h2>
          <p className="text-sm mt-2">Manage and sync your product listings.</p>
        </Link>

        <Link to="/orders" className="bg-[#0D7385] text-white p-6 rounded-xl shadow hover:bg-blue-700 transition">
          <FiShoppingCart className="text-3xl mb-3" />
          <h2 className="text-xl font-semibold">View Orders</h2>
          <p className="text-sm mt-2">See incoming customer orders and status.</p>
        </Link>

        <Link to="/products/add" className="bg-[#0D7385] text-white p-6 rounded-xl shadow hover:bg-blue-700 transition">
          <FiPlusCircle className="text-3xl mb-3" />
          <h2 className="text-xl font-semibold">Add Product</h2>
          <p className="text-sm mt-2">Manually add a new product.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
