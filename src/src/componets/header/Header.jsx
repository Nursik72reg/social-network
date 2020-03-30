import React from "react";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.row}>
        <h3 className={classes.item}>itProger</h3>
        <img></img>
      </div>
    </header>
  );
};

export default Header;
