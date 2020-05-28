import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import './Login.css'

const LoginForm = ({handleSubmit, error, onTest, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div className='pb-3'>
                    {createField("Email", "email", [required], Input,
                        {bootstrap: 'form-control'})}
                </div>
                <div className='pb-3'>
                    {createField("Пароль", "password", [required], Input,
                        {type: "password", bootstrap: 'form-control'})}
                </div>
                <div className='d-flex justify-content-center pb-4'>
                    <div>
                        {createField(null, "rememberMe", [], Input,
                            {type: "checkbox", bootstrap: 'form-check-input'})}
                    </div>
                    <div>Запомнить меня?</div>
                </div>


                { captchaUrl && <img src={captchaUrl} />}
                { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button className='btn btn-success'>Войти</button>
                </div>

                <div className='pt-4'>
                    <p onClick={onTest} className='login-test'>Войти в роли тестера</p>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    const onTest = () => {
        props.login('yivat41432@gilfun.com', '1234567890',);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className='login-form mt-5 text-center'>
        <div className='pt-2 pb-2'>
            <img className='login-logo' src="RD-logo-mini.png" alt="logo"/>
        </div>
        <h1 className='pb-3'>Авторизация</h1>
        <LoginReduxForm onSubmit={onSubmit} onTest={onTest} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);