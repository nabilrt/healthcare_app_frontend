import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const SellerEarnings = () =>{
    const [orders,setOrders]=useState([]);
    let history=useNavigate();
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/seller/earnings').then(resp=>{
            console.log(resp.data);
            setOrders(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);


    return(
        <div className="container">

            <h4>Earnings</h4>
            <small>Your earnings from all the orders</small> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Order Details</th>
                    <th>Total Price</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((item, i) => (
                        <tr key={i} className="table-responsive-sm">
                            <td>{item.order_id}</td>
                            <td>{item.user_id}</td>
                            <td><Link to={"/seller/earning/"+item.order_id} className="btn btn-outline-primary btn-sm"><i className="icon material-symbols-outlined">info</i></Link></td>
                            <td>{item.total_price}$</td>
                            <td>{item.order_date}</td>
                            <td>{item.status}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>


            </table>


        </div>
    )


}

export default SellerEarnings;