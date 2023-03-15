import React from 'react'
import {Link} from 'react-router-dom';
import "./Backarrow.css";

function Backarrow(props) {
    return (
        <div className="Backarrow">
            <Link to={props.path}>
                <img className="backarrow-img" src="/Assets/Icons/backarrow.svg" alt="Flecha"/>
                <p>{"VOLVER A "+props.name}</p>
            </Link>
        </div>
    )
}

export default Backarrow