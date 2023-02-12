import {Link} from "react-router-dom";
import React from "react";
import './RightArrow.css';

function RightArrow(props){


    return (
        <span id="RightArrow">
            <img className="rightArrow-img" src="/Assets/Icons/rightarrow.svg" alt="Right Arrow"/>
        </span>
    )
}

export default RightArrow;