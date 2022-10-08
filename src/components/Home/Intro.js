import React from 'react'
import a from "./Logo.png"
// import "./stylish.css"

function Intro() {
  return (
      <section id="intro">
    <div className="intro-container wow fadeIn">
      <img className='headering' src={a} alt="promethean" height="40%" />
      <h1 className="mb-4 pb-0">PROMETHEAN </h1>
        <h1><span>indigenous innovation</span> </h1>
      <p className="mb-4 pb-0">Celebrating 25 years of Enlightening</p>
     
      <a href="https://www.bvrit.ac.in/" className="about-btn scrollto">Explore BVRIT</a>
    </div>
  </section>
  )
}

export default Intro