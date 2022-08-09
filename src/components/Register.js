import React from "react";
import {Link} from "react-router-dom";



const Register = () =>{
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
                                <h1 className="mb-0">Sign Up</h1>
                                <p>Choose From the Options Below</p>
                                <form className="mt-4">
                                    <div className="form-group">
                                     <Link to="/register/doctor" className="btn btn-primary hover mb-1">Join as Doctor</Link>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/patient/register" className="btn btn-info mb-1">Join as User</Link>
                                    </div>
                                    <div className="sign-info">
                                        <span
                                            className="dark-color d-inline-block line-height-2">Already have an account? <Link
                                            to="/login">Sign up</Link></span>
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

export default Register;