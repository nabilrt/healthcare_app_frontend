import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';


const Login = () =>{
   // let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    const history = useNavigate();

    const loginSubmit= ()=>{
        console.log(name);
        console.log(password);
        var obj = {username: name, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
            .then(resp=>{
                var token = resp.data;
                console.log(token);
                if(token==="Not Verified"){
                   history('/verify');
                }else if (token==="Wrong Info"){
                    document.getElementById('msg').innerHTML="No User Found";
                }
                else if(token==="Blocked"){
                    document.getElementById('msg').innerHTML="You are Blocked! Please Contact Support";
                }
                else if(token!==""){
                    var doctor = {docId: token.user_id, access_token:token.token, token_type:token.token_for};
                    localStorage.setItem('doctor',JSON.stringify(doctor));
                    // console.log(localStorage.getItem('user'));
                    if(token.token_for==="Doctor"){

                        history('/doctor/dashboard');
                    }
                    if(token.token_for==="Patient"){

                        history('/patient/dashboard');
                    }
                    if(token.token_for==="Seller"){

                        history('/seller/dashboard');
                    }
                    if(token.token_for==="Admin"){

                        history('/admin/dashboard');
                    }
                    //console.log('Login');
                    if(token==="No User Found"){
                        document.getElementById('msg').innerHTML="No User Found";
                    }
                }

            }).catch(err=>{
            console.log(err);
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
                                <h1 className="mb-0">Sign in</h1>
                                <p>Enter your User ID and Password</p>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="exampleInputEmail1">User ID</label>
                                        <input type="text" className="form-control mb-0" id="exampleInputEmail1" value={name} onChange={(e)=>setName(e.target.value)}
                                               placeholder="ASHCS-X-X"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="exampleInputPassword1">Password</label>

                                        <input type="password" className="form-control mb-0" id="exampleInputPassword1" value={password}  onChange={(e)=>setPassword(e.target.value)}
                                               placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
                                    </div>
                                    <div className="d-inline-block w-100">

                                        <button type="button" className="btn btn-outline-primary mb-1 float-start" onClick={loginSubmit}><i className="icon material-symbols-outlined">login</i></button>
                                    </div>
                                    <div className="sign-info">
                                        <span
                                            className="dark-color d-inline-block line-height-2">Don't have an account? <Link
                                            to="/register">Sign up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>



    )
}

export default Login;