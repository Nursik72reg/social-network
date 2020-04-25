import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.row}>
                <div >
                    <h3 className={classes.item}>itProger</h3>
                </div>
                <div className={classes.btn}>

                    {props.isAuth
                        ? <button> {props.login}</button>
                    :<NavLink to = {"/login"}>
                        <button>Login</button>
                    </NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
