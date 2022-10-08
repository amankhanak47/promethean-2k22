import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import "./login.css";
import av from "./login.jpg"
import Loading from "./Loading";
import { useEffect } from "react";
import Inoutbar from "../components/Navbars/Inoutbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading,setloading]=useState(false)
  const [opacity,setopacity]=useState()

  const handlesubmit = async (e) => {
    
    setloading(true)
    e.preventDefault()
    const response = await fetch(`https://prometheanbackend2.herokuapp.com/auth/login`, {
      method: "POST",
  
      headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({email:email,password:password}),
      
    });
    const json=await response.json();
 

    if (json.sucess) {
      setloading(false)
      console.log(json.authtoken)
      
      localStorage.setItem("promethean_token", json.authtoken)
       navigate("/")

    }
    else{
 setloading(false)
      alert(`ERROR : ${json.errors}`)
    }
  }
  useEffect(() => {
   if (loading) {
      setopacity("2px")
   }
   else {
     setopacity("0px")
    }
  })
    return (
      <>
            <Inoutbar/>
        {loading && <Loading/> }
          <div className="login">
          
     
            <form className="loginbox" onSubmit={handlesubmit}>
              <h1 className="login-title">Student Login</h1>
              <p>Welcome Back</p>
              <div className="login-inputcontainer">
                <div>
                  <label className="inp-component" htmlFor="username">
                    <input
                      placeholder="Email Address *"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
              </div>
              <button className="login-btn" type="submit">
                Login
              </button>
              <div className="login-footer-desc">
                {/* <div className="rem-password">
                      <input type="checkbox" name="" id="" /><p>Remember Password</p>
                  </div> */}
                <p>Dont Have An Account <Link to={"/signup"}>Signup</Link></p>
                <p><Link to={"/verify_email"}> Forgot Password</Link></p>
                <p> <Link to={"/cologin"}>Co-ordinator Login</Link> </p>
              </div>
            </form>
            <div className="right-login">
              <img src={av}  alt="promethean2k22" loading="lazy"  />
            </div>
          </div>
                  </>
  );
}