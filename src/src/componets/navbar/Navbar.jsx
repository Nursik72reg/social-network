import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <ui>
                <li className={classes.item}>
                    <NavLink to="/profile" className={classes.a}> Profile</NavLink>
                </li>
                <li className={classes.item}>
                <NavLink to="/dialogs" className={classes.a}>Messeges</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to= "/user" className={classes.a}>User</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to= "/news" className={classes.a}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <a className={classes.a}>Music</a>
                </li>
                <li className={classes.item}>
                    <a className={classes.a}>Setting</a>
                </li>
            </ui>
        </div>
    );
};

export default Navbar;
