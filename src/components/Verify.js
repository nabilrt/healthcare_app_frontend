import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Verify = () =>{
    const [otp,setOTP]=useState("");
    const history = useNavigate();

    const OTPVerify = () =>{

        var obj = {otp: otp};
        axios.post("http://127.0.0.1:8000/api/doctor/verification",obj)
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
        <div className="container">
            <br/>
            <h4>Your User ID and OTP has been sent to your email.</h4>
            <form>
                <label className="form-label">Enter OTP</label><br></br>
                <input className="form-control" type="text" value={otp} onChange={(e)=>setOTP(e.target.value)} placeholder="OTP"></input><br></br>
            </form>
            <button className= "btn btn-outline-dark" onClick={OTPVerify}>Verify</button>
        </div>

    )
}
export default Verify;