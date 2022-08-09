import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const OrderHistory = () =>{
    const [orders,setOrders]=useState([]);

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/seller/earnings').then(resp=>{
            console.log(resp.data);
            setOrders(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">

            <h4>Manage Orders</h4>
            <small>You can update order status here</small> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((item, i) => (
                        <tr key={i}>
                            <td>{item.order_id}</td>
                            <td>{item.user_id}</td>
                            <td>{item.total_price}$</td>
                            <td>{item.status}</td>
                            <td>{item.status !=="Cancelled" ? <Link to={"/seller/order/update/"+item.order_id} className="btn btn-outline-primary btn-sm"><i className="icon material-symbols-outlined">update</i></Link> : "" }</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>
            </table>


        </div>
    )

}
export default OrderHistory;