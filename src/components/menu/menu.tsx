import React, { ReactNode } from "react";
import "./menu.sass";
import products from "@utils/products.json";
import ScrollToAnchor from "@utils/ScrollToAnchor";

const CoffeeMenu = () => {
  return (
    <>
      <ScrollToAnchor />
      <section className="coffee-menu__offer">
        <h1 className="coffee-menu__heading">
          Behind each of our cups hides an{" "}
          <span className="coffee-menu__accent">amazing surprise</span>
        </h1>
        <div className="tabs">
          <a className="tabs__link active" href="#">
            <div className="tab-pic">
              <img src="./assets/images/coffee-icon.png" alt="cup of coffee" />
            </div>
            <p className="tab-text">Coffee</p>
          </a>
          <a className="tabs__link" href="#">
            <div className="tab-pic">
              <img src="./assets/images/tea-icon.png" alt="cup of coffee" />
            </div>
            <p className="tab-text">Tea</p>
          </a>
          <a className="tabs__link" href="#">
            <div className="tab-pic">
              <img src="./assets/images/dessert-icon.png" alt="cup of coffee" />
            </div>
            <p className="tab-text">Dessert</p>
          </a>
        </div>
      </section>
      <div className="coffee-menu__container">
        {Array(8)
          .fill(1)
          .map((e, i) => e + i)
          .map((card) => {
            const { name, description, price } = products.find(
              (e) => e.id == card.toString()
            );
            return (
              <div className="card">
                <div className={`card__image coffee-${card}`}></div>
                <div className="card__description">
                  <h3 className="card__menu-item__name">{name}</h3>
                  <p className="card__menu-item__description">{description}</p>
                  <p className="card__menu-item__price">${price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default CoffeeMenu;
