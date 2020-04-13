import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import Profile from "./componets/profile/Profile"


import DialogsContainer from "./componets/dialogs/DialogsContainer";
import Route from "react-router-dom/es/Route";


const App = (props) => {
    return (
            <div className="container">
                <Header/>
                <div className="menu">
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs" component = {()=><DialogsContainer />}/>
                        <Route path="/profile" component={()=><Profile />}/>
                    </div>
                </div>
            </div>
    );
};
export default App;

