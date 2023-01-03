import { userAgent } from "next/server.js";
import { useEffect, useState } from "react";
import CustomButton from "../../components/Buttons/CustomButton.js";
import CustomLink from "../../components/Buttons/CustomLink.js";
import Admin from "../../layouts/Admin.js";
import api from "../../apis/v1.js"

export default function Index() {

    const [profile, setProfile] = useState([]);
    useEffect(() => {
        const me = async () => {
            const { data } = await api.profileApi();
            setProfile(pre => data.data)
        }

        me();

    }, [])

    return <>
        <div className="content-wrapper">
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="profile image" />
                                {/* <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    Kshiti Ghelani
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <div className="d-flex justify-content-start align-items-center">
                                    <h5 className="">
                                        RANKINGS :
                                    </h5>

                                    <div className="rate text-white ml-4">
                                        <div className="rating">
                                            <input type="radio" name="rating" defaultValue={5} id={5} />
                                            <label htmlFor={5}>☆</label>
                                            <input type="radio" name="rating" defaultValue={4} id={4} />
                                            <label htmlFor={4}>☆</label>
                                            <input type="radio" name="rating" defaultValue={3} id={3} />
                                            <label htmlFor={3}>☆</label>
                                            <input type="radio" name="rating" defaultValue={2} id={2} />
                                            <label htmlFor={2}>☆</label>
                                            <input type="radio" name="rating" defaultValue={1} id={1} />
                                            <label htmlFor={1}>☆</label>
                                        </div>
                                    </div>
                                </div>

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <CustomLink
                                classes="float-right btn-sm btn-success"
                                title="Update Profile"
                                url={`/profile/update-` + `${profile?.id}`} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a >Website Link</a><br />
                                <a >Bootsnipp Profile</a><br />
                                <a >Bootply Profile</a>
                                <p>SKILLS</p>
                                <a >Web Designer</a><br />
                                <a >Web Developer</a><br />
                                <a >WordPress</a><br />
                                <a >WooCommerce</a><br />
                                <a >PHP, .Net</a><br />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    </>
}

Index.layout = Admin;
