import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const ManageMedicines = () =>{
    const[medicines,setMedicines]=useState([]);
    let history=useNavigate();
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/seller/medicines/all').then(resp=>{
            console.log(resp.data);
            setMedicines(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">

            <h4>All Medicines</h4> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>Medicine ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    medicines.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.medicine_price}$</td>
                            <td><Link to={"/seller/medicine/update/"+item.medicine_id} className="btn btn-outline-warning btn-sm"><i className="icon material-symbols-outlined">edit</i></Link></td>
                            <td><Link to={"/seller/medicine/delete/"+item.medicine_id} className="btn btn-outline-danger btn-sm"><i className="icon material-symbols-outlined">clear</i></Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>

            </table>

        </div>
    )
}

export default ManageMedicines;