import React from "react";
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import person from "../../../img/person__img.png"

const DialogItem = (props) => {
    return (
        <div className={classes.item}><img className={classes.img}
                                           src={person}/>
            <div><NavLink
                to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>

    )
};

export default DialogItem;