import React from 'react'
import { Link } from 'react-router-dom'

function Eventsbar() {
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
          <div className="container">
            <div id="logo" className="pull-left" style={{ display: "flex" }}>
              {/* <img src={logo}  alt="promethean2k22" loading="lazy"  style={{marginRight:"5px"}}/> */}
              <h1>
                <span><a href={"/"} style={{color:"#f82249"}}> PROMETHEAN</a></span>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="menu-active">
                  <a href="">Events</a>
                </li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li>
                  <Link to="/registered_event">Registered Events</Link>
                </li>
               
                  <li>
                    <Link to="/login">Login</Link>{" "}
                  </li>
               
              </ul>
            </nav>
          </div>
        </header>
  )
}

export default Eventsbar
