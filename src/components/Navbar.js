import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () =>{


    const[status,setStatus]=useState("No");
    const[whologged,setWhoLogged]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }


    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/api/userExist',obj).then(resp=>{
            console.log(resp.data);
            setStatus(resp.data);
            setWhoLogged(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });
        
    },[obj]);

     



    if(whologged==="No"){
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
    }else if(whologged==="Doctor"){
        return (
            <div className="container">
                <br/>


                <div className="btn-group">
                    <Link to="/doctor/dashboard" className="btn btn-outline-primary" onClick={refreshPage}>Dashboard</Link>
                    <Link to="/doctor/inbox" className="btn btn-outline-primary">Inbox</Link>
                    <Link to="/doctor/earnings" className="btn btn-outline-primary">Earnings</Link>
                    <Link to="/doctor/appointments" className="btn btn-outline-primary">Appointments</Link>
                    <Link to="/doctor/remuneration" className="btn btn-outline-primary">Remuneration</Link>
                    <Link to="/doctor/medical/histories" className="btn btn-outline-primary">Medical History</Link>
                    <Link to="/logout" className="btn btn-outline-primary" onClick={refreshPage}>Logout</Link>
                </div>


            </div>
        )
    }
    else if(whologged==="Seller"){
        return (
            <div className="container">
                <br/>

                <h4>Seller Dashboard</h4>




            </div>
        )
    }
    else if(whologged==="Patient"){
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
    else if(whologged==="Admin"){
        return (
            <div className="container">
                <br/>

                <h4>Admin Dashboard</h4>

            </div>
        )
    }



}

export default Navbar;