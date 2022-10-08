import React from 'react'
import { sponsor_imgs } from '../../data'

function Sponsors() {
  return (
    <section id="sponsors" className="wow fadeInUp">

      <div className="container">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>

        <div className="row no-gutters sponsors-wrap clearfix">
        {sponsor_imgs.map((i) => (
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="sponsor-logo">
              <img src={i} className="img-fluid"  alt="promethean2k22" loading="lazy" />
            </div>
          </div>))}


        </div>

      </div>

    </section>
  )
}

export default Sponsors