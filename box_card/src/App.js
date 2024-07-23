import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import ShopPage from "./pages/Shop/Shop.js";
import HomePage from "./pages/Home/Home.js";
import ProductPage from "./pages/Product/Product.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <div className="container">
          <Outlet />
        </div> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
