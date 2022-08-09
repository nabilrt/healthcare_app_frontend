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
import SellerDash from "./components/seller/SellerDash";
import SellerProfile from "./components/seller/SellerProfile";
import SellerNotice from "./components/seller/SellerNotice";
import SellerEarnings from "./components/seller/SellerEarnings";
import OrderDetails from "./components/seller/OrderDetails";
import OrderHistory from "./components/seller/OrderHistory";
import UpdateOrder from "./components/seller/UpdateOrder";
import AddMedicine from "./components/seller/AddMedicine";
import ManageMedicines from "./components/seller/ManageMedicines";
import EditMedicine from "./components/seller/EditMedicine";
import DeleteMedicine from "./components/seller/DeleteMedicine";
import SearchMedicine from "./components/seller/SearchMedicine";
import SellerLayout from "./components/layouts/SellerLayout";

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
          (Basic Pages)
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/register/doctor" element={<DocRegister/>}/>
          <Route path="/register/patient" element={<PatientRegister/>}/>

          (Patient Pages)
          <Route path="/patient/dashboard" element={<PatientLayout path="dashboard" />} />
          <Route  path="/patient/inbox" element={<PatientLayout path="inbox" />} />

          (Doctor Pages)
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

          (Seller Pages)
          <Route path="/seller/dashboard" element={<SellerLayout path="dashboard"/>}></Route>
          <Route path="/seller/profile" element={<SellerLayout path="profile"/>}/>
          <Route path="/seller/notices" element={<SellerLayout path="notices"/>}/>
          <Route path="/seller/earnings" element={<SellerLayout path="earnings"/>}/>
          <Route exact path="/seller/earning/:id" element={<SellerLayout path="earning"/>}/>
          <Route path="/seller/order/history" element={<SellerLayout path="order/history"/>}/>
          <Route path="/seller/order/update/:id" element={<SellerLayout path="order/update"/>}/>
          <Route path="/seller/medicines/add" element={<SellerLayout path="medicines/add"/>}/>
          <Route path="/seller/medicines/all" element={<SellerLayout path="medicines/all"/>}/>
          <Route path="/seller/medicine/update/:id" element={<SellerLayout path="medicine/update"/>}/>
          <Route path="/seller/medicine/delete/:id" element={<SellerLayout path="medicine/delete"/>}/>
          <Route path="/seller/medicine/search" element={<SellerLayout path="medicine/search"/>}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
