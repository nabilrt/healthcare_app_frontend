import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const AddToCart =()=>{

    const{id}=useParams();
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,id:id};
    let history=useNavigate();


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/medicine/add',obj).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Added"){
                history('/patient/shop');
            }else{
                console.log(resp.data);
            }


        }).catch(
            err=>{
                // history('/login');
                console.log(err.response.data);
            });

    },[]);


}
export default AddToCart;