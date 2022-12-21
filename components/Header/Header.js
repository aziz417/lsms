import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import Breadcrumb from '../Breadcrumb/Breadcrumb.js';
import api from '../../apis/v1.js'
import { toast } from 'react-toastify';



export default function Header() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === 'null') {
            router.push('/login')
        }
    }, [])

    const logout = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.logout();

            console.log(data);
            if (data.status === 200) {
                localStorage.setItem("token", null)
                toast.success(data?.message)
                router.push('/login')
            }

        } catch (e) {
            console.log(e);
            // if (e.response?.data?.status === 401) {
            //   warningMessage(e.response?.data?.error)
            // }
            // errorMessages.serverMessages = e.response?.data?.errors;
        }



    }

    const parameters = router.asPath.split("/").slice(1)

    return <>
        <div className="main-header navbar mb-2 navbar-expand navbar-white navbar-light">

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

                        <Link href="#" onClick={logout} className="dropdown-item">
                            <i className="fa fa-sign-out mr-2" /> Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </>



}