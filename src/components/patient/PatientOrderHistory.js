import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const PatientOrderHistory = () =>{
    const [orders,setOrders]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/orders',obj).then(resp=>{
            console.log(resp.data);
            setOrders(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">

            <h4>My Orders</h4>
             <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr >
                    <th >Order ID</th>
                    <th >Total Price</th>
                    <th >Status</th>
                    <th >Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((item, i) => (
                        <tr key={i}>
                            <td>{item.order_id}</td>
                            <td>{item.total_price}$</td>
                            <td>{item.status}</td>
                            <td>{item.order_date}</td>
                            <br/>
                        </tr>
                    ))
                }

                </tbody>


            </table>


        </div>
    )

}
export default PatientOrderHistory;