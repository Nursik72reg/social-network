import React, {Suspense} from "react";
import "./App.css";
import {NavbarContainer} from "./componets/navbar/Navbar";
import Route from "react-router-dom/es/Route";
import ProfileContainer from "./componets/profile/ProfileContainer";
import {HeaderContainer} from "./componets/header/HeaderContainer";
import Login from "./componets/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {initializeApp} from "./redux/app-reducer";
import PreloaderTwo from "./componets/common/PreloaderTwo";
import Preloader from "./componets/common/Preloader";
import {UserContainer} from "./componets/user/UserContainer";
const DialogsContainer = React.lazy(() => import( "./componets/dialogs/DialogsContainer"));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <PreloaderTwo/>
        }
        return (
            <div className="container">
                <HeaderContainer/>
                <div className="menu">
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/dialogs" component={() => {
                            return <Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </Suspense>
                        }}/>
                        <Route path="/profile/:userId?" component={() => <ProfileContainer/>}/>
                        <Route path="/user" component={() => <UserContainer/>}/>
                        <Route path="/login" component={() => <Login/>}/>
                    </div>
                </div>
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);


