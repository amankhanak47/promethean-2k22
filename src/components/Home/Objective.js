import React from 'react'

function Objective() {
  return (
    <section id="schedule" className="section-with-bg">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>objectives</h2>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-toggle="tab"
                >
                  VISION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-2"
                  role="tab"
                  data-toggle="tab"
                >
                  MISSION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-3"
                  role="tab"
                  data-toggle="tab"
                >
                  AWARDS{" "}
                </a>
              </li>
            </ul>

        

            <div className="tab-content row justify-content-center">
              {/* <!-- Schdule Day 1 -->*/}
              <div
                role="tabpanel"
                className="col-lg-9 tab-pane fade show active"
                id="day-1"
              >
                <h3 style={{textAlign:"center"}}>
                  To create and nurture competent engineers and managers who
                  would be abled enterprise leaders throughout the world with a
                  sound background in ethics and societal responsibilities.
                </h3>
              </div>
              {/* <!-- End Schdule Day 1 -->*/}

              {/* <!-- Schdule Day 2 -->*/}
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-2"
              >
                <h3 style={{textAlign:"center"}}>
                  Committed to providing a positive and professional learning
                  environment where all students are inspired to strive R T for
                  excellence in becoming competent engineers, technology
                  innovators and leaders in a global society through a cohesive
                  network of parents, students, college staff and industry.
                </h3>
              </div>
              {/* <!-- End Schdule Day 2 -->*/}

              {/* <!-- Schdule Day 3 -->*/}
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-3"
              >
                <h3 style={{textAlign:"center"}}>
                  1. Eligible UG Programs (CSE, ECE, EEE, IT, MECH, CHE, CIVIL)
                  have been accredited by NBA under Tier-1. 2. Secured
                  "EXCELLENT" Band in Atal Ranking of Institutions on Innovation
                  Achievement (ARIIA-2022) 3. The Institution is accredited by
                  NAAC with "A" Grade 4. Secured the Rank in the Band (201-250)
                  in NIRF - 2022 5. Achieved the Record number of Placement
                  offers (2000+) 6. MoUs with National & International Academic
                  Institutions 7. Secured AICTE CII Platinum award in 2022
                </h3>
              </div>
              {/* <!-- End Schdule Day 3 -->*/}
            </div>
          </div>
        </section>
  )
}

export default Objective
