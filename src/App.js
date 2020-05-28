import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {Container} from "react-bootstrap";
import SettingsContainer from "./components/Settings/SettingsContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Container className='pt-4'>
                    <div className="row">
                        {this.props.isAuth &&
                        <div className="col-xl-2 col-lg-3 col-md-3 d-md-block d-none">
                            <Navbar/>
                        </div>
                        }
                        <div className={this.props.isAuth ? "col-xl-10 col-lg-9 col-md-9 col-12 p-0" : "col-12"}>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/profile"}/>}/>

                                <Route path='/dialogs'
                                       render={withSuspense(DialogsContainer)}/>

                                <Route path='/profile/:userId?'
                                       render={withSuspense(ProfileContainer)}/>

                                <Route path='/users'
                                       render={() => <UsersContainer/>}/>

                                <Route path='/settings'
                                       render={() => <SettingsContainer/>}/>

                                <Route path='/login'
                                       render={() => <LoginPage/>}/>

                                <Route path='*'
                                       render={() => <div className='col-12'>
                                           <div className='text-center mt-5'>
                                               <h1>Ой... 404</h1>
                                               <h3>Страница не найдена :(</h3>
                                           </div>
                                       </div>}/>
                            </Switch>

                        </div>
                    </div>
                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
