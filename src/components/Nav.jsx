import React from "react";
import "../styles/Nav.css"
const Nav=()=>{
    return (<nav className="navbar">
        <img src="./images/alone-logo.png" alt="logo" className="logo" />
        <ul>
          <li className="nav-item">Farmers</li>
          <li className="nav-item">Factories</li>
          <li className="nav-item">Technology</li>
          <li className="nav-item">SDG</li>
          <li className="nav-item">Company</li>
        </ul>
        <button>Call For Demo</button>
      </nav>
    );
}

export default Nav;