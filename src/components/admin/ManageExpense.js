import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const ManageExpense=()=>{
    const[expenses,setExpenses]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj = {token: user.access_token};
    let history = useNavigate();
    axios.defaults.headers.common["Authorization"] = obj.token;

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/expenses').then(resp=>{
            console.log(resp.data);
            setExpenses(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">

            <h4>Manage Expenses</h4> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Purpose</th>
                    <th>Amount</th>
                    <th>Created</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    expenses.map((item, i) => (
                        <tr key={i}>
                            <td>{item.purpose}</td>
                            <td>{item.amount}$</td>
                            <td>{item.created}</td>
                            <td><Link to={"/admin/expense/edit/"+item.expense_id} className="btn btn-outline-warning btn-sm"><i className="icon material-symbols-outlined">edit</i></Link></td>
                            <td><Link to={"/admin/expense/delete/"+item.expense_id} className="btn btn-outline-danger btn-sm"><i className="icon material-symbols-outlined">clear</i></Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
    )

}

export default ManageExpense;