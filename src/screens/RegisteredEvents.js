import React, { useEffect, useRef, useState } from "react";
// import FixedNavbar from "../components/Events/FixedNavbar";
import { Link } from "react-router-dom";
// import { data } from "../data";
import Main_navbar from "../components/Main_navbar";
import Main_Event from "./Main_Event";
import Registeredbar from "../components/Navbars/Registeredbar";
import Rocket from "../components/Home/Rocket";
import GetTicket from "../components/Events/GetTicket";
// import { data } from '../../data'

function RegisteredEvents() {
  const [Screenshot, setscreenshort] = useState("");
  const [event_poster, setevent_poster] = useState("");
  const [event_name, setevent_name] = useState("");
  const [event_date, setevent_date] = useState("");
  const [event_time, setevent_time] = useState("");
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_phno, setuser_phno] = useState("");
  const [team, setteam] = useState("");

  const [event_ids, setevent_ids] = useState([]);
  const getids = async () => {
    const response = await fetch(`https://prometheanbackend2.herokuapp.com/auth/fetchallevents`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("promethean_token"),
      },
    });
    const json = await response.json();
    console.log(json);
    localStorage.getItem("promethean_token") != null && setevent_ids(json);
  };
  const ref = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    getids();
  }, []);

  return (
    <>
      <Registeredbar />
      {localStorage.getItem("promethean_token") != null && (
        <section
          id="speakers"
          className="wow fadeInUp"
          style={{ marginTop: "15px" }}
        >
          <div className="container">
            <div className="section-header" style={{ marginBottom: "25px" }}>
              <h2>Registered Events</h2>
              <p>Here are the events</p>
            </div>
            <div className="row">
              {event_ids.map((data) => (
                <>
                  <div class="col-lg-4 col-sm-12">
                    <div class="speaker">
                      <div
                        // src={k.event_poster}
                        alt="Speaker 6"
                        class="img-fluid"
                        style={{
                          width: 400,
                          height: 250,
                          minHeight: "100px",
                          backgroundImage: `url("${data.event_poster}")`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          borderRadius: "5px",
                        }}
                      ></div>
                      <div className="details">
                        <h3>{data.event_name}</h3>
                        <p>
                          <button
                            ref={ref}
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            style={{ display: "none" }}
                          >
                            Launch demo modal
                          </button>
                          <GetTicket
                            event_name={event_name}
                            Screenshort={Screenshot}
                            event_poster={event_poster}
                            event_date={event_date}
                            event_time={event_time}
                            user_email={user_email}
                            user_name={user_name}
                            user_phno={user_phno}
                            team={team}
                          />
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={async () => {
                              setscreenshort(data.img);
                              setevent_poster(data.event_poster);
                              setevent_name(data.event_name);
                              setevent_date(data.event_date);
                              setevent_time(data.event_time);
                              setuser_name(data.user_name);
                              setuser_email(data.user_email);
                              setuser_phno(data.user_phno);
                              setteam(data.team);
                              ref.current.click();
                            }}
                          >
                            {/* <p> By {i.dept_name} Department</p> */}
                            View More
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Rocket />
        </section>
      )}
      {localStorage.getItem("promethean_token") === null && (
        <div
          style={{
            marginTop: "90px",
            height: "90vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontWeight: "bolder" }}>
            please <Link to="/login"> login</Link>
          </h1>{" "}
        </div>
      )}
    </>
  );
}

export default RegisteredEvents;
