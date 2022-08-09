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
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Order ID</th>
                    <th className="table-primary">User ID</th>
                    <th className="table-primary">Total Price</th>
                    <th className="table-primary">Status</th>
                    <th className="table-primary">Action</th>
                </tr>
                {
                    orders.map((item, i) => (
                        <tr key={i}>
                            <td>{item.order_id}</td>
                            <td>{item.user_id}</td>
                            <td>{item.total_price}$</td>
                            <td>{item.status}</td>
                            <td><Link to={"/seller/order/update/"+item.order_id} className="btn btn-outline-primary">Update Status</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>


        </div>
    )

}
export default OrderHistory;