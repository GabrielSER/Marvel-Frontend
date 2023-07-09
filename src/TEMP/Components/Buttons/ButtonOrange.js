import React from 'react'
import {Link} from 'react-router-dom';
import "./ButtonOrange.css"
import {FormattedMessage} from "react-intl";

function ButtonOrange(props) {
    return (
        <div className='ButtonOrange'>
            <Link to={"/"+props.path} onClick={props.action ? props.action : () => {}}>
                <span><FormattedMessage id={props.text}/></span>
            </Link>
        </div>
    )
}

export default ButtonOrange