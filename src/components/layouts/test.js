import React from 'react'
import SideNav from "../inc/SideNav"
import TopNav from "../inc/TopNav"
import PatientDash from "../patient/PatientDash"
import PatientProfile from '../patient/PatientProfile'
import PatientInbox from "../patient/PatientInbox";

const test = (props) => {

    const component = () => {
        if (props.path === "dashboard") {
            return <PatientDash />;
        } else if (props.path === "viewProfile") {
            return <PatientProfile />;
        }else if (props.path === "inbox") {
            return <PatientInbox />;
        }
    };

    return (
        <div>
            <TopNav />
            <div className="position-relative">
            </div>
            <div id="content-page" className="content-page">
                <div className="row">
                    <div className="col-4 col-md-2"><SideNav/></div>
                    <div className="col-18 col-md-8">{component()}</div>
                </div>
            </div>
        </div>
    )
}
export default test;