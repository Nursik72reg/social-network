import React from "react";

import {addPostsActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostContainer = (props) => {
    let state = props.store.getState();
    let onAddPosts = () => {
        props.store.dispatch(addPostsActionCreator());
    };

    let onPostChange = (text) => {
      let action = onPostChangeActionCreator(text);
        props.store.dispatch(action)

    };

    return (
        <MyPosts updateNewPostText = {onPostChange}
                 addPost = {onAddPosts}
                 pos = {state.profilePage.pos}
                 newPostText = {state.profilePage.newPostText}/>
    )
};*/
let p1 = (state)=>{
    return{
        pos:state.profilePage.pos,
        newPostText:state.profilePage.newPostText
    }
};
let p2 = (dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            let action = onPostChangeActionCreator(text);
            dispatch(action)
        },
        addPost:()=>{
        dispatch(addPostsActionCreator())
        }

    }
};

const MyPostContainer = connect(p1,p2)(MyPosts);

export default MyPostContainer;