import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Login = () =>{
   // let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    const history = useNavigate();

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }


    const loginSubmit= ()=>{
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
                else if(token!==""){
                    var doctor = {docId: token.user_id, access_token:token.token, token_type:token.token_for};
                    localStorage.setItem('doctor',JSON.stringify(doctor));
                    // console.log(localStorage.getItem('user'));
                    if(token.token_for==="Doctor"){
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 500);
                        console.log('page to reload');
                        history('/doctor/dashboard');
                    }
                    if(token.token_for==="Patient"){
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 500);
                        console.log('page to reload');
                        history('/patient/dashboard');
                    }
                    if(token.token_for==="Seller"){
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 500);
                        console.log('page to reload');
                        history('/seller/dashboard');
                    }
                    if(token.token_for==="Admin"){
                        setTimeout(()=>{
                            window.location.reload(false);
                        }, 500);
                        console.log('page to reload');
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
        <div className="container">
            <br/>

            <br/>
            <h3>Login to your system</h3>
            <small>Enter correct credentials to login</small> <br/> <br/>
            <form className="form-group">
                <label htmlFor="uname">Username</label> <br/>
                <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)} id="uname" className="form-control-sm" placeholder="Enter your username"/> <br/> <br/>
                <label htmlFor="pass">Password</label><br/>
                <input type="password" name="pass" value={password} id="pass" onChange={(e)=>setPassword(e.target.value)} className="form-control-sm" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
            </form> <br/>
            <button type="button" onClick={loginSubmit} className="btn btn-outline-info">Login</button> <br/>
            <span className="text-danger">
                <p id="msg"></p>
            </span>
        </div>
    )
}

export default Login;