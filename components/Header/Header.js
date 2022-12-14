import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"


export default function Header() {
    const router = useRouter();

    const parameters = router.asPath.split("/").slice(1)


    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link custom-nav-link" href="#" role="button">Home</a>
                </li>

                {parameters?.map((parameter, index) => (
                    <>
                        <span className='nav-link custom-nav-link'>{parameters.length == index+1 ? ">" : ''}</span>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" href={parameters.length == index+1 ? "#" : "/"+parameter} role="button">{ucFirst(parameter)}</Link>
                        </li>
                    </>
                ))}

            </ul>
            {/* <div className="col-sm-6">
                <ol className="breadcrumb">

                </ol>
            </div> */}
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">

                {/* Notifications Dropdown Menu */}
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className="far fa-bell" />
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <i className='fa fa-user'></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> Profile
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> Setting
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> Password Change
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i class="far fa-sign-out"></i>
                            <i className="fa fa-sign-out mr-2" /> Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>

    )
}