import React from "react";
import PatientDash from "./PatientDash";

const PDash=()=>{

    return(
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">


                <div className="layout-page">
                    <nav
                        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                        id="layout-navbar"
                    >
                        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                <i className="bx bx-menu bx-sm"></i>
                            </a>
                        </div>

                        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                            <div className="navbar-nav align-items-center">
                                <div className="nav-item d-flex align-items-center">
                                    <i className="bx bx-search fs-4 lh-0"></i>
                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none"
                                        placeholder="Search..."
                                        aria-label="Search..."
                                    />
                                </div>
                            </div>


                            <ul className="navbar-nav flex-row align-items-center ms-auto">

                                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                    <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                       data-bs-toggle="dropdown">
                                        <div className="avatar avatar-online">

                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar avatar-online">

                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">

                                                        <small className="text-muted">Patient</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="{{route('p_profile')}}">
                                                <i className="bx bx-user me-2"></i>
                                                <span className="align-middle">My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="{{ route('logout') }}">
                                                <i className="bx bx-power-off me-2"></i>
                                                <span className="align-middle">Log Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </nav>

                   <PatientDash/>

                </div>
            </div>
        </div>

    )

}
export default PDash;