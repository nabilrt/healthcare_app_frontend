import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const NormalDoctor = () => {
    const [doctors,setDoctors]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/doctors/normal',obj).then(resp=>{
            console.log(resp.data);
            setDoctors(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);
    return (
        <div className="container">
            <table className="table table-hover table-sm">
                <thead>
                <tr >
                    <th >Doctor Name</th>
                    <th>Doctor Type</th>
                    <th>Speciality</th>
                    <th >Remuneration</th>
                    <th >Schedule</th>

                </tr>
                </thead>
                <tbody>
                {
                    doctors.map((item, i) => (
                        <tr key={i}>
                            <td>{item.doctor_name}</td>
                            <td>{item.doctor_type}</td>
                            <td>{item.doctor_specialty}</td>
                            <td>{<s>{item.visit}</s>}{item.visit - (item.visit * (item.discount_per)/100)}$</td>
                            <td> <Link to={'/patient/doctor/appointment/'+item.doctor_id}>Take Appointment</Link></td>
                            <td><Link to={'/patient/doctor/schedule/'+item.doctor_id}>Check Schedule</Link></td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>

            </table>





        </div>
    )

}

export default NormalDoctor;
