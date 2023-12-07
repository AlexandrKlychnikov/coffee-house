import * as React from "react";
import "./hero.sass";
import cup from "@assets/icons/coffee-cup.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__offer">
        <h1 className="hero__heading">
          <span className="enjoy">Enjoy&nbsp;</span>
          premium coffee at our charming cafe
        </h1>
        <p className="hero__text">
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>
        <a href="./menu.html">
          <div className="hero__btn">
            <span>Menu</span>
            <img className="btn-cup" src={cup} alt="cup icon" />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
