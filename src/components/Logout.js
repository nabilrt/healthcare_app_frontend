import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Logout = () =>{
    const history = useNavigate();
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    axios.post('http://127.0.0.1:8000/api/logout',obj).then(resp=>{
        console.log(resp.data);
        if(resp.data==="Success"){
            console.log('logged out');
            history('/login');
        }
    }).catch(
        err=>{
            console.log(err.response.data);
        });
}

export default Logout;
