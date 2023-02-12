import "./SignUp.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState, useContext } from "react";
import { Carousel, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import AppContext from "../../AppContext";
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import Surgery from "./Surgery";
import AppointmentForm from "./AppointmentForm";
require('react-datepicker/dist/react-datepicker.css')

function SignUp() {

    const form = useRef();
    const [thanks, setThanks] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [servi, setServi] = useState("Lymphatic Drainage Massage");
    const handleOnChange2 = (e) => {
        setServi(e.target.value);
    }
    const [surgery, setSurgery] = useState("No");
    const handleOnChange = (e) => {
        setSurgery(e.target.value);
    }
    const [surgery2, setSurgery2] = useState("Yes");
    const handleOnChange3 = (e) => {
        setSurgery2(e.target.value);
    }
    const [surgeryContentVisible, setSurgeryContentVisible] = useState(false);
    const [surgeryContentVisible2, setSurgeryContentVisible2] = useState(false);
    const [surgeryContentVisible3, setSurgeryContentVisible3] = useState(false);

    useEffect(() => {
        surgery === "Yes"
            ? setSurgeryContentVisible(true)
            : setSurgeryContentVisible(false)
    }, [surgery]);

    useEffect(() => {
        surgery === "Yes"
            ? setSurgeryContentVisible3(false)
            : setSurgeryContentVisible3(true)
    }, [surgery]);

    useEffect(() => {
        surgery === "Yes"
            ? setSurgery2("No")
            : setSurgery2("Yes")
    }, [surgery]);

    useEffect(() => {
        servi === "Post Surgery Lymphatic Massage" && surgery === "No"
            ? setSurgeryContentVisible2(true) && setSurgery2("Yes")
            : setSurgeryContentVisible2(false)
    }, [servi, surgery]);

    useEffect(() => {
        (surgery2 === "Yes")
            ? setSurgeryContentVisible3(true)
            : setSurgeryContentVisible3(false)
    }, [surgery2]);


    const sendEmail = (e) => {
        setThanks(true)
        e.preventDefault();
        emailjs.sendForm('service_5v4lkuq', 'template_5ep6yc8', form.current, 'MImnBM_N-ObvVGJYE')
            .then((result) => {
                console.log(result.text);
                document.getElementById('nam').disabled = "disabled"
                document.getElementById('mail').disabled = "disabled"
                document.getElementById('phon').disabled = "disabled"
                document.getElementById('dat').disabled = "disabled"
                document.getElementById('servi').disabled = "disabled"
                document.getElementById('inf').disabled = "disabled"
                document.getElementById('hear').disabled = "disabled"
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <React.Fragment>
            <Navbar />
            <div id="SignUp">
                <div className="container-fluid">
                    <div className="row signup-content">
                        <div className="col-12 col-lg-6 signup-form">
                            <h1 className="signup-special-text black d-none d-lg-block">
                                <FormattedMessage id="SignInInvitation" values={{
                                    span: (chunks) => <span className="orange">{chunks}</span>
                                }} />
                            </h1>
                            <h1 className="signup-special-text black d-lg-none d-xl-none">
                                <FormattedMessage id="SignUp" />
                            </h1>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="name"><FormattedMessage id="FullName" /></label>
                                    <input name="user_name"
                                        id="nam"
                                        type="name"
                                        className={"signup-input"}
                                        required
                                        disabled="" />
                                </div>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="email"><FormattedMessage id="Email" /></label>
                                    <input name="user_email"
                                        type="email"
                                        id="mail"
                                        className={"signup-input"}
                                        required
                                        disabled="" />
                                </div>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="phone"><FormattedMessage id="Phone" /></label>
                                    <input name="user_phone"
                                        type="phone"
                                        className={"signup-input"}
                                        required
                                        id="phon"
                                        disabled="" />
                                </div>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="date"><FormattedMessage id="Date" /></label>
                                    <DatePicker name="user_date" selected={startDate} onChange={(date) => setStartDate(date)} id="dat" />
                                </div>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="service"><FormattedMessage id="Services" /></label>
                                    <div className="form-group signup-form-section">
                                    </div>
                                </div><div>
                                    <select name="user_service" id="servi" value={servi} onChange={handleOnChange2} required>
                                        <option selected value="Lymphatic Drainage Massage">Lymphatic Drainage Massage</option>
                                        <option value="Post Surgery Lymphatic Massage">Post Surgery Lymphatic Massage</option>
                                        <option value="Lipo Massage">Lipo Massage</option>
                                        <option value="Relaxation Massage">Relaxation Massage</option>
                                        <option value="Body Sculpting">Body Sculpting</option>
                                        <option value="Cellulite Reduction Treatment">Cellulite Reduction Treatment</option>
                                        <option value="Hyperbaric Chamber">Hyperbaric Chamber</option>
                                        <option value="Laser Hair Removal">Laser Hair Removal</option>
                                        <option value="Wood Massage">Wood Massage</option>
                                        <option value="Deep Cleansing Facial">Deep Cleansing Facial</option>
                                    </select>
                                </div> <div>
                                    <div className="form-group signup-form-section">
                                        <label htmlFor="bool"><FormattedMessage id="DidSurgery" /></label>
                                        <div className="form-group signup-form-section">
                                        </div>
                                    </div>
                                    <div>
                                        <select name="user_surgery" value={surgery} onChange={handleOnChange} required>
                                            <option value="Yes">Yes</option>
                                            <option selected value="No">No</option>
                                        </select>
                                    </div>
                                    {surgeryContentVisible && <div>
                                        <div className="form-group signup-form-section">
                                            <label htmlFor="bool"><FormattedMessage id="WhatSurgery" /></label>
                                            <div className="form-group signup-form-section">
                                            </div>
                                        </div>
                                        <div>
                                            <textarea name="user_what" type="info" className={"signup-input"} />
                                        </div>
                                    </div>}
                                    {surgeryContentVisible && <div>
                                        <div className="form-group signup-form-section">
                                            <label htmlFor="bool"><FormattedMessage id="WhoSurgery" /></label>
                                            <div className="form-group signup-form-section">
                                            </div>
                                        </div>
                                        <div>
                                            <input name="user_who" type="info" className={"signup-input"} />
                                        </div>
                                    </div>}
                                    {surgeryContentVisible2 && <div>
                                        <div className="form-group signup-form-section">
                                            <label htmlFor="bool"><FormattedMessage id="WillSurgery" /></label>
                                            <div className="form-group signup-form-section">
                                            </div>
                                        </div>
                                        <div>
                                            <select x="user_surgery2" value={surgery2} onChange={handleOnChange3} required>
                                                <option selected value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>}
                                    {surgeryContentVisible3 && <div>
                                        <div className="form-group signup-form-section">
                                            <label htmlFor="bool"><FormattedMessage id="WhoSurgeon" /></label>
                                            <div className="form-group signup-form-section">
                                            </div>
                                        </div>
                                        <div>
                                            <input name="user_who2" type="info" className={"signup-input"} />
                                        </div>
                                    </div>}
                                    {surgeryContentVisible3 && <div>
                                        <div className="form-group signup-form-section">
                                            <label htmlFor="bool"><FormattedMessage id="WhatSurgeryF" /></label>
                                            <div className="form-group signup-form-section">
                                            </div>
                                        </div>
                                        <div>
                                            <textarea name="user_what2" type="info" className={"signup-input"} />
                                        </div>
                                    </div>}
                                </div>
                                <div className="form-group signup-form-section">
                                    <label htmlFor="info"><FormattedMessage id="AdditionalInfo" /></label>
                                </div>
                                <textarea name="user_info" type="info" className={"signup-input"} disabled="" id="inf" />
                                <div>
                                    <div className="form-group signup-form-section">
                                        <label htmlFor="Heard"><FormattedMessage id="Heard" /></label>
                                        <div className="form-group signup-form-section">
                                        </div>
                                    </div>
                                    <div>
                                        <select name="user_heard" id="hear">
                                            <option selected value="Facebook">Facebook</option>
                                            <option value="TikTok">TikTok</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="YouTube">YouTube</option>
                                            <option value="Google">Google</option>
                                            <option value="Recommended by friend/family">Recommended by friend/family</option>
                                            <option value="Recommended by Surgeon">Recommended by Surgeon</option>
                                        </select>
                                    </div>
                                </div>
                                <button id="signup-button"
                                    type="submit"
                                    onClick="Send"
                                    className="btn btn-primary text-uppercase"
                                    disabled={thanks}>
                                    <FormattedMessage id="SignUp" />
                                </button>
                            </form>
                            {thanks && <div>
                                <h1 className="signup-special-text black">
                                    Thank you for contacting us.
                                </h1>
                                <h1 className="signup-special-text black">
                                    We will get back to you soon!
                                </h1>
                                <p className="thanks-message" htmlFor="info">Your form was succesfully submitted.</p>
                            </div>}
                        </div>
                        <div className="col-lg-6 signup-image-section ">
                            <Carousel className="signup-carousel signup-hide-sm"
                                controls={false}>
                                <Carousel.Item>
                                    <img className="d-block w-100 signup-carousel-item"
                                        src="/Assets/Photos/Login/Login2.png"
                                        alt="Second slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>

    )
}

export default SignUp;