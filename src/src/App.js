import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import Profile from "./componets/profile/Profile"
import Dialogs from "./componets/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className="menu">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
