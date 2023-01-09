import Auth from "../layouts/Auth.js";
import InputField from '../components/FormControl/InputField';
import CustomButton from '../components/Buttons/CustomButton';
import Link from 'next/link';
import { useState } from 'react';
import api from '../apis/v1'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { bd_mobile_number_validation, email_validation } from "../halpers/helper.js";


export default function Login() {
    const [fromInputs, setFromInputs] = useState({ email_or_phone: 'az@g.com', password: '12345678' });
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

        const isValidPhone = bd_mobile_number_validation(fromInputs.email_or_phone)
        const isValidEmail = email_validation(fromInputs.email_or_phone)

        if (isValidPhone || isValidEmail) {
            setServerMessage(false)
            // console.log(isValidEmail);
            try {

                const { data } = await api.login(fromInputs);

                console.log(data);
                if (data.status_code == 200) {
                    // console.log(data);
                    localStorage.setItem("token", data?.access_token)
                    toast.success(data?.message)
                    router.push('/')
                } else {
                    toast.warning(data?.message)

                }


            } catch (e) {
                setServerMessage(e.response?.data?.errors)
            }
        } else {

        }
    }

    // console.log(serverMessage);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="d-flex justify-content-center align-items-center login-box" style={{ height: "100vh" }}>

                    {/* /.login-logo */}
                    <div className="card loginAndRegistrationForm model-box-shadow">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={fromSubmit} method="post">

                                <InputField
                                    label="Email Or Phone"
                                    eventHandel={fromData}
                                    name="email_or_phone"
                                    help="Must be valid email or phone"
                                    required={true}
                                    type="text"
                                    value={fromInputs.email_or_phone}
                                    placeholder="Enter Your Email Or Phone"
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
                            <div className=' mt-2'>
                                <p className="mb-1 text-center my-2">
                                    <a href="forgot-password.html">Forgot password</a>
                                </p>
                                <div className="dropdown-divider my-4" />
                                <p>Register if you don't have an account!</p>
                                <p className="mb-0 d-flex justify-content-between align-items-center">
                                    <Link href="/consultancy-register" className="text-center">Consultancy Register</Link>

                                    <Link href="/citizen-register" className="text-center">Citizen Register</Link>

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
