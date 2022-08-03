import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const DocEarning = () =>{

    const[earning,setEarning]=useState([]);

    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};

    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/earnings',obj).then(resp=>{
            console.log(resp.data);
            setEarning(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);

    return(
        <div className="container">
            <br/>
            <h4>Earning Details</h4>
            <small>Checkout your earnings</small> <br/> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Appointment ID</th>
                    <th className="table-primary">Patient ID</th>
                    <th className="table-primary">Amount</th>

                </tr>
                {
                   earning.map((item, i) => (
                        <tr key={i}>
                            <td>{item.appointment_id}</td>
                            <td>{item.patient_id}</td>
                            <td>{item.paid_amount}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default DocEarning;