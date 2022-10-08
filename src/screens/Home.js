import React, { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import { data } from "../data";
import Departments from "../components/Home/Departments";
import "./All.css";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Objective from "../components/Home/Objective";
import Gallery from "../components/Home/Gallery";
import Sponsors from "../components/Home/Sponsors";
import Contact from "../components/Home/Contact";
import Footer_Top from "../components/Home/Footer_Top";
import Footer_Container from "../components/Home/Footer_Container";
import Rocket from "../components/Home/Rocket";
import Main_navbar from "../components/Main_navbar";
import Location from "../components/Home/Location";
import Cheifs from "../components/Home/Cheifs";
import Homebar from "../components/Navbars/Homebar";
import Central from "../components/Home/Central";
import Loading from "./Loading";

function Home() {
  const [loading,setloading]=useState(false)
  console.log(localStorage.getItem("promethean_token"))
  useEffect(() => {
    // window.location.reload(true)
    
  },[])
  return (
    <>
      {loading && <Loading />}
      <Homebar/>
      <Intro />
      <main id="main">
        <About />
        <Central  setloading={setloading} />
        <Departments />
        <Objective />
        <Cheifs/>
        <Location/>
        <Sponsors />
        <Contact />
        <Gallery />
      </main>
      <footer id="footer">
        <Footer_Top />
        <Footer_Container/>
      </footer>
      <Rocket/>
    </>
  );
}

export default Home;
