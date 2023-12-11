import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./not-found";
import Layout from "./layout";
import Home from "./home";
import Menu from "./menu";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
