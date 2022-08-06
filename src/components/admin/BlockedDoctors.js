import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AdminHeader from "../headers/AdminHeader";

const BlockedDoctors =() => {
    const[doctors,setDoctors]=useState([]);


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/doctors/blocked').then(resp=>{
            console.log(resp.data);
            setDoctors(resp.data);

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
            <h4>Blocked Doctor List</h4>
            <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">ID</th>
                    <th className="table-primary">Name</th>
                    <th className="table-primary">Type</th>
                    <th className="table-primary">Speciality</th>
                    <th className="table-primary">Status</th>
                    <th className="table-primary">Block</th>

                    <th></th>
                </tr>
                {
                    doctors.map((item, i) => (
                        <tr key={i}>
                            <td>{item.doctor_id}</td>
                            <td>{item.doctor_name}</td>
                            <td>{item.doctor_type}</td>
                            <td>{item.doctor_specialty}</td>
                            <td>{item.status}</td>
                            <td><Link to={"/admin/doctor/unblock/"+item.doctor_id} className="btn btn-outline-primary">Unblock</Link></td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )

}

export default BlockedDoctors;
