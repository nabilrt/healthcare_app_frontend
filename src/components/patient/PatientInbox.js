import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientInbox = () =>{
    const[inbox,setInbox]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    let history=useNavigate();

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/inbox',obj).then(resp=>{
            console.log(resp.data);
            setInbox(resp.data);

        }).catch(
            err=>{
                // history('/login');
                console.log(err.response.data);
            });

    },[]);


    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Inbox</h4>
            <small>Patient can interact with doctors</small> <br/>
            <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Inbox ID</th>
                    <th className="table-primary">Doctor ID</th>
                    <th className="table-primary">Appointment ID</th>
                    <th className="table-primary">Action</th>
                </tr>
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
            </table>

        </div>
    )
}

export default PatientInbox;