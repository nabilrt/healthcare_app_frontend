import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import axios from "axios";


const OrderDetails = () =>{
    const{id}=useParams();
    const[order,setOrder]=useState([]);

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/seller/order/'+id).then(resp=>{
            console.log(resp.data);
            setOrder(resp.data);
        }).catch(
            err=>{
                console.log(err);
            });

    },[]);



    return(
        <div className="container">

            <h4>Order Details For Order {order.id}</h4>
            <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Medicine ID</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
                </thead>
             <tbody>
             {
                 order.map((item, i) => (
                     <tr key={i} className="table-responsive-sm">
                         <td>{item.medicine_id}</td>
                         <td>{item.quantity}</td>
                         <td>{item.unit_price}$</td>
                         <td>{item.total_price}$</td>
                         <br/>
                     </tr>
                 ))
             }
             </tbody>

            </table>
        </div>
    )

}

export default OrderDetails;