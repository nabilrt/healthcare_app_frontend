import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () =>{

    const history = useNavigate();
    const[status,setStatus]=useState("");

        axios.get('http://127.0.0.1:8000/api/userExist').then(resp=>{
            console.log(resp.data);
            setStatus(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    if(status==="No"){
        return(
            <div className="container">
                <br/>


                <div className="btn-group">
                    <Link to="/home" className="btn btn-outline-primary">Home</Link>
                    <Link to="/register" className="btn btn-outline-primary">Register</Link>
                    <Link to="/login" className="btn btn-outline-primary">Login</Link>
                    <Link to="/about" className="btn btn-outline-primary">About</Link>
                </div>


            </div>

        )
    }else if(status==="Doctor"){
        return (
            <div className="container">
                <br/>


                <div className="btn-group">
                    <Link to="/doctor/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                    <Link to="/doctor/inbox" className="btn btn-outline-primary">Inbox</Link>
                    <Link to="/doctor/earnings" className="btn btn-outline-primary">Earnings</Link>
                    <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
                </div>


            </div>
        )
    }
    else if(status==="Seller"){
        return (
            <div className="container">
                <br/>

                <h4>Seller Dashboard</h4>




            </div>
        )
    }
    else if(status==="Patient"){
        return (
            <div className="container">
                <br/>


                <div className="btn-group">
                    <Link to="/patient/dashboard" className="btn btn-outline-primary">Dashboard</Link>
                    <Link to="/patient/inbox" className="btn btn-outline-primary">Inbox</Link>
                    <Link to="/patient/shop" className="btn btn-outline-primary">Shop</Link>
                    <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
                </div>


            </div>
        )
    }
    else if(status==="Admin"){
        return (
            <div className="container">
                <br/>

                <h4>Admin Dashboard</h4>

            </div>
        )
    }



}

export default Navbar;