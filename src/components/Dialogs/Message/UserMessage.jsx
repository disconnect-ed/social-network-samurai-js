import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const UserMessage = (props) => {
    return (
        <div className='d-flex mb-4 justify-content-end'>
            <div className="col-lg-5 col-md-6 col-8 users-dialogs__text_user">
                <div className='users-dialogs__text_user'>
                    {props.message}
                </div>
            </div>
            <div className="col-md-1 col-2 mr-3 ml-2">
                <div className='users-dialogs__img d-flex justify-content-center align-items-center'>
                    {props.avatar.photos.small ?
                        <img
                            src={props.avatar.photos.small}
                            alt=""/>
                        :
                        <div><FontAwesomeIcon icon={faUser}/></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserMessage;