import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from "../layouts/Auth.js";
import InputField from '../components/FormControl/InputField';
import CustomButton from '../components/Buttons/CustomButton';

export default function Register() {
    const phoneNumber = (event) => {

        const number = event.target.value;
        if (!number.match(/^[0-9]+$/) || number.toString().length > 11) {
            fromInputs.phone = number.substring(0, number.length - 1);
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card loginAndRegistrationForm my-5">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form action="../../index3.html" method="post">
                            <InputField
                                label="First Name"
                                name="first_name"
                                help="Type Your First Name"
                                required={true}
                                type="text"
                                placeholder="Enter Your First Name"
                                maxL="30"
                            />
                            <InputField
                                label="Last Name"
                                name="last_name"
                                help="Type Your Last Name"
                                required={true}
                                type="text"
                                placeholder="Enter Your Last Name"
                                maxL="30"
                            />

                            <InputField
                                label="Phone"
                                name="phone"
                                help="Type Your Phone"
                                required={true}
                                type="text"
                                placeholder="Enter Your Phone"
                                eventHandel={phoneNumber}
                                maxL="11"
                            />

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
                                        title="Register"
                                    />
                                </div>
                                {/* /.col */}
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}

Register.layout = Auth;
