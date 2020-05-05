import React from "react";
import classes from "./ProfilInfo.module.css";
import Preloader from "../../common/Preloader";
import MyPostContainer from "../myPost/MyPostContainer";
import MyStatus from "../myStatus/myStatus";
import avaPhoto from "../../../img/person__img.png"

const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.contacts}>
                <div>
                    <div className={classes.page_block}>
                        <img className={classes.img} src={props.profileInfo.photos.large  || avaPhoto}/>
                        <div>{props.profileInfo.aboutMe}</div>
                    </div>
                </div>
                <div>
                    <div className={classes.page_info_wrap}>
                        <div className={classes.page_top}>
                            <h2>{props.profileInfo.fullName}</h2>
                            <div className>
                                <MyStatus putProfileStatus = {props.putProfileStatus} status = {props.status}/>
                            </div>
                        </div>
                        <div className={classes.page_info}>
                            <div>{props.profileInfo.contacts.facebook}</div>
                            <div>{props.profileInfo.contacts.vk}</div>
                            <div>{props.profileInfo.contacts.github}</div>
                        </div>
                    </div>
                    <div className={classes.page_post}>
                        <MyPostContainer />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo
