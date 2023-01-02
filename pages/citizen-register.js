import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from "../layouts/Auth.js";
import InputField from '../components/FormControl/InputField';
import CustomButton from '../components/Buttons/CustomButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../apis/v1.js'
import { ucFirst } from '../halpers/helper';

export default function CitizenRegister() {

    const [fromInputs, setFromInputs] = useState({ password: '', phone: "", name: '', type: 'citizen' });
    const [serverMessage, setServerMessage] = useState(false);

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
            const { data } = await api.register(fromInputs);

            if (data.status_code === 200 || data.status_code === 201) {
                toast.success(ucFirst(data?.message))
                setServerMessage(false)

                Object.keys(fromInputs)?.map((name) => {
                    setFromInputs(prevState => ({
                        ...prevState,
                        [name]: ''
                    }));
                })

                router.push('/login')
            } else {
                toast.warning(data?.message)
            }

        } catch (e) {
            setServerMessage(e.response?.data?.errors)
        }
    }



    const phoneNumber = (event) => {

        const number = event.target.value;
        if (!number.match(/^[0-9]+$/) || number.toString().length > 11) {
            fromInputs.phone = number.substring(0, number.length - 1);
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card loginAndRegistrationForm my-5 model-box-shadow">
                    <div className="card-body login-card-body">
                        <h3 className="login-box-msg">Citizen Registration</h3>
                         <form onSubmit={fromSubmit} method="post">
                            <InputField
                                label="Name"
                                name="name"
                                eventHandel={fromData}
                                value={fromInputs.name}
                                help="Type Your Name"
                                required={true}
                                type="text"
                                placeholder="Enter Your Name"
                                maxL="30"
                            />
                           
                            <InputField
                                label="Phone"
                                name="phone"
                                eventHandel={fromData}
                                value={fromInputs.phone}
                                help="Type Your Phone"
                                required={true}
                                type="text"
                                placeholder="Enter Your Phone"
                                maxL="11"
                            />


                            <InputField
                                label="Password"
                                name="password"
                                help="password must be contain 8"
                                required={true}
                                eventHandel={fromData}
                                value={fromInputs.password}
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

CitizenRegister.layout = Auth;
