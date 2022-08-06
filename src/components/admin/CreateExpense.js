import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import AdminHeader from "../headers/AdminHeader";

const CreateExpense=()=>{
    const[purpose,setPurpose]=useState("");
    const[amount,setAmount]=useState("");
    var obj={purpose:purpose,amount:amount};
    let history=useNavigate();

    const addExpense=()=>{
        axios.post('http://127.0.0.1:8000/api/admin/expense/add', obj).then(resp => {
            console.log(resp.data);
            history("/admin/expenses/all");

        }).catch(
            err => {
                // history('/login');
                console.log(err.response.data);
            });
    }

    return(
        <div className="container">
            <br/>
            <AdminHeader/>
            <br/>
            <h4>Create Expense</h4> <br/>
            <form action="" className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="purpose" className="form-label">Purpose</label>
                    <select id="purpose" className="form-select" name="purpose" value={purpose} onChange={(e)=>setPurpose(e.target.value)}>
                        <option value="">Choose An Option</option>
                        <option value="Hosting">Hosting</option>
                        <option value="Security">Security</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label htmlFor="Quantity" className="form-label">Amount</label>
                    <input type="number" name="amount" className="form-control" id="" placeholder="$" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
            </form>
            <br/>
            <button className="btn btn-outline-success" onClick={addExpense}>Add</button>
        </div>
    )



}
export default CreateExpense;