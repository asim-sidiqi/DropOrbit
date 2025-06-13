import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to DropOrbit 🚀</h1>
      <p className="mb-6 text-gray-600 max-w-xl">
        Manage your dropshipping business easily by syncing products, managing orders, and integrating with suppliers.
      </p>
      <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
