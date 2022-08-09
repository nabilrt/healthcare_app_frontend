import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

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
                                <h1 className="mb-0">Doctor Registration</h1>
                                <p>Enter correct credentials</p>
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label> <br/>
                                        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label> <br/>
                                        <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="pass" className="form-label">Password</label> <br/>
                                        <input type={passwordShown ? "text" : "password"} name="pass" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control"/>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" onClick={togglePassword} id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Show Password
                                            </label>

                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="doc_type" className="form-label">Type</label>
                                        <select name="doc_type" id="doc_type" value={type} onChange={(e)=>setType(e.target.value)} className="form-select">
                                            <option value="">Choose One</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Specialist">Specialist</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor="speciality" className="form-label">Speciality</label>
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
                                        <label htmlFor="dp" className="form-label">Profile Picture</label>
                                        <input type="file" name="dp" id="dp" value={dp} onChange={(e)=>setDp(e.target.value)} className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="degree" className="form-label">Degree</label>
                                        <input type="file" name="degree" id="degree" value={degree} onChange={(e)=>setDegree(e.target.value)} className="form-control"/>
                                    </div>

                                </form> <br/>
                                <button type="button" onClick={RegisterSubmit} className="btn btn-outline-success">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default DocRegister;