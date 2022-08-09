import React from 'react'
import SideNav from "../inc/SideNav"
import TopNav from "../inc/TopNav"
import PatientDash from "../patient/PatientDash"
import PatientProfile from '../patient/PatientProfile'
import PatientInbox from "../patient/PatientInbox";
import PatientConv from "../patient/PatientConv";
import PatientNewMessage from "../patient/PatientNewMessage";
import PatientReply from "../patient/PatientReply";
import Membership from "../patient/Membership";
import Doctors from "../patient/Doctors";
import DocSchedule from "../patient/DocSchedule";
import DocAppointment from "../patient/DocAppointment";
import Shop from "../patient/Shop";
import Cart from "../patient/Cart";
import AddToCart from "../patient/AddToCart";
import ConfirmCheckout from "../patient/ConfirmCheckout";
import PatientOrderHistory from "../patient/PatientOrderHistory";
import PatientNotice from "../patient/PatientNotice";
import PatientReview from "../patient/PatientReview";
import PatientPrevReview from "../patient/PatientPrevReview";

const test = (props) => {

    const component = () => {
        if (props.path === "dashboard") {
            return <PatientDash />;
        } else if (props.path === "viewProfile") {
            return <PatientProfile />;
        }else if (props.path === "inbox") {
            return <PatientInbox />;
        }
        else if (props.path === "conversation") {
            return <PatientConv />;
        }
        else if (props.path === "conversation/message/new") {
            return <PatientNewMessage />;
        }
        else if (props.path === "conversation/reply") {
            return <PatientReply />;
        }
        else if (props.path === "membership/info") {
            return <Membership />;
        }
        else if (props.path === "doctors/all") {
            return <Doctors />;
        }
        else if (props.path === "doctor/schedule") {
            return <DocSchedule />;
        }
        else if (props.path === "doctor/appointment") {
            return <DocAppointment />;
        }
        else if (props.path === "patient/shop") {
            return <Shop />;
        }
        else if (props.path === "cart") {
            return <Cart />;
        }

        else if (props.path === "cart/add") {
            return <AddToCart />;
        }
        else if (props.path === "checkout/confirm") {
            return <ConfirmCheckout />;
        }
        else if (props.path === "orders") {
            return <PatientOrderHistory />;
        }
        else if (props.path === "notices") {
            return <PatientNotice />;
        }
        else if (props.path === "review/all") {
            return <PatientPrevReview />;
        }
        else if (props.path === "review/post") {
            return <PatientReview />;
        }
        else if (props.path === "profile") {
            return <PatientProfile />;
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