import React from 'react'
import DoctorSideNav from "../inc/DoctorSideNav";
import DoctorTopNav from "../inc/DoctorTopNav";
import DocDash from "../doctor/DocDash";
import DocProfile from "../doctor/DocProfile";
import DocInbox from "../doctor/DocInbox";
import DocConv from "../doctor/DocConv";
import DocReply from "../doctor/DocReply";
import DocNewMessage from "../doctor/DocNewMessage";
import DocEarning from "../doctor/DocEarning";
import DocPayment from "../doctor/DocPayment";
import DocAppointment from "../patient/DocAppointment";
import DocAppointments from "../doctor/DocAppointments";
import MedHistory from "../doctor/MedHistory";
import Issues from "../doctor/Issues";
import DocNotice from "../doctor/DocNotice";
import DocReview from "../doctor/DocReview";
import DocPrevReview from "../doctor/DocPrevReview";

const DocLayout = (props) => {

    const component = () => {
        if (props.path === "dashboard") {
            return <DocDash />;
        } else if (props.path === "profile") {
            return <DocProfile />;
        }else if (props.path === "inbox") {
            return <DocInbox />;
        }
        else if (props.path === "conversation") {
            return <DocConv />;
        }
        else if (props.path === "conversation/reply") {
            return <DocReply />;
        }
        else if(props.path==="conversation/message/new"){
            return <DocNewMessage/>
        }
        else if(props.path==="earnings"){
            return <DocEarning/>
        }
        else if(props.path==="remuneration"){
            return <DocPayment/>
        }
        else if(props.path==="appointments"){
            return <DocAppointments/>
        }else if(props.path==="medical/histories"){
            return <MedHistory/>
        }
        else if(props.path==="medical/history"){
            return <Issues/>
        }
        else if(props.path==="notices"){
            return <DocNotice/>
        }else if(props.path==="review/post"){
            return <DocReview/>
        }
        else if(props.path==="review/all"){
            return <DocPrevReview/>
        }
    };

    return (
        <div>
            <DoctorTopNav />
            <div className="position-relative">
            </div>
            <div id="content-page" className="content-page">
                <div className="row">
                    <div className="col-4 col-md-2"><DoctorSideNav/></div>
                    <div className="col-18 col-md-8">{component()}</div>
                </div>
            </div>
        </div>
    )
}
export default DocLayout;