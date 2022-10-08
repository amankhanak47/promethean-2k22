import { ScreenShareTwoTone } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../components/Image";
import Main_navbar from "../components/Main_navbar";
import Orgbar from "../components/Navbars/Orgbar";

function Table() {
  const [data, setdata] = useState();
  const [cord, setcord] = useState("");
  const [email, setemail] = useState("")
  const [eid, seteid] = useState("")
  const [sshort,setsshort]=useState("")
  const ref = useRef();
const navigate=useNavigate()
  const getcordintor = async () => {
    const response = await fetch(`https://prometheanbackend2.herokuapp.com/create/geteventwithorg`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("promethean_org_token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setcord(json);
    if (json == "") {
      navigate("/createevent")
    }
  };
  const getdata = async () => {
    const response = await fetch(
      `https://prometheanbackend2.herokuapp.com/auth/fetchalleventswithid`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event_id: cord[0].eid }),
      }
    );
    const json = await response.json();
    console.log(json);
    setdata(json);
  };
  useEffect(() => {
    getcordintor();
  }, []);

  useEffect(() => {
    // getcordintor()
    getdata();
  }, [cord]);
 useEffect(() => {
    if (localStorage.getItem("promethean_org_token") == null) {
      navigate("/cologin")
    } 
  },[])
  return (
    <>
      <Orgbar/>
      <div className="container" style={{ maginTop: "200px" }}>
        
         <div className="row" style={{paddingTop:100}}>
      <div className="col-12">
      <h3>Total Members Registered: {data&&data.length}</h3> <button><Link to={"/updateevent"} style={{color:"black",border:"none"}}> Update Event Info</Link></button>
        <table className="table table-image" style={{marginTop:30}}>
          
          <thead>
                <tr>
                  {/* <th scope="col">Sno</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Mail id</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Total Members</th>
                  <th scope="col">ScreenShort</th>
                </tr>
              </thead>
              <tbody>
                {data != null ? (
                  data.map((i) => (
                    <tr>
                      {/* <th scope="row">{}</th> */}
                      <td>{i.user_name}</td>
                      <td>{i.user_email}</td>
                      <td>{i.user_phno}</td>
                      <td>
                        {i.team}
                        <br />
                      </td>
                      <td
                        onClick={() => {
                          setsshort(i.img)
                          ref.current.click();
                        }}
                        style={{cursor:"pointer"}}
                      >
                        View ScreenShort
                      </td>
                      <button
                        ref={ref}
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalLong3"
                        style={{ display: "none" }}
                      >
                        Launch demo modal
                      </button>
                      <Image img={sshort} />
                      <td>{i.trans_id}</td>
                    </tr>
                  ))
                ) : (
                  <>loading...</>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
