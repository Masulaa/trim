import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import "./style/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/biljeske" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
