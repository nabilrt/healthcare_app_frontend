import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import AdminHeader from "../headers/AdminHeader";

const AdminDash = () =>{

    return(
        <div className="container">
            <br/>
            <AdminHeader/>
            <br/>
            <h4>Welcome to Admin Dashboard</h4> <br/>
        </div>
    )
}

export default AdminDash;