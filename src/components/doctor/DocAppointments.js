import React, {useEffect, useState} from "react";
import axios from "axios";

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
            <h4>Appointments</h4>
            <form action="">
                <div className="form-group">
                    <label htmlFor="key" className="form-label">Search by Date</label>
                    <input type="date" name="" id="key" className="form-control" value={key} onChange={(e)=>setKey(e.target.value)} />
                </div>
            </form>
            <button className="btn btn-outline-info btn-sm" onClick={searchApp}><i className="icon material-symbols-outlined">search</i></button> <br/> <br/>
            <table className="table table-hover">
                <thead className="table-sm table-primary">
                <tr>
                    <th>Appointment ID</th>
                    <th>Patient ID</th>
                    <th>Time</th>
                    <th>Date</th>
                </tr>
                </thead>
               <tbody>
               {
                   appointments.map((item, i) => (
                       <tr key={i} className="table-hover">
                           <td>{item.appointment_id}</td>
                           <td>{item.patient_id}</td>
                           <td>{item.app_time}</td>
                           <td>{item.app_date}</td>
                           <br/>
                       </tr>
                   ))
               }
               </tbody>

            </table>
        </div>
    )

}
export default DocAppointments;