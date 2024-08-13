import React from 'react';
import "./navbar.css";


function Navbar() {
  return (
    <div className="navbar">
        <span className="brand_name">
        Deserts
        </span>
      

      <div className="navbar_links">
        <a href="./home" className="navbar_link">
            Home
        </a>

        <a href="./about" className="navbar_link">
            About
        </a>

        <a href="./contact" className="navbar_link">
            Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
