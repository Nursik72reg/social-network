import React from "react";
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (

        <div className={classes.item}><img className={classes.img}
                                           src="https://avatars.mds.yandex.net/get-pdb/1907041/22e575df-6abf-48f9-a7a2-0612c6bd3dad/s1200?webp=false"/><NavLink
            to={"/dialogs/" + props.id} className={classes.a}>{props.name}</NavLink>
        </div>

    )
};

export default DialogItem;