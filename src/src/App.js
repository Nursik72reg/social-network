import React from "react";
import "./App.css";
import {NavbarContainer} from "./componets/navbar/Navbar";
import Route from "react-router-dom/es/Route";
import {UserContainer} from "./componets/user/UserContainer";
import ProfileContainer from "./componets/profile/ProfileContainer";
import {HeaderContainer} from "./componets/header/HeaderContainer";
import Login from "./componets/login/Login";
import DialogsContainer from "./componets/dialogs/DialogsContainer";
const App = () => {
    return (
            <div className="container">
                <HeaderContainer/>
                <div className="menu">
                    <NavbarContainer/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component = {()=><DialogsContainer />}/>
                        <Route path="/profile/:userId?" component={()=><ProfileContainer />}/>
                        <Route path="/user" component={()=><UserContainer/>}/>
                        <Route path="/login" component={()=><Login/>}/>
                    </div>
                </div>
            </div>

    );
};
export default App;

