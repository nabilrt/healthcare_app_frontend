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
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Order ID</th>
                    <th className="table-primary">User ID</th>
                    <th className="table-primary">Order Details</th>
                    <th className="table-primary">Total Price</th>
                    <th className="table-primary">Date</th>
                    <th className="table-primary">Status</th>
                </tr>
                {
                    orders.map((item, i) => (
                        <tr key={i}>
                            <td>{item.order_id}</td>
                            <td>{item.user_id}</td>
                            <td><Link to={"/seller/earnings/"+item.order_id} className="btn btn-outline-primary">Details</Link></td>
                            <td>{item.total_price}$</td>
                            <td>{item.order_date}</td>
                            <td>{item.status}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>


        </div>
    )


}

export default SellerEarnings;