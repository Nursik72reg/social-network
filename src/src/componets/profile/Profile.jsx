import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./myPost/MyPosts";
const Profile = () => {
  return (
    <div >
        <img className={classes.img} src="https://cyberfrogdesign.co.uk/wp-content/uploads/2018/11/rblog.jpg"/>
        <div>ава + описание</div>
        <MyPosts/>
    </div>
  );
};
export default Profile;
