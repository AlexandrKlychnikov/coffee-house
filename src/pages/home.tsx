import React, { useEffect } from "react";
import About from "@components/about/about";
import FavoriteCoffee from "@components/favorite-coffee/favorite-coffee";
import MobileApp from "@components/mobile-app/mobile-app";
import Hero from "@components/hero/hero";
import ScrollToAnchor from "@utils/ScrollToAnchor";

const Home = () => {
  return (
    <>
      <Hero />
      <FavoriteCoffee />
      <About />
      <MobileApp />
      <ScrollToAnchor />
    </>
  );
};

export default Home;
