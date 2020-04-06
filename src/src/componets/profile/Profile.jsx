import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./myPost/MyPosts";
import ProfileInfo from "./profileInfo/ProfilInfo";
const Profile = (props) => {

  return (
    <div >
        <ProfileInfo/>
        <MyPosts pos = {props.pos}
                 dispatch = {props. dispatch}
                 /*updateNewPostText = {props.updateNewPostText}

                 addPosts = {props.addPosts}*/
                 newPostText = {props.newPostText}
                 />
    </div>
  );
};
export default Profile;
