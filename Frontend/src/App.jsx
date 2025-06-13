import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/products" element={

          <PrivateRoute>
          <Products />
          </PrivateRoute>
          } />
        <Route path="/orders" element={
          <PrivateRoute>
          <Orders />
          </PrivateRoute>
          } />
        <Route path="/products/add" element={
          <PrivateRoute>
          <AddProduct />
          </PrivateRoute>
          } />
      </Routes>
    </Router>
  );
}

export default App;
