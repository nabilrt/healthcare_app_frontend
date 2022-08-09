import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

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
            <h4>Patient's Medical Histories</h4>
            <small>Contains all the patient's medical history</small> <br/> <br/>
            <table className="table table-responsive-sm">
                <thead>
                <tr>
                    <th>History ID</th>
                    <th>Issues</th>
                    <th>Appointment ID</th>
                    <th>Patient ID</th>
                </tr>
                </thead>
                <tbody>
                {
                    medHistory.map((item, i) => (
                        <tr key={i} className="table-hover table-sm">
                            <td>{item.his_id}</td>
                            <td><Link to={"/doctor/medical/history/"+item.his_id} className="btn btn-outline-info btn-sm"><i className="icon material-symbols-outlined">info</i></Link></td>
                            <td>{item.appointment_id}</td>
                            <td>{item.patient_id}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>

            </table>

        </div>
    )
}

export default MedHistory;