import React from "react";
import {Link} from "react-router-dom";

const AdminTopNav=()=>{

    return(
        <div>
            <aside className="sidebar sidebar-default navs-rounded-all " id="first-tour" data-toggle="main-sidebar"
                   data-sidebar="responsive">
                <div className="sidebar-body pt-0 data-scrollbar">
                    <div className="sidebar-list">
                        <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                                    <span className="default-icon">BASIC</span>
                                    <span className="mini-icon" data-bs-toggle="tooltip" title="Social"
                                          data-bs-placement="right">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page"
                                      to="/admin/dashboard">
                                    <i className="icon material-symbols-outlined">
                                        dashboard
                                    </i>
                                    <span className="item-name">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#profile" role="button"
                                   aria-expanded="false"
                                   aria-controls="profile">
                                    <i className="icon material-symbols-outlined">
                                        person
                                    </i>
                                    <span className="item-name">Profiles</span>
                                    <i className="right-icon material-symbols-outlined">chevron_right</i>
                                </a>
                                <ul className="sub-nav collapse" id="profile" data-bs-parent="#sidebar-menu">
                                    <li className="nav-item">
                                        <Link className="nav-link "
                                              to="/admin/profile">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name"> Profile </span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                                    <span className="default-icon">Featured</span>
                                    <span className="mini-icon" data-bs-toggle="tooltip" title="Social"
                                          data-bs-placement="right">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/expense/add">
                                    <i className="icon material-symbols-outlined">
                                        payments
                                    </i>
                                    <span className="item-name">Create Expense</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/expenses/all">
                                    <i className="icon material-symbols-outlined">
                                        paid
                                    </i>
                                    <span className="item-name">Manage Expense</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/notice/create">
                                    <i className="icon material-symbols-outlined">
                                        email
                                    </i>
                                    <span className="item-name">Create Notice</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/notices/all">
                                    <i className="icon material-symbols-outlined">
                                        view_list
                                    </i>
                                    <span className="item-name">Manage Notices</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/patients/valid">
                                    <i className="icon material-symbols-outlined">
                                        account_circle
                                    </i>
                                    <span className="item-name">Patients</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/patients/blocked">
                                    <i className="icon material-symbols-outlined">
                                        person_add_disabled
                                    </i>
                                    <span className="item-name">Blocked Patients</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/doctors/valid">
                                    <i className="icon material-symbols-outlined">
                                        assignment_ind
                                    </i>
                                    <span className="item-name">Doctors</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/admin/doctors/blocked">
                                    <i className="icon material-symbols-outlined">
                                        person_add_disabled
                                    </i>
                                    <span className="item-name">Blocked Doctors</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="sidebar-footer"></div>
            </aside>
        </div>
    )
}

export default AdminTopNav;