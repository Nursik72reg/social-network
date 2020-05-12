import React from "react";
import classes from "./PreloaderTwo.module.css";
import gif from "../../img/simson.gif"
const PreloaderTwo = () =>{
    return(
        <div className={classes.container}>
            <img className={classes.img} src={gif}/>
        </div>
    )
};

export default PreloaderTwo;