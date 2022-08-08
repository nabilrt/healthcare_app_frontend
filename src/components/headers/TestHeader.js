import React from "react";
import {Link} from "react-router-dom";

const TestHeader=()=>{

    return(
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="" className="h5">AS Health Care App</a>

                <a href="javascript:void(0);"
                   className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1" id="men">

                <li className="menu-item">
                    <a href="{{ route('p_dashboard') }}" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </a>
                </li>


                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">USER</span>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="{{route('p_profile')}}" className="menu-link">
                                <div data-i18n="Account">Account</div>
                            </a>
                        </li>

                    </ul>
                </li>



                <li className="menu-header small text-uppercase"><span className="menu-header-text">Work</span></li>

                <li className="menu-item">
                    <a href="{{ route('p_inbox') }}" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-inbox"></i>
                        <div data-i18n="Basic">Inbox</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="{{route('member')}}" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-id-card"></i>
                        <div data-i18n="Basic">Membership</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="{{ route('docs') }}" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-plus-medical"></i>
                        <div data-i18n="Basic">Doctors</div>
                    </a>
                </li>

                <li className="menu-item">
                    <a href="javascript:void(0)" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-shopping-bag"></i>
                        <div data-i18n="Extended UI">Shop</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="{{ route('med_shop') }}" className="menu-link">
                                <div data-i18n="Perfect Scrollbar">Pharmacy</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="{{ route('p_search') }}" className="menu-link">
                                <div data-i18n="Perfect Scrollbar">Search Medicines</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="{{route('cart')}}" className="menu-link">
                                <div data-i18n="Text Divider">Cart</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="{{route('order_his')}}" className="menu-link">
                                <div data-i18n="Text Divider">Order History</div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="menu-item">
                    <a href="{{route('p_notice')}}" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-notification"></i>
                        <div data-i18n="Basic">Notices</div>
                    </a>
                </li>


                <li className="menu-header small text-uppercase"><span className="menu-header-text">Feedback</span></li>

                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div data-i18n="Form Elements">Review</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="{{route('cr_fd')}}" className="menu-link">
                                <div data-i18n="Basic Inputs">Give Feedback</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="{{route('old_fd')}}" className="menu-link">
                                <div data-i18n="Input groups">Previous Feedbacks</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-block"></i>
                        <div data-i18n="Form Elements">Report</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="{{route('rep_act')}}" className="menu-link">
                                <div data-i18n="Basic Inputs">Report Activity</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="{{route('ck_rep')}}" className="menu-link">
                                <div data-i18n="Input groups">Previous Reports</div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>


)
}

export default TestHeader;