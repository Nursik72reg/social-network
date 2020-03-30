import React from "react";
import classes from "./MyPosts.module.css"
import Posts from "./post/Posts";

const MyPosts = () =>{
    return (
        <div className="nav">
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Igor"} text = {"Посмотри в Git у меняб там все видно"}/>
            <Posts name={"Georgii"} text = {"Спасибо"}/>
        </div>
    )
};

export default MyPosts;