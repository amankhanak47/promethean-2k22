import React from 'react'
import { Link } from 'react-router-dom'


function Login_nav({name}) {
  return (
        <header id="header" style={{backgroundColor:"rgba(6, 12, 34, 0.98)",height:"70px",padding:"15px 0px",transition: "all 0.5s",position:"" }}>
    <div className="container" style={{padding:"0px"}}>

      <div id="logo" className="pull-left">
          <h1><span>PROMETHEAN</span></h1>
    
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li ><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li>
          <li><a href="#speakers">Events</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li> */}
          <li className="menu-active"><Link to="/login">{name}</Link></li>
         
        </ul>
      </nav>{/* <!-- #nav-menu-container -->*/}
    </div>
  </header>
  )
}

export default Login_nav
