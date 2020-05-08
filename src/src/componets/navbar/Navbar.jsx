import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Navbar = (props) => {
   let colorItems = props.isTopic ? classes.blue : classes.dark;
    return (
        <div className={classes.navbar}>
            <ui>
                <li className={classes.item}>
                    <NavLink to="/profile" className={colorItems}> Profile</NavLink>
                </li>
                <li className={classes.item}>
                <NavLink to="/dialogs" className={colorItems}>Messeges</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to= "/user" className={colorItems}>User</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to= "/news" className={colorItems}>News</NavLink>
                </li>{/*
                <li className={classes.item}>
                    <a className={classes.a}>Music</a>
                </li>*/}
            </ui>
        </div>
    );
};
let mapStateToProps = (state)=>{
    return {
        isTopic: state.authUser.isTopic
    }
};
export const NavbarContainer = connect(mapStateToProps,{})(Navbar);

