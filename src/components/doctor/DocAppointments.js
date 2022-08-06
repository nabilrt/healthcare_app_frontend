import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import app from "../../App";
import DoctorHeader from "../headers/DoctorHeader";

const DocAppointments = () =>{
    const[appointments,setAppointments]=useState([]);
    const[key,setKey]=useState("");

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/appointments',obj).then(resp=>{
            console.log(resp.data);
           setAppointments(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    const searchApp = () =>{

        var obj1={token:user.access_token,s_key:key};

            axios.post('http://127.0.0.1:8000/api/doctor/appointment/search',obj1).then(resp=>{
                console.log(resp.data);
                setAppointments(resp.data);

            }).catch(
                err=>{
                    console.log(err.response.data);
                });

    }

    return(
        <div className="container">
            <br/>
            <DoctorHeader/>
            <br/>
            <h4>Appointments</h4>
            <form action="">
                <label htmlFor="key" className="form-label">Search by Date</label>
                <input type="date" name="" id="key" className="form-control" value={key} onChange={(e)=>setKey(e.target.value)} />
            </form> <br/>
            <button className="btn btn-outline-info" onClick={searchApp}>Search</button> <br/> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Appointment ID</th>
                    <th className="table-primary">Patient ID</th>
                    <th className="table-primary">Time</th>
                    <th className="table-primary">Date</th>
                </tr>
                {
                    appointments.map((item, i) => (
                        <tr key={i}>
                            <td>{item.appointment_id}</td>
                            <td>{item.patient_id}</td>
                            <td>{item.app_time}</td>
                            <td>{item.app_date}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>
        </div>
    )

}
export default DocAppointments;