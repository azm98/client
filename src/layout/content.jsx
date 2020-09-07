import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import Cart from "../Views/Cart";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default Content;
