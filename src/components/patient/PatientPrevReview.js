import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


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

            <h4>Your Previous Feedbacks</h4> <br/>
            <table className="table table-hover table-sm">
                <thead>
                <tr >
                    <th >Review ID</th>
                    <th >Comment</th>
                </tr>
                </thead>
                <tbody>
                {
                    reviews.map((item, i) => (
                        <tr key={i}>
                            <td>{item.r_id}</td>
                            <td>{item.comment}</td>
                            <br/>
                        </tr>
                    ))
                }
                </tbody>


            </table>
        </div>
    )
}
export default PatientPrevReview;