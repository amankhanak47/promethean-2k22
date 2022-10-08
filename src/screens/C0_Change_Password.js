import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import Inoutbar from "../components/Navbars/Inoutbar";
import "./login.css";
import av from "./login.jpg"


function CO_Change_password() {
  const navigate=useNavigate()
     const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setotp] = useState();
 

  const handlesubmit = async (e) => {
    
    e.preventDefault()
    const response = await fetch(`https://prometheanbackend2.herokuapp.com/verify/cord_checkotp`, {
      method: "POST",
  
      headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({otp:otp,password:password}),
      
    });
    const json=await response.json();
 
    

    if(json.sucess){
      alert("password Sucessfull changed")
      navigate("/cologin")
    }
    else{
 
      alert(`ERROR : ${json.error}`)
    }
  }
  return (
          <>
           <Inoutbar/>

      <div className="login">
          
      <div className="right-login">
        <img src={av}  alt="promethean2k22" loading="lazy"  />
      </div>
      <form className="loginbox" onSubmit={handlesubmit}>
        <h1 className="login-title">Welcome Back</h1>
        <p>Enter Otp And Change Password</p>
        <div className="login-inputcontainer">
          <div>
            <label className="inp-component" htmlFor="username">
              <input
                placeholder="Otp *"
                onChange={(e) => setotp(e.target.value)}
                value={otp}
                className="login-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password" className="inp-component">
              <input
                placeholder="Password *"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input"
                type="password"
              />
            </label>
                      </div>
                      <div>
            <label htmlFor="confirmpassword" className="inp-component">
              <input
                placeholder="Confirm Password *"
                onChange={(e) => setConfirmpassword(e.target.value)}
                value={confirmpassword}
                className="login-input"
                type="password"
              />
            </label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Change Password
              </button>
          </form>
          
            </div>
                  </>
  )
}

export default CO_Change_password