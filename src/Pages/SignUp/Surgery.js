
import "./SignUp.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import AppContext from "../../AppContext";
import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
require('react-datepicker/dist/react-datepicker.css')

function Surgery() {
    const [surgery, setSurgery] = useState("No");
    const handleOnChange = (e) => {
        setSurgery(e.target.value);
    }
    const [surgeryContentVisible, setSurgeryContentVisible] = useState(false);

    useEffect(() => {
        surgery === "Yes"
            ? setSurgeryContentVisible(true)
            : setSurgeryContentVisible(false);
    }, [surgery]);

    const renderResult = () => {
        let result;
        surgery === "No"
            ? (result = "No")
            : (result = "Yes");
        return result;
    };
    return (
        <div>
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
        </div>
    )
}

export default Surgery;