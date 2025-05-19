// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CarouselPage from "./pages/CarouselPage";

const App: React.FC = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/carousel" element={<CarouselPage />} />
          </Routes>
        </main>
        <Footer />
      </ProductProvider>
    </Router>
  );
};

export default App;
