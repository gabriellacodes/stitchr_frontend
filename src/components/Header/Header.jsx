import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../../assets/Images/stitchrlogo.png";

function Header() {
    return (
        <Link className="header" to="/">
            <img className="main-logo" src={Logo} alt="main logo"/>
        </Link>
    )
}

export default Header