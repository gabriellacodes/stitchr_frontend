import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="../pages/AboutPage.jsx">
        About
      </a>

      <a className="menu-item" href="../pages/ContactPage.jsx">
        Contact Us
      </a>
    </Menu>
  );
};