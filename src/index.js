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
import AdminDash from "./components/admin/AdminDash";
import AdminProfile from "./components/admin/AdminProfile";
import CreateNotice from "./components/admin/CreateNotice";
import ManageNotices from "./components/admin/ManageNotices";
import DeleteNotice from "./components/admin/DeleteNotice";
import CreateExpense from "./components/admin/CreateExpense";
import ManageExpense from "./components/admin/ManageExpense";
import EditExpense from "./components/admin/EditExpense";
import DeleteExpense from "./components/admin/DeleteExpense";
import ValidDoctor from "./components/admin/ValidDoctor";
import BlockedDoctors from "./components/admin/BlockedDoctors";
import BlockDoctor from "./components/admin/BlockDoctor";
import UnblockDoctor from "./components/admin/UnblockDoctor";
import ValidPatient from "./components/admin/ValidPatient";
import BlockedPatients from "./components/admin/BlockedPatients";
import BlockPatient from "./components/admin/BlockPatient";
import UnblockPatient from "./components/admin/UnblockPatient";
import AdminLayout from "./components/layouts/AdminLayout";
import PatientConv from "./components/patient/PatientConv";
import Support from "./components/Support";
import ConfirmationSupport from "./components/ConfirmationSupport";
import PatientNewMessage from "./components/patient/PatientNewMessage";
import PatientReply from "./components/patient/PatientReply";
import Membership from "./components/patient/Membership";
import Doctors from "./components/patient/Doctors";
import DocSchedule from "./components/patient/DocSchedule";
import DocAppointment from "./components/patient/DocAppointment";
import Shop from "./components/patient/Shop";
import AddToCart from "./components/patient/AddToCart";
import Cart from "./components/patient/Cart";
import ConfirmCheckout from "./components/patient/ConfirmCheckout";
import PatientOrderHistory from "./components/patient/PatientOrderHistory";
import PatientNotice from "./components/patient/PatientNotice";
import PatientPrevReview from "./components/patient/PatientPrevReview";
import PatientReview from "./components/patient/PatientReview";
import PatientProfile from "./components/patient/PatientProfile";

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
          <Route path="/contact/support" element={<Support/>}/>
          <Route path="/contact/support/confirm" element={<ConfirmationSupport/>}/>

          (Patient Pages)
          <Route path="/patient/dashboard" element={<PatientLayout path="dashboard" />} />
          <Route  path="/patient/inbox" element={<PatientLayout path="inbox" />} />
          <Route path="/patient/conversation/:id" element={<PatientLayout path="conversation"/>}></Route>
          <Route path="/patient/conversation/message/new/:id" element={<PatientLayout path="conversation/message/new"/>}></Route>
          <Route path="/patient/conversation/reply/:id" element={<PatientLayout path="conversation/reply"/>}></Route>
          <Route path="/patient/membership/info" element={<PatientLayout path="membership/info"/>}></Route>
          <Route path="/patient/doctors/all" element={<PatientLayout path="doctors/all"/>}></Route>
          <Route path="/patient/doctor/schedule/:id" element={<PatientLayout path="doctor/schedule"/>}></Route>
          <Route path="/patient/doctor/appointment/:id" element={<PatientLayout path="doctor/appointment"/>}/>
          <Route path="/patient/shop" element={<PatientLayout path="patient/shop"/>}></Route>
          <Route path="/patient/cart/add/:id" element={<PatientLayout path="cart/add"/>}/>
          <Route path="/patient/cart" element={<PatientLayout path="cart"/>}/>
          <Route path="/patient/checkout/confirm" element={<PatientLayout path="checkout/confirm"/>}/>
          <Route path="/patient/orders" element={<PatientLayout path="orders"/>}/>
          <Route path="/patient/notices" element={<PatientLayout path="notices"/>}></Route>
          <Route path="/patient/review/all" element={<PatientLayout path="review/all"/>}></Route>
          <Route path="/patient/review/post" element={<PatientLayout path="review/post"/>}></Route>
          <Route path="/patient/profile" element={<PatientLayout path="profile"/>}></Route>


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
          <Route path="/seller/medicine/search" element={<SellerLayout path="medicine/search"/>}/>

          (Admin Pages)
          <Route path="/admin/dashboard" element={<AdminLayout path="dashboard"/>}/>
          <Route path="/admin/profile" element={<AdminLayout path="profile"/>}/>
          <Route path="/admin/notice/create" element={<AdminLayout path="notice/create"/>}/>
          <Route path="/admin/notices/all" element={<AdminLayout path="notices/all"/>}/>
          <Route path="/admin/notice/delete/:id" element={<AdminLayout path="notice/delete"/>}/>
          <Route exact path="/admin/expense/add" element={<AdminLayout path="expense/add"/>}/>
          <Route path="/admin/expenses/all" element={<AdminLayout path="expenses/all"/>}/>
          <Route path="/admin/expense/edit/:id" element={<AdminLayout path="expense/edit"/>}/>
          <Route path="/admin/expense/delete/:id" element={<AdminLayout path="expense/delete"/>}/>
          <Route path="/admin/doctors/valid" element={<AdminLayout path="doctors/valid"/>}/>
          <Route path="/admin/doctors/blocked" element={<AdminLayout path="doctors/blocked"/>}/>
          <Route path="/admin/doctor/block/:id" element={<AdminLayout path="doctor/block"/>}/>
          <Route path="/admin/doctor/unblock/:id" element={<AdminLayout path="doctor/unblock"/>}/>
          <Route path="/admin/patients/valid" element={<AdminLayout path="patients/valid"/>}/>
          <Route path="/admin/patients/blocked" element={<AdminLayout path="patients/blocked"/>}/>
          <Route path="/admin/patient/block/:id" element={<AdminLayout path="patient/block"/>}/>
          <Route path="/admin/patient/unblock/:id" element={<AdminLayout path="patient/unblock"/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
