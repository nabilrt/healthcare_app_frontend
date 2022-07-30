import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const DocRegister = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const RegisterSubmit = () =>{

    }

    return (
        <div className="container">
            <br/>
            <h4>Doctor Registration Form</h4>
            <small>Please enter correct details</small> <br/> <br/>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name">Name</label> <br/>
                    <input type="text" name="name" id="name" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email">Email</label> <br/>
                    <input type="text" name="email" id="email" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="pass">Password</label> <br/>
                    <input type={passwordShown ? "text" : "password"} name="pass" id="pass" className="form-control"/>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" onClick={togglePassword} id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Show Password
                        </label>

                    </div>

                </div>
                <div className="col-md-6">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" className="form-select">
                        <option value="">Choose One</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Other</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="doc_type">Type</label>
                    <select name="doc_type" id="doc_type" className="form-select">
                        <option value="">Choose One</option>
                        <option value="Normal">Normal</option>
                        <option value="Specialist">Specialist</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="speciality">Speciality</label>
                    <select name="specialty" id="speciality" className="form-select">
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
                    <input type="file" name="dp" id="dp" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="degree">Degree</label>
                    <input type="file" name="degree" id="degree" className="form-control"/>
                </div>

            </form> <br/>
            <button type="button" onClick={RegisterSubmit} className="btn btn-outline-success">Sign Up</button>
        </div>
    )
}

export default DocRegister;