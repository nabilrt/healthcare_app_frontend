import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import Login from "../Login";
import axios from "axios";
import SellerHeader from "../headers/SellerHeader";

const SellerDash = () =>{

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
            <br/>
            <SellerHeader/>
            <br/>
            <h4>Welcome to Seller Dashboard</h4> <br/>
        </div>
    )
}

export default SellerDash;