import React from "react";
import classes from "./FormContols.module.css"

const Textarea = ({input, meta}, ...props) => {
    let hasError = meta.error && meta.touched;
    return (
        <div>
            <div>
                <textarea className={hasError ? classes.input : ""} {...input}{...props}/>
            </div>
            {hasError && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
};

export default Textarea;