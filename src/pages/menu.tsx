import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import CoffeeMenu from "./coffee-menu";

const Menu = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Layout />} />
      <Route index element={<CoffeeMenu />} />
    </Routes>
  );
};

export default Menu;
