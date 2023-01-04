import Admin from "../../layouts/Admin.js";
import InputField from '../../components/FormControl/InputField.js';
import api from '../../apis/v1'
import { useState, useEffect } from 'react';
import CustomButton from "../../components/Buttons/CustomButton.js";
import { toast } from 'react-toastify';


export default function changePassword() {
    const [fromInputs, setFromInputs] = useState({
        new_password: '',
        old_password: '',
        id: ''
    });

    useEffect(() => {
        setFromInputs(prevState => ({
            ...prevState,
            ['id']: localStorage.getItem('auth_user_id')
        }));
    }, [])

    const fromData = (e) => {
        const { name, value } = e.target;
        setFromInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const [serverMessage, setServerMessage] = useState(false);


    const fromSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await api.passwordChange(fromInputs);

            if (data.status_code === 200 || data.status_code === 201) {
                toast.success(data?.message)
                setServerMessage(false)

                // Object.keys(fromInputs)?.map((name) => {
                //     setFromInputs(prevState => ({
                //         ...prevState,
                //         [name]: ''
                //     }));
                // })

            } else {
                console.log(data.message);
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
                        <div className="col-12">
                            <div className="container-fluid">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <h3 className='fs-md fs-sm fs-xs'>Password Change</h3>
                                </div>
                            </div>

                            <div className="col-sm-6 col-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                    </div>
                                    <form onSubmit={fromSubmit} method="post" id="storeForm">
                                        <div className="card-body">

                                            <InputField
                                                label="Old password"
                                                eventHandel={fromData}
                                                name="old_password"
                                                help="Type your old password"
                                                required={true}
                                                type="password"
                                                value={fromInputs.old_password}
                                                placeholder="Enter your old password"
                                                anyMessage={serverMessage}
                                            />

                                            <InputField
                                                label="New password"
                                                eventHandel={fromData}
                                                name="new_password"
                                                help="Type your new password"
                                                required={true}
                                                type="password"
                                                value={fromInputs.new_password}
                                                placeholder="Enter your new password"
                                                anyMessage={serverMessage}
                                            />


                                        </div>
                                        <div className="card-footer">
                                            <CustomButton
                                                type="submit"
                                                classes="btn btn-success btn float-right"
                                                title="Change Password"
                                            />
                                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

changePassword.layout = Admin;