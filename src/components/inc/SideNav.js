import React from 'react'

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
                                    <span className="default-icon">Social</span>
                                    <span className="mini-icon" data-bs-toggle="tooltip" title="Social"
                                        data-bs-placement="right">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page"
                                    href="index.html">
                                    <i className="icon material-symbols-outlined">
                                        newspaper
                                    </i>
                                    <span className="item-name">Newsfeed</span>
                                </a>
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
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name"> Profile </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="profile1.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name">Profile 1 </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="profile2.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name">Profile 2 </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="profile3.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> P </i>
                                            <span className="item-name">Profile 3 </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-images.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> PI </i>
                                            <span className="item-name">Profile Image</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-videos.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> PV </i>
                                            <span className="item-name">Profile Video</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-event.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> PE </i>
                                            <span className="item-name">Profile Events</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-badges.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> PB </i>
                                            <span className="item-name">Profile Badges</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile-forum.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> PF </i>
                                            <span className="item-name">Profile Forum</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#friend-list" role="button"
                                    aria-expanded="false"
                                    aria-controls="sidebar-special">
                                    <i className="icon material-symbols-outlined">
                                        people
                                    </i>
                                    <span className="item-name">Friend</span>
                                    <i className="right-icon material-symbols-outlined">chevron_right</i>
                                </a>
                                <ul className="sub-nav collapse" id="friend-list" data-bs-parent="#sidebar-menu">
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="friend-list.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> FL </i>
                                            <span className="item-name"> Friend List</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link "
                                            href="friend-profile.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <i className="sidenav-mini-icon"> FP </i>
                                            <span className="item-name">Friend Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page"
                                            href="friend-request.html">
                                            <i className="icon material-symbols-outlined filled">
                                                fiber_manual_record
                                            </i>
                                            <span className="item-name">Friend Request</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/group.html">
                                    <i className="icon material-symbols-outlined">
                                        groups
                                    </i>
                                    <span className="item-name">Group</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="notification.html">
                                    <i className="icon material-symbols-outlined">
                                        notifications
                                    </i>
                                    <span className="item-name">Notification</span>
                                </a>
                            </li>
                            <li className="nav-item static-item">
                                <a className="nav-link static-item disabled" href="#" tabIndex="-1">
                                    <span className="default-icon">Featured</span>
                                    <span className="mini-icon" data-bs-toggle="tooltip" title="Social"
                                        data-bs-placement="right">-</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="file.html">
                                    <i className="icon material-symbols-outlined">
                                        insert_drive_file
                                    </i>
                                    <span className="item-name">Files</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/chat.html">
                                    <i className="icon material-symbols-outlined">
                                        message
                                    </i>
                                    <span className="item-name">Chat</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="https://templates.iqonic.design/socialv/bs5/html/dist/app/todo.html">
                                    <i className="icon material-symbols-outlined">
                                        task_alt
                                    </i>
                                    <span className="item-name">Todo</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="calendar.html">
                                    <i className="icon material-symbols-outlined">
                                        calendar_month
                                    </i>
                                    <span className="item-name">Calendar</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="birthday.html">
                                    <i className="icon material-symbols-outlined">
                                        cake
                                    </i>
                                    <span className="item-name">Birthday</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="weather.html">
                                    <i className="icon material-symbols-outlined">
                                        thunderstorm
                                    </i>
                                    <span className="item-name">Weather</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page"
                                    href="music.html">
                                    <i className="icon material-symbols-outlined">
                                        play_circle
                                    </i>
                                    <span className="item-name">Music</span>
                                </a>
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
