import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {Alert} from "react-bootstrap";

const ProfileDataForm = ({handleSubmit, profile, error, save}) => {
    return <form className='settings-data' onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div className='mt-4'>
            <h5>Полное имя:</h5> {createField("Full name", "fullName", [], Input,
            {bootstrap: 'form-control'})}
        </div>
        <div className='mt-4 form-check'>
            <span>
                { createField("", "lookingForAJob", [], Input,
                    {type: "checkbox", bootstrap: 'form-check-input'} )}
            </span>
            <h5>Ищу работу?</h5>
        </div>

        <div className='mt-4'>
            <h5>Мои профессиональные навыки:</h5>
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div className='mt-4'>
            <h5>Обо мне:</h5>
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div className='mt-4'>
            <h5>Контакты:</h5> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className='mt-3'>
            <h6>{key}:</h6>
                {createField(key, "contacts." + key, [], Input, {bootstrap: 'form-control'})}
            </div>
        })}
        </div>
        {save && <div className='mt-4'>
            <Alert variant={"success"}>
                Изменения успешно сохранены!
            </Alert>
        </div>
        }
        <div className='mt-4 text-center'><button disabled={save} className='btn btn-success'>Сохранить</button></div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;