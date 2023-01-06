import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";


import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  const user = false;
  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="login" element={user ? <Home /> : <Login />} />
      <Route path="register" element={user ? <Home /> : <Register />} />
      <Route path="products/:category" element={<ProductList />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />


    </Routes>
  );
}

export default App;
