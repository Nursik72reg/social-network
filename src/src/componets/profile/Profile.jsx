import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./myPost/MyPosts";
import ProfileInfo from "./profileInfo/ProfilInfo";
const Profile = () => {
  return (
    <div >
        <ProfileInfo/>
        <MyPosts/>
    </div>
  );
};
export default Profile;
