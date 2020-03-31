import React from "react";
import classes from "./Post.module.css"


const Posts = (props)=>{
    return(
      <div className={classes.posts_items}>
          <img className={classes.img} src="https://avatars.mds.yandex.net/get-pdb/1572252/b00e3606-aa7e-4565-a0aa-eddea98fd035/s1200?webp=false"/>
          <div className={classes.item}>{props.name}: {props.text}</div>
      </div>
    )
}
export default Posts;