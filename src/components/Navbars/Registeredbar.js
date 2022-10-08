import React from "react";
import { Link } from "react-router-dom";

function Registeredbar() {
  return (
    <header
      id="header"
      style={{
        backgroundColor: "rgba(6, 12, 34, 0.98)",
        height: "70px",
        padding: "15px 0px",
        transition: "all 0.5s",
        position: "",
      }}
    >
      <div className="container" style={{ padding: "0px" }}>
        <div id="logo" className="pull-left">
          <h1>
           <span><a href={"/"} style={{color:"#f82249"}}> PROMETHEAN</a></span>
          </h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li><a href="#about">About</a></li> */}
            <li>
              <Link to="/all_dept_events">Events</Link>
            </li>
            {/* <li><a href="#gallery">Gallery</a></li> */}
            <li className="menu-active">
              <Link to="/registered_event">Registered Events</Link>
            </li>
            {/* <li><a href="#contact">Contact</a></li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Registeredbar;
