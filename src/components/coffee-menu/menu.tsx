import React, { ReactNode, useState } from "react";
import "./menu.sass";
import products from "@utils/products.json";
import detectMenuSectionItems from "@utils/detectMenuSectionItems";

const CoffeMenu = () => {
  const [activeTab, setActiveTab] = useState("coffee");
  const handleTabClick = (newActiveTab: string): void => {
    setActiveTab((state) => (state = newActiveTab));
  };
  const menuSections = ["coffee", "tea", "dessert"];

  const imagesOfSection = detectMenuSectionItems(activeTab);

  return (
    <>
      <section className="coffee-menu__offer">
        <h1 className="coffee-menu__heading">
          Behind each of our cups hides an{" "}
          <span className="coffee-menu__accent">amazing surprise</span>
        </h1>
        <div className="tabs">
          {menuSections.map((section) => {
            return (
              <button
                className={`tab ${activeTab === section && "active"}`}
                onClick={() => handleTabClick(section)}
              >
                <div className="tab-pic">
                  <img
                    src={`./assets/images/${section}-icon.png`}
                    alt={section}
                  />
                </div>
                <p className="tab-text">{section}</p>
              </button>
            );
          })}
        </div>
      </section>
      <div className="coffee-menu__container">
        {imagesOfSection
          .slice(0, imagesOfSection.length < 8 ? 4 : 8)
          .map((card) => {
            const { name, description, price } = products.find(
              (e) => e.id == card
            );
            return (
              <div className="card">
                <div
                  className={`card__image img-${card}`}
                  style={{
                    backgroundImage: `url(./assets/images/menu/img-${card}.png)`,
                  }}
                ></div>
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
export default CoffeMenu;
