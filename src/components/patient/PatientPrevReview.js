import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";

const PatientPrevReview = () =>{
    const[reviews,setReviews]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/review/all',obj).then(resp=>{
            console.log(resp.data);
            setReviews(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);


    return(
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Your Previous Feedbacks</h4> <br/>
            <table className="table table-bordered">
                <tr className="table-primary">
                    <th className="table-primary">Review ID</th>
                    <th className="table-primary">Comment</th>
                </tr>
                {
                    reviews.map((item, i) => (
                        <tr key={i}>
                            <td>{item.r_id}</td>
                            <td>{item.comment}</td>
                            <br/>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default PatientPrevReview;