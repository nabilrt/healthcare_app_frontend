import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const PatientReview = () =>{
    const[comment,setComment]=useState("");
    const[successMsg,setSuccessMsg]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,comment:comment};

    const postReview = () =>{

        axios.post('http://127.0.0.1:8000/api/patient/review/post',obj).then(resp=>{
            setTimeout(()=>{
                setSuccessMsg("Review Posted");
            }, 2000);
            console.log('page to reload')

        }).catch(
            err=>{
                console.log(err.response.data);
            });
    }

    return (
        <div className="container">
            <br/>
            <h4>Post Review</h4>
            <small>Give feedback about our system</small> <br/> <br/>
            <form action="" className="row g-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea name="" id="comment" cols="30" rows="10" className="form-control" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
            </form> <br/>
            <button className="btn btn-outline-success" onClick={postReview}>Post Review</button> &nbsp;
            <Link to="/patient/review/all" className="btn btn-outline-success">Previous Feedbacks</Link>
            <br/>
            <p className="text-success">{successMsg}</p>
        </div>
    )
}
export default PatientReview;