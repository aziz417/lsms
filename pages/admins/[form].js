import Admin from "../../layouts/Admin.js";
import InputField from '../../components/FormControl/InputField.js';
import api from '../../apis/v1'
import { useState } from 'react';
import { toast } from 'react-toastify';
import CustomButton from "../../components/Buttons/CustomButton.js";
import { useRouter } from 'next/router'

export default function From() {
    const [fromInputs, setFromInputs] = useState({ password: '', phone: "", name: '' });
    const [serverMessage, setServerMessage] = useState(false);
    const router = useRouter()

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

        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">

                    <div className="d-flex justify-content-start">
                        <div className="col-sm-6 col-12">
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
                                            label="Name"
                                            eventHandel={fromData}
                                            name="name"
                                            help="Type your name"
                                            required={true}
                                            type="text"
                                            value={fromInputs.name}
                                            placeholder="Enter your name"
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
                    </div>
                </div>
            </section>
        </div>

    )
}

From.layout = Admin;