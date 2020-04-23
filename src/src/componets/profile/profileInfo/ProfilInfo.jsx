import React from "react";
import classes from "./ProfilInfo.module.css";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={classes.img} src="https://cyberfrogdesign.co.uk/wp-content/uploads/2018/11/rblog.jpg"/>
            </div>
            <div className={classes.contacts}>
                <div>
                    <img src={props.profileInfo.photos.large}/>
                    <div>{props.profileInfo.aboutMe}</div>
                </div>
                <div>
                    Контакты
                    <div>{props.profileInfo.contacts.facebook}</div>
                    <div>{props.profileInfo.contacts.vk}</div>
                    <div>{props.profileInfo.contacts.github}</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo