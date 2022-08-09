import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";


const ValidDoctor=()=>{
    const[doctors,setDoctors]=useState([]);


    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/admin/doctors').then(resp=>{
            console.log(resp.data);
            setDoctors(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);




    return(
        <div className="container">

            <h4>Valid Doctor List</h4>
            <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Speciality</th>
                    <th>Status</th>
                    <th>Block</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    doctors.map((item, i) => (
                        <tr key={i}>
                            <td>{item.doctor_id}</td>
                            <td>{item.doctor_name}</td>
                            <td>{item.doctor_type}</td>
                            <td>{item.doctor_specialty}</td>
                            <td><span className="badge border border-success text-success mt-2">{item.status}</span></td>
                            <td><Link to={"/admin/doctor/block/"+item.doctor_id} className="btn btn-outline-danger btn-sm"><i className="icon material-symbols-outlined">block</i></Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>
            </table>

        </div>
    )

}

export default ValidDoctor;
