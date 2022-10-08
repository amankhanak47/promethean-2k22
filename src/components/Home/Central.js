import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data";
import Loading from "../../screens/Loading";
import g from "./R (1).gif"

import Main_Event from "../../screens/Main_Event";
function Central({setloading}) {
  const [eid, seteid] = useState("");
  const [faculty_cordinate, setfaculty_cordinate] = useState("");
  const [faculty_number, setfaculty_number] = useState("");
  const [std_cordinator, setstd_cordinator] = useState("");
  const [std_contact, setstd_contact] = useState("");
  const [upi, setupi] = useState("");
  const [name, setName] = useState("");
  const [fee, setfee] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [poster, setposter] = useState("");
  const [event_desc, setevent_desc] = useState("");
  const [team, setteam] = useState("");

  const ref = useRef(null);
  const [file, setfile] = useState();
  const getfile = async () => {
    const response = await fetch(
      `https://prometheanbackend2.herokuapp.com/create/getallevents`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setfile(json);
    console.log(json);
  };
  useEffect(() => {
    getfile();
  }, []);

  return (
    <section
    id="speakers"
    className="wow fadeInUp section-with-bg"
    style={{ marginTop: "0px" }}
    >
     
      <div className="container">
        <div className="section-header">
          <h2>Central events</h2>
        </div>
        <div className="row">
            {file !=undefined? file.map(
            (k) =>
              k.dept_name == "central" &&
             
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
                        backgroundImage: `url("${k.event_poster}")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></div>
                    <div className="details">
                      <section id="popup">
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
                        <Main_Event
                          eid={eid}
                          poster={poster}
                          name={name}
                          team={team}
                          faculty_cordinator={faculty_cordinate}
                          std_cordinator={std_cordinator}
                          std_contact={std_contact}
                          faculty_number={faculty_number}
                          upi={upi}
                          event_desc={event_desc}
                          setloading={setloading}
                          fee={fee}
                          date={date}
                          time={time}
                        />
                      </section>
                      <h3>
                        <div
                          onClick={() => {
                            seteid(k.eid);
                            setposter(k.event_poster);
                            setName(k.event_name);
                            setteam(k.team);
                            setevent_desc(k.event_desc);
                            setfaculty_cordinate(k.faculty_cordinate);
                            setfaculty_number(k.faculty_number);
                            setstd_contact(k.std_contact);
                            setstd_cordinator(k.std_cordinator);
                            setupi(k.upi);
                            setfee(k.fee);
                            setdate(k.date);
                            settime(k.time)
                            ref.current.click();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {k.event_name}
                          <p>View more</p>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              
          ):<div style={{width:"100vw",display:"flex",justifyContent:"center"}}><img style={{width:50}} src={g} alt="" /></div>}
       </div>
      </div>
    </section>
  );
}

export default Central;
