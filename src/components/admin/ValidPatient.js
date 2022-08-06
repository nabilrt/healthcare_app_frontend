import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AdminHeader from "../headers/AdminHeader";

const ValidPatient=()=>{
    const[patients,setPatients]=useState([]);


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/patients').then(resp=>{
            console.log(resp.data);
            setPatients(resp.data);

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
            <h4>Valid Patient List</h4>
            <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">ID</th>
                    <th className="table-primary">Name</th>
                    <th className="table-primary">Gender</th>
                    <th className="table-primary">Membership</th>
                    <th className="table-primary">Status</th>
                    <th className="table-primary">Block</th>

                    <th></th>
                </tr>
                {
                    patients.map((item, i) => (
                        <tr key={i}>
                            <td>{item.patient_id}</td>
                            <td>{item.patient_name}</td>
                            <td>{item.patient_gender}</td>
                            <td>{item.membership_type}</td>
                            <td>{item.status}</td>
                            <td><Link to={"/admin/patient/block/"+item.patient_id} className="btn btn-outline-danger">Block</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )

}

export default ValidPatient;
