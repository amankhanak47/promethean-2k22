import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_nav from "../components/Login/Login_nav";
import Inoutbar from "../components/Navbars/Inoutbar";
import Orgbar from "../components/Navbars/Orgbar";
import { cordinators } from "../data";
import Loading from "./Loading";
import "./login.css";
import av from "./login.jpg";
import wp from './wp.jpg'
function Cosignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [branch, setBranch] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setloading]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (password == confirmpassword) {
       setloading(true)
      const response = await fetch(`https://prometheanbackend2.herokuapp.com/auth/cosignup`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password, phno, branch }),
      });
      const json = await response.json();

      if (json.sucess) {
        setloading(false)
        localStorage.setItem("promethean_org_token", json.authtoken);
        navigate("/get_data");
      } else {
        setloading(false)
        alert(`${json.error}`);
      }
    }
    else {

      alert("password doesnt Match")
    }
  }
  
  return (
    <>
      <Orgbar />
       {loading && <Loading/> }
      <div className="login">
        <div className="right-login">
          <img src={av}  alt="promethean2k22" loading="lazy"  />
        </div>
        <form className="loginbox" onSubmit={handlesubmit}>
          <h1 className="login-title"> Event Organizer Sign Up</h1>
          <p>Welcome</p>
          <div className="login-inputcontainer">
            <div>
              <label className="inp-component">
                <input
                  placeholder="Email Address *"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} required
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Name *" required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Phone Number *" required
                  onChange={(e) => setPhno(e.target.value)}
                  value={phno}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>
            {/* <div>
              <label className="inp-component">
                <input
                  placeholder="College Name *"
                  onChange={(e) => setCollege(e.target.value)}
                  value={college}
                  className="login-input"
                  type="text"
                />
              </label>
            </div> */}
            <div>
              <label className="inp-component">
                <input
                  placeholder="Branch *" required
                  onChange={(e) => setBranch(e.target.value)}
                  value={branch}
                  className="login-input"
                  type="text"
                />
              </label>
            </div>

            <div>
              <label className="inp-component">
                <input
                  placeholder="Password *" required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="login-input"
                  type="password"
                />
              </label>
            </div>
            <div>
              <label className="inp-component">
                <input
                  placeholder="Confirm Password *" required
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  value={confirmpassword}
                  className="login-input"
                  type="password"
                />
              </label>
            </div>
          </div>
          <button className="login-btn" type="submit">
            Signup
          </button>
          <div className="login-footer-desc">
            <p>
              Already Have An Account <Link to={"/Cologin"}>Login</Link>
            </p>
            <p>
              Request for signup access ?  <a href="https://wa.me/qr/GSFN6LJW65HML1"><img style={{height:20, width:20,marginLeft:5,alignContent:"center"}} src={wp} alt="Dm" /></a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cosignup;
