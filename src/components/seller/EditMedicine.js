import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditMedicine = () =>{

    const{id}=useParams();
    const [quantity,setQuantity]=useState("");
    var obj={id:id,quantity:quantity};
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/seller/medicine/details/'+id).then(resp=>{
            console.log(resp.data);
            setQuantity(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);

    const updateMedicine = () =>{


        axios.post('http://127.0.0.1:8000/api/seller/medicine/update',obj).then(resp=>{
            console.log(resp.data);
            history('/seller/medicines/all');
        }).catch(
            err=>{
                console.log(err);
            });

    }

    return(
        <div className="container">
            <br/>
            <form action="">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="number" name="" id="quantity" className="form-control" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            </form> <br/>
            <button className="btn btn-outline-primary" onClick={updateMedicine}>Update</button>
        </div>
    )

}
export default EditMedicine;