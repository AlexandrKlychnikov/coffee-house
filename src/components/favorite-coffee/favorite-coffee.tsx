import * as React from "react";
import "./favorite-coffee.sass";
import coffee_1 from "@assets/images/coffee-slider-1.png";
import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";

const FavoriteCoffee = () => {
  return (
    <section className="favorite" id="favorite-coffee">
      <h2 className="favorite__heading">
        Choose your <span className="favorite__accent">favorite</span> coffee
      </h2>
      <div className="favorite__slider-container">
        <div className="favorite__slider">
          <ArrowLeft />
          <div className="slide-container">
            <div className="content-box">
              <div className="slider-image">
                <img src={coffee_1} alt="cup" />
              </div>
              <div className="description-box">
                <h4>S’mores Frappuccino</h4>
                <p className="description">
                  This new drink takes an espresso and mixes it with brown sugar
                  and cinnamon before being topped with oat milk.
                </p>
                <p className="price">$5.50</p>
              </div>
            </div>
          </div>
          <ArrowRight />
        </div>
      </div>
      <div className="controls">
        {["one", "two", "three"].map((num) => (
          <div className={`control ${num} ${num === "one" && "active"}`}></div>
        ))}
      </div>
    </section>
  );
};
export default FavoriteCoffee;
