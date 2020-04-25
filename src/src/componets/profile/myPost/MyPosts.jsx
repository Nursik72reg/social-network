import React from "react";
import classes from "./MyPosts.module.css"
import Posts from "./post/Posts";



const MyPosts = (props) => {
    let textArea = React.createRef();
    let onAddPosts = () => {
        props.addPost();

    };
    let onPostChange = () => {
        let text = textArea.current.value;
        props.updateNewPostText(text)

    };
    let p = props.pos.map(p => <Posts name={p.name} text={p.text}/>);
    return (
        <div className={classes.nav}>
            <h3>My post</h3>
            <div>
                <div><textarea onChange={onPostChange}
                               ref={textArea}
                               value={props.newPostText}/></div>
                <button onClick={onAddPosts}>Add post</button>
            </div>
            {p}
        </div>
    )
};

export default MyPosts;