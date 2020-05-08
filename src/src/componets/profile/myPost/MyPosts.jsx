import React from "react";
import classes from "./MyPosts.module.css"
import Posts from "./post/Posts";
import {Field, Form, reduxForm} from "redux-form";
import {maxLenght, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormContols";


const maxLenght10 = maxLenght(15);


const MyPosts = (props) => {
   const onSubmit = (dataValue)=>{
        props.addPostsActionCreator(dataValue.Post)
   };
    let p = props.pos.map(p => <Posts name={p.name} text={p.text}/>);
    return (
        <div>
            <div className={classes.nav}>
                <h3>My post</h3>
                <div>
                    <NewPosts onSubmit = {onSubmit}/>
                </div>
                {p}
            </div>
        </div>
    )
};

const NewPost = (props)=>{

    return(
        <Form onSubmit={props.handleSubmit}>
          <Field name ="Post" component={Textarea} placeholder="New post" validate = {[required, maxLenght10]}/>
          <button>Ok</button>
        </Form>
    )
};
const NewPosts = reduxForm({
    form:"NewPost"
})(NewPost);


export default MyPosts;