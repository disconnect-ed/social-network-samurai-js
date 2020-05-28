import React from 'react';

const Message = (props) => {
    return (
        <div className='row mb-4'>
            <div className="col-md-1 col-2 mr-3">
                <div className='users-dialogs__img mr-3'>
                    <img
                        src="https://steamuserimages-a.akamaihd.net/ugc/961978797800081925/3616ABAAC38C051265A609459A935D7AB9221156/?imw=506&imh=284&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                        alt=""/>
                </div>
            </div>
            <div className="col-md-5  col-8 users-dialogs__text">
                <div className='users-dialogs__text'>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Message;