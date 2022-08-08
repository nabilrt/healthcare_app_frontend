import React from 'react'

const TopNav = () => {
    return (
        <div>
            <div className="iq-top-navbar">
                <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar p-lg-0">
                    <div className="container-fluid navbar-inner">
                        <div className="d-flex align-items-center gap-3">
                            <a href="index.html"
                               className="d-flex align-items-center gap-2 iq-header-logo d-none d-md-flex">
                                <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z"
                                          fill="currentColor"/>
                                </svg>
                                <h3 className="logo-title d-none d-sm-block" data-setting="app_name">SocialV</h3>
                            </a>
                            <a className="sidebar-toggle" data-toggle="sidebar" data-active="true"
                               href="javascript:void(0);">
                                <div className="icon material-symbols-outlined iq-burger-menu">
                                    menu
                                </div>
                            </a>
                        </div>
                        <div className="d-block d-md-none">
                            <a href="index.html" className="d-flex align-items-center gap-2 iq-header-logo">
                                <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z"
                                          fill="currentColor"/>
                                </svg>
                                <h3 className="logo-title d-none d-sm-block" data-setting="app_name">SocialV</h3>
                            </a>
                        </div>
                        <div className="iq-search-bar device-search">
                            <form action="#" className="searchbox">
                                <a className="search-link" href="#">
                                    <span className="material-symbols-outlined">search</span>
                                </a>
                                <input type="text" className="text search-input form-control bg-soft-primary"
                                       placeholder="Search here..."/>
                            </form>
                        </div>
                        <a className="d-lg-none d-flex" href="javascript:void(0);" data-bs-toggle="offcanvas"
                           data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <span className="material-symbols-outlined">tune</span>
                        </a>
                        <div className="offcanvas offcanvas-end iq-profile-menu-responsive" tabIndex="-1"
                             id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">General Setting</h5>
                                <div className="close-icon" data-bs-dismiss="offcanvas">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" className="h-5 w-5"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="offcanvas-body pt-0">
                                <ul className="navbar-nav  ms-auto navbar-list">
                                    <li className="nav-item dropdown d-none d-lg-block">
                                        <a href="#" className="d-flex align-items-center dropdown-toggle"
                                           id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            <img src="../assets/images/user/1.jpg"
                                                 className="img-fluid rounded-circle me-3" alt="user" loading="lazy"/>
                                            <div className="caption">
                                                <h6 className="mb-0 line-height">Bni Cyst</h6>
                                            </div>
                                        </a>
                                        <div className="sub-drop dropdown-menu caption-menu"
                                             aria-labelledby="drop-down-arrow">
                                            <div className="card shadow-none m-0">
                                                <div className="card-header ">
                                                    <div className="header-title">
                                                        <h5 className="mb-0 ">Hello Bni Cyst</h5>
                                                    </div>
                                                </div>
                                                <div className="card-body p-0 ">
                                                    <div className="d-flex align-items-center iq-sub-card">
                                                        <div className="ms-3">
                                                            <a href="sign-in.html" className="mb-0 h6">
                                                                Sign out
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item d-lg-none">
                                        <a href="https://templates.iqonic.design/socialv/bs5/html/dist/app/profile.html"
                                           className="dropdown-toggle d-flex align-items-center">
                                            <span className="material-symbols-outlined">person</span>
                                            <span className="mobile-text  ms-3">Profile</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        </div>

    )
}

export default TopNav
