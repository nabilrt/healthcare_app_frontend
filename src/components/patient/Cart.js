import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const Cart=()=>{

    const[meds,setMeds]=useState([]);
    const[error,setError]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    let history=useNavigate();

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/cart/all',obj).then(resp=>{
            console.log(resp.data);
            setMeds(resp.data);


        }).catch(
            err=>{
                // history('/login');
                console.log(err.response.data);
            });

    },[]);

    const checkOut=()=>{

        axios.post('http://127.0.0.1:8000/api/patient/cart/checkout',obj).then(resp=>{
            console.log(resp.data);
           // setMeds(resp.data);
            if(resp.data==="Checkout"){
                history('/patient/checkout/confirm');
            }else if(resp.data==="Empty"){
                setError("Cart is Empty!!");
            }

        }).catch(
            err=>{
                // history('/login');
                console.log(err.response.data);
            });

    }

    const emptyCart=()=>{

        axios.post('http://127.0.0.1:8000/api/patient/cart/empty',obj).then(resp=>{
            console.log(resp.data);
            // setMeds(resp.data);
            if(resp.data==="Empty"){
                setError("Cart Cleared!!");
            }else if(resp.data==="Already Empty"){
                setError("Cart is Empty Already!!");
            }

        }).catch(
            err=>{
                // history('/login');
                console.log(err.response.data);
            });


    }

    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Cart</h4> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Medicine ID</th>
                    <th className="table-primary">Name</th>
                    <th className="table-primary">Quantity</th>
                    <th className="table-primary">Unit Price</th>
                    <th className="table-primary">Total Price</th>
                    <th></th>
                </tr>
                {
                   meds.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.item_name}</td>
                            <td>{item.item_quantity}</td>
                            <td>{item.unit_price}$</td>
                            <td>{item.total_price}$</td>
                            <br/>
                        </tr>
                    ))
                }
            </table> <br/>
            <button className="btn btn-outline-success" onClick={checkOut}>Checkout</button> &nbsp;
            <button className="btn btn-outline-danger" onClick={emptyCart}>Empty Cart</button>
            <br/>
            <p className="text-danger">{error}</p>
        </div>
    )

}
export default Cart;