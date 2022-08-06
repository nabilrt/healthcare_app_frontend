import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";
import AllDoctor from "./AllDoctor";
import NormalDoctor from "./NormalDoctor";
import PatientHeader from "../headers/PatientHeader";
const Doctors = () => {
    const [isPremium,setisPremium]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/status',obj).then(resp=>{
            console.log(resp.data);
            setisPremium(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);
   if (isPremium==="yes"){
       return (
           <div className="container">
               <br/>
               <PatientHeader/>
               <br/>
               <h4>Doctors</h4>
               <small>Here are all doctors</small> <br/>
               <br/>

         <AllDoctor>

         </AllDoctor>

           </div>
       )

   }
   else {
       return (
           <div className="container">
               <br/>
               <h4>Doctors</h4>
               <small>Here are all doctors</small> <br/>
               <br/>

               <NormalDoctor>

               </NormalDoctor>

           </div>
       )

   }




}
export default Doctors;