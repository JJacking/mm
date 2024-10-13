// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import UserInfo from './pages/UserInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './pages/Product';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/board" element={<Board />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
