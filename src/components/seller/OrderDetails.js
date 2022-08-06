import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import SellerHeader from "../headers/SellerHeader";

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
            <br/>
            <SellerHeader/>
            <br/>
            <h4>Order Details For Order {order.id}</h4>
            <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Medicine ID</th>
                    <th className="table-primary">Quantity</th>
                    <th className="table-primary">Unit Price</th>
                    <th className="table-primary">Total Price</th>
                </tr>
                {
                    order.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit_price}$</td>
                            <td>{item.total_price}$</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>
        </div>
    )

}

export default OrderDetails;