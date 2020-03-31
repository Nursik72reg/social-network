import React from "react";
import classes from "./ProfilInfo.module.css";

const ProfileInfo = ()=>{
    return(
        <div>
            <img className={classes.img} src="https://cyberfrogdesign.co.uk/wp-content/uploads/2018/11/rblog.jpg"/>
            <div>ава + описание</div>
        </div>
    )
}
export default ProfileInfo