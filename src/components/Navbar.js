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
    }else if(status==="Yes"){
        return (
            <div>Hello</div>
        )
    }



}

export default Navbar;