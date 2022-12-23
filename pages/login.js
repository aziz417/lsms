import Auth from "../layouts/Auth.js";
import InputField from '../components/FormControl/InputField';
import CustomButton from '../components/Buttons/CustomButton';
import Link from 'next/link';
import { useState } from 'react';
import api from '../apis/v1'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


export default function Login() {
    const [fromInputs, setFromInputs] = useState({ email: 'az@g.com', password: '12345678' });
    const [serverMessage, setServerMessage] = useState(false);

    const router = useRouter();

    const fromData = (e) => {
        const { name, value } = e.target;

        setFromInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const fromSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.login(fromInputs);

            if (data.status_code === 200) {
                localStorage.setItem("token", data?.data?.access_token)

                toast.success(data?.message)
                router.push('/')
            } else {
                toast.warning(data?.message)

            }


        } catch (e) {
            setServerMessage(e.response?.data?.errors)
        }

    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="d-flex justify-content-center align-items-center login-box" style={{ height: "100vh" }}>

                    {/* /.login-logo */}
                    <div className="card loginAndRegistrationForm">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={fromSubmit} method="post">

                                <InputField
                                    label="Email"
                                    eventHandel={fromData}
                                    name="email"
                                    help="Must be valid email"
                                    required={true}
                                    type="email"
                                    value={fromInputs.email}
                                    placeholder="Enter Your Email"
                                    anyMessage={serverMessage}
                                />

                                <InputField
                                    label="Password"
                                    eventHandel={fromData}
                                    name="password"
                                    help="Password must be 8 characters long"
                                    required={true}
                                    value={fromInputs.password}
                                    type="password"
                                    placeholder="Enter Your Password"
                                    anyMessage={serverMessage}
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
