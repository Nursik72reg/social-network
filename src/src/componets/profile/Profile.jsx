import React from "react";

import ProfileInfo from "./profileInfo/ProfilInfo";
import MyPostContainer from "./myPost/MyPostContainer";
const Profile = (props) => {

  return (
    <div >
        <ProfileInfo/>
        <MyPostContainer />
    </div>
  );
};
export default Profile;
