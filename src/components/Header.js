import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route,Routes} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import axios from "axios";
import Register from "./Register";
import Login from "./Login";
import About from "./About";
import DocRegister from "./doctor/DocRegister";
import PatientRegister from "./patient/PatientRegister";
import DocDash from "./doctor/DocDash";
import PatientDash from "./patient/PatientDash";
import SellerDash from "./seller/SellerDash";
import AdminDash from "./admin/AdminDash";
import DocInbox from "./doctor/DocInbox";
import DocEarning from "./doctor/DocEarning";
import Verify from "./Verify";
import Logout from "./Logout";
import PatientInbox from "./patient/PatientInbox";
import Shop from "./patient/Shop";
import DocConv from "./doctor/DocConv";
import DocReply from "./doctor/DocReply";
import DocNewMessage from "./doctor/DocNewMessage";
import DocAppointments from "./doctor/DocAppointments";

var token = null;
if(localStorage.getItem('doctor')){
    var obj = JSON.parse(localStorage.getItem('doctor'));
    token = obj.token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

function Header(){
    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/about" element={<About/>}></Route>
                <Route path="/register/doctor" element={<DocRegister/>}></Route>
                <Route path="/register/patient" element={<PatientRegister/>}></Route>
                <Route path="/doctor/dashboard" element={<DocDash/>}></Route>
                <Route path="/patient/dashboard" element={<PatientDash/>}></Route>
                <Route path="/seller/dashboard" element={<SellerDash/>}></Route>
                <Route path="/admin/dashboard" element={<AdminDash/>}></Route>
                <Route path="/doctor/inbox" element={<DocInbox/>}></Route>
                <Route path="/doctor/earnings" element={<DocEarning/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
                <Route path="/verify" element={<Verify/>}></Route>
                <Route path="/patient/inbox" element={<PatientInbox/>}></Route>
                <Route path="/patient/shop" element={<Shop/>}></Route>
                <Route path="/doctor/inbox/:id" element={<DocConv/>}></Route>
                <Route path="/doctor/conversation/reply/:id" element={<DocReply/>}></Route>
                <Route path="/doctor/conversation/message/new/:id" element={<DocNewMessage/>}></Route>
                <Route path="/doctor/appointments" element={<DocAppointments/>}></Route>
            </Routes>
        </div>
    )
}

export default Header;