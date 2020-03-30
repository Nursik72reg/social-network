import React from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ui>
        <li className={classes.item}>
          <a href="/profile"> Profile</a>
        </li>
        <li className={classes.item}>
          <a href="/dialogs">Messeges</a>
        </li>
        <li className={classes.item}>
          <a>News</a>
        </li>
        <li className={classes.item}>
          <a>Music</a>
        </li>
        <li className={classes.item}><a>Setting</a>
        </li>
      </ui>
    </div>
  );
};

export default Navbar;
