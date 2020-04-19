import React from "react";
import loading from "../../img/30.svg"
import classes from "./Preloader.module.css"
let Preloader = () =>{
    return(
        <div className={classes.preLoader}>
             <img className={classes.loader} src={loading}/>
        </div>
    )
};
export default Preloader;