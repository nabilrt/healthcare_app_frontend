import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link} from "react-router-dom";

const DocReview = () =>{
    const[comment,setComment]=useState("");
    const[successMsg,setSuccessMsg]=useState("");
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,comment:comment};

    const postReview = () =>{

            axios.post('http://127.0.0.1:8000/api/doctor/review/post',obj).then(resp=>{
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
            <h4>Post Review</h4>
            <small>Give feedback about our system</small> <br/> <br/>
            <form action="">
                <div className="form-group">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea name="" id="comment" cols="30" rows="10" className="form-control" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                </div>
            </form>
            <button className="btn btn-outline-success mb-1 btn-sm" onClick={postReview}><i className="icon material-symbols-outlined">post_add</i></button> &nbsp;
            <Link to="/doctor/review/all" className="btn btn-outline-warning mb-1 btn-sm"><i className="icon material-symbols-outlined">history</i></Link>
            <br/>
            <p className="text-success">{successMsg}</p>
        </div>
    )
}
export default DocReview;