import React, { useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar";
import Eventsbar from "../components/Navbars/Eventsbar";
import { DefaultEditor } from "react-simple-wysiwyg";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Orgbar from "../components/Navbars/Orgbar";
function CreateForm() {
  const navigate = useNavigate();
  const [eid, seteid] = useState("");
  const [event_name, setevent_name] = useState("");
  const [dept_name, setdept_name] = useState("cse");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [event_desc, setevent_desc] = useState("");
  const [fee, setfee] = useState("");
  const [team, setteam] = useState("");
  const [faculty_cordinate, setfaculty_cordinate] = useState("");
  const [faculty_number, setfaculty_number] = useState("");
  const [std_cordinator, setstd_cordinator] = useState("");
  const [std_contact, setstd_contact] = useState("");
  const [upi, setupi] = useState("");
  const [img, setimg] = useState();
  const [loading, setloading] = useState(false);

  const createform = async (e) => {
    e.preventDefault();
    if (img[0].size > 1615061) {
      alert("please compress your event poster")
    }
    else {
      setloading(true);
      console.log(event_desc);

      let formData = new FormData();
      formData.append("event_name", event_name);
      formData.append("dept_name", dept_name);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("event_desc", event_desc);
      formData.append("fee", fee);
      formData.append("team", team);
      formData.append("faculty_cordinate", faculty_cordinate);
      formData.append("faculty_number", faculty_number);
      formData.append("std_cordinator", std_cordinator);
      formData.append("std_contact", std_contact);
      formData.append("upi", upi);
      formData.append("image", img[0]);
      formData.append("eid", eid);
      console.log(formData);
      const response = await fetch(`https://prometheanbackend2.herokuapp.com/create/event`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("promethean_org_token"),
          contentType: "application/form-data",
        },
        body: formData,
      });
      const json = await response.json();
      if (json.sucess) {
        setloading(false);
        alert("Event Created");
        navigate("/get_data");
      } else {
        setloading(false);
        alert(`ERROR : ${json.error}`);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("promethean_org_token") == null) {
      navigate("/cologin")
    } 
  },[])
  return (
    <>
      {loading && <Loading />}
      <Orgbar/>
      <div className="container">
        <section id="form" style={{ padding: "100px 0px" }}>
          <h1 style={{ fontWeight: "900", marginBottom: "20px" }}>
            Create Event
          </h1>
         
          <form onSubmit={createform}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="event_name">Event</label>
                <input
                  value={event_name}
                  required
                  onChange={(e) => setevent_name(e.target.value)}
                  type="text"
                  className="form-control"
                  id="event_name"
                  placeholder="event"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Department</label>
                <select
                  value={dept_name}
                  required
                  onChange={(e) => setdept_name(e.target.value)}
                  id="inputState"
                  className="form-control"
                >
          <option value={"cse"}>CSE</option>
                  <option value={"aiml"}>AI&amp;ML</option>
                  <option value={"ds"}>DATA SCIENCE</option>
                  <option value={"ece"}>ECE</option>
                  <option value={"itbs"}>IT & CSBS</option>
                  <option value={"eee"}>EEE</option>
                  <option value={"mech"}>MECH</option>
                  <option value={"civil"}>CIVIL</option>
                  <option value={"chem"}>CHEMICAL</option>
                  <option value={"bm"}>BIO MEDICAL</option>
                  <option value={"pharma"}>PHARMACEUTICAL</option>
                  <option value={"mba"}>MBA</option>
                  <option value={"central"}>Central Events</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="date">date</label>
                <input
                  value={date}
                  required
                  onChange={(e) => setdate(e.target.value)}
                  type="date"
                  className="form-control"
                  id="date"
                  placeholder="date"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="time">time</label>
                <input
                  value={time}
                  required
                  onChange={(e) => settime(e.target.value)}
                  type="time"
                  className="form-control"
                  id="time"
                  placeholder="time"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="amount">fee per member/team</label>
                <input
                  value={fee}
                  required
                  onChange={(e) => setfee(e.target.value)}
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="amount"
                />
              </div>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="description">Description</label>
              <div className="row">
                <DefaultEditor
                  value={event_desc}
                  onChange={(e) => setevent_desc(e.target.value)}
                  style={{    minHeight: "125px"}}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="team">
                Maximum Number of Participants(1 if indiviual)
              </label>
              <input
                required
                value={team}
                onChange={(e) => setteam(e.target.value)}
                type="text"
                className="form-control"
                id="team"
                placeholder="team"
              />
            </div>
            <br />
            <h3>Contact Details</h3>
            <hr />
            <br />
            <h4>Faculty Coordinator</h4>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="faculty_name">Name</label>
                <input
                  value={faculty_cordinate}
                  required
                  onChange={(e) => setfaculty_cordinate(e.target.value)}
                  type="text"
                  className="form-control"
                  id="faculty_name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="faculty_no">Phno</label>
                <input
                  value={faculty_number}
                  required
                  onChange={(e) => {
                    setfaculty_number(e.target.value);
                    seteid(e.target.value);
                  }}
                  type="tel"
                  className="form-control"
                  id="faculty_no"
                />
              </div>
            </div>
            <h4>Student Coordinator</h4>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="student_name">Name</label>
                <input
                  value={std_cordinator}
                  required
                  onChange={(e) => setstd_cordinator(e.target.value)}
                  type="text"
                  className="form-control"
                  id="student_name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="student_no">Phno</label>
                <input
                  value={std_contact}
                  required
                  onChange={(e) => setstd_contact(e.target.value)}
                  type="number"
                  className="form-control"
                  id="student_no"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="upi">Upi_id</label>
                <input
                  value={upi}
                  required
                  onChange={(e) => setupi(e.target.value)}
                  type="text"
                  className="form-control"
                  id="upi"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="img">Poster</label>
                <input
                  required
                  onChange={(e) => {
                     document.getElementsByClassName("compressimg")[0].style.display = "none"
                    if (e.target.files[0].size > 1615061) {
                      document.getElementsByClassName("compressimg")[0].style.display = "flex"
                       setimg(e.target.files)
                    }
                    else {
                      document.getElementsByClassName("imgcompress")[0].style.display = "none"
                      console.log(e.target.files[0].size)
                       setimg(e.target.files)
                    }
                   }}
                  type="file"
                  className="form-control"
                  id="img"
                />
                <p style={{ color: "red", fontSize: "13px",marginBottom:0 }} className="imgcompress">img size should not be more than 1.5mb</p>
                <p style={{ color: "red", fontSize: "13px",display:"none"}} className="compressimg">compress your img...</p>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Event
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default CreateForm;
