import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
     <img id="codepathImg" src="https://pbs.twimg.com/profile_images/1527299950073217024/H3Kw4tkF_400x400.jpg"/>
     <ul className="navButtons">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Buy Now</a></li>
    </ul>

    </nav>
  )
}
