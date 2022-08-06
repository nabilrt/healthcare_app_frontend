import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AdminHeader from "../headers/AdminHeader";

const ManageExpense=()=>{
    const[expenses,setExpenses]=useState([]);

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/expenses').then(resp=>{
            console.log(resp.data);
            setExpenses(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">
            <br/>
            <AdminHeader/>
            <br/>
            <h4>Manage Expenses</h4> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Purpose</th>
                    <th className="table-primary">Amount</th>
                    <th className="table-primary">Created</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    expenses.map((item, i) => (
                        <tr key={i}>
                            <td>{item.purpose}</td>
                            <td>{item.amount}$</td>
                            <td>{item.created}</td>
                            <td><Link to={"/admin/expense/edit/"+item.expense_id} className="btn btn-outline-warning">Edit</Link></td>
                            <td><Link to={"/admin/expense/delete/"+item.expense_id} className="btn btn-outline-danger">Delete</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )

}

export default ManageExpense;