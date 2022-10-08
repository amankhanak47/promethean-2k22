import React from 'react'
// import Location from "./components/Home/Location";
function Location() {
  return (
    <section id="location" className="wow fadeInUp section-with-bg">
        <div className="container">
          <div className="section-header">
            <h2>Event Venue</h2>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4109957826718!2d78.25496241405597!3d17.72526349763959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc0af1ba39c677%3A0xc4ae2d2cf9b35b63!2sB%20V%20Raju%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1663826570330!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="50%" height={450} />
          <iframe src="https://drive.google.com/file/d/1b9g1p0e66cHX9fOvzvP4S-RFomQP47QO/preview" width="50%" height={450} align="right" />
        </div>
      </section>
  )
}

export default Location