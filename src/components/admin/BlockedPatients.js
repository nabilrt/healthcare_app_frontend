import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";


const BlockedPatient=()=>{
    const[patients,setPatients]=useState([]);


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/patients/blocked').then(resp=>{
            console.log(resp.data);
            setPatients(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);




    return(
        <div className="container">

            <h4>Blocked Patient List</h4>
            <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Membership</th>
                    <th>Status</th>
                    <th>Block</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    patients.map((item, i) => (
                        <tr key={i}>
                            <td>{item.patient_id}</td>
                            <td>{item.patient_name}</td>
                            <td>{item.patient_gender}</td>
                            <td>{item.membership_type}</td>
                            <td><span className="badge border border-danger text-danger mt-2">{item.status}</span></td>
                            <td><Link to={"/admin/patient/unblock/"+item.patient_id} className="btn btn-outline-success btn-sm"><i className="icon material-symbols-outlined">done</i></Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
    )

}

export default BlockedPatient;
