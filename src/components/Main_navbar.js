import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
function Main_navbar({ page }) {
  const [state, setstate] = useState("");
  const navigate = useNavigate();
  const handleinout = () => {
    if (state === "Login") {
      navigate("/login");
    } else {
      localStorage.removeItem("promethean_token");
      setstate("Login");
    }
  };
  const handlecordinator = () => {
    localStorage.removeItem("promethean_org_token");
    navigate("/cologin");
  };

  useEffect(() => {
    if (localStorage.getItem("promethean_token") == null) {
      setstate("Login");
    } else {
      setstate("Logout");
    }
  });
  return (
    <>
      {page == "registered_event" && (
        <header
          id="header"
          style={{
            backgroundColor: "rgba(6, 12, 34, 0.98)",
            height: "70px",
            padding: "15px 0px",
            transition: "all 0.5s",
            position: "",
          }}
        >
          <div className="container" style={{ padding: "0px" }}>
            <div id="logo" className="pull-left">
              <h1>
                <span>PROMETHEAN</span>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                {/* <li><a href="#about">About</a></li> */}
                <li>
                  <Link to="/all_dept_events">Events</Link>
                </li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li className="menu-active">
                  <Link to="/registered_event">Registered Events</Link>
                </li>
                {/* <li><a href="#contact">Contact</a></li> */}
                {localStorage.getItem("promethean_token") == null ? (
                  <li>
                    <Link to="/login">Login</Link>{" "}
                  </li>
                ) : (
                  <li>
                    <a
                      href=""
                      onClick={() =>
                        localStorage.removeItem("promethean_token")
                      }
                    >
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </nav>
            {/* <!-- #nav-menu-container -->*/}
          </div>
        </header>
      )}
      {page == "dept_event" && (
        <header
          id="header"
          style={{
            backgroundColor: "rgba(6, 12, 34, 0.98)",
            height: "70px",
            padding: "15px 0px",
            transition: "all 0.5s",
            position: "",
          }}
        >
          <div className="container" style={{ padding: "0px" }}>
            <div id="logo" className="pull-left">
              <h1>
                <span>PROMETHEAN</span>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li><a href="#about">About</a></li> */}
                <li className="menu-active">
                  <Link to="/all_dept_events">Events</Link>
                </li>
                {/* <li><a href="#gallery">Gallery</a></li> */}
                <li>
                  <Link to="/registered_event">Registered Events</Link>
                </li>
                {/* <li><a href="#contact">Contact</a></li> */}
                {localStorage.getItem("promethean_token") == null ? (
                  <li>
                    <Link to="/login">Login</Link>{" "}
                  </li>
                ) : (
                  <li>
                    <a
                      href=""
                      onClick={() =>
                        localStorage.removeItem("promethean_token")
                      }
                    >
                      Logout
                    </a>{" "}
                  </li>
                )}
              </ul>
            </nav>
            {/* <!-- #nav-menu-container -->*/}
          </div>
        </header>
      )}

      {page == "get_data" && (
        <header
          id="header"
          style={{
            backgroundColor: "rgba(6, 12, 34, 0.98)",
            height: "70px",
            padding: "15px 0px",
            transition: "all 0.5s",
            position: "inherit",
          }}
        >
          <div className="container" style={{ padding: "0px" }}>
            <div id="logo" className="pull-left">
              <h1>
                <span>PROMETHEAN</span>
              </h1>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a onClick={handlecordinator} href="">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- #nav-menu-container -->*/}
          </div>
        </header>
      )}
    </>
  );
}
export default Main_navbar;
