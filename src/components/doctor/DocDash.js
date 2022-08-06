import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import DoctorHeader from "../headers/DoctorHeader";

const DocDash = () =>{



    return(
        <div className="container">
            <br/>
            <DoctorHeader/>
            <br/>
            <h4>Welcome to Doctor Dashboard</h4> <br/>

        </div>
    )
}

export default DocDash;