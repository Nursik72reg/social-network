import React from "react";
import classes from "./Message.module.css"

const Message = ({value})=>{
    return (
        <div className={classes.message}> {value}</div>
    )

};

export default Message;