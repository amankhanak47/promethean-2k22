import React, { useEffect, useRef } from "react";
import Register from "../components/Events/Register";

function Main_Event({
  poster,
  date,
  time,
  std_cordinator,
  std_contact,
  faculty_cordinator,
  faculty_number,
  event_desc,
  name,
  eid,
  team,
  registered,
  setloading,
  fee,
  upi,
}) {
  const ref2 = useRef(null);
  useEffect(() => {
    document.getElementById("event_desc").innerHTML = event_desc;
    console.log(event_desc);
  }, [event_desc]);
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{padding:" 0.2rem 0.5rem",alignItems:"center"}}>
              <h5 className="modal-title" id="exampleModalLongTitle">
                <strong>{name}</strong>
              </h5>
              <div style={{display:"flex",alignItems:"center"}}>
             {!registered && (
                      <button
                        style={{ float: "right", margin: "5px" }}
                        onClick={() => {
                          ref2.current.click();
                        }}
                        className="btn btn-primary"
                      >
                        Register
                      </button>
              )}
               <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button></div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="card" style={{ width: "50rem" }}>
                  <img src={poster} style={{ maxHeight: "65vh" }} />
                  <div
                    className="card-body"
                    style={{ color: "black", textAlign: "left" }}
                  >
               <p style={{ color: "black" }}>
                      <strong style={{fontSize:"28px"}}>{name}  <button
                  type="button"
                  className="btn btn-secondary"
                        data-dismiss="modal"
                        style={{float:"right",padding:"2px 10px"}}
                >
                  Close
                </button></strong> <br/>
                      <strong>Time : </strong>{time}<br/>
                      <strong>Date : </strong>{date}<br/>
                      {/* <br /> */}
                    </p>
                     {/* <p style={{ color: "black" }}>
                      {/* <br /> */}
                    {/* </p>
                    <p style={{ color: "black" }}>
                      <br />
                    </p>  */}
                    <p style={{ color: "black" }}>
                      <strong style={{fontSize:"21px"}}>Registration Details : </strong>
                      <p style={{ color: "black",marginLeft:6 }} id="event_desc"></p>
                      {/* <br /> */}
                    </p>
                    <p style={{ color: "black" }}>
                      <strong style={{fontSize:"21px"}}>Contact Details:</strong>
                    <p style={{ color: "black" }}>
                      <strong>Student coordinater :</strong>
                      <br />
                      Name: {std_cordinator}
                      <br />
                      Contact No: {std_contact}
                      {/* <br /> */}
                    </p>
                    <p style={{ color: "black" }}>
                      <strong>Faculty coordinater :</strong>
                      <br />
                      Name: {faculty_cordinator}
                      <br />
                      Contact No: {faculty_number}
                    </p>
                      
                    </p>
                    {/* <br /> */}
                    <p style={{ color: "black" }}>
                      <strong style={{fontSize:"21px"}}>Entry Fee: </strong>
                      {fee}
                    </p>
                    <p style={{ color: "black" }}>
                      <strong style={{fontSize:"21px"}}>Team Size: </strong>
                      {team}
                    </p>
                    <p style={{ color: "black" }}>
                      <strong style={{fontSize:"21px"}}>UPI id: </strong>
                      {upi}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>

                <button
                  ref={ref2}
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalLong2"
                  style={{ display: "none" }}
                >
                  Launch demo modal
                </button>
                <Register
                  event_name={name}
                  event_time={time}
                  event_date={date}
                  event_poster={poster}
                  eid={eid}
                  team={team}
                  setloading={setloading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Event;
