import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function Nav() {  
    return (
        <nav className="menu-container">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/AboutPage" className="menu-item">About</Link>
            <Link to="/ContactPage" className="menu-item">Contact</Link>
            <Link to="/LoginPage" className="menu-item login">Login</Link>
            <Link to="/SignUp" className="menu-item signup">Sign Up</Link>
        </nav>
    );
}

export default Nav;