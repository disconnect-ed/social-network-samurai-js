import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import './Header.css'

class HeaderContainer extends React.Component {



    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.authUserProfile
});

export default connect(mapStateToProps, {logout})(HeaderContainer);