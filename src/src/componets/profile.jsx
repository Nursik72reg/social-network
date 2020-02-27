import React from "react";
import clases from "./profile.module.css";
const Profile = () => {
  return (
    <div className={clases.profile}>
      <img></img>
      <div>ава + описание</div>
      <div className="nav">
        My post
        <div className={clases.item}>new post</div>
        <div className={clases.item}>post 1</div>
        <div className={clases.item}>post 2</div>
        <div className={clases.item}>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
