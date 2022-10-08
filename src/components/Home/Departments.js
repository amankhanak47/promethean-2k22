import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";


function Departments() {

  return (
      <section id="speakers" className="wow fadeInUp ">
        <div className="container">
          <div className="section-header">
            <h2>branch wise events</h2>
            <p>Here are the events</p>
          </div>           
              <div className="row">
                {data.map((i) => (
                  <div className="col-lg-4 col-md-6" style={{borderRadius:"5px"}}>
                    <div className="speaker">
                      <img
                        src={i.dept_img}
                        alt="Speaker 6"
                        className="img-fluid"
                      />
                      <div className="details">
                        <h3>
                          <Link to={`/events:${i.dept_id}`}>See All Events</Link>
                        </h3>
                        {/* <p>View All Events</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>          
        </div>
      </section>
  );
}

export default Departments;
