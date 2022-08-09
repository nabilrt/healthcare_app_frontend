import React from 'react'
import {Link} from "react-router-dom";

const SideNav = () => {
    return (
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
                                    to="/patient/dashboard">
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
                                            to="/patient/profile">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name"> Profile </span>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/membership/info">
                                    <i className="icon material-symbols-outlined">
                                        loyalty
                                    </i>
                                    <span className="item-name">Membership</span>
                                </Link>
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
                                    to="/patient/inbox">
                                    <i className="icon material-symbols-outlined">
                                        message
                                    </i>
                                    <span className="item-name">Inbox</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/doctors/all">
                                    <i className="icon material-symbols-outlined">
                                        medication
                                    </i>
                                    <span className="item-name">Doctors</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/shop">
                                    <i className="icon material-symbols-outlined">
                                        local_pharmacy
                                    </i>
                                    <span className="item-name">Pharmacy</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/patient/cart">
                                    <i className="icon material-symbols-outlined">
                                        shopping_cart
                                    </i>
                                    <span className="item-name">Cart</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/orders">
                                    <i className="icon material-symbols-outlined">
                                        list_alt
                                    </i>
                                    <span className="item-name">Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/notices">
                                    <i className="icon material-symbols-outlined">
                                        forum
                                    </i>
                                    <span className="item-name">Notice</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                    to="/patient/review/post">
                                    <i className="icon material-symbols-outlined">
                                        rate_review
                                    </i>
                                    <span className="item-name">Review</span>
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

export default SideNav
