import React, { useEffect } from "react";
import About from "@components/about/about";
import FavoriteCoffee from "@components/favorite-coffee/favorite-coffee";
import MobileApp from "@components/mobile-app/mobile-app";
import Hero from "@components/hero/hero";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [key, hash]);
  return (
    <>
      <Hero />
      <FavoriteCoffee />
      <About />
      <MobileApp />
    </>
  );
};

export default Home;
