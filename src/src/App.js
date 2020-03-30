import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import Profile from "./componets/profile/Profile"
import Dialogs from "./componets/dialogs/Dialogs";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="menu">
        <Navbar />
       <div className="app-wrapper-content">
       {/*<Dialogs/>*/}
       <Profile/>
       </div>
      </div>
    </div>
  );
};
export default App;
