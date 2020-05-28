import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <NavLink className='users-dialogs-wrap' to={path}>
        <div className='users-dialogs-inner col-12 d-flex align-items-center pt-2 pb-2'>
            <div className='users-dialogs__img mr-3'>
                <img
                    src="https://steamuserimages-a.akamaihd.net/ugc/961978797800081925/3616ABAAC38C051265A609459A935D7AB9221156/?imw=506&imh=284&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    alt=""/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    </NavLink>
}

export default DialogItem;