import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ConfirmationSupport=()=>{

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
                                <h2 className="mb-0">Email Sent Successfully</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )

}

export default ConfirmationSupport;