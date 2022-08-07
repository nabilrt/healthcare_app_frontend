import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import PatientHeader from "../headers/PatientHeader";
import AllDoctor from "./AllDoctor";
import NormalDoctor from "./NormalDoctor";
import TakeMembership from "./TakeMembership";
import MembershipInfo from "./MembershipInfo";
const Membership = () => {
    const [isPremium,setisPremium]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    let history=useNavigate();
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/status',obj).then(resp=>{
            console.log(resp.data);
            setisPremium(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);
    if (isPremium==="yes"){
        return (
            <div className="container">
                <br/>
                <PatientHeader/>
                <br/>
                <h4>Membership</h4>

                <br/>

                <MembershipInfo>

                </MembershipInfo>

            </div>
        )

    }
    else {
        return (
            <div className="container">
                <br/>
                <h4>Membership</h4>
               <br/>

                <TakeMembership>

                </TakeMembership>

            </div>
        )

    }

}
export default Membership;