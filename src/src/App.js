import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import Profile from "./componets/profile/Profile"
import Dialogs from "./componets/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <div className="menu">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component = {()=><Dialogs dialogs = {props.options.dialogs}
                                                                      message = {props.options.messagess}
                                                                         dispatch = {props.dispatch}
                                                                      />}/>
                        <Route path="/profile" component={()=><Profile pos = {props.options.pos}
                                                                       dispatch = {props.dispatch}
                                                                       newPostText = {props.options.newPostText}
                                                                       />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
export default App;
