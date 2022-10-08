import React, { useEffect, useState } from 'react'
import Navbar from "../components/Home/Navbar";
import { data } from "../data";
import Departments from "../components/Home/Departments";
// import "./All.css";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Objective from "../components/Home/Objective";
import Gallery from "../components/Home/Gallery";
import Sponsors from "../components/Home/Sponsors";
import Contact from "../components/Home/Contact";
import Footer_Top from "../components/Home/Footer_Top";
import Footer_Container from "../components/Home/Footer_Container";
import Rocket from "../components/Home/Rocket";
import Events from '../components/Events/Events';
import Main_navbar from '../components/Main_navbar';
import Loading from './Loading';
import Eventsbar from '../components/Navbars/Eventsbar';
function All_Events() {
  const [loading, setloading] = useState(false)
  const [op, setop] = useState()

  const scroll = () => {
    // if (Loading === false) {
      const section = document.querySelector('#speakers');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
    if (loading) {
      setop("2px")
    }
   
  };
    console.log(localStorage.getItem("promethean_token"))
  useEffect(() => {
    scroll()
  })
  return (<>
    {loading && <> <Loading />
   
    </>}
    <div>
      <Eventsbar/>
   
      <main id="main">
        {/* <About /> */}
        <Events setloading={setloading}/>
        {/* <Objective />/
        <Gallery />
        <Sponsors />
        <Contact /> */}
      </main>
      <footer id="footer">
        <Footer_Top />
        <Footer_Container/>
      </footer>
</div>
      </>
  )
}

export default All_Events
