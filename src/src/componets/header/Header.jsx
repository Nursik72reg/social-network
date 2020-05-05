import React from "react";
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = (props) => {
    const topik = () => {

        if (!props.isTopic) {
            props.switchTopic(true);
        }else if(props.isTopic) {
            props.switchTopic(false)
        }
    };
    return (
        <header className={props.isTopic ? classes.blue : classes.dark}>
            <div className={classes.row}>
                <div>
                    <h3 className={classes.item}>itProger</h3>
                </div>
                <div className={classes.btn}>
                    <button onClick={topik}>Сменить тему</button>
                    {props.isAuth
                        ? <button> {props.login}</button>
                        : <NavLink to={"/login"}>
                            <button>Login</button>
                        </NavLink>
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;
