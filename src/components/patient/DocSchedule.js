import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const DocSchedule = () => {
    const{id}=useParams();
    const [schedule,setSchedule]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/patient/doctors/schedule/'+id).then(resp=>{
            console.log(resp.data);
            setSchedule(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);
 return (
     <div className="container">
        <br/>

         <br/>
         <h4>Doctor Schedule</h4>
         <br/>
         <table className="table table-hover table-sm">
             <thead>
             <tr >
                 <th >Appointment ID</th>
                 <th >Date</th>
                 <th >Time</th>


             </tr>
             </thead>
             <tbody>
             {
                 schedule.map((item, i) => (
                     <tr key={i}>
                         <td>{item.appointment_id}</td>
                         <td>{item.app_date}</td>
                         <td>{item.app_time}</td>



                         <br/>
                     </tr>
                 ))
             }
             </tbody>


         </table>

     </div>




 )

}

export default DocSchedule;
