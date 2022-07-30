import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () =>{

    const loginSubmit = () =>{

    }

    return (
        <div className="container">
            <br/>
            <h3>Login to your system</h3>
            <small>Enter correct credentials to login</small> <br/> <br/>
            <form className="form-group">
                <label htmlFor="uname">Username</label> <br/>
                <input type="text" name="username" id="uname" className="form-control-sm" placeholder="Enter your username"/> <br/> <br/>
                <label htmlFor="pass">Password</label><br/>
                <input type="password" name="pass" id="pass" className="form-control-sm" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"/>
            </form> <br/>
            <button type="button" onClick={loginSubmit} className="btn btn-outline-info">Login</button>
        </div>
    )
}

export default Login;