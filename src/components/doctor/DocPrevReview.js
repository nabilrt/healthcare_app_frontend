import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import axios from "axios";


const DocPrevReview = () =>{
    const[reviews,setReviews]=useState([]);
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token};
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/doctor/review/all',obj).then(resp=>{
            console.log(resp.data);
            setReviews(resp.data);

        }).catch(
            err=>{
                console.log(err.response.data);
            });

    },[]);


    return(
        <div className="container">
            <h4>Your Previous Feedbacks</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Review ID</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {
                    reviews.map((item, i) => (
                        <tr key={i} className="table-sm">
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
export default DocPrevReview;