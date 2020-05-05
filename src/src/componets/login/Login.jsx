import React from "react";
import classes from "./Login.module.css"
import {Field, Form, reduxForm} from "redux-form";

let Login = (props) => {
    const onSumbit = (formData)=>{
        console.log(formData);
        debugger
    };
    return (
        <div>
            <div>Добро пожаловать</div>
            <LoginReduxForm  onSubmit = {onSumbit}/>
        </div>
    )
};


let  FormLogin = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name = {"login"} component={"input"} placeholder ={"Введите логин"}/>
            </div>
            <div>
                <Field name ={"password"} component={"input"} />
            </div>
            <div>
                <button>Ok</button>
            </div>
        </Form>
    )
}

let LoginReduxForm = reduxForm({
    form:"Login"
})(FormLogin);



export default Login;