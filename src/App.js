import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import All_Events from "./screens/All_Events";
import CO_Change_password from "./screens/C0_Change_Password";
import Change_password from "./screens/Change_password";
import Cologin from "./screens/Cologin";
import Cosignup from "./screens/Cosignup";
import C_verify_email from "./screens/C_verify_email";
import DeptEvents from "./screens/DeptEvents";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Main_Event from "./screens/Main_Event";
import RegisteredEvents from "./screens/RegisteredEvents";
// import RegisteredEvents from "./screens/RegisteredEvents";
import Signup from "./screens/Signup";
import Table from "./screens/Table";
import Verify_Email from "./screens/Verify_Email";
import Profile from "./screens/Profile";
import CreateForm from "./screens/CreateForm";
import UpdateEvent from "./screens/UpdateEvent";
 
function App() {
  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />   
          <Route path="/events:id" element={<All_Events/>} />
          <Route path="/login" element={<Login/>} />   
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/cosignup" element={<Cosignup/>} />  
          <Route path="/cologin" element={<Cologin/>} />  
          <Route path="/all_dept_events" element={<DeptEvents/>} />   
          <Route path="/co_verify_email" element={<C_verify_email/>} />   
          <Route path="/copassword" element={<CO_Change_password/>} />   
          <Route path="/verify_email" element={<Verify_Email/>} />   
          <Route path="/change_password" element={<Change_password/>} />   
          <Route path="/get_data" element={<Table/>} />   
          <Route path="/registered_event" element={<RegisteredEvents />} />   
          <Route path="/profile" element={<Profile/>} />   
          <Route path="/createevent" element={<CreateForm/>} />   
          <Route path="/updateevent" element={<UpdateEvent/>} />   
          
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App