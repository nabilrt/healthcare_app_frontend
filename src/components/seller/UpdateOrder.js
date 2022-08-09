import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateOrder = () =>{

    const{id}=useParams();
    const [status,setStatus]=useState("");
    var obj={id:id,status:status};
    let history=useNavigate();

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/seller/order/details/'+id).then(resp=>{
            console.log(resp.data);
            setStatus(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);

    const updateOrder = () =>{


        axios.post('http://127.0.0.1:8000/api/seller/order/update',obj).then(resp=>{
            console.log(resp.data);
            history('/seller/order/history');
        }).catch(
            err=>{
                console.log(err);
            });

    }

    return(
        <div className="container">

            <form action="">
                <label htmlFor="status" className="form-label">Order Status</label>
                <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)} className="form-select">
                    <option value="Ordered">Ordered</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </form> <br/>
            <button className="btn btn-outline-primary" onClick={updateOrder}>Update</button>
        </div>
    )

}
export default UpdateOrder;
