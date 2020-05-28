import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import UserMessage from "./Message/UserMessage";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => m.type ? <UserMessage avatar={props.avatar} message={m.message} key={m.id} /> :
        <Message message={m.message} key={m.id} />
    );
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return (
        <div className='row'>
            <div className='col-xl-3 d-xl-block d-none'>
                <div className="users-dialogs">
                    { dialogsElements }
                </div>
            </div>
            <div className='d-xl-none d-block col-12 mb-4'>
                <div className="users-dialogs users-dialogs_small">
                    { dialogsElements }
                </div>
            </div>
            <div className='col-xl-9 col-lg-12'>
                <div className="user-messages-wrap p-3">
                    <div className="user-messages ">
                        <div>{ messagesElements }</div>
                    </div>
                    <hr/>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

























