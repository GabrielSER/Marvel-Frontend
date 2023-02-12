import React from 'react'
import {Link} from 'react-router-dom';
import "./Breadcrumbs.css";

function Breadcrumbs(props) {
    return (
        <div className='Breadcrumbs'>
            <Link to={props.path}>
                <p className="text-uppercase">{props.pathName}</p>
            </Link>
            <img className="bread-icon" src="/Assets/Icons/chevronRight.svg" alt="Chevron"/>
            <p>{props.name}</p>
        </div>
    )
}

export default Breadcrumbs