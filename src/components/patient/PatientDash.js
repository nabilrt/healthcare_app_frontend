import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";

const PatientDash = () =>{

    const history = useNavigate();

    const logout = () =>{

        axios.get('http://127.0.0.1:8000/api/logout').then(resp=>{
            console.log(resp.data);
            if(resp.data==="Success"){
                console.log('logged out');
                history('/login');
            }
        }).catch(
            err=>{
                console.log(err);
            });
    }

    return(
        <div className="container">
            <h4>Welcome to Patient Dashboard</h4> <br/>
            <Link to="/logout" onClick={logout} className="btn btn-outline-danger">Logout</Link>
        </div>
    )
}

export default PatientDash;