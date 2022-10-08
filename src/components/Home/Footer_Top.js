import React from 'react'
import { Link } from 'react-router-dom'

function Footer_Top() {
  return (
      <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <p>
                  <span>PROMETHEAN</span>
                </p>
                <p>
                Promethean is the biggest Annual Technical Symposium of BVRIT, continuing the Saga this Year also, It is Ready to Hit You with All-New Events, Workshops, With Exciting Prize money And Lots More. So Don't Miss The Chance Get Registered Yourselves Today
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                {/* <h4>Useful Links</h4> */}
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i> <Link to="/all_dept_events">Events</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link to="/registered_event">Registered Events</Link>
              </li>
               <li>
                    <i className="fa fa-angle-right"></i>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Bvrit <br /> Narsapur 535022
                  <br /> Telangana <br /><strong>Phone:</strong> +91 9515754956
                  <br />+91 7997285778 <br /><strong>Email:</strong>promethean2k22@bvrit.ac.in
                  <br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/prometheanbvrit__2k22/?igshid=YmMyMTA2M2Y%3D" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="https://www.linkedin.com/school/bv-raju-institute-of-technology-bvrit-/" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer_Top