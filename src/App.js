import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/checkout" exact element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
