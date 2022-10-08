import React from "react";
import { useNavigate } from "react-router-dom";
import Main_navbar from "../components/Main_navbar";

function Profile() {
    const navigate=useNavigate()
  return (
      <div>
          <Main_navbar page={"profile"}/>
      <button style={{marginTop:"100px"}}
        onClick={() => {
            localStorage.removeItem("promethean_token")
            navigate("/")
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
