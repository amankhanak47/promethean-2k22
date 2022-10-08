import React from 'react'

function Contact() {
  return (
   <section id="contact" className="wow fadeInUp section-with-bg">

      <div className="container">

        <div className="section-header">
          <h2>Contact Us</h2>
        
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="ion-ios-location-outline"></i>
              <h3><b>PATRON</b></h3><hr/>
                <h4>Sri.K.V.Vishnu Raju</h4>
                <h6>Chairman,SVES</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              {/* <h3>Phone Number</h3> */}
              <h3><b>CO-PATRONS</b></h3><hr/>
              <h4>Sri.R.Ravichandran</h4>
                <h6>ViceChairman,SVES</h6><br/>
              <h4>Sri.K.Aditya Vissam</h4>
                <h6>Secrestary,SVES</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3><b>PRESIDENT</b></h3><hr/>
                <h4>Dr.K.Lakshmi Prasad</h4>
                <h6>Principal,BVRIT,Narsapur</h6>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3><b>CONVENORS</b></h3><hr/>
                <h4>Dr.A.Jagan</h4>
                <h6>Professor in CSE</h6><br/>
                <h4>Dr.V.Murali Krishna</h4>
                <h6>HoD,Mech</h6>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Contact