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
import { getBase64, ucFirst } from "../../halpers/helper.js";

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

    const [experianceItems, setExperianceItems] = useState([{
        designation: '',
        institute_name: '',
        department: '',
        start_date: '',
        end_date: '',
        current: ''
    }]);

    const [academicItems, setAcademicItems] = useState([{
        education_level: '',
        institute_name: '',
        passing_year: '',
        caertificate: ''
    }]);

    const [serverMessage, setServerMessage] = useState(false);
    const [updated, setUpdated] = useState(false);


    const router = useRouter()

    useEffect(() => {
        const me = async () => {
            const { data } = await api.profileApi();
            setFromInputs(pre => data?.data?.user)
            if (data?.data?.type !== 'citizen') {

                if (data?.data?.user?.experiances?.length > 0) {
                    setExperianceItems(pre => data?.data?.user?.experiances)
                }
                if (data?.data?.user?.academics?.length > 0) {
                    setAcademicItems(pre => data?.data?.user?.academics)
                }
            }
        }

        me();
    }, [updated])

    const options = [
        { label: 'Male', id: 'male' },
        { label: 'Female', id: 'female' },
        { label: 'Other', id: 'other' },
    ]

    const profileUpload = (e) => {
        getBase64(e.target.files[0])
            .then(result => {
                setFromInputs(prevState => ({
                    ...prevState,
                    ['profile_image']: result
                }));
            })
            .catch(err => {
                // console.log(err);
            });
    }


    const nidFrontUpload = (e) => {
        getBase64(e.target.files[0])
            .then(result => {
                setFromInputs(prevState => ({
                    ...prevState,
                    ['nid_front']: result
                }));
            })
            .catch(err => {
                // console.log(err);
            });
    }

    const nidBackUpload = (e) => {
        getBase64(e.target.files[0])
            .then(result => {
                setFromInputs(prevState => ({
                    ...prevState,
                    ['nid_back']: result
                }));
            })
            .catch(err => {
                console.log(err);
            });
    }

    const phoneNumber = (event) => {

        const number = event.target.value;
        if (!number.match(/^[0-9]+$/) || number.toString().length > 11) {
            fromInputs.phone = number.substring(0, number.length - 1);
        }
    }

    const statusCheck = (e) => {
        const { name, checked } = e.target;
        let ckd = checked === true ? 1 : 0
        setFromInputs(prevState => ({
            ...prevState,
            [name]: ckd
        }));
    }

    const selectEvent = (e) => {
        const { id } = e;
        setFromInputs(prevState => ({
            ...prevState,
            ['gender']: id
        }));
    }

    const addNewAccademic = () => {
        let newObject = {
            education_level: '',
            institute_name: '',
            passing_year: '',
            certification_copy: ''
        }
        setAcademicItems([...academicItems, newObject])
    }

    const academicItemManage = (index, event) => {
        let data = [...academicItems];
        data[index][event.target.name] = event.target.value;
        setAcademicItems(data);
    }

    const removeAccademicFields = (index, item) => {
        let data = [...academicItems];
        data.splice(index, 1)
        setAcademicItems(data)

        if(item.id){
            const academicDelete = async (id) => {
                try {
                    const { data } = await api.profileAcademicDelete(id);
        
                    if (data.status_code === 200 || data.status_code === 201) {
                        toast.success(ucFirst(data?.message))
                    } else {
                        toast.warning(data?.message)
                    }
        
                } catch (e) {
                    setServerMessage(e.response?.data?.errors)
                }
            } 

            academicDelete(item.id)
        }
    }

    const caertificateImage = (index, e) => {
        let data = [...academicItems];
        // data[index][event.target.name] = event.target.files[0];
        // setAcademicItems(data);

        getBase64(e.target.files[0])
            .then(result => {
                data[index][e.target.name] = result;
                setAcademicItems(data);
                // data[index][event.target.name] = event.target.files[0];
            })
            .catch(err => {
                console.log(err);
            });
    }

    // experiance
    const addNewExperiance = () => {
        let newObject = {
            designation: '',
            institute_name: '',
            department: '',
            start_date: '',
            end_date: '',
            current: ''
        }
        setExperianceItems([...experianceItems, newObject])
    }

    const experianceItemManage = (index, event) => {
        let data = [...experianceItems];
        data[index][event.target.name] = event.target.value;
        setExperianceItems(data);
    }

    // const experianceCurrent = (index, event) => {
    //     let data = [...experianceItems];
    //     data[index][event.target.name] = event.target.checked;
    //     setExperianceItems(data);
    // }

    const removeExperianceFields = (index, item) => {
        let data = [...experianceItems];
        data.splice(index, 1)
        setExperianceItems(data)

        if(item.id){
            const experianceDelete = async (id) => {
                try {
                    const { data } = await api.profileExperianceDelete(id);
        
                    if (data.status_code === 200 || data.status_code === 201) {
                        toast.success(ucFirst(data?.message))
                    } else {
                        toast.warning(data?.message)
                    }
        
                } catch (e) {
                    setServerMessage(e.response?.data?.errors)
                }
            } 

            experianceDelete(item.id)
        }
    }

    const fromData = (e) => {
        const { name, value } = e.target;
        setFromInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const fromSubmit = async (e) => {
        e.preventDefault();

        if (fromInputs.type !== 'citizen') {
            Object.assign(fromInputs, { academics: academicItems })
            Object.assign(fromInputs, { experiances: experianceItems })
        }

        try {
            const { data } = await api.profileUpdate(fromInputs);

            if (data.status_code === 200 || data.status_code === 201) {
                toast.success(ucFirst(data?.message))
                setServerMessage(false)
                setUpdated(pre => !updated)
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

    return (

        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">

                    <div className="d-flex justify-content-start">
                        <div className="col-12">
                            <div className="container-fluid">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <h3 className='fs-md fs-sm fs-xs'>Update Profile</h3>
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
                                                    placeholder="Select gender"
                                                    name="gender"
                                                    eventHandel={selectEvent}
                                                    lavel="Select Gender"
                                                    options={options}
                                                    selectedOption={fromData.gender}
                                                    required={true}
                                                    id="profileGender"
                                                    help="select gender"
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
                                                    oldImage={fromInputs?.profile_image ?? null}
                                                    onChangeHandel={profileUpload}
                                                    required={fromInputs?.profile_image ? false : true}
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
                                                    checked={fromInputs?.status == '1' ? true : false}
                                                    onChangeEvent={statusCheck}
                                                    // value={fromInputs?.status == '1' ? true : false}
                                                    label="status"
                                                    help="please seletct"
                                                    required={false}
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
                                                        oldImage={fromInputs?.nid_front ?? null}
                                                        onChangeHandel={nidFrontUpload}
                                                        required={fromInputs?.nid_front ? false : true}
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
                                                        required={fromInputs?.nid_back ? false : true}
                                                        oldImage={fromInputs?.nid_back ?? null}
                                                        onChangeHandel={nidBackUpload}
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

                                        {fromInputs.type === 'consultant' ? <>
                                            <div className="dropdown-divider my-4" />
                                            <h5>Academic Information: </h5>

                                            {academicItems?.map((input, index) => {
                                                return (
                                                    <div className="row" key={index}>
                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Education Level"
                                                                eventHandel={e => academicItemManage(index, event)}
                                                                name="education_level"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.education_level}
                                                                type="text"
                                                                placeholder="Enter your education level"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Institute Name"
                                                                eventHandel={e => academicItemManage(index, event)}
                                                                name="institute_name"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.institute_name}
                                                                type="text"
                                                                placeholder="Enter your institute name"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Passing Year"
                                                                eventHandel={e => academicItemManage(index, event)}
                                                                name="passing_year"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.passing_year}
                                                                type="date"
                                                                placeholder="Enter your passing year"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-md-4 col-12">
                                                            <ImageUpload
                                                                label="Certificate"
                                                                name="certification_copy"
                                                                accept=".jpg, .jpeg, .png"
                                                                // help="Set as a your nid front image"
                                                                size="2"
                                                                oldImage={academicItems[index].certification_copy ?? null }
                                                                onChangeHandel={e => caertificateImage(index, e)}
                                                                required={academicItems[index].certification_copy ? false : true}
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-md-2 col-12" style={{ marginTop: '32px' }}>
                                                            {index !== 0 ?
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    onClick={() => removeAccademicFields(index, input)}
                                                                >
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                : ''}
                                                            {index === 0 ?
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success"
                                                                    onClick={addNewAccademic}
                                                                >
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                                : ''}
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                        </> : ''}

                                        {fromInputs.type === 'consultant' ? <>
                                            <div className="dropdown-divider my-4" />
                                            <h5>Experiance Information: </h5>
                                            <div className="row">
                                                <div className="col-md-4 col-12">
                                                    <InputField
                                                        label="Years of experiance"
                                                        eventHandel={fromData}
                                                        name="years_of_experience"
                                                        // help="Type your years of experience"
                                                        required={true}
                                                        type="text"
                                                        value={fromInputs.years_of_experience}
                                                        placeholder="Enter your years of experience"
                                                        anyMessage={serverMessage}
                                                    />
                                                </div>
                                            </div>
                                            {experianceItems?.map((input, index) => {
                                                return (
                                                    <div className="row" key={index}>
                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Institute Name"
                                                                eventHandel={e => experianceItemManage(index, event)}
                                                                name="institute_name"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.institute_name}
                                                                type="text"
                                                                placeholder="Enter your institute name"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Designation"
                                                                eventHandel={e => experianceItemManage(index, event)}
                                                                name="designation"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.designation}
                                                                type="text"
                                                                placeholder="Enter your designation"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Department"
                                                                eventHandel={e => experianceItemManage(index, event)}
                                                                name="department"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.department}
                                                                type="text"
                                                                placeholder="Enter your department"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-2 col-12">
                                                            <InputField
                                                                label="Start Date"
                                                                eventHandel={e => experianceItemManage(index, event)}
                                                                name="start_date"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.start_date}
                                                                type="date"
                                                                placeholder="Enter your start date"
                                                                anyMessage={serverMessage}
                                                            />
                                                        </div>

                                                        <div className="col-sm-3 col-12">
                                                            <InputField
                                                                label="End Date"
                                                                eventHandel={e => experianceItemManage(index, event)}
                                                                name="end_date"
                                                                // help="Your current profession"
                                                                required={true}
                                                                value={input.end_date}
                                                                type="date"
                                                                placeholder="Enter your end date"
                                                                anyMessage={serverMessage}
                                                            />
                                                            {/* <Checkbox
                                                                checked={false}
                                                                onChangeEvent={e => experianceCurrent(index, event)}
                                                                value={false}
                                                                label="Running Job?"
                                                                // help="please seletct"
                                                                required={true}
                                                                name="current"
                                                                anyMessage={serverMessage}
                                                            /> */}

                                                        </div>

                                                        <div className="col-md-1 col-12" style={{ marginTop: '32px' }}>
                                                            {index !== 0 ?
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    onClick={() => removeExperianceFields(index, input)}
                                                                >
                                                                    <i className="fa fa-minus"></i>
                                                                </button>
                                                                : ''}
                                                            {index === 0 ?
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success"
                                                                    onClick={addNewExperiance}
                                                                >
                                                                    <i className="fa fa-plus"></i>
                                                                </button>
                                                                : ''}
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
                                            title="Profile Update"
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