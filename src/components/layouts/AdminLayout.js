import React from 'react'


import AdminSideNav from "../inc/AdminSideNav";
import AdminTopNav from "../inc/AdminTopNav";
import AdminDash from "../admin/AdminDash";
import AdminProfile from "../admin/AdminProfile";
import CreateNotice from "../admin/CreateNotice";
import ManageNotices from "../admin/ManageNotices";
import DeleteNotice from "../admin/DeleteNotice";
import CreateExpense from "../admin/EditExpense";
import ManageExpense from "../admin/ManageExpense";
import EditExpense from "../admin/EditExpense";
import DeleteExpense from "../admin/DeleteExpense";
import ValidDoctor from "../admin/ValidDoctor";
import BlockedDoctors from "../admin/BlockedDoctors";
import BlockDoctor from "../admin/BlockDoctor";
import UnblockDoctor from "../admin/UnblockDoctor";
import ValidPatient from "../admin/ValidPatient";
import BlockedPatients from "../admin/BlockedPatients";
import BlockPatient from "../admin/BlockPatient";
import UnblockPatient from "../admin/UnblockPatient";
import AddExpense from "../admin/AddExpense";

const AdminLayout = (props) => {

    const component = () => {
        if (props.path === "dashboard") {
            return <AdminDash />;
        } else if (props.path === "profile") {
            return <AdminProfile />;
        }
        else if (props.path === "notice/create") {
            return <CreateNotice />;
        }
        else if (props.path === "notices/all") {
            return <ManageNotices />;
        }
        else if (props.path === "notice/delete") {
            return <DeleteNotice />;
        }
        else if (props.path === "expense/add") {
            return <AddExpense />;
        }
        else if (props.path === "expenses/all") {
            return <ManageExpense />;
        }
        else if (props.path === "expense/edit") {
            return <EditExpense />;
        }
        else if (props.path === "expense/delete") {
            return <DeleteExpense />;
        }
        else if (props.path === "doctors/valid") {
            return <ValidDoctor />;
        }
        else if (props.path === "doctors/blocked") {
            return <BlockedDoctors />;
        }
        else if (props.path === "doctor/block") {
            return <BlockDoctor />;
        }
        else if (props.path === "doctor/unblock") {
            return <UnblockDoctor />;
        }
        else if (props.path === "patients/valid") {
            return <ValidPatient />;
        }
        else if (props.path === "patients/blocked") {
            return <BlockedPatients />;
        }
        else if (props.path === "patient/block") {
            return <BlockPatient />;
        }
        else if (props.path === "patient/unblock") {
            return <UnblockPatient />;
        }

    };

    return (
        <div>
            <AdminSideNav />
            <div className="position-relative">
            </div>
            <div id="content-page" className="content-page">
                <div className="row">
                    <div className="col-4 col-md-2"><AdminTopNav/></div>
                    <div className="col-18 col-md-8">{component()}</div>
                </div>
            </div>
        </div>
    )
}
export default AdminLayout;