import * as React from "react";
import "./favorite-coffee.sass";
import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";
import SliderCard from "./slider-card";
import { useState } from "react";

const FavoriteCoffee = () => {
  const sliderCards = ["9", "10", "11"];
  const slides = ["one", "two", "three"];
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    setIndex((state) => (state = state > 0 ? state - 1 : state));
  };
  const handleRight = () => {
    setIndex((state) => (state = state < 2 ? state + 1 : state));
  };
  const handleControls = (newState: any) => {
    setIndex((state) => (state = newState));
  };
  return (
    <section className="favorite" id="favorite-coffee">
      <h2 className="favorite__heading">
        Choose your <span className="favorite__accent">favorite</span> coffee
      </h2>
      <div className="favorite__slider-container">
        <div className="favorite__slider">
          <ArrowLeft func={handleLeft} state={index} />
          <div className="slider-list">
            <div className={`slider-track ${slides[index]}`}>
              {sliderCards.map((card) => (
                <SliderCard id={card} key={card} />
              ))}
            </div>
          </div>
          <ArrowRight func={handleRight} state={index} />
        </div>
      </div>
      <div className="controls">
        {["one", "two", "three"].map((num, i) => (
          <div
            className={`control ${slides[index] === num && "active"}`}
            onClick={() => handleControls(i)}
            key={num}
          ></div>
        ))}
      </div>
    </section>
  );
};
export default FavoriteCoffee;
