import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const DocPayment = () =>{
    const[amount,setAmount]=useState("");
    const[discount,setDiscount]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,visit:amount,disc_per:discount};
    axios.defaults.headers.common["Authorization"] = obj.token;

    let history=useNavigate();

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/payment/profile',obj).then(resp=>{
            console.log(resp.data);
            if(resp.data==="None"){
                setAmount("");
                setDiscount("");
            }else{
                setAmount(resp.data.visit);
                setDiscount(resp.data.discount_per);
            }

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);

    const saveChanges = () =>{
        axios.post('http://127.0.0.1:8000/api/doctor/payment/profile/create',obj).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Updated"){
                history("/doctor/remuneration");
            }else{
                history("/doctor/remuneration");
            }
        }).catch(
            err=>{
                console.log(err.response.data);
            });

    }

    return(
        <div className="container">
            <h4>Remuneration Profile</h4>
            <form action="">
                <div className="form-group">
                    <label htmlFor="amount" className="form-label">Amount $</label>
                    <input type="text" name="" id="amount" className="form-control" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
               <div className="form-group">
                   <label htmlFor="disc_per" className="form-label">Discount Percentage</label>
                   <select name="" id="" className="form-select" value={discount} onChange={(e)=>setDiscount(e.target.value)}>
                       <option value="" selected>Choose An Option</option>
                       <option value="5">5%</option>
                       <option value="15">15%</option>
                       <option value="25">25%</option>
                       <option value="35">35%</option>
                       <option value="50">50%</option>
                   </select>
               </div>

            </form> <br/>
            <button className="btn btn-outline-success btn-sm" onClick={saveChanges}><i className="icon material-symbols-outlined">save</i></button>
        </div>
    )

}
export default DocPayment;