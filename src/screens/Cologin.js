import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import Inoutbar from "../components/Navbars/Inoutbar";
import Orgbar from "../components/Navbars/Orgbar";
import Loading from "./Loading";
import "./login.css";
import av from "./login.jpg";

export default function Cologin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setloading]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    const response = await fetch(
      `https://prometheanbackend2.herokuapp.com/auth/cologin`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }
    );
    const json = await response.json();

    if (json.sucess) {
      setloading(false)

      localStorage.setItem("promethean_org_token", json.authtoken);
      navigate("/get_data");
    } else {
      setloading(false)
      alert(`${json.errors}`);
    }
  };
  return (
    <>
      <Orgbar />
       {loading && <Loading/> }
      <div className="login">
        <div className="right-login">
          <img src={av}  alt="promethean2k22" loading="lazy"  />
        </div>
        <form className="loginbox" onSubmit={handlesubmit}>
          <h1 className="login-title">Event Organizer Login</h1>
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
            <p>
              Dont Have An Account <Link to={"/cosignup"}>Signup</Link>
            </p>
            <p>
              <Link to={"/co_verify_email"}> Forgot Password</Link>
            </p>
            {/* <p>Are you a Co-ordinator  <Link to={"/signup"}>Signup</Link> </p> */}
            <p>
              {" "}
              <Link to={"/Login"}>Student Login</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
