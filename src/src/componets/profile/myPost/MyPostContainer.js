import React from "react";

import {addPostsActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
let mapStateToProps = (state)=>{
    return{
        pos:state.profilePage.pos,
        newPostText:state.profilePage.newPostText
    }
};
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = onPostChangeActionCreator(text);
            dispatch(action)
        },
        addPost:()=>{
            debugger
        dispatch(addPostsActionCreator())
        }

    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;