import React from "react";
import Settings from "./Settings";
import "./Settings.css";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

class SettingsContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} /> ;
        if (!this.props.profile) return <Preloader/>;
        return (
            <Settings profile={this.props.profile} savePhoto={this.props.savePhoto}
                      saveProfile={this.props.saveProfile} updateStatus={this.props.updateStatus}
                      status={this.props.status}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
    })
}

export default connect(mapStateToProps, {getUserProfile, getStatus, savePhoto, saveProfile, updateStatus})(SettingsContainer);