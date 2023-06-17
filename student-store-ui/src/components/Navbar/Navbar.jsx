import * as React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img id="codepathImg" src="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg" />
      <div className="navbar-links">
        <ul className="navButtons">
          <li className="button">
            <Link  to="/">Home</Link>
          </li>
          <li className="button"><a href="#about">About Us</a></li>
          <li className="button"><a href="#contact">Contact Us</a></li>
          <li className="button"><a>Buy Now</a></li>
        </ul>
      </div>
    </nav>
  );
}
