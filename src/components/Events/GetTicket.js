import React, { useEffect, useState } from "react";

function GetTicket({
  event_name,
  Screenshort,
  event_poster,
  event_date,
  event_time,
  user_email,
  user_name,
  user_phno,
  team,
}) {
  return (
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      style={{textAlign:"start", color:"black"}}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 style={{ color: "black", fontSize: "30px", fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol` }} class="modal-title" id="exampleModalLongTitle">
              Ticket
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row" height="90px">
              <div class="col-md-12" >
                {/* <img src={event_poster} alt="poster" id="img2" height="550px" /> */}
                <br />
                <div style={{ display: "flex", alignItems:"center",marginLeft:"20px"}}>
    <img style={{width:100,height:100,marginRight:"10px", borderRadius:15}} src={event_poster}  alt="promethean2k22" loading="lazy"  />
                <div>

                <h3 style={{color:"black",fontSize:"30px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>{event_name}</h3>
                <h3 style={{color:"black" ,fontSize:"18px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>Date:{event_date}</h3>
                <h3 style={{color:"black", fontSize:"18px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>Time:{event_time}</h3>
                </div>
                </div>
<br/>
                <h3 style={{ color: "black", fontSize: "35px", fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol` }}>Registration details</h3>
                                <h3 style={{color:"black",fontSize:"20px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>Name: {user_name}</h3>
                <h3 style={{color:"black",fontSize:"20px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>Phone Number: {user_phno}</h3>
                <h3 style={{color:"black",fontSize:"20px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>E-Mail ID: {user_email}</h3>
                {/* <h4>Team Size:4</h4> */}
                <h3 style={{color:"black",fontSize:"20px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>
                  Total no of participants:{team}
                </h3>
                <br />
                 <h3 style={{color:"black",fontSize:"25px",fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`}}>
                  ScreenShort of payment
                </h3>
                <img
                  src={Screenshort}
                  alt="Payment Screenshot"
                  id="sss"
                  height="500px"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetTicket;
