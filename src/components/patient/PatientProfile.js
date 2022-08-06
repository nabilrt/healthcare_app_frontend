import React, {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from "react-router-dom";
import axios from "axios";
import PatientHeader from "../headers/PatientHeader";
const PatientProfile=()=>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    let user = JSON.parse(localStorage.getItem('doctor'));
    var obj={token:user.access_token,name:name,email:email,pass:pass};
    let history=useNavigate();
    useEffect(()=>{

        axios.post('http://127.0.0.1:8000/api/patient/profile',obj).then(resp=>{
            console.log(resp.data);
            setName(resp.data.patient_name);
            setEmail(resp.data.patient_email);
            setPass(resp.data.patient_pass);
            //   setInbox(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });

    },[]);
    const saveChanges = () =>{

        axios.post('http://127.0.0.1:8000/api/patient/profile/update',obj).then(resp=>{
            console.log(resp.data);
            history("/patient/profile");

            //   setInbox(resp.data);

        }).catch(
            err=>{
                history('/login');
                console.log(err.response.data);
            });



    }
    return (
        <div className="container">
            <br/>
            <PatientHeader/>
            <br/>
            <h4>Patient Profile</h4>
            <form action="" className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name">Name</label> <br/>
                    <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email">Email</label> <br/>
                    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="pass">Password</label> <br/>
                    <input type={passwordShown ? "text" : "password"} name="pass" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control"/>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" onClick={togglePassword} id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Show Password
                        </label>

                    </div>

                </div>






            </form>


            <button className="btn btn-outline-warning" onClick={saveChanges}>Save Changes</button>


        </div>





    )
}
export default PatientProfile;