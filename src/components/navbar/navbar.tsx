import * as React from "react";
import "./navbar.sass";
import Logo from "@components/logo/logo";
import cup from "@assets/icons/coffee-cup.svg";

const Navbar = () => {
  const menuItems = ["favorite coffee", "about", "mobile app", "contact us"];
  return (
    <div className="navbar">
      <Logo />
      <nav className="nav">
        <ul className="nav__menu">
          {menuItems.map((item) => {
            return (
              <li>
                <a href={"#" + item.split(" ").join("-")}>{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="coffee-menu">
        <a className="coffe-menu__link" href="./menu.html">
          <span>Menu</span>
          <img src={cup} alt="cup icon" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
