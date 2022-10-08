import React from "react";
import { Link } from "react-router-dom";

function Homebar() {
  return (
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left" style={{ display: "flex" }}>
          {/* <img src={logo}  alt="promethean2k22" loading="lazy"  style={{marginRight:"5px"}}/> */}
          <h1>
            <span><a href={"/"} style={{color:"#f82249"}}> PROMETHEAN</a></span>
          </h1>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#speakers">Events</a>
            </li>
            {/* <li><a href="#gallery">Gallery</a></li> */}
            <li>
              <Link to="/registered_event">Registered Events</Link>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Homebar;
