import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import DialogsContainer from "./componets/dialogs/DialogsContainer";
import Route from "react-router-dom/es/Route";
import {UserContainer} from "./componets/user/UserContainer";
import {ProfileContainers} from "./componets/profile/ProfileContainer";
import {HeaderContainer} from "./componets/header/HeaderContainer";




const App = () => {
    return (
            <div className="container">
                <HeaderContainer/>
                <div className="menu">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component = {()=><DialogsContainer />}/>
                        <Route path="/profile/:userId?" component={()=><ProfileContainers />}/>
                        <Route path="/user" component={()=><UserContainer/>}/>
                    </div>
                </div>
            </div>
    );
};
export default App;

