import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import CoffeeMenu from "@components/coffee-menu/menu";
import ScrollToAnchor from "@utils/ScrollToAnchor";

const Menu = () => {
  return (
    <>
      <ScrollToAnchor />
      <CoffeeMenu />
    </>
  );
};

export default Menu;
