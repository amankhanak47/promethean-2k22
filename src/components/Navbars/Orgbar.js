import React from 'react'
import { Link } from 'react-router-dom'

function Orgbar() {
  return (
    <header
          id="header"
          style={{
            backgroundColor: "rgba(6, 12, 34, 0.98)",
            height: "70px",
            padding: "15px 0px",
            transition: "all 0.5s",
            //   position: "inherit",
            // width:"100vw"
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
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/cologin"}>Login</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- #nav-menu-container -->*/}
          </div>
        </header>
  )
}

export default Orgbar
