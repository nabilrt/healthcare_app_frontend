import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const TakeMembership = () => {
    const [amount,setAmount]=useState("");
    const [method,setMethod]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    let history=useNavigate();
    var obj={token:user.access_token,amount:amount,met:method};

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/charge',obj).then(resp=>{
            console.log(resp.data);
            setAmount(resp.data.charge);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);


const pay=()=>
{
    axios.post('http://127.0.0.1:8000/api/patient/membership/pay',obj).then(resp=>{
        console.log(resp.data);


        //   setInbox(resp.data);
        history('/patient/membership/info');
    }).catch(
        err=>{

            console.log(err.response.data);
        });
}

    return(
        <div className="container">


            <form action="">
                <label htmlFor="" className="form-label">Membership Price</label>
                <div className="input-group">

                    <br/>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Remuneration Amount"
                        aria-label="Username"
                        aria-describedby="basic-addon11"
                        name="amount"
                        value={amount} onChange={(e)=>setAmount(e.target.value)}

                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disc_per" className="form-label">Payment Method</label>
                    <select id="disc_per" className="form-select" name="met" value={method} onChange={(e)=>setMethod(e.target.value)}>
                        <option>Choose an Option</option>
                        <option value="Bkash">Bkash</option>
                        <option value="Rocket">Rocket</option>
                        <option value="Nagad">Nagad</option>
                    </select>

                </div>
                <br/>
            </form>
            <br/>
            <button className="btn btn-outline" onClick={pay}>Pay</button>


        </div>

    )
}
export default TakeMembership;