import React from "react";
import clases from "./header.module.css";

const Header = () => {
  return (
    <header className={clases.header}>
      <div className="row">
        <h3>itProger</h3>
        <img></img>
      </div>
    </header>
  );
};

export default Header;
