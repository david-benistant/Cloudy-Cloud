// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </Router>
  );
}

export default App;
