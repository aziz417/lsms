import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'

export default function Sidebar() {

    const mediaSidebarControl = () => {
        const el = document.querySelector('body').classList;
        el.remove("sidebar-open");
        el.add(["sidebar-closed", "sidebar-collapse"]);
    }

    return (
        <div>
            <aside id='sidebarManage' className="main-sidebar sidebar-dark-primary elevation-4">
                <button onClick={mediaSidebarControl} id='sideBarhideBtn' className='float-right btn btn-danger'>X</button>

                {/* Brand Logo */}
                <Link href="/" className="brand-link sidebar-logo-section">
                    <div className="brand-image img-circle el
                    evation-3">
                        <Image
                            src="/dist/img/AdminLTELogo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <span className="brand-text font-weight-light">LSMS</span>
                </Link>
                {/* <Link href="/">Dashboard</Link> */}
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <div className="img-circle elevation-2 sidebar-user-image">
                                <Image
                                    src="/dist/img/user2-160x160.jpg"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item">
                                <Link className="nav-link" href="/">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    Dashboard
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fa fa-users" />
                                    <p>
                                        Consultant Manage
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link href="/consultants" className="nav-link">
                                            <i className="fa fa-users" />
                                            <p> Consultant List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="fas fa-th" />
                                            <p> Consultant Categories</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li style={{height: "30px"}}></li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}