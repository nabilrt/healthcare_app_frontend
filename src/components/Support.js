import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Support=()=>{
    const[id,setID]=useState("");
    const [error,setError]=useState("");
    let history=useNavigate();
    var obj={id:id};

    const sendReq=()=>{

        axios.post('http://127.0.0.1:8000/api/contact/user',obj).then(resp=>{
            console.log(resp.data);
            if(resp.data==="Sent"){
                history('/contact/support/confirm');
            }else{
                setError("ID Does not Exist");
            }


        }).catch(
            err=>{
                console.log(err.response.data);
            });

    }

    return(

        <div className="wrapper">
            <section className="sign-in-page">
                <div id="container-inside">
                    <div id="circle-small"></div>
                    <div id="circle-medium"></div>
                    <div id="circle-large"></div>
                    <div id="circle-xlarge"></div>
                    <div id="circle-xxlarge"></div>
                </div>
                <div className="container p-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 text-center pt-5">
                            <div className="sign-in-detail text-white">
                                <a className="" href="#"><img src="../assets/images/default.png"
                                                              className="img-fluid" alt="logo"
                                /></a>

                            </div>
                        </div>
                        <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                            <div className="sign-in-from">
                                <h1 className="mb-0">Contact Support</h1> <br/>
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">User ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="id"
                                            placeholder="Enter your ID"
                                            value={id}
                                            onChange={(e)=>setID(e.target.value)}
                                            autoFocus
                                        />
                                    </div>
                                </form>
                                <span className="text-danger">{error}</span>
                                <br/>
                                <button className="btn btn-outline-dark btn-sm" onClick={sendReq}><i className="icon material-symbols-outlined">send</i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>




    )

}
export default Support;