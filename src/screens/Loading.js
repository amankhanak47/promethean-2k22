import React from "react";
import load from "./loading.gif";

function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
              opacity: 0.6,
              position: "fixed",
        zIndex: 100,
              backgroundColor:"black"
      }}
    >
      {" "}
      <img style={{height:"100px"}} src={load}  alt="promethean2k22" loading="lazy"  />
    </div>
  );
}

export default Loading;
