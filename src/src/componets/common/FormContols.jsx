import React from "react";
import classes from "./FormContols.module.css"



export const Textarea = ({input, meta}, ...props) => {
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


export const Input = ({type, meta,label, input}, ...props) => {
    let hasError = meta.error && meta.touched;
    return (
        <div>
            <div className={classes.inputDiv}>
                <input type = {type} placeholder={label} className={hasError ? classes.input : classes.inputNorm} {...input}{...props}/>
                <div>
                    {hasError && <span className={classes.error}>{meta.error}</span>}
                </div>
            </div>

        </div>
    )
}
