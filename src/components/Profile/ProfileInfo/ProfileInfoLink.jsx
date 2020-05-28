import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileInfoLink = ({href, icon, title}) => {
    return (
        <div className='col-3 mb-4 text-center'>
            <a target='_blank' className='contact-link m-auto' href={href}>
                <div className='contact-link__icon'><FontAwesomeIcon icon={icon} /></div>
                <div><b>{title}</b></div>
            </a>
        </div>
    )
}

export default ProfileInfoLink;