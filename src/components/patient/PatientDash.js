import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientDash = () =>{

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    console.log(obj.token);
    console.log(axios.defaults.headers.common["Authorization"]);




    return(
<>

            <h4>Welcome to Patient Dashboard</h4> <br/>

        </>
    )
}

export default PatientDash;