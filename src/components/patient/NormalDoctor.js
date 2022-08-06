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
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Doctor Name</th>
                    <th className="table-primary">Doctor Type</th>
                    <th className="table-primary">Speciality</th>
                    <th className="table-primary">Remuneration</th>
                    <th className="table-primary">Schedule</th>




                </tr>
                {
                    doctors.map((item, i) => (
                        <tr key={i}>
                            <td>{item.doctor_name}</td>
                            <td>{item.doctor_type}</td>
                            <td>{item.doctor_specialty}</td>
                            <td>{item.visit}$</td>
                            <td><Link to={'/patient/doctor/schedule/'+item.doctor_id}>Check Schedule</Link></td>


                            <br/>
                        </tr>
                    ))
                }
            </table>





        </div>
    )

}

export default NormalDoctor;
