import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BasicHeader from "../headers/BasicHeader";

const DocRegister = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [gender,setGender]=useState("");
    const [type,setType]=useState("");
    const [speciality,setSpeciality]=useState("");
    const [dp,setDp]=useState("");
    const [degree,setDegree]=useState("");
    const history = useNavigate();
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const RegisterSubmit = () =>{
        console.log(name)
        console.log(email)
        console.log(pass)
        console.log(gender)
        console.log(type)
        console.log(speciality)
        console.log(dp)
        console.log(degree)
        var obj={name: name,email:email,pass:pass,gender:gender,type:type,speciality:speciality,dp:dp,degree:degree};
        axios.post("http://127.0.0.1:8000/api/register/doctor",obj)
            .then(resp=>{
                history("/verify");
            }).catch(err=>{
            console.log(err.response.data);
        });
    }

    return (
        <div className="container">

            <br/>
            <BasicHeader></BasicHeader>
            <br/>
            <h4>Doctor Registration Form</h4>
            <small>Please enter correct details</small> <br/> <br/>
            <form className="row g-3">
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
                <div className="col-md-6">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-select">
                        <option value="">Choose One</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Other</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="doc_type">Type</label>
                    <select name="doc_type" id="doc_type" value={type} onChange={(e)=>setType(e.target.value)} className="form-select">
                        <option value="">Choose One</option>
                        <option value="Normal">Normal</option>
                        <option value="Specialist">Specialist</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="speciality">Speciality</label>
                    <select name="specialty" id="speciality" value={speciality} onChange={(e)=>setSpeciality(e.target.value)} className="form-select">
                        <option value="">Choose One</option>
                        <option value="Surgeon">Surgeon</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Otolaryngologist">Otolaryngologist</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="dp">Profile Picture</label>
                    <input type="file" name="dp" id="dp" value={dp} onChange={(e)=>setDp(e.target.value)} className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="degree">Degree</label>
                    <input type="file" name="degree" id="degree" value={degree} onChange={(e)=>setDegree(e.target.value)} className="form-control"/>
                </div>

            </form> <br/>
            <button type="button" onClick={RegisterSubmit} className="btn btn-outline-success">Sign Up</button>
        </div>
    )
}

export default DocRegister;