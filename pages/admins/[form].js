import Admin from "../../layouts/Admin.js";
import InputField from '../../components/FormControl/InputField.js';
import api from '../../apis/v1'
import { useState } from 'react';
import { toast } from 'react-toastify';
import CustomButton from "../../components/Buttons/CustomButton.js";

export default function From() {
    const [fromInputs, setFromInputs] = useState({ email: '', password: '', phone: "", first_name: '', last_name: '' });
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
            const { data } = await api.adminRegister(fromInputs);

            if (data.status_code === 200 || data.status_code === 201) {
                toast.success(data?.message)
                setServerMessage(false)

                Object.keys(fromInputs)?.map((name) => {
                    setFromInputs(prevState => ({
                        ...prevState,
                        [name]: ''
                    }));
                })

            } else {
                toast.warning(data?.message)
            }

        } catch (e) {
            setServerMessage(e.response?.data?.errors)
        }

    }

    return (
        <>
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">

                            <div className="container-fluid">

                                <div className=" d-flex justify-content-between align-items-center">
                                    <h3 className='fs-md fs-sm fs-xs'>New Admin Register</h3>
                                </div>
                            </div>


                            <div className="card card-primary">
                                <div className="card-header">
                                </div>
                                <form onSubmit={fromSubmit} method="post">
                                    <div className="card-body">
                                        <InputField
                                            label="First Name"
                                            eventHandel={fromData}
                                            name="first_name"
                                            help="Type your first name"
                                            required={true}
                                            type="text"
                                            value={fromInputs.first_name}
                                            placeholder="Enter your first name"
                                            anyMessage={serverMessage}
                                        />
                                        <InputField
                                            label="Last Name"
                                            eventHandel={fromData}
                                            name="last_name"
                                            help="Type your last name"
                                            required={true}
                                            type="text"
                                            value={fromInputs.last_name}
                                            placeholder="Enter your last name"
                                            anyMessage={serverMessage}
                                        />
                                        <InputField
                                            label="Email"
                                            eventHandel={fromData}
                                            name="email"
                                            help="Must be valid email"
                                            required={true}
                                            type="email"
                                            value={fromInputs.email}
                                            placeholder="Enter your email"
                                            anyMessage={serverMessage}
                                        />

                                        <InputField
                                            label="Phone"
                                            eventHandel={fromData}
                                            name="phone"
                                            help="Type your phone number"
                                            required={true}
                                            type="text"
                                            value={fromInputs.phone}
                                            placeholder="Enter your phone number"
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
                                            placeholder="Enter your password"
                                            anyMessage={serverMessage}
                                        />


                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                    <CustomButton
                                            type="submit"
                                            classes="btn btn-success btn float-right"
                                            title="Register"
                                        />
                                        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

From.layout = Admin;