import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import Inoutbar from "../components/Navbars/Inoutbar";
import "./login.css";
import av from "./login.jpg";

function C_verify_email() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://prometheanbackend2.herokuapp.com/verify/cord_sendotp`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email}),
      }
    );
    const json = await response.json();

   if(json.sucess){
      localStorage.setItem("promethean_verify_token", true)
       navigate("/Copassword")

    }
    else{
 
      alert(`ERROR : ${json.error}`)
    }
  };
  return (
    <>
      <Inoutbar/>
      

      <div className="login">
      <div className="right-login">
          <img src={av}  alt="promethean2k22" loading="lazy"  />
        </div>
        <form className="loginbox" onSubmit={handlesubmit}>
          <h1 className="login-title">No Problem!!</h1>
          <p>Please Enter Your registered Email</p>
          <div className="login-inputcontainer">
            <div>
              <label className="inp-component" htmlFor="username">
                <input
                  placeholder="Email Address *"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="login-input"
                  type="email"
                  required
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Next
                  </button>
                    <div className="login-footer-desc">
            <p>
              Please Check Your Email And continue Using OTP
            </p>
          </div>
        </form>
       
      </div>
    </>
  );
}

export default C_verify_email;