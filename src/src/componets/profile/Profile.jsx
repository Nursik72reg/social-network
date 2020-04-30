import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfilInfo";
import MyPostContainer from "./myPost/MyPostContainer";
const Profile = (props) => {

  return (
    <div className={classes.container}>
        <ProfileInfo profileInfo = {props.profileInfo}/>
        {/*<MyPostContainer />*/}
    </div>
  );
};
export default Profile;
