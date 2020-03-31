import React from "react";
import classes from "./MyPosts.module.css"
import Posts from "./post/Posts";

const MyPosts = () =>{

    let pos = [
        {name:"Gergii", text:"Как это сдлетьа?"},
        {name:"Gergii", text:"Как это сдлетьа?"},
        {name:"Gergii", text:"Как это сдлетьа?"},
        {name:"Gergii", text:"Как это сдлетьа?"},
        {name:"Gergii", text:"Как это сдлетьа?"},
    ];

    let p = pos.map(p=><Posts name={p.name} text={p.text}/>)
    return (
        <div className={classes.nav}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>
            {p}
            {/*<Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Georgii"} text = {"Как это сделать ?"}/>
            <Posts name={"Igor"} text = {"Посмотри в Git у меняб там все видно"}/>
            <Posts name={"Georgii"} text = {"Спасибо"}/>*/}
        </div>
    )
};

export default MyPosts;