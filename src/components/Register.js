import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Header from "./Header";

const Register = () =>{
    return (
        <div className="container">

            <br/>
            <h3>Register AS</h3> <br/>
            <Link to="/register/doctor" className="btn btn-outline-dark">Doctor</Link> &nbsp;
            <Link to="/register/patient" className="btn btn-outline-dark">Patient</Link>
            <br/>
        </div>
    )
}

export default Register;