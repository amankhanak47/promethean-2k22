import React, { useEffect, useRef, useState } from "react";
import "./event.css";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";

function Register({
  eid,
  team,
  setloading,
  event_name,
  event_time,
  event_date,
  event_poster,
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [t_id, sett_id] = useState("");
  const [teammembers, setteammembers] = useState("");
  const [file, setfile] = useState();
  const ref = useRef(null);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("promethean_token") == null) {
      alert("Please Login To Register");
      setloading(false);
      navigate("/login");
    } else if (file == "") {
      setloading(false);
      alert("Please Enter Screen Short Of Payment");
    } else if (email == "" || name == "" || phno == "") {
      alert("Please Enter All Credintials");
      setloading(false);
    } else {
      console.log("first");
      let formData = new FormData();
      formData.append("user_name", name);
      formData.append("event_id", eid);
      formData.append("user_email", email);
      formData.append("user_phno", phno);
      formData.append("image", file[0]);
      formData.append("event_name", event_name);
      formData.append("event_date", event_date);
      formData.append("event_time", event_time);
      formData.append("event_poster", event_poster);
      formData.append("team", teammembers);
      setloading(true);
      console.log(formData);
      e.preventDefault();
      const response = await fetch(`https://prometheanbackend2.herokuapp.com/add/event`, {
        method: "POST",

        headers: {
          "auth-token": localStorage.getItem("promethean_token"),
          contentType: "application/form-data",
        },
        body: formData,
      });
      const json = await response.json();
      setloading(false);
      if (json == undefined) {
        alert("wklnf");
      }
      if (json.sucess) {
        setloading(false);
        navigate("/");
        alert("sucessfully registered")
      } else {
        setloading(false);
        alert(`ERROR : ${json.error}`);
      }
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ backgroundColor: "gray" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Register
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handlesubmit} className="row register_inputs">
                <input
                  className="register_event_inp"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                  type="text"
                  required
                />
                <input
                  className="register_event_inp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  type="text"
                  required
                />
                <input
                  className="register_event_inp"
                  onChange={(e) => setPhno(e.target.value)}
                  value={phno}
                  placeholder="phno"
                  type="text"
                  required
                />
                {team > "1" && (
                  <input
                    className="register_event_inp"
                    onChange={(e) => setteammembers(e.target.value)}
                    value={teammembers}
                    placeholder="Total Members Participating"
                    type="number"
                    required
                  />
                )}
                <input
                  className="register_event_inp"
                  onChange={(e) => setfile(e.target.files)}
                  type="file"
                  required
                />

                {/* <button ref={ref} type="submit">skjd</button> */}
              </form>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#exampleModalLong"
                  className="btn btn-primary"
                  onClick={handlesubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
