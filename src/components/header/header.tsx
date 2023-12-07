import * as React from "react";
import "./header.sass";
import Navbar from "@components/navbar/navbar";
import Hero from "./hero";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Hero />
    </header>
  );
};
export default Header;
