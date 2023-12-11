import * as React from "react";
import "./navbar.sass";
import Logo from "@components/logo/logo";
import cup from "@assets/icons/coffee-cup.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ["favorite coffee", "about", "mobile app", "contact us"];

  return (
    <div className="navbar">
      <Link className="logo-link" to="/">
        <Logo />
      </Link>
      <nav className="nav">
        <ul className="nav__menu">
          {menuItems.map((item) => {
            return (
              <li key={item}>
                <Link
                  to={
                    item !== "contact us"
                      ? `./#${item.split(" ").join("-")}`
                      : "#contact-us"
                  }
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="coffee-menu">
        <Link className="coffe-menu__link" to="./menu">
          <span>Menu</span>
          <img src={cup} alt="cup icon" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
