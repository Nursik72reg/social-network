import React from "react";
import {addPostsActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
let mapStateToProps = (state)=>{
    return{
        pos:state.profilePage.pos,
        newPostText:state.profilePage.newPostText
    }
};
const MyPostContainer = connect(mapStateToProps,
    {addPostsActionCreator})(MyPosts);

export default MyPostContainer;