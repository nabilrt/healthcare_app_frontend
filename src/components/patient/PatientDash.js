import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientDash = () =>{





    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Welcome to Patient Dashboard</h4> <br/>

        </div>
    )
}

export default PatientDash;