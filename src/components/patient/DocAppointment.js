import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import PatientHeader from "../headers/PatientHeader";
const DocAppointment = () => {
    const{id}=useParams();
    const [appDate,setAppDate]=useState("");
    const [appTime,setAppTime]=useState("");
    const [issues,setIssues]=useState([]);


    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,appDate:appDate,appTime:appTime,issues:issues,id:id};

    return(
        <div className="container">
            <br/>
                <PatientHeader>

                </PatientHeader>
            <h4>Take appointment</h4>
            <br/>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="app_time" className="form-label">Choose Time Slot</label>
                    <input type="time" name="app_time" id="app_time" className="form-control" value={appTime} onChange={(e)=>setAppTime(e.target.value)}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="app_date" className="form-label">Date</label>
                    <input type="date" name="app_date" id="app_date" className="form-control" value={appDate} onChange={(e)=>setAppDate(e.target.value)}/>
                </div>
                <br/>
                    <h6>Medical Checklist</h6>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Gastric"
                               id="defaultCheck2" value={issues} onChange={(e)=>setIssues(e.target.value[0])}/>
                        <label className="form-check-label" htmlFor="defaultCheck2"> Gastric </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Sour Throat"
                               id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3"> Sour Throat </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Allergy"
                               id="defaultCheck4"/>
                        <label className="form-check-label" htmlFor="defaultCheck4"> Allergy </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Fever"
                               id="defaultCheck5"/>
                        <label className="form-check-label" htmlFor="defaultCheck5"> Fever </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Cough"
                               id="defaultCheck6"/>
                        <label className="form-check-label" htmlFor="defaultCheck6"> Cough </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Diabetes"
                               id="defaultCheck7"/>
                        <label className="form-check-label" htmlFor="defaultCheck7"> Diabetes </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Migraine"
                               id="defaultCheck8"/>
                        <label className="form-check-label" htmlFor="defaultCheck8"> Migraine </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="problems[]" type="checkbox" value="Eye Problem"
                               id="defaultCheck9"/>
                        <label className="form-check-label" htmlFor="defaultCheck9"> Eye Problem </label>
                    </div>


            </form>




        </div>

    )
}

