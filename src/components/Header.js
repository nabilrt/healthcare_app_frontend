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
import DocPayment from "./doctor/DocPayment";
import MedHistory from "./doctor/MedHistory";
import Issues from "./doctor/Issues";
import DocProfile from "./doctor/DocProfile";
import DocNotice from "./doctor/DocNotice";
import PatientProfile from "./patient/PatientProfile";
import PatientConv from "./patient/PatientConv";
import PatientReply from "./patient/PatientReply";
import PatientNewMessage from "./patient/PatientNewMessage";
import PatientNotice from "./patient/PatientNotice";
import Doctors from "./patient/Doctors";
import DocReview from "./doctor/DocReview";
import DocPrevReview from "./doctor/DocPrevReview";
import PatientReview from "./patient/PatientReview";
import PatientPrevReview from "./patient/PatientPrevReview";
import SellerProfile from "./seller/SellerProfile";
import SellerNotice from "./seller/SellerNotice";
import SellerEarnings from "./seller/SellerEarnings";
import OrderDetails from "./seller/OrderDetails";
import OrderHistory from "./seller/OrderHistory";
import UpdateOrder from "./seller/UpdateOrder";
import AddMedicine from "./seller/AddMedicine";
import ManageMedicines from "./seller/ManageMedicines";
import EditMedicine from "./seller/EditMedicine";
import DeleteMedicine from "./seller/DeleteMedicine";
import SearchMedicine from "./seller/SearchMedicine";
import AdminProfile from "./admin/AdminProfile";
import CreateNotice from "./admin/CreateNotice";
import ManageNotices from "./admin/ManageNotices";
import DeleteNotice from "./admin/DeleteNotice";
import CreateExpense from "./admin/CreateExpense";
import ManageExpense from "./admin/ManageExpense";
import EditExpense from "./admin/EditExpense";
import DeleteExpense from "./admin/DeleteExpense";
import ValidDoctor from "./admin/ValidDoctor";
import BlockedDoctors from "./admin/BlockedDoctors";
import BlockDoctor from "./admin/BlockDoctor";
import UnblockDoctor from "./admin/UnblockDoctor";
import ValidPatient from "./admin/ValidPatient";
import BlockedPatients from "./admin/BlockedPatients";
import BlockPatient from "./admin/BlockPatient";
import UnblockPatient from "./admin/UnblockPatient";

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

                (Basic Pages)
                <Route index element={<Home />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/about" element={<About/>}></Route>
                <Route path="/register/doctor" element={<DocRegister/>}></Route>
                <Route path="/register/patient" element={<PatientRegister/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
                <Route path="/verify" element={<Verify/>}></Route>

                (Doctor Pages)
                <Route path="/doctor/dashboard" element={<DocDash/>}></Route>
                <Route path="/doctor/inbox" element={<DocInbox/>}></Route>
                <Route path="/doctor/earnings" element={<DocEarning/>}></Route>
                <Route path="/doctor/inbox/:id" element={<DocConv/>}></Route>
                <Route path="/doctor/conversation/reply/:id" element={<DocReply/>}></Route>
                <Route path="/doctor/conversation/message/new/:id" element={<DocNewMessage/>}></Route>
                <Route path="/doctor/appointments" element={<DocAppointments/>}></Route>
                <Route path="/doctor/remuneration" element={<DocPayment/>}></Route>
                <Route path="/doctor/medical/histories" element={<MedHistory/>}></Route>
                <Route path="/doctor/medical/history/:id" element={<Issues/>}></Route>
                <Route path="/doctor/profile" element={<DocProfile/>}></Route>
                <Route path="/doctor/notices" element={<DocNotice/>}></Route>
                <Route path="/doctor/review/post" element={<DocReview/>}></Route>
                <Route path="/doctor/review/all" element={<DocPrevReview/>}></Route>

                (Patient Pages)
                <Route path="/patient/dashboard" element={<PatientDash/>}></Route>
                <Route path="/patient/inbox" element={<PatientInbox/>}></Route>
                <Route path="/patient/shop" element={<Shop/>}></Route>
                <Route path="/patient/profile" element={<PatientProfile/>}></Route>
                <Route path="/patient/inbox/:id" element={<PatientConv/>}></Route>
                <Route path="/patient/conversation/reply/:id" element={<PatientReply/>}></Route>
                <Route path="/patient/conversation/message/new/:id" element={<PatientNewMessage/>}></Route>
                <Route path="/patient/notices" element={<PatientNotice/>}></Route>
                <Route path="/patient/doctors/all" element={<Doctors/>}></Route>
                <Route path="/patient/review/post" element={<PatientReview/>}></Route>
                <Route path="/patient/review/all" element={<PatientPrevReview/>}></Route>

                (Seller Pages)
                <Route path="/seller/dashboard" element={<SellerDash/>}></Route>
                <Route path="/seller/pr" element={<SellerProfile/>}/>
                <Route path="/seller/notices" element={<SellerNotice/>}/>
                <Route path="/seller/earnings" element={<SellerEarnings/>}/>
                <Route exact path="/seller/earnings/:id" element={<OrderDetails/>}/>
                <Route path="/seller/order/history" element={<OrderHistory/>}/>
                <Route path="/seller/order/update/:id" element={<UpdateOrder/>}/>
                <Route path="/seller/medicines/add" element={<AddMedicine/>}/>
                <Route path="/seller/medicines/all" element={<ManageMedicines/>}/>
                <Route path="/seller/medicine/update/:id" element={<EditMedicine/>}/>
                <Route path="/seller/medicine/delete/:id" element={<DeleteMedicine/>}/>
                <Route path="/seller/medicine/search" element={<SearchMedicine/>}></Route>

                (Admin Pages)
                <Route path="/admin/dashboard" element={<AdminDash/>}/>
                <Route path="/admin/profile" element={<AdminProfile/>}/>
                <Route path="/admin/notice/create" element={<CreateNotice/>}/>
                <Route path="/admin/notices/all" element={<ManageNotices/>}/>
                <Route path="/admin/notice/delete/:id" element={<DeleteNotice/>}/>
                <Route path="/admin/expense/create" element={<CreateExpense/>}/>
                <Route path="/admin/expenses/all" element={<ManageExpense/>}/>
                <Route path="/admin/expense/edit/:id" element={<EditExpense/>}/>
                <Route path="/admin/expense/delete/:id" element={<DeleteExpense/>}/>
                <Route path="/admin/doctors/valid" element={<ValidDoctor/>}/>
                <Route path="/admin/doctors/blocked" element={<BlockedDoctors/>}/>
                <Route path="/admin/doctor/block/:id" element={<BlockDoctor/>}/>
                <Route path="/admin/doctor/unblock/:id" element={<UnblockDoctor/>}/>
                <Route path="/admin/patients/valid" element={<ValidPatient/>}/>
                <Route path="/admin/patients/blocked" element={<BlockedPatients/>}/>
                <Route path="/admin/patient/block/:id" element={<BlockPatient/>}/>
                <Route path="/admin/patient/unblock/:id" element={<UnblockPatient/>}/>

            </Routes>
        </div>
    )
}

export default Header;