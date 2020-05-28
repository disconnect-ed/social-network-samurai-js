import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className='mb-4 pt-2'>
                <Field component={Textarea}
                       className='form-control'
                       validate={[required, maxLength50]}
                       placeholder='Введите ваше сообщение...' name="newMessageBody" />
            </div>
            <div className='text-right'>
                <button className='btn btn-success'>Отправить</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























