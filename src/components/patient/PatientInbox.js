import React from "react";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientInbox = () =>{
    const[inbox,setInbox]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    axios.defaults.headers.common["Authorization"] = obj.token;
    let history=useNavigate();

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/inbox',obj).then(resp=>{
            console.log(resp.data);
            setInbox(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);


    return(


            <div className="content-wrapper">
                <PatientHeader/>

                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card">
                        <h5 className="card-header">Inbox</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead className="table-dark">
                                <tr>
                                    <th>Inbox ID</th>
                                    <th>Doctor ID</th>
                                    <th>Appointment ID</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">

                                {
                                    inbox.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.inbox_id}</td>
                                            <td>{item.doctor_id}</td>
                                            <td>{item.appointment_id}</td>
                                            <td><Link to={"/patient/inbox/"+item.inbox_id} className="btn btn-outline-dark">Go To Chat</Link></td>
                                            <br/>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


    )
}

export default PatientInbox;