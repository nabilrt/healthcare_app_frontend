import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Verify = () =>{
    const [otp,setOTP]=useState("");
    const history = useNavigate();

    const OTPVerify = () =>{

        var obj = {otp: otp};
        axios.post("http://127.0.0.1:8000/api/user/verification",obj)
            .then(resp=>{
                var otp = resp.data;
                console.log(otp);
                if(otp==="Otp Invalid"){
                    history("/verify");
                }
                else{
                    history("/login");
                }

            }).catch(err=>{
            console.log(err);
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
                                <h1 className="mb-0">OTP Verification</h1>
                                <p>Your User ID and Password has been sent to your email</p>
                                <form>
                                    <div className="form-group">
                                        <label className="form-label">Enter OTP</label><br></br>
                                        <input className="form-control" type="text" value={otp} onChange={(e)=>setOTP(e.target.value)} placeholder="OTP"/>
                                    </div>
                                </form>
                                <button className= "btn btn-outline-dark" onClick={OTPVerify}>Verify</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}
export default Verify;