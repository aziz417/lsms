import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from "../layouts/Auth.js";
import InputField from '../components/FormControl/InputField';
import CustomButton from '../components/Buttons/CustomButton';
import Link from 'next/link';

export default function Login() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="login-box">

                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="../../index3.html" method="post">

                                <InputField
                                    label="Email"
                                    name="email"
                                    help="must be contain @"
                                    required={true}
                                    type="email"
                                    placeholder="Enter Your Email"
                                />

                                <InputField
                                    label="Password"
                                    name="password"
                                    help="password must be contain 8"
                                    required={true}
                                    type="password"
                                    placeholder="Enter Your Password"
                                />


                                <div className="row">
                                    {/* /.col */}
                                    <div className="col-12">
                                        <CustomButton
                                            type="submit"
                                            classes="btn btn-primary btn-block"
                                            title="Login"
                                        />
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            {/* <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div> */}
                            {/* /.social-auth-links */}
                            <div className='d-flex justify-content-between align-items-center mt-2'>
                                <p className="mb-1">
                                    <a href="forgot-password.html">Forgot password</a>
                                </p>
                                <p className="mb-0">
                                    <Link href="/register" className="text-center">Register Now</Link>
                                </p>
                            </div>

                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>



        </>

    )
}

Login.layout = Auth;
