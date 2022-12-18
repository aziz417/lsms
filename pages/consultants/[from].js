import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Admin from "../../layouts/Admin.js";
import InputField from '../../components/FormControl/InputField.js';
import Select from '../../components/FormControl/Select.js';
import Checkbox from '../../components/FormControl/Checkbox.js';
import Radio from '../../components/FormControl/Radio.js';
import ImageUpload from '../../components/FormControl/ImageUpload.js';
import MultipleImageUpload from '../../components/FormControl/MultipleImageUpload.js';

export default function From() {

    const nameEvent = (e) => {
        // console.log(e.target.value);
    }

    const userSelect = (e) => {
        // console.log(e);
    }

    const statusCheck = (e) => {
        // console.log(e.target.checked);
        // console.log(e.target.value);
    }

    const subjectSelect = (e) => {
        // console.log(e.target.checked);
        // console.log(e.target.value);
    }

    const profileUpload = (e) => {
        console.log(e);
        // console.log(e.target.checked);
        // console.log(e.target.value);
    }

    const multipleProfileUpload = (e) => {
        console.log(e);
        // console.log(e.target.checked);
        // console.log(e.target.value);
    }

    const fromSubmit = async (e) => {
        e.preventDefault();
        const formEl = document.forms.adStoreForm;
        const formData = new FormData(formEl);

        // console.log(formData);
    }



    const options = [
        { label: 'bug', id: 1 },
        { label: 'feature', id: 2 },
        { label: 'documents', id: 3 },
        { label: 'discussion', id: 4 },
    ]

    const rOptions = [
        { label: 'bangla', value: 1 },
        { label: 'english', value: 2 },
        { label: 'math', value: 3 },
    ]

    return (
        <>
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">

                            <div className="container-fluid">

                                <div className=" d-flex justify-content-between align-items-center">
                                    <h3 className='fs-md fs-sm fs-xs'>Consultant Create</h3>

                                </div>
                            </div>


                            <div className="card card-primary">
                                <div className="card-header">
                                </div>
                                <form className='fromData' onSubmit={fromSubmit}>
                                    <div className="card-body">
                                        <InputField
                                            eventHandel={nameEvent}
                                            label="Name"
                                            name="name"
                                            help="max 11 characters"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            required={false}
                                            maxL="11"
                                            minL="3"

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
                                            required={false}
                                            type="password"
                                            placeholder="Enter Your Password"
                                        />

                                        <Select
                                            placeholder="Select a user"
                                            name="user"
                                            lavel="User Select"
                                            options={options}
                                            onChangeHandel={userSelect}
                                            required="false"
                                            id="sfd"
                                            help="select one user"
                                        />

                                        <Checkbox
                                            checked={false}
                                            onChangeEvent={statusCheck}
                                            value="true"
                                            label="status"
                                            help="please seletct"
                                            required={true}
                                        />

                                        <Radio
                                            options={rOptions}
                                            label="Subject"
                                            checkedValue="1"
                                            name="subject"
                                            help="One Subject must be select"
                                            onChangeHandel={subjectSelect}
                                        />

                                        <ImageUpload
                                            label="Profile Image"
                                            name="profile"
                                            accept=".jpg, .jpeg, .png"
                                            help="Set as a profile image "
                                            size="2"
                                            onChangeHandel={profileUpload}
                                        />

                                        <MultipleImageUpload
                                            label="User Images"
                                            name="userImages"
                                            accept=".jpg, .jpeg, .png"
                                            help="user gallery image upload max 10 item "
                                            size="2"
                                            onChangeHandel={multipleProfileUpload}
                                        />

                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
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