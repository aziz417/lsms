import Admin from "../../layouts/Admin.js";
import InputField from '../../components/FormControl/InputField.js';
import api from '../../apis/v1'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CustomButton from "../../components/Buttons/CustomButton.js";
import { useRouter } from 'next/router'
import Select from "../../components/FormControl/Select.js";
import ImageUpload from "../../components/FormControl/ImageUpload.js";
import Checkbox from "../../components/FormControl/Checkbox.js";

export default function From() {
    const [fromInputs, setFromInputs] = useState({
        // id: '',
        // password: '',
        // phone: "",
        // name: '',
        // email: '',
        // gander: '',
        // profile_image: '',
        // nid: '',
        // dob: '',
        // status: '',
        // address: '',
    });
    const [serverMessage, setServerMessage] = useState(false);

    const router = useRouter()

    const [profile, setProfile] = useState([]);

    // useEffect(() => {
    //     const me = async () => {
    //         const { data } = await api.profileApi();
    //         setFromInputs(pre => data?.data)
    //     }

    //     me();

    // }, [])

    const fromData = (e) => {
        const { name, value } = e.target;

        setFromInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const fromSubmit = async (e) => {
        e.preventDefault();

        const formEl = document.forms.storeForm;
        const formData = new FormData(formEl);

        // console.log(formData.getAll());

        try {
            const { data } = await api.profileUpdate(formData);

            console.log(data, 'ffffffffff');

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
                toast.warning(data?.message)
            }

        } catch (e) {
            setServerMessage(e.response?.data?.errors)
        }
    }

    const options = [
        { label: 'Male', id: 'male' },
        { label: 'Female', id: 'female' },
        { label: 'Other', id: 'other' },
    ]

    const profileUpload = (e) => {

        setFromInputs(prevState => ({
            ...prevState,
            ['profile_image']: e.target.files[0]
        }));

    }

    const nidFrontUpload = (e) => {

        setFromInputs(prevState => ({
            ...prevState,
            ['nid_front']: e.target.files[0]
        }));

    }

    const nidBackUpload = (e) => {

        setFromInputs(prevState => ({
            ...prevState,
            ['nid_back']: e.target.files[0]
        }));

    }

    const phoneNumber = (event) => {

        const number = event.target.value;
        if (!number.match(/^[0-9]+$/) || number.toString().length > 11) {
            fromInputs.phone = number.substring(0, number.length - 1);
        }
    }

    const statusCheck = (e) => {
        const { name, checked } = e.target;
        setFromInputs(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const selectEvent = (e) => {
        const { id } = e;
        setFromInputs(prevState => ({
            ...prevState,
            ['gander']: id
        }));
    }

    const [accademicItems, setAccademicItems] = useState([1]);
    const [expericanceItems, setExpericanceItems] = useState([1]);

    // const nidValidate = (e) => {
    //     console.log(e);
    //     // console.log(e.target.value);
    // }
    // console.log(fromInputs);

    const testDD = (e) => {
        console.log(e);
    }
    const addNewAccademic = (index) => {
        setAccademicItems(pre => [...accademicItems, index])
    }
    console.log(accademicItems);

    return (

        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">

                    <div className="d-flex justify-content-start">
                        <div className="col-12">
                            <div className="container-fluid">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <h3 className='fs-md fs-sm fs-xs'>New Admin Register</h3>
                                </div>
                            </div>

                            <div className="card card-primary">
                                <div className="card-header">
                                </div>
                                <form onSubmit={fromSubmit} method="post" id="storeForm">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 col-12">
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
                                            </div>

                                            <div className="col-md-2 col-12">
                                                <InputField
                                                    label="Phone"
                                                    name="phone"
                                                    eventHandel={fromData}
                                                    value={fromInputs.phone}
                                                    help="Type your phone number"
                                                    required={true}
                                                    type="text"
                                                    placeholder="Enter Your Phone"
                                                    maxL="11"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-3 col-12">
                                                <InputField
                                                    label="Email"
                                                    name="email"
                                                    eventHandel={fromData}
                                                    value={fromInputs.email}
                                                    help="must be contain @"
                                                    required={fromInputs.type === 'citizen' ? false : true}
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <InputField
                                                    label="Address"
                                                    eventHandel={fromData}
                                                    name="address"
                                                    help="Type your address"
                                                    required={true}
                                                    type="text"
                                                    value={fromInputs.address}
                                                    placeholder="Enter your address"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <InputField
                                                    label="NID NO"
                                                    eventHandel={fromData}
                                                    name="nid"
                                                    help="Type your national identity card no, will be 10, 13 and 17"
                                                    required={true}
                                                    type="text"
                                                    value={fromInputs.nid}
                                                    placeholder="Enter your nid  no"
                                                    anyMessage={serverMessage}
                                                    maxL="17"
                                                    minL="10"
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <InputField
                                                    label="Date Of Barth"
                                                    eventHandel={fromData}
                                                    name="dob"
                                                    help="Type your date of barth"
                                                    required={true}
                                                    type="date"
                                                    value={fromInputs.dob}
                                                    placeholder="Enter your date of barth"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <Select
                                                    placeholder="Select gander"
                                                    name="gander"
                                                    eventHandel={selectEvent}
                                                    lavel="Select Gander"
                                                    options={options}
                                                    required={true}
                                                    id="profileGander"
                                                    help="select gander"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <ImageUpload
                                                    label="Profile Image"
                                                    name="profile_image"
                                                    accept=".jpg, .jpeg, .png"
                                                    help="Set as a profile image"
                                                    size="2"
                                                    onChangeHandel={profileUpload}
                                                    required={true}
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12">
                                                <InputField
                                                    label="Password"
                                                    eventHandel={fromData}
                                                    name="password"
                                                    help="Password must be 8 characters long"
                                                    required={false}
                                                    value={fromInputs.password}
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            <div className="col-md-4 col-12 mt-4">
                                                <Checkbox
                                                    checked={false}
                                                    onChangeEvent={statusCheck}
                                                    value={false}
                                                    label="status"
                                                    help="please seletct"
                                                    required={true}
                                                    name="status"
                                                    anyMessage={serverMessage}
                                                />
                                            </div>

                                            {fromInputs.type === 'consultant' ? <>

                                                <div className="col-md-4 col-12">
                                                    <ImageUpload
                                                        label="National Identity Card Front"
                                                        name="nid_front"
                                                        accept=".jpg, .jpeg, .png"
                                                        help="Set as a your nid front image"
                                                        size="2"
                                                        onChangeHandel={nidFrontUpload}
                                                        required={true}
                                                        anyMessage={serverMessage}
                                                    />
                                                </div>

                                                <div className="col-md-4 col-12">
                                                    <ImageUpload
                                                        label="National Identity Card Back"
                                                        name="nid_back"
                                                        accept=".jpg, .jpeg, .png"
                                                        help="Set as a your nid back image"
                                                        size="2"
                                                        onChangeHandel={nidBackUpload}
                                                        required={true}
                                                        anyMessage={serverMessage}
                                                    />
                                                </div>

                                                <div className="col-md-4 col-12">
                                                    <InputField
                                                        label="Current Profession"
                                                        eventHandel={fromData}
                                                        name="current_profession"
                                                        help="Your current profession"
                                                        required={true}
                                                        value={fromInputs.current_profession}
                                                        type="text"
                                                        placeholder="Enter your current profession"
                                                        anyMessage={serverMessage}
                                                    />
                                                </div>

                                            </> : ''}
                                        </div>

                                        {'consultant' === 'consultant' ? <>
                                            <div className="dropdown-divider my-4" />
                                            <h5>Academic Information: </h5>
                                            
                                                {expericanceItems?.map((index) => {
                                                    return (
                                                        <div  className="row" key={index}>
                                                            <div className="col-sm-2 col-12">
                                                                <InputField
                                                                    label="Education Level"
                                                                    eventHandel={testDD}
                                                                    name="education_level[]"
                                                                    // help="Your current profession"
                                                                    required={true}
                                                                    // value={fromInputs.current_profession}
                                                                    type="text"
                                                                    placeholder="Enter your education level"
                                                                    anyMessage={serverMessage}
                                                                />
                                                            </div>

                                                            <div className="col-sm-2 col-12">
                                                                <InputField
                                                                    label="Institute Name"
                                                                    eventHandel={testDD}
                                                                    name="institute_name[]"
                                                                    // help="Your current profession"
                                                                    required={true}
                                                                    // value={fromInputs.current_profession}
                                                                    type="text"
                                                                    placeholder="Enter your institute name"
                                                                    anyMessage={serverMessage}
                                                                />
                                                            </div>

                                                            <div className="col-sm-2 col-12">
                                                                <InputField
                                                                    label="Passing Year"
                                                                    eventHandel={testDD}
                                                                    name="passing_year[]"
                                                                    // help="Your current profession"
                                                                    required={true}
                                                                    // value={fromInputs.current_profession}
                                                                    type="date"
                                                                    placeholder="Enter your passing year"
                                                                    anyMessage={serverMessage}
                                                                />
                                                            </div>

                                                            <div className="col-md-4 col-12">
                                                                <ImageUpload
                                                                    label="Certificate"
                                                                    name="caertificate[]"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    // help="Set as a your nid front image"
                                                                    size="2"
                                                                    onChangeHandel={nidFrontUpload}
                                                                    required={true}
                                                                    anyMessage={serverMessage}
                                                                />
                                                            </div>

                                                            <div className="col-md-2 col-12" style={{ marginTop: '32px' }}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success btn-lg btn-block"
                                                                  onClick={() => addNewAccademic(++index)}
                                                                >
                                                                    <i className="fa fa-plus"></i> Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                })}


                                        </> : ''}

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
                    </div >
                </div >
            </section >
        </div >

    )
}

From.layout = Admin;