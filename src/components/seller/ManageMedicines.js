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
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Medicine ID</th>
                    <th className="table-primary">Name</th>
                    <th className="table-primary">Type</th>
                    <th className="table-primary">Quantity</th>
                    <th className="table-primary">Unit Price</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    medicines.map((item, i) => (
                        <tr key={i}>
                            <td>{item.medicine_id}</td>
                            <td>{item.medicine_name}</td>
                            <td>{item.medicine_type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.medicine_price}$</td>
                            <td><Link to={"/seller/medicine/update/"+item.medicine_id} className="btn btn-outline-warning">Update</Link></td>
                            <td><Link to={"/seller/medicine/delete/"+item.medicine_id} className="btn btn-outline-danger">Delete</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default ManageMedicines;