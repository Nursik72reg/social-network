import React from "react";
import ProfileInfo from "./profileInfo/ProfilInfo";
const Profile = (props) => {

  return (
    <div>
        <ProfileInfo putProfileStatus = {props.putProfileStatus} profileInfo = {props.profileInfo} status = {props.status}/>
    </div>
  );
};
export default Profile;
