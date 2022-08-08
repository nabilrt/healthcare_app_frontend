import React from 'react'
import SideNav from "../inc/SideNav"
import TopNav from "../inc/TopNav"
import PatientDash from "../patient/PatientDash"
import PatientProfile from '../patient/PatientProfile'

const test = (props) => {

    const component = () => {
        if (props.path == "dashboard") {
            return <PatientDash />;
        } else if (props.path == "viewProfile") {
            return <PatientProfile />;
        }
    };

    return (
        <div>
           <TopNav/>
           <SideNav/>

           <div className="position-relative">
           </div>
           <div id="content-page" className="content-page">
              <div className="container">
                 {component()}
              </div>
           </div>
        </div>
    )
}
export default test;