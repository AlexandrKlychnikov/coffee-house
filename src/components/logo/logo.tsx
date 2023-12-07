import * as React from "react";
import "./logo.sass";
import resource from "@assets/images/resource.png";

const Logo = () => {
  return (
    <div className="logo">
      <div className="ellipse"></div>
      <div className="resource">
        <img src={resource} alt="label" />
      </div>
      <div className="brand">COFFEE HOUSE</div>
    </div>
  );
};
export default Logo;
