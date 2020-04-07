import React from "react";
import classes from "./MyPosts.module.css"
import Posts from "./post/Posts";
import {addPostsActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let p = props.pos.map(p => <Posts name={p.name} text={p.text}/>);

    let textArea = React.createRef();
    let addPosts = () => {
        props.dispatch(addPostsActionCreator());

    };

    let onPostChange = () => {
        debugger;
        let text = textArea.current.value;
        props.dispatch(onPostChangeActionCreator(text))

    };

    return (
        <div className={classes.nav}>
            <h3>My post</h3>
            <div>
                <div><textarea onChange={onPostChange}
                               ref={textArea}
                               value={props.newPostText}/></div>
                <button onClick={addPosts}>Add post</button>
            </div>
            {p}
        </div>
    )
};

export default MyPosts;