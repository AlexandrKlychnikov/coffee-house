import * as React from "react";
import products from "@utils/products.json";

interface ISliderCard {
  id: string;
}

const SliderCard = ({ id }: ISliderCard) => {
  const { name, description, price } = products.find((e) => e.id == id);
  const image = `assets/images/menu/img-${id}.png`;
  return (
    <div className="slider-card">
      <div className="slider-image">
        <img src={image} alt="cup" />
      </div>
      <div className="description-box">
        <h4>{name}</h4>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};
export default SliderCard;
