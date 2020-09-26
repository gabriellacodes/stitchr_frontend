import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <Link to="/" className="menu-item">Home</Link>
      <Link to="/AboutPage" className="menu-item">About</Link>
      <Link to="/ContactPage" className="menu-item">Contact</Link>
    </Menu>
  );
};