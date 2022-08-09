import React from 'react'
import {Link} from "react-router-dom";

const SellerSideNav=()=>{

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
                                      to="/seller/dashboard">
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
                                              to="/seller/profile">
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
                                      to="/seller/earnings">
                                    <i className="icon material-symbols-outlined">
                                        currency_exchange
                                    </i>
                                    <span className="item-name">Earnings</span>
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
                                      to="/seller/medicines/add">
                                    <i className="icon material-symbols-outlined">
                                        message
                                    </i>
                                    <span className="item-name">Add Medicine</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/seller/medicines/all">
                                    <i className="icon material-symbols-outlined">
                                        paid
                                    </i>
                                    <span className="item-name">Manage Medicines</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/seller/medicine/search">
                                    <i className="icon material-symbols-outlined">
                                        book_online
                                    </i>
                                    <span className="item-name">Search Medicines</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/seller/order/history">
                                    <i className="icon material-symbols-outlined">
                                        reorder
                                    </i>
                                    <span className="item-name">Orders</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page"
                                      to="/seller/notices">
                                    <i className="icon material-symbols-outlined">
                                        forum
                                    </i>
                                    <span className="item-name">Notice</span>
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
export default SellerSideNav;