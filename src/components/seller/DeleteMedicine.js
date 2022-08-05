import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DeleteMedicine = () =>{

    const{id}=useParams();
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/seller/medicine/delete/'+id).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Deleted"){
                history('/seller/medicines/all');
            }

        }).catch(
            err=>{
                console.log(err);
            });

    },[]);


}

export default DeleteMedicine;