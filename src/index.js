import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import PatientLayout from "./components/layouts/test";
import Login from "./components/Login";
import axios from "axios";
import DocLayout from "./components/layouts/DocLayout";
import Logout from "./components/Logout";
import DocRegister from "./components/doctor/DocRegister";
import PatientRegister from "./components/patient/PatientRegister";
import Register from "./components/Register";
import Verify from "./components/Verify";

var token = null;
if(localStorage.getItem('doctor')){
    var obj = JSON.parse(localStorage.getItem('doctor'));
    token = obj.token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/register/doctor" element={<DocRegister/>}/>
          <Route path="/register/patient" element={<PatientRegister/>}/>
          <Route path="/patient/dashboard" element={<PatientLayout path="dashboard" />} />
          <Route  path="/patient/inbox" element={<PatientLayout path="inbox" />} />
          <Route path="/doctor/dashboard" element={<DocLayout path="dashboard"/>}/>
          <Route path="/doctor/earnings" element={<DocLayout path="earnings"/>}/>
          <Route path="/doctor/inbox" element={<DocLayout path="inbox"/>}/>
          <Route path="/doctor/conversation/:id" element={<DocLayout path="conversation"/>}></Route>
          <Route path="/doctor/conversation/reply/:id" element={<DocLayout path="conversation/reply"/>}></Route>
          <Route path="/doctor/conversation/message/new/:id" element={<DocLayout path="conversation/message/new"/>}></Route>
          <Route path="/doctor/appointments" element={<DocLayout path="appointments"/>}></Route>
          <Route path="/doctor/remuneration" element={<DocLayout path="remuneration"/>}></Route>
          <Route path="/doctor/medical/histories" element={<DocLayout path="medical/histories"/>}></Route>
          <Route path="/doctor/medical/history/:id" element={<DocLayout path="medical/history"/>}></Route>
          <Route path="/doctor/profile" element={<DocLayout path="profile"/>}></Route>
          <Route path="/doctor/notices" element={<DocLayout path="notices"/>}></Route>
          <Route path="/doctor/review/post" element={<DocLayout path="review/post"/>}></Route>
          <Route path="/doctor/review/all" element={<DocLayout path="review/all"/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
