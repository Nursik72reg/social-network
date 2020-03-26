import React from "react";
import "./App.css";
import Header from "./componets/header";
import Navbar from "./componets/navbar";
import Profile from "./componets/profile";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="menu">
        <Navbar />
        <Profil />
      </div>
    </div>
  );
};
export default App;
