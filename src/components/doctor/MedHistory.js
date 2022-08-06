import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import axios from "axios";
import DoctorHeader from "../headers/DoctorHeader";

const MedHistory = () =>{
    const[medHistory,setMedHistory]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/medical/histories',obj).then(resp=>{
            console.log(resp.data);
            setMedHistory(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);


    return(
        <div className="container">
            <br/>
            <DoctorHeader/>
            <br/>
            <h4>Patient's Medical Histories</h4>
            <small>Contains all the patient's medical history</small> <br/> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">History ID</th>
                    <th className="table-primary">Issues</th>
                    <th className="table-primary">Appointment ID</th>
                    <th className="table-primary">Patient ID</th>
                </tr>
                {
                    medHistory.map((item, i) => (
                        <tr key={i}>
                            <td>{item.his_id}</td>
                            <td><Link to={"/doctor/medical/history/"+item.his_id} className="btn btn-info">Check</Link></td>
                            <td>{item.appointment_id}</td>
                            <td>{item.patient_id}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default MedHistory;